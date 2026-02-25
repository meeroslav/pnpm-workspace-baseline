import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  // Global ignores
  {
    ignores: [
      '**/dist',
      '**/build',
      '**/out',
      '**/out-tsc',
      '**/coverage',
      '**/test-output',
      '**/node_modules',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript rules (flat config)
  ...tseslint.configs.recommended,

  // Import rules
  {
    plugins: { import: importPlugin },
    rules: {
      // low-drama defaults; tighten later if you want
      'import/no-unresolved': 'off', // TS handles this better with paths
    },
  },

  // React rules (applies where relevant)
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{jsx,tsx,ts,js}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Prettier last to disable stylistic conflicts
  prettier,
];
