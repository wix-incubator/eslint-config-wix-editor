module.exports = {
    "plugins": ["lodash", "react"],
    "extends": ["./node.js", "plugin:lodash/recommended"],
    "parser": "babel-eslint",
    "rules": {
      "lodash/no-commit": 2,
      "lodash/path-style": [0, "as-needed"],
      "lodash/prefer-constant": 0,
      "lodash/prefer-filter": 2,
      "lodash/prefer-lodash-method": 0,
      "lodash/prefer-lodash-typecheck": 0,
      "lodash/prefer-map": 2,
      "lodash/prefer-matches": 2,
      "lodash/prefer-noop": 0,
      "lodash/chaining": 0,
      "lodash/import-scope": 0,
      "lodash/prefer-startswith": 0,
      "no-unused-vars": [2, { "varsIgnorePattern": "React$" }],
      "react/jsx-uses-vars": 2,
      "react/react-in-jsx-scope": 2,
      "react/display-name": 2,
      "react/no-danger": 2,
      "react/no-did-mount-set-state": 2,
      "react/no-did-update-set-state": 2,
      "react/no-unknown-property": 2,
      "react/prop-types": [2, {
        "ignore": [
          "children"
        ]
      }],
      "react/no-unused-prop-types": 2,
      "react/sort-comp": 2,
      "react/self-closing-comp": 2,
      "react/jsx-wrap-multilines": 2,
      "react/jsx-key": 2,
      "react/jsx-pascal-case": 2
    },
    "env": {
      "browser": true,
      "commonjs": true,
      "jasmine": true
    }
  }
  
