'use strict';
// santa es6 package
module.exports = {
    "extends": ["./santa.js"],
    env: {
        "es6": true
    },
    "rules": {
        "react/prop-types": 2,
        "react/display-name": 2,

        "quotes": [2, "single", "avoid-escape"],
        "space-before-function-paren": 2,
        "space-before-blocks": 2,
        "quote-props": 0,
        "no-extra-parens": 2,

        // NOTE santa-ssr extends this rule
        "no-restricted-syntax": [2, "ForOfStatement"],

        "indent": [2, 4, {"SwitchCase": 1, "FunctionExpression": {"body": 1, "parameters": "first"}}],
        "func-style": 0,
        "key-spacing": 2,
        "padded-blocks": 2,
        "space-in-parens": 2,
        "no-useless-concat": 2,

        /* es6 */
        "arrow-body-style": [2, "as-needed"],
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": [2, {"before": true, "after": true}],
        "constructor-super": 2,
        "generator-star-spacing": [2, {"before": true, "after": false}],
        "no-class-assign": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-this-before-super": 2,
        "no-var": 2,
        "one-var": [0, "never"],
        "object-shorthand": 2,
        "prefer-arrow-callback": 0,
        "prefer-const": 2,
        "prefer-reflect": [0, {"exceptions": ["apply"]}],
        "prefer-spread": 0,
        "prefer-template": 2,
        "require-yield": 2
    }
};
