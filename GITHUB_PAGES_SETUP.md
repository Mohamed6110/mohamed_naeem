# GitHub Pages Deployment Guide

## Step 1: Prepare Your Repository

Make sure your project is committed to GitHub. If not:

```bash
cd c:\Users\AL-Renad\Downloads\mohammed-naeem-fawzy-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Mohamed6110/portfolio.git  # Replace with your repo URL
git push -u origin main
```

## Step 2: Build the Project

The project has already been built. The `dist` folder contains your production-ready files.

```bash
npm run build
```

## Step 3: Deploy to GitHub Pages

### Option A: Using GitHub Actions (Automatic - Recommended)

Create a file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

Then push to GitHub:
```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### Option B: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Create and switch to `gh-pages` branch:
```bash
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initial commit on gh-pages branch"
```

3. Copy `dist` contents to root:
```bash
cp -r dist/* .
```

4. Remove dist folder from this branch:
```bash
rm -rf dist
echo "node_modules" > .gitignore
echo ".env" >> .gitignore
git add .
git commit -m "Deploy to GitHub Pages"
git push -u origin gh-pages
```

5. Switch back to main:
```bash
git checkout main
```

## Step 4: Configure GitHub Pages Settings

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

## Step 5: Access Your Portfolio

Your app will be live at:
```
https://Mohamed6110.github.io/mohammed-naeem-fawzy-portfolio/
```

(Replace `Mohamed6110` with your GitHub username and adjust the repo name)

## Tips

- Changes automatically deploy when you push to `main` (if using GitHub Actions)
- It takes 1-2 minutes for changes to appear online
- You can use a custom domain by adding a `CNAME` file in the `dist` folder
- Clear browser cache if changes don't show up immediately

## Troubleshooting

- **404 errors**: Make sure the base URL in `vite.config.ts` matches your repo name
- **Assets not loading**: Check that `base: '/repo-name/'` is set correctly
- **Page not updating**: Wait 2-3 minutes and hard refresh (Ctrl+Shift+R)

