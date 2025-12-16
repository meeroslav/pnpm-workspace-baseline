import { test, expect } from '@playwright/test';
import { randomDelay } from '@org/e2e-utils/test-delay';

test.describe('Admin Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main header', async ({ page }) => {
    const header = page.locator('h1').first();
    await expect(header).toContainText('Admin Dashboard');
  });

  test('should redirect to orders page by default', async ({ page }) => {
    await page.waitForURL('**/orders');
    expect(page.url()).toContain('/orders');
  });

  test('should have navigation links', async ({ page }) => {
    const ordersLink = page.locator('a:has-text("Orders")');
    const productsLink = page.locator('a:has-text("Products")');
    const analyticsLink = page.locator('a:has-text("Analytics")');

    await expect(ordersLink).toBeVisible();
    await expect(productsLink).toBeVisible();
    await expect(analyticsLink).toBeVisible();
  });

  test('benchmark delay', async () => {
    await randomDelay(30000);
    expect(true).toBe(true);
  });
});
