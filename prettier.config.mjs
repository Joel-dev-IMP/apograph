/** @type {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
const config = {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "vscode",
    "",
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^\\./(.*)$",
  ],
};

export default config;
