'use strict';
// santa test package
module.exports = {
    "extends": ["./node.js"],
    "plugins": [
        "jasmine"
    ],
    "env": {
        "jasmine": true
    },
    "rules": {
        "jasmine/no-spec-dupes": 0,
        "jasmine/no-suite-dupes": 0,
        "jasmine/missing-expect": 0,
        "jasmine/no-suite-callback-args": 2,
        "jasmine/no-focused-tests": 2,
        "jasmine/valid-expect": 2,
        "jasmine/no-disabled-tests": 0
        // "santa/no-jasmine-outside-describe": 2
    }
};
