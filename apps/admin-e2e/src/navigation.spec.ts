import { test, expect } from '@playwright/test';
import { randomDelay } from '@org/e2e-utils/test-delay';

test.describe('Admin Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to orders page', async ({ page }) => {
    const ordersLink = page.locator('a:has-text("Orders")');
    await ordersLink.click();

    await page.waitForURL('**/orders');
    expect(page.url()).toContain('/orders');

    const heading = page.locator('h1:has-text("Order Management")');
    await expect(heading).toBeVisible();
  });

  test('should navigate to products page', async ({ page }) => {
    const productsLink = page.locator('a:has-text("Products")');
    await productsLink.click();

    await page.waitForURL('**/products');
    expect(page.url()).toContain('/products');

    const heading = page.locator('h1:has-text("Product Management")');
    await expect(heading).toBeVisible();
  });

  test('should navigate to analytics page', async ({ page }) => {
    const analyticsLink = page.locator('a:has-text("Analytics")');
    await analyticsLink.click();

    await page.waitForURL('**/analytics');
    expect(page.url()).toContain('/analytics');

    const heading = page.locator('h1:has-text("Analytics Dashboard")');
    await expect(heading).toBeVisible();
  });

  test('should navigate between all pages', async ({ page }) => {
    // Start at orders (default)
    await page.waitForURL('**/orders');

    // Go to products
    await page.locator('a:has-text("Products")').click();
    await page.waitForURL('**/products');
    expect(page.url()).toContain('/products');

    // Go to analytics
    await page.locator('a:has-text("Analytics")').click();
    await page.waitForURL('**/analytics');
    expect(page.url()).toContain('/analytics');

    // Go back to orders
    await page.locator('a:has-text("Orders")').click();
    await page.waitForURL('**/orders');
    expect(page.url()).toContain('/orders');
  });

  test('benchmark delay', async () => {
    await randomDelay(20000);
    expect(true).toBe(true);
  });
});
