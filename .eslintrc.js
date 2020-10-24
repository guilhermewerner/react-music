module.exports = {
    env: {
        es2020: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: [
        "react",
        "react-hooks",
    ],
    rules: {
        indent: [
            "error",
            4,
            {
                SwitchCase: 1
            }
        ],
        "no-unused-vars": [
            "warn"
        ],
        "no-undef": [
            "warn"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        quotes: [
            "error",
            "double"
        ],
        semi: [
            "error",
            "always"
        ]
    }
};
