const importOrderConfig = require("./rule-configs/import-order/base.js");
const namingConventionConfig = require("./rule-configs/naming-convention/base.js");

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
        project: ["./tsconfig.json"],
    },
    plugins: [
        "@typescript-eslint",
        "prettier",
        "import",
        "sort-export-all",
        "deprecation",
    ],
    rules: {
        // Prettier handles indent, whitespace and empty lines
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

        "prefer-destructuring": "warn",
        "no-nested-ternary": "warn",

        "func-style": ["error", "declaration"],

        // Extra rules
        radix: "off",
    },
};
