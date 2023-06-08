module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "autofix",
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "autofix/no-debugger": "error",
        "arrow-body-style": ["error", "as-needed"],
        "react/self-closing-comp": ["error", {
            "component": true,
            "html": true
          }],
          "react-hooks/exhaustive-deps": "error"
    }
}
