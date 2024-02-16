module.exports = {
    extends: ["stylelint-config-standard-scss"],
    rules: {
        "import-notation": "string",
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
        "max-nesting-depth": 2,
        "selector-pseudo-class-no-unknown": [
            true,
            { ignorePseudoClasses: ["global", "export"] },
        ],
    },
};
