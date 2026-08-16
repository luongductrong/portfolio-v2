import { stat } from 'node:fs/promises';
import { isAbsolute, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { publicAssets } from '../app/configs/public-assets.ts';

const red = (text) => `\x1b[31m${text}\x1b[0m`;
const green = (text) => `\x1b[32m${text}\x1b[0m`;
const yellow = (text) => `\x1b[33m${text}\x1b[0m`;
const cyan = (text) => `\x1b[36m${text}\x1b[0m`;
const bold = (text) => `\x1b[1m${text}\x1b[0m`;
const dim = (text) => `\x1b[2m${text}\x1b[0m`;

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const publicDirectory = resolve(projectRoot, 'public');

function collectAssetEntries(value, keyPath = 'publicAssets') {
  if (typeof value === 'string') return [{ keyPath, value }];

  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, nestedValue]) => collectAssetEntries(nestedValue, `${keyPath}.${key}`));
  }

  throw new TypeError(`${keyPath} must be a string or an object containing strings.`);
}

function resolvePublicFile(assetPath) {
  const pathWithoutParams = assetPath.split(/[?#]/, 1)[0];
  const normalizedPath = decodeURIComponent(pathWithoutParams).replace(/^\/+/, '');
  const filePath = resolve(publicDirectory, normalizedPath);
  const relativePath = relative(publicDirectory, filePath);

  if (!normalizedPath || relativePath.startsWith('..') || isAbsolute(relativePath)) {
    throw new Error(`Invalid public asset path: ${assetPath}`);
  }

  return { filePath, normalizedPath };
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;

  const units = ['KB', 'MB', 'GB'];
  let value = bytes / 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(2)} ${units[unitIndex]}`;
}

const manifestPath = fileURLToPath(new URL('../app/configs/public-assets.ts', import.meta.url));
const assetEntries = collectAssetEntries(publicAssets);
const failures = [];

console.log('');
console.log(cyan('╭──────────────────────────────────────────╮'));
console.log(cyan(`│  ${bold('PUBLIC ASSET VALIDATOR')}                  │`));
console.log(cyan('╰──────────────────────────────────────────╯'));
console.log(`${dim('Manifest:')} ${relative(projectRoot, manifestPath)}`);
console.log(`${dim('Public directory:')} ${publicDirectory}`);
console.log(`${dim('Assets discovered:')} ${yellow(assetEntries.length)}`);

for (const [index, asset] of assetEntries.entries()) {
  console.log('');
  console.log(cyan(`[${String(index + 1).padStart(2, '0')}/${assetEntries.length}] ${asset.keyPath}`));
  console.log(`  ${dim('Manifest path:')} ${asset.value}`);

  try {
    const { filePath, normalizedPath } = resolvePublicFile(asset.value);
    const fileStats = await stat(filePath);

    if (!fileStats.isFile()) throw new Error('Path does not point to a file.');

    console.log(`  ${dim('Normalized:')} /${normalizedPath}`);
    console.log(`  ${dim('Disk path:')} ${relative(projectRoot, filePath)}`);
    console.log(`  ${green('✓ FOUND')} ${dim(`(${formatBytes(fileStats.size)})`)}`);
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);

    failures.push({ ...asset, reason });
    console.error(`  ${red('✗ MISSING')} ${reason}`);
  }
}

console.log('');
console.log(cyan('────────────────────────────────────────────'));

if (failures.length > 0) {
  console.error(red(bold(`Validation failed: ${failures.length}/${assetEntries.length} assets are invalid.`)));

  for (const failure of failures) {
    console.error(red(`  ✗ ${failure.keyPath}`));
    console.error(`    ${failure.value}`);
    console.error(dim(`    ${failure.reason}`));
  }

  process.exitCode = 1;
} else {
  console.log(green(bold(`✓ All ${assetEntries.length} public assets are present and ready to ship.`)));
}

console.log(cyan('────────────────────────────────────────────'));
console.log('');
