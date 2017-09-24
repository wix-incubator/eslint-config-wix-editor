'use strict';
// santa ssr package
module.exports = {
    "rules": {
        "santa/no-module-state": 2,
        "santa/no-experiment-in-component": 2,
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.type='MemberExpression'][callee.object.name='experiment'][callee.property.name='isOpen'][arguments.length!=2]",
                "message": "isOpen must always be invoked with two argument."
            }
        ],
    }
};
