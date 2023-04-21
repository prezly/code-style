const importOrderConfig = require("./rule-configs/import-order/next.js");
const namingConventionConfig = require("./rule-configs/naming-convention/next-tailwind.js");

module.exports = {
    extends: [require.resolve("./nextjs.js")],
    rules: {
        // General code-style rules
        "@typescript-eslint/naming-convention": namingConventionConfig,
    },
};
