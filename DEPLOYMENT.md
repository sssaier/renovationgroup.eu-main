# Deployment Guide

## Quick Deployment Options

### 1. Netlify (Recommended)

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Your site will be live instantly with a custom URL

### 2. Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

### 3. GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source as GitHub Actions
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 4. Traditional Web Hosting

1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes

## Environment Setup

No environment variables are required for basic functionality. The website works out of the box after building.

## Performance Optimization

The built website includes:
- Minified CSS and JavaScript
- Optimized images
- Tree-shaken code
- Gzip compression ready

## SSL Certificate

Most modern hosting providers (Netlify, Vercel, etc.) provide free SSL certificates automatically.

## Custom Domain

After deployment, you can configure a custom domain through your hosting provider's dashboard.