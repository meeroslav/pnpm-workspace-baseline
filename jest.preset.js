// jest.preset.js
module.exports = {
  testTimeout: 180000,
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/', '/out/'],
  cacheDirectory: '<rootDir>/.cache/jest',
    coverageDirectory:'<rootDir>/test-output/jest/coverage',
    reporters: [
    'default',
    ['jest-junit', {outputDirectory: '<rootDir>/test-output/jest/junit/coverage', outputName: 'report.xml'}],
  ],
};
