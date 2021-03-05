'use strict';
// santa test package
module.exports = {
    "extends": ["./santa-es6.js"],
    "plugins": [
        "jasmine"
    ],
    "settings": {
      "react": {
        "createClass": "createReactClass", // Regex for Component Factory to use, default to "createClass",
        "pragma": "React",  // Pragma to use, default to "React"
        "version": "15.6.0"
      }
    },
    parserOptions: {
        "ecmaVersion": 2017
    },
    "env": {
        "jasmine": true
    },
    "rules": {
        "no-restricted-properties": 0,
        "@wix/santa/module-definition": 0,
        "@wix/santa/no-module-state": 0,
        "@wix/santa/enforce-package-access": 0,
        "@wix/santa/no-jasmine-outside-describe": 2,
        "jasmine/no-spec-dupes": 0,
        "jasmine/no-suite-dupes": 0,
        "jasmine/missing-expect": 0,
        "jasmine/no-suite-callback-args": 2,
        "jasmine/no-focused-tests": 2,
        "jasmine/valid-expect": 2,
        "jasmine/no-disabled-tests": 0,
        "react/display-name": 0,
        "react/jsx-boolean-value": 0,
        "react/jsx-no-undef": 0,
        "react/jsx-sort-props": 0,
        "react/jsx-sort-prop-types": 0,
        "react/jsx-uses-react": 0,
        "react/jsx-uses-vars": 0,
        "react/no-did-mount-set-state": 0,
        "react/no-did-update-set-state": 0,
        "react/no-multi-comp": 0,
        "react/no-unknown-property": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "react/self-closing-comp": 0,
        "react/wrap-multilines": 0,
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
        "react/no-direct-mutation-state": 0,
        "react/no-is-mounted": 0,
        "react/no-set-state": 0,
        "react/no-string-refs": 0,
        "react/prefer-es6-class": 0,
        "react/require-extension": 0
    }
};
