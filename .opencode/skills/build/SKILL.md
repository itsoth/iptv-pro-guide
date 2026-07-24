---
name: build
description: Use when fixing Next.js build errors, optimizing build time, configuring next.config.mjs, tsconfig.json, or package.json. Use ONLY for build/deploy issues.
---

# Build & Deploy Skill

## Next.js 14.2 Static Export

This project uses `output: 'export'` with `trailingSlash: true`.

### Key config

```js
// next.config.mjs
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};
```

### App Router structure
```
src/app/
  [lang]/
    page.tsx          — home page
    layout.tsx        — root layout per language
    [slug]/page.tsx   — article pages (dynamic)
    about/page.tsx
    blog/page.tsx
    categories/page.tsx
    categories/[slug]/page.tsx
    contact/page.tsx
    privacy-policy/page.tsx
    terms/page.tsx
    dmca/page.tsx
    disclaimer/page.tsx
    search/page.tsx
  not-found.tsx
  globals.css
  layout.tsx          — global layout
```

### Build optimization tips

- `TOTAL_ARTICLES` in `src/lib/constants.ts` controls page count (2500 per language = ~25k pages)
- Build generates all pages at compile time via `generateStaticParams`
- Each `[slug]/page.tsx` calls `generateStaticParams` which returns all article slugs
- To speed up builds, reduce `TOTAL_ARTICLES` temporarily
- Use `npm run build` to build; check `.next` build cache

### Common errors

- `@/` not resolving → check webpack alias in next.config.mjs
- `downlevelIteration` → set in tsconfig.json `compilerOptions`
- Event handlers in server components → move to 'use client' wrapper
- Missing `generateStaticParams` → will not prerender dynamic routes
