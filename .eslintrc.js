module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "strict": 0
  },
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true
  },
  "extends": "airbnb",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": [
      "warn",
      "never"
    ],
    "indent": ["warn", 2, {"SwitchCase": 1}],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    /* Advanced Rules*/
    "no-unused-expressions": "warn",
    "no-useless-concat": "warn",
    "block-scoped-var": "error",
    "consistent-return": "error",
    /*My Custom Rules*/
    "no-param-reassign": [2, {
        "props": false
    }],
    "no-underscore-dangle" : 0,
    "no-plusplus" : 0,
    "no-console" : 0,
    "no-unused-vars" : 0,
    "react/prop-types" : 0,
    "react/prefer-stateless-function": 0,
    "jsx-a11y/label-has-for":0,
    "no-class-assign":0,
    "no-shadow": 0,
    "import/prefer-default-export":0,
    "max-len": [2, {"code": 200}]
  }
};
