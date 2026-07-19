# IPTV Pro Guide

Multi-language IPTV educational blog with 20,000+ SEO-optimized articles, setup guides, app tutorials, and country-specific content.

## Quick Deploy

### 1. GitHub Pages (Free)

```bash
# Create a new repository on GitHub, then:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/iptv-pro-guide.git
git push -u origin main
```

GitHub Actions will auto-deploy to Pages on every push.

### 2. Netlify (Free)

1. Push to GitHub (above)
2. Go to [netlify.com](https://netlify.com) → Import from Git → Select your repo
3. Set build command: `echo 'Static site'` and publish directory: `.`
4. Deploy

**Or** use CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### 3. Auto-Deploy (CI/CD)

Every push to `main` branch automatically:
- ✅ Deploys to **GitHub Pages**
- ✅ Deploys to **Netlify**

### Required GitHub Secrets

For Netlify auto-deploy, add these secrets in your repo:
- `NETLIFY_AUTH_TOKEN` - Get from Netlify Account > Personal access tokens
- `NETLIFY_SITE_ID` - Get from Netlify Site settings > Site information > API ID

### Manual Deploy Commands

```bash
# Deploy to Netlify manually
npx netlify-cli deploy --prod --dir=.

# Deploy to GitHub Pages manually
git push origin main
```