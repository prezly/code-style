const path = require("path");
const baseConfig = require(path.resolve("./base"));

module.exports = {
    ...baseConfig,
    groups: [
        ...baseConfig.groups,
        // This is used for assets and styles, since `import/order` doesn't allow custom group names
        "unknown",
    ],
    pathGroups: [
        {
            pattern: "*.{svg|png|jpg|jpeg}",
            patternOptions: { matchBase: true },
            group: "unknown",
            position: "before",
        },
        {
            pattern: "*.scss",
            patternOptions: { matchBase: true },
            group: "unknown",
            position: "after",
        },
        // For some reason, `*.{scss|css}` makes the config not working as expected
        {
            pattern: "*.css",
            patternOptions: { matchBase: true },
            group: "unknown",
            position: "after",
        },
        {
            pattern: "@/**",
            group: "internal",
        },
        {
            pattern: "#*/**",
            group: "internal",
        },
        {
            pattern: "#**",
            group: "internal",
        },
    ],
};
