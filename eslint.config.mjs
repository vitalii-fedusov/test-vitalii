import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,jsx}"],
    rules: {
      semi: "error",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "error",
      "no-constant-condition": "error",
      "no-unsafe-negation": "error",
      eqeqeq: "error",
      "prefer-const": "error",
      "no-trailing-spaces": "error",
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
