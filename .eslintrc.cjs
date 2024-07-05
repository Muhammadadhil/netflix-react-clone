//?What is ESLint?
//?ESLint is a linter for JavaScript and other languages that transpile to JavaScript, such as TypeScript. It analyzes your code to 
//?find and fix programming errors, code style issues, and other problematic patterns. It is highly configurable and can be integrated into various development workflows.


module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:react-hooks/recommended"],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "react/prop-types": "off",
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
};
