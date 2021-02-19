module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb", "@vue/typescript"],
  rules: {
    "max-len": "off",
    "new-cap": "off",
    "no-continue": "off",
    experimentalDecorators: "off",
    "consistent-return": "off",
    "no-plusplus": "off",
    "guard-for-in": "off",
    "prefer-destructuring": "off",
    "prefer-promise-reject-errors": "off",
    camelcase: "off",
    "eslint-import-resolver-typescript": {
      extensions: [".ts", ".tsx", ".d.ts"]
    },
    "space-infix-ops": "off",
    "import/prefer-default-export": "off",
    "no-restricted-syntax": 0,
    "no-restricted-globals": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "import/no-unresolved": "off",
    "import/newline-after-import": "off",
    "import/extensions": "off",
    "no-param-reassign": "off",
    "class-methods-use-this": "off",
    "linebreak-style": "off",
    "no-console": "off",
    "no-debugger": "off",
    "vue/attribute-hyphenation": ["error", "always"],
    "vue/html-end-tags": "error",
    "vue/html-indent": ["error", 2],
    "vue/html-self-closing": "error",
    "vue/require-default-prop": "error",
    "vue/require-prop-types": "error",
    "vue/attributes-order": "error",
    "vue/order-in-components": "error",
    "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复
    quotes: [1, "double"],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ],
    "arrow-parens": "off",
    "prefer-template": "off",
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never"
      }
    ]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
