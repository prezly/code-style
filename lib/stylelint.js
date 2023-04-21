module.exports = {
    extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines"],
    rules: {
        indentation: null,
        "string-quotes": null,
        "import-notation": "string",
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
        "max-nesting-depth": 2,
        "selector-pseudo-class-no-unknown": [
            true,
            { ignorePseudoClasses: ["global", "export"] },
        ],
    },
};
