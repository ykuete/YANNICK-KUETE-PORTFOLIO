// Prefixes a public/ asset path with Vite's configured base (see vite.config.js),
// so links/images resolve correctly whether the site is hosted at the domain
// root or under a GitHub Pages project path like /portfolio/.
export function withBase(path) {
  const base = import.meta.env.BASE_URL || "/";
  return base.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
}
