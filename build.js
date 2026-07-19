const fs = require("fs");
const path = require("path");
const uglifyJS = require("uglify-js");
const csso = require("csso");
const { minify } = require("html-minifier-terser");

const ROOT = __dirname;

console.log("=== Post-generation build ===");

// 1. Minify main.js
console.log("\nMinifying main.js...");
const mainJsPath = path.join(ROOT, "assets", "js", "main.js");
try {
  const code = fs.readFileSync(mainJsPath, "utf8");
  const result = uglifyJS.minify(code, { compress: true, mangle: true });
  if (result.error) throw result.error;
  // Save as .min.js and also overwrite main.js
  fs.writeFileSync(mainJsPath.replace('.js', '.min.js'), result.code);
  // Also save as minified to main.js
  fs.writeFileSync(mainJsPath, result.code);
  console.log("  main.js minified (" + (code.length/1024).toFixed(1) + "KB -> " + (result.code.length/1024).toFixed(1) + "KB)");
} catch(e) {
  console.error("  Failed to minify main.js: " + e.message);
}

// 2. Minify CSS files
console.log("\nMinifying CSS files...");
function minifyCSS(filePath) {
  if (!fs.existsSync(filePath)) return;
  const css = fs.readFileSync(filePath, "utf8");
  const result = csso.minify(css);
  fs.writeFileSync(filePath, result.css);
  console.log("  " + path.basename(filePath) + " minified (" + (css.length/1024).toFixed(1) + "KB -> " + (result.css.length/1024).toFixed(1) + "KB)");
}
// Check for CSS files in assets
const assetsCSS = path.join(ROOT, "assets", "css");
if (fs.existsSync(assetsCSS)) {
  fs.readdirSync(assetsCSS).filter(f => f.endsWith('.css')).forEach(f => minifyCSS(path.join(assetsCSS, f)));
}

// 3. Minify important HTML files (sitemap, index, etc.)
console.log("\nMinifying key HTML pages...");
async function minifyHTML(filepath) {
  if (!fs.existsSync(filepath)) return false;
  const html = fs.readFileSync(filepath, "utf8");
  if (html.length < 100) return false;
  try {
    const result = await minify(html, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: { level: { 1: { specialComments: false } } }
    });
    if (result.length < html.length) {
      fs.writeFileSync(filepath, result);
      return true;
    }
  } catch(e) {
    console.error("  Failed to minify " + filepath.replace(ROOT, "") + ": " + e.message);
  }
  return false;
}

// Only minify root-level HTML files and a few key ones
async function main() {
  const keyHtmlFiles = [
    "index.html", "404.html",
    "sitemap.xml"
  ];
  for (const f of keyHtmlFiles) {
    const fp = path.join(ROOT, f);
    const saved = await minifyHTML(fp);
    if (saved) console.log("  " + f + " minified");
  }
}

main().then(() => {
  console.log("\n=== Build complete ===");
});
