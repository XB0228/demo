import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const readmePath = path.join(repoRoot, 'README.md');

test('README.md 存在于仓库根目录', () => {
  assert.ok(fs.existsSync(readmePath), 'README.md 应该存在于仓库根目录');
});

test('README.md 非空且包含一级标题', () => {
  const content = fs.readFileSync(readmePath, 'utf8');

  assert.ok(content.trim().length > 0, 'README.md 不应为空');
  assert.match(content, /^#\s+\S+/m, 'README.md 应至少包含一个一级标题');
});
