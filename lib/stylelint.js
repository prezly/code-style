module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-sass-guidelines",
        "stylelint-config-prettier",
    ],
    rules: {
        "order/properties-alphabetical-order": null,
        indentation: null,
        "string-quotes": null,
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
        "max-nesting-depth": 2,
        "selector-pseudo-class-no-unknown": [
            true,
            { ignorePseudoClasses: ["global", "export"] },
        ],
    },
};
