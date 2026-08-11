export function getHost(url: string | null | undefined, fallback = '') {
  try {
    const value = String(url).trim();
    if (!value) return fallback;
    return new URL(/^[a-z][a-z\d+\-.]*:\/\//i.test(value) ? value : `https://${value}`).host;
  } catch {
    return fallback;
  }
}
