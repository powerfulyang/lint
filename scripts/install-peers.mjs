#!/usr/bin/env node
import { join } from 'path';
import { pathToFileURL } from 'url';
import { createRequire } from 'module';
import { execSync } from 'child_process';

const dir = process.cwd();
const path = join(dir, 'package.json');
const require = createRequire(pathToFileURL(path));
const pkg = require(`./package.json`);

const peers = pkg.peerDependencies || {};

Object.keys(peers).forEach((peer) => {
  try {
    // npm@8, Cannot read properties of undefined (reading 'spec')
    execSync(`npm install ${peer}@latest --no-save`);
    console.log(`Installed peer dependency ${peer}`);
  } catch {
    console.error(`Error: installing peer dependency ${peer}`);
  }
});
