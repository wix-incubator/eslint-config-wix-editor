# eslint-config-wix-editor

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
<!--
This package also exposes [`wix-editor/somethingelse`](somethingelse.js) if you want somethingelse rules:

```json
{
	"extends": "wix-editor/somethingelse"
}
``` -->


## License

Copyright (c) 2015 Wix. Licensed under the MIT license.
