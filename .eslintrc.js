module.exports = {
    parser: "babel-eslint",
    env: {
      browser: true,
      es2020: true,
    },
    extends: ["plugin:react/recommended", "standard", "prettier"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
      "prettier/prettier": ["error"],
      "react/prop-types": 0,
    },
  };
  