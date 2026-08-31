const ABSOLUTE_URL_RE = /^(?:https?:)?\/\//;

export function useImageAsset() {
  const config = useRuntimeConfig();
  const publicAsset = usePublicAsset();

  return (path: string) => {
    if (ABSOLUTE_URL_RE.test(path) || path.startsWith('data:')) return path;

    const assetPath = publicAsset(path);

    if (!config.public.imageCdnUrl) return assetPath;

    return new URL(assetPath, config.public.siteUrl).toString();
  };
}
