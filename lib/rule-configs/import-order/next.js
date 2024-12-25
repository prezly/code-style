import reactConfig from "./react.js";

export default {
    ...reactConfig,
    pathGroups: [
        // This rule should be placed before the `internal` group rules for other `@` style imports
        {
            pattern: "@/public/images/**",
            group: "unknown",
            position: "before",
        },
        ...reactConfig.pathGroups,
    ],
};
