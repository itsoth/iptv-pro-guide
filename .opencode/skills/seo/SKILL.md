---
name: seo
description: Use when editing meta tags, JSON-LD structured data, hreflang tags, canonical URLs, Open Graph, Twitter cards, sitemap, robots.txt, or any SEO-related code. Use ONLY for SEO tasks.
---

# SEO Skill

SEO best practices for this multilingual Next.js SSG site.

## JSON-LD Structured Data

Every page should have these scripts:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "image": "...",
  "datePublished": "2026-01-01",
  "author": { "@type": "Organization", "name": "IPTV Pro Guide" }
}
```

Global (in root layout):
- `WebSite` — with `inLanguage`, `url`, `name`
- `Organization` — with `logo`, `name`, `url`
- `BreadcrumbList` — on every page

### Where to place

- Article pages: in the article layout or page component
- Global: in the root `[lang]/layout.tsx` or `app/layout.tsx`

## Hreflang

Every `/[lang]/[slug]` page must link all 10 language alternates:
```tsx
<link rel="alternate" hreflang="en" href="https://site.com/en/slug" />
<link rel="alternate" hreflang="fr" href="https://site.com/fr/slug" />
...
<link rel="alternate" hreflang="x-default" href="https://site.com/en/slug" />
```

## Meta tags

Use `metadata` export in Next.js App Router pages.

## Canonical URLs

Every page: `<link rel="canonical" href="https://site.com/en/slug/" />`

## Sitemap

Use `src/app/sitemap.ts` for dynamic sitemap generation. Must include all languages.
