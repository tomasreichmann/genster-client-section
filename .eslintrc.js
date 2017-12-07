module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "classes": true,
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-vars": ["error"],
        "react/react-in-jsx-scope": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"]
};