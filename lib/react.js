// @ts-check
import importOrderConfig from "./rule-configs/import-order/react.js";
import namingConventionConfig from "./rule-configs/naming-convention/react.js";
import baseConfig from "./index.js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

// @ts-ignore -- Package provides no types
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
    ...baseConfig,
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "jsx-a11y": jsxA11yPlugin,
        },
        languageOptions: {
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
