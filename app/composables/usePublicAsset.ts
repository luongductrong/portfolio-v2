export function usePublicAsset() {
  const config = useRuntimeConfig();

  return (path: string) => `${config.app.baseURL}${path.replace(/^\/+/, '')}`;
}
