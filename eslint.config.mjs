import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import _import from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "next/core-web-vitals",
    "plugin:import/typescript",
    "plugin:import/recommended",
    "prettier",
    "plugin:storybook/recommended",
)), {
    plugins: {
        import: fixupPluginRules(_import),
        "unused-imports": unusedImports,
    },

    rules: {
        "import/order": ["error", {
            alphabetize: {
                order: "asc",
            },
        }],

        "@next/next/no-html-link-for-pages": ["error", "src/app"],
    },
}];