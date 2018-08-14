'use strict';
module.exports = {
    extends: ["wix-editor"],
    env: {
        "node": true
    },
    rules: {
        "strict": [2, "global"],
        "semi": [2, "never"],
        "one-var": [2, "never"]
    }
};
