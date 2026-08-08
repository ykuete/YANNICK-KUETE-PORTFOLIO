# Yannick Kuete — Portfolio

A personal portfolio site built with React, Vite, and Tailwind CSS, featuring
a résumé-trained chat assistant that runs entirely in the browser (no API
key, no backend, no per-message cost).

- **Live demo:** add your GitHub Pages URL here once deployed.
- **Stack:** React 19, Vite, Tailwind CSS v4, lucide-react icons.
- **Chatbot:** a small client-side keyword-matching engine
  (`src/lib/chatEngine.js`) answers from a knowledge base derived from the
  résumé (`src/data/resumeData.js`). See [Swapping in a real LLM](#5-swapping-in-a-real-llm-optional) if you'd rather wire it up to a live model.

---

## 1. Run it locally

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

This starts a dev server (usually at `http://localhost:5173`) with hot
reload. Edit anything under `src/` and the page updates instantly.

To produce an optimized production build (outputs to `dist/`):

```bash
npm run build
npm run preview   # serve the production build locally to sanity-check it
```

---

## 2. Personalize it

| What | Where |
|---|---|
| Name, title, contact info, summary | `src/data/resumeData.js` → `profile` |
| Skills | `src/data/resumeData.js` → `skillGroups` |
| Work experience | `src/data/resumeData.js` → `experience` |
| Education | `src/data/resumeData.js` → `education` |
| Projects (and their GitHub links) | `src/data/resumeData.js` → `projects` |
| Chatbot knowledge base | `src/data/resumeData.js` → `chatKnowledge` |
| Profile photo | `public/images/profile.jpg` (replace the file, keep the name — or update the path in `src/components/Hero.jsx`) |
| Downloadable résumé PDF | `public/Yannick_Kuete_Resume.pdf` (replace the file, keep the name) |
| Colors / fonts | `src/index.css` → the `@theme` block at the top |

The project-card illustrations in `src/components/ProjectArt.jsx` are
hand-drawn SVGs, not photos — add a new `export function YourArt()` there
and reference it by key (`art: "yourArt"`) in a project entry if you add a
new project.

---

## 3. Host it on GitHub Pages (with GitHub Actions)

This repo already includes a workflow at
`.github/workflows/deploy.yml` that builds the site and deploys it to
GitHub Pages automatically on every push to `main`. Steps:

### Step 1 — Create the GitHub repository

1. Go to [github.com/new](https://github.com/new).
2. Name it whatever you like — for example `portfolio`. **Remember this
   name**, you'll need it in Step 2.
3. Leave it empty (no README/license) since you already have a project
   locally. Click **Create repository**.

### Step 2 — Set the Vite `base` path to match your repo name

Open `vite.config.js` and set `base` to `/<your-repo-name>/`:

```js
export default defineConfig({
  base: '/portfolio/', // 👈 change "portfolio" to your repo's exact name
  plugins: [react(), tailwindcss()],
})
```

- If you're deploying to a **project site** (`https://<username>.github.io/<repo-name>/`), keep the leading and trailing slashes, e.g. `/portfolio/`.
- If you're deploying to a **user/org site** — a repo literally named
  `<username>.github.io` — set `base: '/'` instead.
- If you're using a **custom domain** (see Step 5), also use `base: '/'`.

### Step 3 — Push your code

From the `portfolio/` project folder:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 4 — Turn on GitHub Pages

1. In your repository on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. That's it — no branch to pick, the workflow handles the build.

Now go to the **Actions** tab. Pushing to `main` automatically triggers the
**Deploy portfolio to GitHub Pages** workflow: it installs dependencies,
runs `npm run build`, and publishes the `dist/` folder. The first run takes
about a minute. When it finishes, your site is live at:

```
https://<your-username>.github.io/<your-repo-name>/
```

(You can also find the exact URL under **Settings → Pages** once the first
deployment succeeds.)

Every future push to `main` redeploys automatically — no manual steps.

### Step 5 (optional) — Custom domain

1. In **Settings → Pages → Custom domain**, enter your domain (e.g.
   `yannickkuete.dev`) and save. GitHub creates a `CNAME` file for you.
2. At your domain registrar, add a `CNAME` record pointing to
   `<your-username>.github.io` (for a subdomain like `www`), or the four
   GitHub Pages `A` records (for an apex domain) — GitHub's Pages settings
   page shows the exact records to add.
3. Set `base: '/'` in `vite.config.js` (custom domains serve from the
   root), commit, and push.

---

## 4. Project structure

```
portfolio/
├── .github/workflows/deploy.yml   # CI: build + deploy to GitHub Pages
├── public/
│   ├── images/profile.jpg         # your photo
│   └── Yannick_Kuete_Resume.pdf   # downloadable résumé
├── src/
│   ├── components/                # Nav, Hero, About, Skills, Projects,
│   │                               #   Experience, Contact, Footer, Chatbot,
│   │                               #   ProjectArt (SVG illustrations)
│   ├── data/resumeData.js         # all résumé content + chatbot knowledge base
│   ├── lib/chatEngine.js          # local keyword-matching chatbot logic
│   ├── lib/paths.js               # base-path-safe asset URL helper
│   ├── index.css                  # design tokens (colors, fonts, animations)
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js                 # set `base` to your repo name (see Step 2)
└── package.json
```

---

## 5. Swapping in a real LLM (optional)

The built-in chatbot is intentionally dependency-free: it's a keyword
matcher over `chatKnowledge` entries, so it works on a static host with
zero cost and zero secrets to leak. If you'd rather have it call a real
hosted model:

1. You'll need a small backend (a serverless function — e.g. Cloudflare
   Workers, Vercel/Netlify functions, or an AWS Lambda) that holds your API
   key server-side and proxies chat requests. **Never** put a real API key
   directly in this frontend code — anything in a static site's JS bundle
   is publicly visible.
2. In `src/components/Chatbot.jsx`, replace the call to `getBotResponse()`
   in the `send()` function with a `fetch()` to your backend endpoint,
   sending the résumé content (or a summary of it) plus the user's message,
   and rendering the streamed/returned answer the same way.
3. Keep `chatKnowledge` around as a fallback for when the network request
   fails, so the assistant still works offline or if the backend is down.

---

## License

This is your personal portfolio — content (résumé data, photo) is yours.
The code scaffold is free to adapt.
