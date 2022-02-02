module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint', 'prettier', 'import', 'sort-export-all'],
    rules: {
        // Prettier handles indent, whitespace and empty lines
        'prettier/prettier': 2,

        // Import rules
        'sort-export-all/sort-export-all': [
            'error',
            'asc',
            {
                caseSensitive: false,
                natural: false,
            },
        ],
        'import/extensions': ['error', 'never'],
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            },
        ],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],

        // General code-style rules
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'default',
                format: ['snake_case', 'strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'], // snake_case enabled for Slate types
                // leadingUnderscore is allowed to allow having unused leading function arguments, e.g.
                // const ownPropSelector = (_state, ownProps) => ownProps.id;
                leadingUnderscore: 'allow',
                trailingUnderscore: 'forbid',
            },
            {
                // This is due to backend sending us snake_case properties
                selector: 'property',
                format: ['snake_case', 'strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
        ],
        'id-blacklist': [2, 'arr', 'cb', 'e', 'el', 'err', 'idx', 'num', 'str', 'tmp', 'val'],
        'no-return-assign': ['error', 'except-parens'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', ignoreRestSiblings: true },
        ],

        'prefer-destructuring': 'warn',
        'no-nested-ternary': 'warn',

        // Extra rules
        radix: 'off',
    },
};
