// @ts-check
import importOrderConfig from "./rule-configs/import-order/next.js";
import namingConventionConfig from "./rule-configs/naming-convention/next.js";
import reactConfig from "./react.js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";

// @ts-ignore -- Package provides no types
import importPlugin from "eslint-plugin-import";

export default [
    ...reactConfig,
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            prettier: prettierPlugin,
            import: importPlugin,
            react: reactPlugin,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: ["./tsconfig.json"],
            },
        },
        rules: {
            // Import order rules
            "import/order": ["error", importOrderConfig],

            // General code-style rules
            "@typescript-eslint/naming-convention": namingConventionConfig,

            // Allow prop spreading for `react-intl` FormattedMessage component
            "react/jsx-props-no-spreading": [
                "error",
                {
                    exceptions: ["FormattedMessage"],
                },
            ],
        },
    },

    // Overrides for specific file patterns
    {
        files: ["pages/**"],
        rules: {
            // Allow default exports for Next.js pages and API routes
            "import/no-default-export": "off",
            // Allow arrow functions for Next.js `getServerSideProps`
            "func-style": [
                "error",
                "declaration",
                { allowArrowFunctions: true },
            ],
        },
    },
    {
        files: ["modules/**"],
        rules: {
            // Allow default exports for Next.js dynamic imports
            "import/no-default-export": "off",
            "no-restricted-exports": "off",
        },
    },
];
