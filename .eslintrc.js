module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["import"],
  rules: {
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/first": 0,
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "comma-dangle": ["error", "never"],
    "no-console": ["error", { allow: ["warn", "error", "log"] }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/no-array-index-key": 0,
    /* Prettier auto format will take care the following */
    "max-len": 0,
    "jsx-a11y/accessible-emoji": 0,
    "arrow-parens": [2, "as-needed", { requireForBlockBody: false }],
    "object-curly-newline": 0,
    "no-confusing-arrow": 0,
    indent: 0
  }
};
