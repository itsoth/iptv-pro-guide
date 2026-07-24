---
description: Run a full site audit — SEO, performance, broken links, meta tags
agent: monitor-agent
---

Run a comprehensive audit of the built site in `out/`:

1. Count total HTML files in `out/` and compare to expected (24,903)
2. Check for 404 pages — verify `out/404/index.html` exists
3. Sample 5 random article pages and verify: title, description, hreflang, canonical, JSON-LD
4. Check HTML file sizes — flag any over 200KB
5. Check `_next/static` JS bundle sizes
6. Check `netlify.toml` is correct
7. Verify `robots.txt` exists and points to sitemap
8. Check that all 10 language directories exist in `out/`

Report all findings grouped by severity (Critical, High, Medium, Low).
