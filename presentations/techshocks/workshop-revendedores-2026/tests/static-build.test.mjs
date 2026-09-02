import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const distRoot = join(projectRoot, "dist");

async function collectText(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const chunks = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) chunks.push(await collectText(path));
    else if (/\.(?:css|html|js)$/i.test(entry.name)) chunks.push(await readFile(path, "utf8"));
  }
  return chunks.join("\n");
}

test("contains the production presentation in a static artifact", async () => {
  const artifact = await collectText(distRoot);

  assert.match(artifact, /AMORTECEDORES/);
  assert.match(artifact, /DE CABINE/);
  assert.match(artifact, /Filme TechShocks/);
  assert.match(artifact, /CONTRACAPA/);
  assert.match(artifact, /ZIESpdanhsQ/);
  assert.match(artifact, /slide-11-case-a\.jpeg/);
  assert.match(artifact, /slide-11-case-b\.jpeg/);
  assert.match(artifact, /slide-11-case-c\.jpeg/);
  assert.doesNotMatch(artifact, /filme_techshocks_20260901\.mp4/);
  assert.doesNotMatch(artifact, /vinext|wrangler|cloudflare|codex-preview/i);
});
