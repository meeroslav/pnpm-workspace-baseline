import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

export default defineConfig({
  // Nx preset used to point at ./src
  testDir: './src',

  timeout: 180000,

  use: {
    baseURL,
    trace: 'on-first-retry',
  },

  // Start the app without Nx
  webServer: {
    // Pick the real command that serves/preview the shop app
    // Common Vite preview:
    command: 'pnpm --filter @org/admin preview --port 4200',
    url: baseURL,
    reuseExistingServer: true,

    // If this config file lives in the repo root, you can omit cwd.
    // If it lives in apps/shop-e2e or similar, set cwd to repo root:
    // cwd: process.cwd(),
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
