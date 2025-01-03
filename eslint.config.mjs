import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import esLintTypeScript from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    languageOptions: {
      parser: parserTs,
    },
    plugins: {
      '@typescript-eslint': esLintTypeScript,
      '@stylistic/ts': stylisticTs,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/ts/member-delimiter-style': ['error', { "multiline": { "delimiter": "comma" }, "singleline": { "delimiter": "comma" } }],
      '@stylistic/ts/semi': ['error', 'never'],
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/quotes': ['error', 'single', { "avoidEscape": true }],
      '@stylistic/ts/object-curly-newline': ['error', { "consistent": true }],
      '@stylistic/js/arrow-parens': ['error', 'as-needed', { "requireForBlockBody": true }],
      'require-await': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { "argsIgnorePattern": "^_", varsIgnorePattern: "^_" }],
    },
  },
]
