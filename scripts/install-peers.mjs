import { join } from 'path';
import { pathToFileURL } from 'url';
import { createRequire } from 'module';
import { exec } from 'child_process';

const dir = process.cwd();
const path = join(dir, 'package.json');
const require = createRequire(pathToFileURL(path));
const pkg = require(`./package.json`);

const peers = pkg.peerDependencies || {};

Object.keys(peers).forEach((peer) => {
  exec(`npm install ${peer}@latest --no-save --no-package-lock`, (err, stdout, stderr) => {
    if (err) {
      stderr(`Error installing peer dependency ${peer}`);
      process.exit(1);
    }
    stdout(`Installed peer dependency ${peer}`);
  });
});
