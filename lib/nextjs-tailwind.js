import namingConventionConfig from "./rule-configs/naming-convention/next-tailwind.js";
import nextJsConfig from "./nextjs.js";

module.exports = [
    ...nextJsConfig,
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        rules: {
            "@typescript-eslint/naming-convention": namingConventionConfig,
        },
    },
];
