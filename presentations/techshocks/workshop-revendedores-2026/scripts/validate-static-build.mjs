import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const distRoot = join(projectRoot, "dist");

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listFiles(path));
    else files.push(path);
  }
  return files;
}

const indexPath = join(distRoot, "index.html");
assert.equal((await stat(indexPath)).isFile(), true, "dist/index.html is required");

const files = await listFiles(distRoot);
const relativeFiles = new Set(files.map((path) => relative(distRoot, path).replaceAll("\\", "/")));
const html = await readFile(indexPath, "utf8");
const textFiles = files.filter((path) => /\.(?:css|html|js|map|svg)$/i.test(path));
const textArtifact = (await Promise.all(textFiles.map((path) => readFile(path, "utf8")))).join("\n");

assert.match(html, /Workshop TechShocks/);
assert.match(html, /Apresentação interativa sobre diagnóstico/);
assert.match(html, /pecatruck\.github\.io\/apresentacoes-html\/presentations\/techshocks\/workshop-revendedores-2026\/og\.png/);
assert.doesNotMatch(textArtifact, /workshop-techshocks\.gabrielbssantos\.chatgpt\.site/);
assert.doesNotMatch(textArtifact, /(?:["'(]|url\()[/]assets[/]/, "built assets must not use root-absolute /assets URLs");

for (const required of ["favicon.svg", "og.png", "assets/slide-1-cover-background.png", "assets/slide-conclusion-experience-product.mp4"]) {
  assert.equal(relativeFiles.has(required), true, `missing static artifact: ${required}`);
}

for (const forbidden of ["server/index.js", "worker/index.js", ".openai/hosting.json"]) {
  assert.equal(relativeFiles.has(forbidden), false, `server artifact must not exist: ${forbidden}`);
}

for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const url = match[1];
  if (/^(?:https?:|data:|#)/.test(url)) continue;
  assert.equal(url.startsWith("/"), false, `root-absolute URL is incompatible with nested Pages hosting: ${url}`);
}

console.log(`Validated static artifact: ${relativeFiles.size} files, no Worker or root-absolute asset URLs.`);
