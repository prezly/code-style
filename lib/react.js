module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
        project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint", "react", "react-hooks"],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        // React and a11y specific rules
        "react/no-unescaped-entities": "warn",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
        "react/jsx-wrap-multilines": [
            "error",
            { arrow: true, return: true, declaration: true },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",

        // Extra rules
        "react/require-default-props": "off",
    },
};
