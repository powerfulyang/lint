#!/usr/bin/env node
import { join } from 'path';
import { pathToFileURL } from 'url';
import { createRequire } from 'module';
import { execSync } from 'child_process';
import { readFileSync, rmSync, writeFileSync } from 'fs';

const dir = process.cwd();
const path = join(dir, 'package.json');
const require = createRequire(pathToFileURL(path));
const pkg = require(`./package.json`);

const peers = pkg.peerDependencies || {};

Object.keys(peers).forEach((peer) => {
  try {
    // npm@8 的 BUG, Cannot read properties of undefined (reading 'spec')
    // 要先删除 package.json
    const tmp = readFileSync(path, { encoding: 'utf8' });
    rmSync(path);
    execSync(`npm install ${peer}@latest --no-save`);
    // 再恢复 package.json
    writeFileSync(path, tmp);
    console.log(`Installed peer dependency ${peer}`);
  } catch {
    console.error(`Error: installing peer dependency ${peer}`);
  }
});
