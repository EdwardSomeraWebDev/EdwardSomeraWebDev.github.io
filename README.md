# Edward Somera React Portfolio

A React + Vite portfolio website for Edward C. Somera.

## Included

- React + Vite setup
- Responsive portfolio layout
- Sections for hero, about, skills, experience, projects, and contact
- Downloadable CV in `public/assets/Edward_Somera_CV.pdf`
- GitHub Pages deployment guide

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal.

## Build for production

```bash
npm run build
```

The production files will be generated in the `dist` folder.

## Deploy to GitHub Pages

### Option 1: Deploy using GitHub Actions

Create a file:

```text
.github/workflows/deploy.yml
```

Paste this:

```yml
name: Deploy React Portfolio

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then go to your GitHub repo:

1. Settings
2. Pages
3. Source: GitHub Actions
4. Push your code to `main`

### Option 2: Deploy with Vercel or Netlify

Import the repository and use:

```text
Build command: npm run build
Output folder: dist
```

## Important for GitHub project pages

If your repository is not named `yourusername.github.io`, you may need to update the asset paths or add a Vite base path.

Example for repo named `edward-react-portfolio`, create or edit `vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/edward-react-portfolio/'
});
```

For a user site repo like `EdwardSomeraWebDev.github.io`, use:

```js
base: '/'
```
