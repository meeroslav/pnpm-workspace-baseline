import type { Config } from 'jest';

const config: Config = {
  projects: [
    '<rootDir>/apps/api/jest.config.js',
    '<rootDir>/libs/api/products/jest.config.js',
  ],
};

export default config;
