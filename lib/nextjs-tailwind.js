const namingConventionConfig = require("./rule-configs/naming-convention/next-tailwind.js");
const nextJsConfig = require("./nextjs.js");

module.exports = [
    ...nextJsConfig,
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        rules: {
            "@typescript-eslint/naming-convention": namingConventionConfig,
        },
    },
];