'use strict';
// santa es5 package
module.exports = {
    "extends": ["wix-editor", "plugin:lodash/canonical"],
    env: {
        "es6": true,
        "node": true,
        "browser": false,
        "worker": true
    },
    "plugins": ["react", "santa", "lodash", "wix-editor"],
    "settings": {
        "react": {
            "createClass": "createClass", // Regex for Component Factory to use, default to "createClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "0.14.0" // React version, default to the latest React stable release
        }
    },
    "rules": {
        "max-len": [2, { "code": 1600, "ignoreComments": true }],
        // "no-restricted-properties": [2, {
        //     "object": "Object",
        //     "property": "assign",
        //     "message": "Object assign it not supported in IE11."
        // }],
        "quotes": 0,
        "space-before-function-paren": 0,
        "space-before-blocks": 0,
        "quote-props": 0,
        "no-extra-parens": 0,
        "indent": [0, 2],
        "func-style": 0,
        "key-spacing": 0,
        "no-use-before-define": 0,
        "no-throw-literal": 2,
        "no-multi-spaces": 2,
        "consistent-this": [2, "self"],
        "id-match": [2, "^\\$?[a-zA-Z0-9_]*$"],
        "complexity": [2, 30],
        "max-statements": [2, 75],
        "max-depth": [2, 7],
        "padded-blocks": 0,
        "space-in-parens": 0,
        "no-useless-concat": 0,
        "one-var-declaration-per-line": 0,
        "consistent-return": 0,

        "no-unused-vars": 2,

        "santa/no-starts-with": [2, ["_", "stringUtils"]],
        "santa/no-data-in-code": [2, {"minProperties": 1000, "maxFixes": 10}],
        "santa/enforce-package-access": 0,
        "santa/module-definition": 2,
        "santa/no-for-loop": 0,
        "santa/no-unused-imports": [2, ["_"]],
        "santa/no-spyon-experiment-isopen": 2,
        "santa/no-spyon-console-error-without-callthrough": 2,
        "santa/declaration-in-for": 0,
        "santa/no-window-location-origin": 2,
        "wix-editor/prefer-ternary": 0,
        "wix-editor/no-not-not": 0,
        "wix-editor/return-boolean": 2,
        "wix-editor/no-instanceof-array": 2,
        "wix-editor/no-unneeded-match": 2,
        "wix-editor/simplify-boolean-expression": 2,
        "wix-editor/prefer-filter": 2,
        "no-duplicate-case": 0,
        "react/display-name": 0,
        "react/jsx-boolean-value": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-sort-props": 2,
        "react/jsx-sort-prop-types": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-multi-comp": 0,
        "react/no-unknown-property": 2,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 2,
        "react/self-closing-comp": 2,
        "react/jsx-wrap-multilines": 0,
        "react/sort-comp": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-closing-bracket-location": 0,
        "react/jsx-curly-spacing": 0,
        "react/jsx-handler-names": 0,
        "react/jsx-indent-props": 0,
        "react/jsx-indent": 0,
        "react/jsx-key": 0,
        "react/jsx-max-props-per-line": 0,
        "react/jsx-no-bind": 0,
        "react/jsx-no-duplicate-props": 0,
        "react/jsx-no-literals": 0,
        "react/jsx-pascal-case": 0,
        "react/no-danger": 0,
        "react/no-deprecated": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-is-mounted": 0,
        "react/no-set-state": 0,
        "react/no-string-refs": 0,
        "react/prefer-es6-class": 0,

        "lodash/chaining": [2, "always"],
        "lodash/prefer-immutable-method": 0,
        "lodash/no-commit": 0,
        "lodash/path-style": 0,
        "lodash/prefer-constant": 0,
        "lodash/prefer-filter": 0,
        "lodash/prefer-lodash-method": 0,
        "lodash/prefer-lodash-typecheck": 0,
        "lodash/prefer-map": 0,
        "lodash/prefer-matches": 0,
        "lodash/prefer-noop": 0,
        "lodash/prefer-over-quantifier": 0,
        "lodash/prefer-startswith": 0,
        "lodash/prefer-thru": 0,
        "lodash/collection-method-value": 0
    },
    "globals": {
        "requirejs": true,
        "window": false,
        "define": false
    }
};
