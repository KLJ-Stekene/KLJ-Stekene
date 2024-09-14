import globals from "globals";
import jseslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/.vercel/**",
      "**/supabase/.branches/**",
      "**/supabase/.temp/**",
    ],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  jseslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
