import importOrderConfig from "./rule-configs/import-order/react.js";
import namingConventionConfig from "./rule-configs/naming-convention/react.js";
import baseConfig from "./index.js";

module.exports = [
    ...baseConfig,
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        plugins: {
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
            react: require("eslint-plugin-react"),
            "react-hooks": require("eslint-plugin-react-hooks"),
            "jsx-a11y": require("eslint-plugin-jsx-a11y"),
        },
        languageOptions: {
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: ["./tsconfig.json"],
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            // Import order rules
            "import/order": ["error", importOrderConfig],

            // Naming convention rules
            "@typescript-eslint/naming-convention": namingConventionConfig,

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
    },
];
