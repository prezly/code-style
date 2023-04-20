const importOrderConfig = require("./rule-configs/import-order/next.js");
const namingConventionConfig = require("./rule-configs/naming-convention/next.js");

module.exports = {
    extends: [require.resolve("./react.js"), "next/core-web-vitals"],
    rules: {
        "import/order": ["error", importOrderConfig],

        // General code-style rules
        "@typescript-eslint/naming-convention": namingConventionConfig,
    },
    overrides: [
        {
            files: ["pages/**"],
            rules: {
                // Next.js needs default exports for pages and API points
                "import/no-default-export": "off",
                // Next.js `getServerSideProps` has a quite complex type, so it's safer to define it as a const
                // and have the `GetServerSideProps<P>` type applied to it for better type safety
                "func-style": [
                    "error",
                    "declaration",
                    { allowArrowFunctions: true },
                ],
            },
        },
    ],
};
