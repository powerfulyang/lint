# lint
A collection of configuration files containing prettier, eslint, stylelint

## Install

```bash
npm install --save-dev @powerfulyang/lint
```

## eslint

Copy the following configuration to your project root directory `.eslintrc.js`.

```js
const { eslint } = require('@powerfulyang/lint');

module.exports = {
  ...eslint,
};
```

## prettier

Copy the following configuration to your project root directory `.prettierrc.js`.

```js
const { prettier } = require('@powerfulyang/lint');

module.exports = {
  ...prettier,
};
```

## stylelint

Copy the following configuration to your project root directory `.stylelintrc.js`.

```js
const { stylelint } = require('@powerfulyang/lint');

module.exports = {
  ...stylelint,
};
```
