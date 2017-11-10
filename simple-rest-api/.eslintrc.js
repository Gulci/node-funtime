module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "rules": {
    "array-bracket-spacing": [
      "error",
      "always",
      {
        "singleValue": false
      }
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "curly": [
      "error",
      "multi-line"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "key-spacing": [
      "error",
      {
        "align": "value"
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-console": [
      "warn",
      {
        "allow": [
          "error",
          "info"
        ]
      }
    ],
    "no-redeclare": "warn",
    "no-shadow": "warn",
    "no-unused-vars": "warn",
    "no-var": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "prefer-const": "error",
    "quotes": [
      "error",
      "single",
      "avoid-escape"
    ],
    "require-await": "error",
    "semi": [
      "error",
      "always"
    ],
    "strict": [
      "error",
      "global"
    ]
  }
};
