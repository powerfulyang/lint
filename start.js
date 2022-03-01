#!/usr/bin/env node

const fs = require('fs');
const { join } = require('path');

// TODO replace by @powerfulyang/cli
console.log('============ @powerfulyang/lint init =============');
/**
 * [
 *   'C:\\Program Files\\nodejs\\node.exe',
 *   'C:\\Users\\powerfulyang\\WebstormProjects\\lint\\start.js',
 *   'init'
 * ]
 */
console.log(process.argv); // 取 process.argv 的第二个以后参数

const dir = process.cwd();
const pkgPath = join(dir, 'package.json');
const isExist = fs.existsSync(pkgPath);
if (!isExist) {
  console.warn('package.json not found');
  process.exit(0);
}

const pkg = require(pkgPath);

const isEsModule = pkg.type === 'module';

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

const lintstagedrcPath = join(dir, '.lintstagedrc');
if (!fs.existsSync(lintstagedrcPath)) {
  const data = fs.readFileSync('.lintstagedrc.template');
  fs.writeFileSync(lintstagedrcPath, data);
}
