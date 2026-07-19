const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const SITE_URL = "https://iptvproguide.netlify.app";
const LANGUAGES = ["en","fr","es","ar","de","pt","it","tr","ru","nl"];

let errors = 0;
let warnings = 0;
let checked = 0;

function err(msg) { errors++; console.error("  ERROR: " + msg); }
function warn(msg) { warnings++; console.warn("  WARN: " + msg); }

// 1. Check key pages exist with proper size
console.log("\n=== Checking key pages ===");
const keyPages = [
  "index.html",
  "sitemap.xml", "robots.txt", "llm.txt",
  "404.html",
  "assets/js/main.js"
];
LANGUAGES.forEach(l => {
  keyPages.push(l + "/index.html");
  keyPages.push("blog/" + l + "/index.html");
  keyPages.push(l + "/categories/index.html");
  keyPages.push(l + "/about.html");
  keyPages.push(l + "/contact.html");
  keyPages.push(l + "/privacy-policy.html");
  keyPages.push(l + "/terms.html");
  keyPages.push(l + "/dmca.html");
  keyPages.push(l + "/disclaimer.html");
  keyPages.push("rss-" + l + ".xml");
});

keyPages.forEach(p => {
  const fp = path.join(ROOT, p);
  if (!fs.existsSync(fp)) {
    err("MISSING: " + p);
  } else {
    const stat = fs.statSync(fp);
    if (stat.size < 100) err("TOO SMALL: " + p + " (" + stat.size + " bytes)");
    else checked++;
  }
});

// 2. Check ALL sitemap URLs exist
console.log("\n=== Checking ALL sitemap URLs ===");
const sitemapPath = path.join(ROOT, "sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const urls = sitemap.match(/<loc>([^<]+)<\/loc>/g) || [];
  console.log("  Checking " + urls.length + " sitemap URLs...");
  let missingCount = 0;
  urls.forEach(u => {
    let url = u.replace(/<\/?loc>/g, "");
    let relativePath = url.replace(SITE_URL, "");
    if (relativePath.startsWith("/")) relativePath = relativePath.substring(1);
    if (!relativePath) relativePath = "index.html";
    if (relativePath.endsWith("/")) relativePath += "index.html";
    const fp = path.join(ROOT, relativePath);
    if (!fs.existsSync(fp)) {
      err("Sitemap URL not found: " + url + " (expected: " + relativePath + ")");
      missingCount++;
    }
  });
  if (missingCount === 0) console.log("  All sitemap URLs verified!");
}

// 3. Quick structure check on sample of HTML files
console.log("\n=== HTML structure check (sampling) ===");
function scanHtmlFiles(dir, depth) {
  if (depth > 3 || !fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanHtmlFiles(full, depth + 1);
    } else if (entry.name.endsWith(".html")) {
      const stat = fs.statSync(full);
      if (stat.size > 3000000) {
        warn("Large file: " + full.replace(ROOT, "").substring(0, 80) + " (" + (stat.size/1024/1024).toFixed(1) + " MB)");
      }
      if (stat.size < 50) {
        err("Very small HTML file: " + full.replace(ROOT, "").substring(0, 80));
      }
    }
  }
}
scanHtmlFiles(ROOT, 0);
console.log("  HTML structure check complete");

// 4. Check JavaScript syntax
console.log("\n=== Checking main.js ===");
try {
  const mainJs = path.join(ROOT, "assets", "js", "main.js");
  if (fs.existsSync(mainJs)) {
    const code = fs.readFileSync(mainJs, "utf8");
    new Function(code);
    console.log("  main.js syntax OK");
  }
} catch (e) {
  err("main.js syntax error: " + e.message);
}

// 5. Check articles.json for each language
console.log("\n=== Checking article JSON files ===");
LANGUAGES.forEach(l => {
  const jp = path.join(ROOT, l, "articles.json");
  if (fs.existsSync(jp)) {
    try {
      const data = JSON.parse(fs.readFileSync(jp, "utf8"));
      if (!Array.isArray(data) || data.length === 0) {
        err(l + "/articles.json is empty or not an array");
      }
    } catch (e) {
      err(l + "/articles.json is invalid JSON");
    }
  } else {
    warn(l + "/articles.json missing");
  }
});

// 6. Check netlify.toml exists
console.log("\n=== Checking config files ===");
["netlify.toml", "package.json", "generate-articles.js"].forEach(f => {
  const fp = path.join(ROOT, f);
  if (!fs.existsSync(fp)) err("MISSING: " + f);
  else checked++;
});

// Summary
console.log("\n======================================");
console.log("Results: " + checked + " items checked, " + errors + " errors, " + warnings + " warnings");
console.log("======================================");
process.exit(errors > 0 ? 1 : 0);
