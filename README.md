# Edward Somera Portfolio

A responsive one-page React and Vite portfolio for Edward Somera.

## Live URL

`https://edwardsomerawebdev.github.io/`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This project includes an automatic GitHub Actions workflow at:

`.github/workflows/deploy.yml`

### First deployment

1. Create a public GitHub repository named exactly:

   `EdwardSomeraWebDev.github.io`

2. Upload or push the contents of this project to the repository's `main` branch.
3. Open the repository on GitHub.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Open the **Actions** tab and wait for the "Deploy portfolio to GitHub Pages" workflow to finish.
7. Visit `https://edwardsomerawebdev.github.io/`.

Every future push to `main` automatically rebuilds and republishes the website.

## Suggested Git commands

```bash
git init
git add .
git commit -m "Deploy portfolio"
git branch -M main
git remote add origin https://github.com/EdwardSomeraWebDev/EdwardSomeraWebDev.github.io.git
git push -u origin main
```

## Project notes

- The downloadable CV is stored at `public/assets/Edward_Somera_CV.pdf`.
- The production `dist` directory is generated automatically and is intentionally ignored by Git.
- The contact form currently uses FormSubmit.
- Replace any placeholder LinkedIn URL in the portfolio when your final profile URL is available.
