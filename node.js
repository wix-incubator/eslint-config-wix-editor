'use strict';
module.exports = {
    extends: ["wix-editor"],
    env: {
        "es6": true,
        "node": true
    },
    rules: {
        "strict": [2, "global"],
        "semi": [2, "never"],

        "func-style": [2, "declaration", {"allowArrowFunctions": true}],

        /* es6 */
        "arrow-body-style": [2, "as-needed"],
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": [2, { "before": true, "after": true }],
        "constructor-super": 2,
        "generator-star-spacing": [2, {"before": true, "after": false}],
        "no-class-assign": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-this-before-super": 2,
        "no-var": 2,
        "one-var": [2, "never"],
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-reflect": [0, { "exceptions": ["apply"] }],
        "prefer-spread": 0,
        "prefer-template": 2,
        "require-yield": 2,
        "template-curly-spacing": 2
    }
};
