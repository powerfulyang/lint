/* eslint-disable */

const fs = require('fs');
const { join } = require('path');

const dir = join('../../..');
const pkgPath = join(dir, 'package.json');
const isExist = fs.existsSync(pkgPath);
if (!isExist) {
  console.warn('package.json not found');
  process.exit(0);
}

const pkg = require(pkgPath);

const isEsModule = pkg.type === 'module';

if (!__dirname.includes('node_modules')) {
  console.warn('not install in node_modules');
  process.exit(0);
}

const editorconfig = join(dir, '.editorconfig');
if (!fs.existsSync(editorconfig)) {
  const data = fs.readFileSync('.editorconfig');
  fs.writeFileSync(editorconfig, data);
}

const eslintrcPath = isEsModule ? '.eslintrc.cjs' : '.eslintrc.js';
const eslint = join(dir, eslintrcPath);
if (!fs.existsSync(eslint)) {
  const data = fs.readFileSync('.eslintrc.js.template');
  fs.writeFileSync(eslint, data);
}

const prettierConfigPath = isEsModule ? '.prettierrc.cjs' : '.prettierrc.js';
const prettier = join(dir, prettierConfigPath);
if (!fs.existsSync(prettier)) {
  const data = fs.readFileSync('.prettierrc.js.template');
  fs.writeFileSync(prettier, data);
}

const stylelintConfigPath = isEsModule ? '.stylelintrc.cjs' : '.stylelintrc.js';
const stylelint = join(dir, stylelintConfigPath);
if (!fs.existsSync(stylelint)) {
  const data = fs.readFileSync('.stylelintrc.js.template');
  fs.writeFileSync(stylelint, data);
}

const editorconfigPath = join(dir, '.editorconfig');
if (!fs.existsSync(editorconfigPath)) {
  const data = fs.readFileSync('.editorconfig.template');
  fs.writeFileSync(editorconfigPath, data);
}

const gitattributesPath = join(dir, '.gitattributes');
if (!fs.existsSync(gitattributesPath)) {
  const data = fs.readFileSync('.gitattributes.template');
  fs.writeFileSync(gitattributesPath, data);
}
