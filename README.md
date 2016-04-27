# eslint-config-wix-editor

[![NPM Version](https://img.shields.io/npm/v/eslint-config-wix-editor.svg?style=flat)](https://npmjs.org/package/eslint-config-wix-editor)
[![License](http://img.shields.io/npm/l/eslint-config-wix-editor.svg?style=flat)](LICENSE)
[![Dependency Status](https://david-dm.org/wix/eslint-config-wix-editor.svg)](https://david-dm.org/wix/eslint-config-wix-editor)
[![devDependency Status](https://david-dm.org/wix/eslint-config-wix-editor/dev-status.svg)](https://david-dm.org/wix/eslint-config-wix-editor#info=devDependencies)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Wix](https://github.com/wix)'s editor group


## Install

```
$ npm i -D eslint-config-wix-editor
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
	"name": "some-well-linted-project",
	"eslintConfig": {
		"extends": "wix-editor"
	}
}
```

Or to `.eslintrc`:

```json
{
	"extends": "wix-editor"
}
```

This package also exposes [`wix-editor/node`](node.js). This config contains only node-specific rules and is meant to be used alongside the regular config:

```json
{
	"extends": ["wix-editor", "wix-editor/node"]
}
```


## License

Copyright (c) 2015 Wix. Licensed under the MIT license.
