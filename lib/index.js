const importOrderConfig = require("./rule-configs/import-order/base.js");
const namingConventionConfig = require("./rule-configs/naming-convention/base.js");

module.exports = [
    {
        files: ["**/*.{ts,tsx,js,jsx,mjs}"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            ecmaFeatures: {
                jsx: true,
            },
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: ["./tsconfig.json"],
            },
        },
        env: {
            browser: true,
            node: true,
        },
        plugins: {
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
            prettier: require("eslint-plugin-prettier"),
            import: require("eslint-plugin-import"),
            "sort-export-all": require("eslint-plugin-sort-export-all"),
            deprecation: require("eslint-plugin-deprecation"),
        },
        rules: {
            // Prettier rules
            "prettier/prettier": 2,

            // Warn about deprecated methods and properties
            "deprecation/deprecation": "warn",

            // Import rules
            "sort-export-all/sort-export-all": [
                "error",
                "asc",
                {
                    caseSensitive: false,
                    natural: false,
                },
            ],
            "import/extensions": [
                "error",
                "never",
                { svg: "always", json: "always", css: "always", scss: "always" },
            ],
            "import/order": ["error", importOrderConfig],
            "import/prefer-default-export": "off",
            "import/no-default-export": "error",
            "import/no-extraneous-dependencies": "error",
            "sort-imports": [
                "error",
                {
                    ignoreCase: true,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                },
            ],

            // General code-style rules
            "@typescript-eslint/naming-convention": namingConventionConfig,
            "id-blacklist": [
                2,
                "arr",
                "cb",
                "e",
                "el",
                "err",
                "idx",
                "num",
                "str",
                "tmp",
                "val",
            ],
            "no-return-assign": ["error", "except-parens"],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_", ignoreRestSiblings: true },
            ],
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/no-import-type-side-effects": "error",

            "prefer-destructuring": "warn",
            "no-nested-ternary": "warn",

            "func-style": ["error", "declaration"],

            radix: "off",
        },
    },
];