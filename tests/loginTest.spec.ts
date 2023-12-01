import { test, expect } from '@playwright/test';

test('test login and redirect to dashboard page', async ({ page }) => {
  await page.goto('https://app.leadsbridge.com/signin');
  await expect(page.locator('div').filter({ hasText: /^Login$/ })).toBeVisible();
  await page.getByTestId('signin-email').click();
  await page.getByTestId('signin-email').fill('christian.celora@leadsbridge.com');
  await page.getByTestId('signin-password').click();
  await page.getByTestId('signin-password').fill('TdGBnbXJG7H*9');
  await page.getByTestId('signin-submit').click();

  /** 
   * Recording feature catches every redirect as a new page navigation
   * Need to remove this or the test will fail when played
   */
  // await page.goto('https://app.leadsbridge.com/');
  // await page.goto('https://leadsbridge.com/app/dashboard');

  // Signin... increase timeout
  await expect(page.getByRole('button', { name: ' Create new Bridge' })).toBeVisible({ timeout: 20000 });
  await expect(page.getByRole('link', { name: ' Support' })).toBeVisible();
  await page.close()
});