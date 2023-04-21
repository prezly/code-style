const importOrderConfig = require("./rule-configs/import-order/next.js");
const namingConventionConfig = require("./rule-configs/naming-convention/next.js");

module.exports = {
    extends: [require.resolve("./react.js"), "next/core-web-vitals"],
    rules: {
        "import/order": ["error", importOrderConfig],

        // General code-style rules
        "@typescript-eslint/naming-convention": namingConventionConfig,

        // Allow prop spreading for `react-intl` FormattedMessage component
        "react/jsx-props-no-spreading": [
            "error",
            {
                exceptions: ["FormattedMessage"],
            },
        ],
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
        {
            files: ["modules/**"],
            rules: {
                // TODO: NextJS Dynamic import doesn't work too well with named exports.
                // Gotta figure out how to make them work together.
                // Some hints here: https://github.com/vercel/next.js/issues/22278#issuecomment-1009865850
                "import/no-default-export": "off",
                "no-restricted-exports": "off",
            },
        },
    ],
};
