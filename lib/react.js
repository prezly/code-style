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

        "jsx-a11y/alt-text": "warn",
        "jsx-a11y/click-events-have-key-events": "warn",
        "jsx-a11y/control-has-associated-label": "warn",
        "jsx-a11y/label-has-associated-control": [
            "warn",
            {
                assert: "either",
            },
        ],
        "jsx-a11y/iframe-has-title": "warn",
        "jsx-a11y/no-autofocus": "warn",
        "jsx-a11y/no-noninteractive-element-interactions": "warn",
        "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
        "jsx-a11y/no-static-element-interactions": "warn",
        "jsx-a11y/role-has-required-aria-props": "warn",

        // Extra rules
        "react/require-default-props": "off",
    },
};
