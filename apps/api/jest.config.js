/* eslint-disable */
const { readFileSync } = require('fs');
const { join } = require('path');

const swcJestConfig = JSON.parse(readFileSync(join(__dirname, '.spec.swcrc'), 'utf-8'));
swcJestConfig.swcrc = false;

module.exports = {
  displayName: '@org/api',
  rootDir: __dirname,
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)'],

  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', swcJestConfig],
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'html'],

  testTimeout: 180000,
};
