module.exports = [
    "warn",
    {
        selector: "default",
        format: [
            "snake_case",
            "strictCamelCase",
            "StrictPascalCase",
            "UPPER_CASE",
        ], // snake_case enabled for Slate types
        // leadingUnderscore is allowed to allow having unused leading function arguments, e.g.
        // const ownPropSelector = (_state, ownProps) => ownProps.id;
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
    },
    {
        // This is due to backend sending us snake_case properties
        selector: "property",
        format: [
            "snake_case",
            "strictCamelCase",
            "StrictPascalCase",
            "UPPER_CASE",
        ],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
    },
];
