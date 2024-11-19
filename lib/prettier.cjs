module.exports = {
    tabWidth: 4,
    printWidth: 100,
    singleQuote: true,
    arrowParens: "always",
    trailingComma: "all",

    overrides: [
        {
            files: "*.json",
            options: {
                parser: "json",
                tabWidth: 2,
                singleQuote: false,
            },
        },
        {
            files: "*.yml",
            options: {
                parser: "yaml",
                tabWidth: 2,
                singleQuote: false,
            },
        },
        {
            files: "*.css",
            options: {
                parser: "css",
                singleQuote: false,
            },
        },
        {
            files: "*.scss",
            options: {
                parser: "scss",
                singleQuote: false,
            },
        },
    ],
};
