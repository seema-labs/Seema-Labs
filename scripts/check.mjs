import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

for (const site of ['seema-labs', 'trinetra']) {
  const root = new URL(`../sites/${site}/`, import.meta.url);
  const html = readFileSync(new URL('index.html', root), 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  if (new Set(ids).size !== ids.length) throw new Error(`${site}: duplicate IDs`);
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
    if (!ids.includes(target)) throw new Error(`${site}: broken section link ${target}`);
  }
  for (const [, asset] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    if (/^https?:/.test(asset)) continue;
    if (!existsSync(new URL(asset, root))) throw new Error(`${site}: missing asset ${asset}`);
  }
  const result = spawnSync(process.execPath, ['--check', fileURLToPath(new URL('script.js', root))], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status || 1);
  console.log(`${site}: section links, local assets, unique IDs, and JavaScript syntax passed.`);
}
