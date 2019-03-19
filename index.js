module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": ["prettier"],
  "rules": {
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "max-len": 0,
    "react/no-array-index-key": false,
    "react/prefer-stateless-function": [true, { "ignorePureComponents": true }]
  },
  "globals": {
    "document": true,
    "localStorage": true,
    "window": true
  },
  "env": {
    "es6": true,
    "jest": true,
    "browser": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src"]
      }
    }
  }
};