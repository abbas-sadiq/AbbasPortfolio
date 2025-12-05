# AbbasPortfolio

Personal portfolio project (React + Vite + Node server).

This repository was cleaned up to remove Replit-specific dev dependencies and to add a minimal Vercel configuration for static front-end deployment. The changes are on the `vercel-deploy-cleanup` branch and a PR was opened: https://github.com/abbas-sadiq/AbbasPortfolio/pull/2

## Quick start

Prerequisites:
- Node.js (v18+ recommended)

Install dependencies:

```bash
npm install
```

Run the client for development:

```bash
npm run dev:client
# then open http://localhost:5000
```

Run the full dev server (server + client depends on your workflow):

```bash
npm run dev
```

Build for production (this outputs `dist/public`):

```bash
npm run vercel-build
```

Start the built server (if you're using the server build):

```bash
npm start
```

## Vercel

This repo includes a minimal `vercel.json` that uses the `@vercel/static-build` builder and points to `dist/public` as the static output directory. If you prefer the server to be deployed as serverless functions on Vercel, I can update the configuration and build scripts accordingly.

## Files changed in the cleanup branch

- `package.json` (removed Replit devDependencies, added `vercel-build` script)
- `package-lock.json` (updated)
- `vite.config.ts` (removed Replit plugins)
- `vite-plugin-meta-images.ts` (prefer `VERCEL_URL` for meta images)
- `vercel.json` (new)

## Next steps

- Open the PR at: https://github.com/abbas-sadiq/AbbasPortfolio/pull/2
- Optionally: update Vercel config to deploy server functions

If you want, I can open the PR in the browser, add reviewers, or change the Vercel setup to include serverless functions.

---

File: `README.md`
