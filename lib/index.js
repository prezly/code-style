//@ts-check
import importOrderConfig from "./rule-configs/import-order/base.js";
import namingConventionConfig from "./rule-configs/naming-convention/base.js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import sortExportAllPlugin from "eslint-plugin-sort-export-all";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

//@ts-ignore -- Package provides no types.
import reactRefresh from "eslint-plugin-react-refresh";
//@ts-ignore -- Package provides no types.
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
    {
        ignores: ["dist"],
    },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ["**/*.{ts,tsx,js,jsx,mjs}"],
        languageOptions: {
            ecmaVersion: 2020,
            parserOptions: {
                projectService: true,
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            "react-refresh": reactRefresh,
        },
        rules: {
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
        },
    },
    {
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            prettier: prettierPlugin,
            import: importPlugin,
            "sort-export-all": sortExportAllPlugin,
        },
        rules: {
            // Prettier rules
            "prettier/prettier": 2,

            // Warn about deprecated methods and properties
            "@typescript-eslint/no-deprecated": "warn",

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
            // @ts-ignore
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
    eslintConfigPrettier,
);
