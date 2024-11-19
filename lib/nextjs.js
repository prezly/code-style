import importOrderConfig from "./rule-configs/import-order/next.js";
import namingConventionConfig from "./rule-configs/naming-convention/next.js";
import reactConfig from "./react.js";

module.exports = [
    ...reactConfig,
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        plugins: {
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
            prettier: require("eslint-plugin-prettier"),
            import: require("eslint-plugin-import"),
            react: require("eslint-plugin-react"),
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
