import reactConfig from "./react.js";

module.exports = [
    ...reactConfig,
    {
        // This is due to Algolia "_tags", "_highlightResult", "_snippetResult" & "objectID" properties
        // Also for Airtable's "baseId"
        selector: "property",
        format: ["camelCase"],
        filter: {
            regex: "^_?(?:tags|highlightResult|snippetResult|objectID|baseID)$",
            match: true,
        },
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
    },
];
