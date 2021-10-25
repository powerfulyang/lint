const fs = require("fs");
const { join } = require("path");

const dir = process.cwd();

const pathOfEditorconfig = join(dir, ".editorconfig");
if (!fs.existsSync(pathOfEditorconfig)) {
  const data = fs.readFileSync("./.editorconfig");
  fs.writeFileSync(pathOfEditorconfig, data);
}

const pathOfEslintrc = join(dir, ".eslintrc.js");
if (!fs.existsSync(pathOfEslintrc)) {
  const data = fs.readFileSync("./.eslintrc.js");
  fs.writeFileSync(pathOfEslintrc, data);
}

const pathOfPrettierrc = join(dir, ".prettierrc.js");
if (!fs.existsSync(pathOfPrettierrc)) {
  const data = fs.readFileSync("./.prettierrc.js");
  fs.writeFileSync(pathOfPrettierrc, data);
}

const pathOfStylelintrc = join(dir, ".stylelintrc.js");
if (!fs.existsSync(pathOfStylelintrc)) {
  const data = fs.readFileSync("./.stylelintrc.js");
  fs.writeFileSync(pathOfStylelintrc, data);
}
