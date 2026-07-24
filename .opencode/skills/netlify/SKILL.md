---
name: netlify
description: Use when configuring Netlify deployment, netlify.toml headers/redirects, GitHub Actions workflow, or CI/CD pipeline. Use ONLY for deployment configuration.
---

# Netlify Deployment Skill

## netlify.toml

```toml
[build]
  publish = "out"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "22"
```

## Headers

- Static assets (`/assets/*`): `Cache-Control: public, max-age=31536000, immutable`
- HTML pages: `Cache-Control: public, max-age=3600`
- Security headers on all pages

## Redirects

- `/*` → `/404/` status 404 for unknown routes
- Language root redirects: `/en` → `/en/` status 301

## GitHub Actions

Workflow at `.github/workflows/deploy.yml`:
1. Checkout
2. Setup Node.js 22 with npm cache
3. `npm ci`
4. `npm run build`
5. Deploy `out/` to Netlify via `nwtgck/actions-netlify@v3.0`

## Common issues

- Lock file not found → ensure `package-lock.json` is committed (not in .gitignore)
- Build timeout → increase `timeout-minutes` in workflow
- Node version → use 22, not 20
