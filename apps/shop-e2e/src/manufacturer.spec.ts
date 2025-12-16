import { test, expect } from '@playwright/test';
import { randomDelay } from '@org/e2e-utils/test-delay';

test.describe('Manufacturer Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/products');
    await page.waitForLoadState('domcontentloaded');

    // Click first product to navigate to detail page
    const firstProduct = page.locator('[class*="product-card"]').first();
    await firstProduct.click();
    await page.waitForURL('**/products/*');
  });

  test('should navigate to manufacturer page when clicking manufacturer link', async ({ page }) => {
    // Find and click the manufacturer link in product details
    const manufacturerLink = page.locator('[class*="manufacturer-link"]');
    await expect(manufacturerLink).toBeVisible();

    // Get the manufacturer name before clicking
    await expect(manufacturerLink).not.toHaveText('');
    const manufacturerName = await manufacturerLink.textContent();

    // Click the manufacturer link
    await manufacturerLink.click();

    // Wait for navigation to manufacturer page
    await page.waitForURL('**/manufacturers/*');
    expect(page.url()).toMatch(/\/manufacturers\/.+/);

    // Verify the manufacturer title is rendered on the page
    const manufacturerTitle = page.locator('h1:not(.app-title)');
    await expect(manufacturerTitle).toBeVisible();
    await expect(manufacturerTitle).toHaveText(manufacturerName || '');
  });

  test('should display manufacturer information', async ({ page }) => {
    // Click manufacturer link
    const manufacturerLink = page.locator('[class*="manufacturer-link"]');
    await manufacturerLink.click();
    await page.waitForURL('**/manufacturers/*');

    // Check for manufacturer name heading
    const heading = page.locator('h1:not(.app-title)');
    await expect(heading).toBeVisible();

    // Check for manufacturer subtitle
    const subtitle = page.locator('p:has-text("Manufacturer Information")');
    await expect(subtitle).toBeVisible();
  });

  test('should have back button on manufacturer page', async ({ page }) => {
    // Click manufacturer link
    const manufacturerLink = page.locator('[class*="manufacturer-link"]');
    await manufacturerLink.click();
    await page.waitForURL('**/manufacturers/*');

    // Find and click the back button
    const backButton = page.locator('button:has-text("Back")');
    await expect(backButton).toBeVisible();

    // Click back button
    await backButton.click();

    // Verify we're back on the product detail page
    await page.waitForURL('**/products/*');
    expect(page.url()).toMatch(/\/products\/\d+/);
  });

  test('benchmark delay', async () => {
    await randomDelay(20000);
    expect(true).toBe(true);
  });
});
