// @ts-check

const { defineFlatConfig } = require("@ayingott/eslint-config")

module.exports = defineFlatConfig(
  [
    {
      ignores: ["out"],
    },
    {
      rules: {
        "unicorn/prefer-top-level-await": "off",
        "vue/html-closing-bracket-newline": "off",
        "vue/html-indent": "off",
      },
    },
  ],
  {
    vue: true,
    prettier: true,
    unocss: false,
    react: false,
  },
)
