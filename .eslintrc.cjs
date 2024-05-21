module.exports = {
  "$schema": "https://json.schemastore.org/eslintrc",
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:tailwindcss/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' }, "tailwindcss": {
      "callees": ["cn"],
      "config": "tailwind.config.js"
    },
    "next": {
      "rootDir": ["./"]
    }
  },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
    "tailwindcss/no-custom-classname": "off"
  },
}
