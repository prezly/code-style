import globals from "globals";
import importOrderConfig from "./rule-configs/import-order/base.js";
import namingConventionConfig from "./rule-configs/naming-convention/base.js";
import typescriptParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import sortExportAllPlugin from "eslint-plugin-sort-export-all";
import deprecationPlugin from "eslint-plugin-deprecation";

export default [
    {
        files: ["**/*.{ts,tsx,js,jsx,mjs}"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            ecmaFeatures: {
                jsx: true,
            },
            parser: typescriptParser,
            parserOptions: {
                project: ["./tsconfig.json"],
            },
        },
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            prettier: prettierPlugin,
            import: importPlugin,
            "sort-export-all": sortExportAllPlugin,
            deprecation: deprecationPlugin,
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
                {
                    svg: "always",
                    json: "always",
                    css: "always",
                    scss: "always",
                },
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
                    memberSyntaxSortOrder: [
                        "none",
                        "all",
                        "multiple",
                        "single",
                    ],
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
