import nx from "@nx/eslint-plugin";
import baseConfig from "../../eslint.config.mjs";

export default [
    ...baseConfig,
    ...nx.configs["flat/angular"],
    ...nx.configs["flat/angular-template"],
    {
        files: [
            "**/*.ts"
        ],
        rules: {
            // This migration preserves the existing NgModule architecture.
            "@angular-eslint/prefer-standalone": "off",
            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    prefix: "myworkspace",
                    style: "camelCase"
                }
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "myworkspace",
                    style: "kebab-case"
                }
            ]
        }
    },
    {
        files: [
            "**/*.html"
        ],
        // Override or add rules here
        rules: {}
    }
];
