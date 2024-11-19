import nextConfig from "./next.js";

export default [
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
