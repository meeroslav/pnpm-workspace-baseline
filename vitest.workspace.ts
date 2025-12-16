import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    extends: '**/vite.config.{mjs,js,ts,mts}',
    test: {
      testTimeout: 180000, //
    },
  },
  {
    extends: '**/vitest.config.{mjs,js,ts,mts}',
    test: {
      testTimeout: 180000, //
    },
  },
]);
