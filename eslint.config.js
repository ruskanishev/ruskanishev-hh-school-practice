const js = require("@eslint/js");

module.exports = [
    {
        ignores: [
            "**/dev/*",
            "**/dist/*",
            "**/tests/*",
            "tsconfig.json",
            ".lintstagedrc.js",
            ".prettierrc.js",
            "eslint.config.js"
        ]
    },
    
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                document: "readonly",
                window: "readonly",
            },
        },
        rules: {
            "no-unused-vars": "error",
        }
    }
];
