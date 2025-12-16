import { build } from 'esbuild';
import { resolve } from 'node:path';

const repoRoot = resolve(new URL('.', import.meta.url).pathname, '..');
const entry = resolve(repoRoot, 'apps/api/src/main.ts');
const outdir = resolve(repoRoot, 'apps/api/dist');
const tsconfig = resolve(repoRoot, 'apps/api/tsconfig.app.json');

const isProd = process.env.NODE_ENV === 'production';

await build({
  entryPoints: [entry],
  outdir,
  platform: 'node',
  format: 'cjs',
  bundle: true,
  sourcemap: !isProd,
  tsconfig,
  logLevel: 'info',
});
