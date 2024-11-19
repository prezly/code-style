import baseConfig from "./base.js";

export default [
    ...baseConfig,
    {
        // This is for `dangerouslySetInnerHTML`
        selector: "property",
        format: ["camelCase"],
        filter: {
            regex: "^__html$",
            match: true,
        },
        leadingUnderscore: "allowDouble",
        trailingUnderscore: "forbid",
    },
];
