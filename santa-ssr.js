'use strict';
// santa ssr package
const santa = require('./santa-es6')
const restricted = santa.rules["no-restricted-syntax"]

module.exports = {
    "extends": ["./santa-es6.js"],
    "rules": {
        "santa/no-module-state": 2,
        "santa/no-experiment-in-component": 2,

        "no-restricted-syntax": restricted.concat([
            {
                "selector": "CallExpression[callee.type='MemberExpression'][callee.object.name='experiment'][callee.property.name='isOpen'][arguments.length!=2]",
                "message": "isOpen must always be invoked with two argument."
            }
        ])
    }
};
