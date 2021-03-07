'use strict'
// santa ssr package
module.exports = {
    "extends": ["./santa-es6.js"],
    "rules": {
        "santa/no-module-state": 0,
        "santa/no-experiment-in-component": 0,
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.type='MemberExpression'][callee.object.name='experiment'][callee.property.name='isOpen'][arguments.length<1]",
                "message": "isOpen must always be invoked with at least one argument."
            }
        ]
    }
}
