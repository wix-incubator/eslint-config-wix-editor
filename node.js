'use strict';
var root = require('.');
var node = {
    env: {
        es6: true,
        node: true
    },
    rules: {
        "strict": [2, "global"],

        /* es6 */
        "arrow-body-style": [2, "as-needed"],
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": [2, { "before": true, "after": true }],
        "constructor-super": 2,
        "generator-star-spacing": [2, {"before": true, "after": false}],
        "no-confusing-arrow": 2,
        "no-class-assign": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-this-before-super": 2,
        "no-var": 2,
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-reflect": [0, { "exceptions": ["apply"] }],
        "prefer-spread": 0,
        "prefer-template": 2,
        "require-yield": 2
    }
};

module.exports = Object.assign(root, node);