import assert from "node:assert/strict";
import { cp, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const presentationsRoot = join(repositoryRoot, "presentations");
const outputFlagIndex = process.argv.indexOf("--output");

assert.notEqual(outputFlagIndex, -1, "usage: node scripts/build-pages.mjs --output <directory>");
assert.ok(process.argv[outputFlagIndex + 1], "--output requires a directory");

const outputRoot = resolve(repositoryRoot, process.argv[outputFlagIndex + 1]);

async function directoryNames(path) {
  return (await readdir(path, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

async function fileExists(path) {
  try {
    return (await stat(path)).isFile();
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

function run(command, args, cwd) {
  const result = spawnSync(command, args, { cwd, stdio: "inherit" });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, `${command} ${args.join(" ")} failed in ${cwd}`);
}

await mkdir(outputRoot, { recursive: true });
assert.deepEqual(
  await readdir(outputRoot),
  [],
  `output directory must be empty: ${outputRoot}`,
);

const published = [];

for (const brand of await directoryNames(presentationsRoot)) {
  const brandRoot = join(presentationsRoot, brand);

  for (const presentation of await directoryNames(brandRoot)) {
    const presentationRoot = join(brandRoot, presentation);
    const packagePath = join(presentationRoot, "package.json");
    if (!await fileExists(packagePath)) continue;

    const packageJson = JSON.parse(await readFile(packagePath, "utf8"));
    if (!packageJson.scripts?.["pages:build"]) continue;

    console.log(`\n[pages] building ${brand}/${presentation}`);
    run("npm", ["ci"], presentationRoot);
    run("npm", ["run", "pages:build"], presentationRoot);

    const distRoot = join(presentationRoot, "dist");
    assert.equal(
      await fileExists(join(distRoot, "index.html")),
      true,
      `${brand}/${presentation} must produce dist/index.html`,
    );

    const destination = join(outputRoot, "presentations", brand, presentation);
    await mkdir(destination, { recursive: true });
    await cp(distRoot, destination, { recursive: true });

    published.push({
      id: `${brand}/${presentation}`,
      name: packageJson.displayName ?? packageJson.name ?? presentation,
      path: `presentations/${brand}/${presentation}/`,
    });
  }
}

assert.ok(published.length > 0, "no presentation with a pages:build script was found");

await writeFile(join(outputRoot, ".nojekyll"), "");
await writeFile(join(outputRoot, "presentations.json"), `${JSON.stringify(published, null, 2)}\n`);

const outputLabel = relative(repositoryRoot, outputRoot).split(sep).join("/") || outputRoot;
console.log(`\n[pages] prepared ${published.length} presentation(s) in ${outputLabel}`);
for (const presentation of published) console.log(`[pages] /${presentation.path}`);
