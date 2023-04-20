const path = require("path");

const importOrderConfig = require(path.resolve(
    "./rule-configs/import-order/react.js"
));
const namingConventionConfig = require(path.resolve(
    "./rule-configs/naming-convention/react.js"
));

module.exports = {
    extends: [
        require.resolve("."),
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    plugins: ["react", "react-hooks", "jsx-a11y"],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "import/order": ["error", importOrderConfig],

        "@typescript-eslint/naming-convention": namingConventionConfig,

        // React and a11y specific rules
        "react/no-unescaped-entities": "warn",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
        "react/jsx-wrap-multilines": [
            "error",
            { arrow: true, return: true, declaration: true },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",

        "jsx-a11y/alt-text": "warn",
        "jsx-a11y/click-events-have-key-events": "warn",
        "jsx-a11y/control-has-associated-label": "warn",
        "jsx-a11y/label-has-associated-control": [
            "warn",
            {
                assert: "either",
            },
        ],
        "jsx-a11y/iframe-has-title": "warn",
        "jsx-a11y/no-autofocus": "warn",
        "jsx-a11y/no-noninteractive-element-interactions": "warn",
        "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
        "jsx-a11y/no-static-element-interactions": "warn",
        "jsx-a11y/role-has-required-aria-props": "warn",

        // Extra rules
        "react/require-default-props": "off",
    },
};
