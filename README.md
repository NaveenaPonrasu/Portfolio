# Naveena Ponrasu — Portfolio

This project is configured for **GitHub Pages** using Next.js static export. No Vercel is required.

## GitHub repository setup

For the simplest URL (no repository subpath), create a public GitHub repository named exactly:

`NaveenaPonrasu.github.io`

The deployed site will be:

`https://NaveenaPonrasu.github.io/`

## Deploy

1. Upload the complete contents of this folder to the root of the repository above.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push the files to the `main` branch (or use **Actions → Deploy portfolio to GitHub Pages → Run workflow**).
5. Open the **Actions** tab and wait for the workflow to finish successfully.
6. Visit `https://NaveenaPonrasu.github.io/`.

The workflow installs dependencies, runs `npm run build`, and publishes the generated `out/` folder.

## Preview locally

Install Node.js 20 or later, then run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

To test the production static export locally:

```bash
npm run build
npx serve out
```

## Before publishing

Review contact details, education, dates, skills and project descriptions. Do not publish employer source code, screenshots, customer data, internal URLs or confidential information.
