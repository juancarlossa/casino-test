import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "@typescript-eslint/no-this-alias": "off",
      "no-unused-vars": "off",
      "no-restricted-syntax": "off",
      "no-console": "off",
      "no-undef": "off",
      "no-unused-expressions": "off",
      "no-redeclare": "off",
      "no-constant-condition": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  }),
];

export default eslintConfig;
