const nextConfig = require("./next");

module.exports = [
    ...nextConfig,
    {
        // This if for `classNames` using tailwind classes or other non-module classes
        selector: "property",
        format: ["strictCamelCase"],
        filter: {
            regex: "[- ]",
            match: false,
        },
    },
];
