import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// NOTE: If you deploy to https://<username>.github.io/<repo-name>/
// set `base` below to '/<repo-name>/'. If you deploy to a custom
// domain or to https://<username>.github.io/ (a user/org page repo
// named exactly "<username>.github.io"), leave base as '/'.
export default defineConfig({
  base: '/YANNICK-KUETE-PORTFOLIO/',
  plugins: [react(), tailwindcss()],
})
