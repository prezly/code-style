const path = require("path");
const reactConfig = require(path.resolve("./react"));

module.exports = {
    ...reactConfig,
    pathGroups: [
        // This rule shoule be placed before the `internal` group rules for other `@` style imports
        {
            pattern: "@/public/images/**",
            group: "unknown",
            position: "before",
        },
        ...reactConfig.pathGroups,
    ],
};
