import { test, expect } from '@playwright/test';

// Increase total timeout of each test. Includes test, hooks and fixtures
test.setTimeout(120000)

test('test create a simple bridge with Google Sheet as both source and destination', async ({ page }) => {  
  // Login
  await page.goto('https://app.leadsbridge.com/signin');
  await page.getByTestId('signin-email').click();
  await expect(page.locator('div').filter({ hasText: /^Login$/ })).toBeVisible();
  await page.getByTestId('signin-email').click();
  await page.getByTestId('signin-email').fill('christian.celora@leadsbridge.com');
  await page.getByTestId('signin-password').click();
  await page.getByTestId('signin-password').fill('TdGBnbXJG7H*9');
  await page.getByTestId('signin-submit').click();
  //await page.goto('https://app.leadsbridge.com/');
  //await page.goto('https://leadsbridge.com/app/dashboard');

  // Step 1
  await expect(page.getByRole('button', { name: ' Create new Bridge' })).toBeVisible({ timeout: 25000 });
  await expect(page.locator('#btnCreateNBBE')).toContainText('Create new Bridge');
  await page.getByRole('button', { name: ' Create new Bridge' }).click();
  await expect(page.getByRole('heading', { name: 'Select source' })).toBeVisible();
  await page.locator('.css-nwjfc').first().click();
  await page.locator('#react-select-2-input').fill('google sheets');
  await page.locator('#react-select-2-option-0 div').first().click();
  await expect(page.getByRole('heading', { name: 'Select destination' })).toBeVisible();
  await page.locator('div:nth-child(3) > div > .sc-fKVsgm > .css-1haqjju-container > .css-mxdxmq-control').click();
  await page.locator('#react-select-3-option-0-1 div').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('div:nth-child(4) > div > .sc-fKVsgm > .css-1haqjju-container > .css-mxdxmq-control').first()).toBeVisible({ timeout: 10000 });
  await expect(page.locator('form')).toContainText('Connect Google Sheets');
  await page.locator('div:nth-child(4) > div > .sc-fKVsgm > .css-1haqjju-container > .css-mxdxmq-control').first().click();
  await page.locator('div').filter({ hasText: /^New Source - Google Sheets - 2022-09-23 10:50$/ }).nth(1).click();
  await page.locator('div:nth-child(4) > div > .sc-fKVsgm > .css-1haqjju-container > .css-mxdxmq-control').click();
  await page.locator('#react-select-10-option-1 div').first().click();
  //await expect(page.locator('div').filter({ hasText: /^Google Spreadsheet \(\*\)$/ }).first()).toBeVisible();

  // Select source integration settings
  await expect(page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(1)).toBeVisible({ timeout: 10000 });
  await page.locator('.css-nwjfc').first().click(); // WARNING: here is using react css classes as selector
  // await page.locator('.css-nwjfc').first().fill('tik');
  await page.locator('#react-select-14-input').fill('tik_tok_conversions_test');
  await page.locator('#react-select-14-input').press('Enter');

  // Select destination integration settings
  await expect(page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2)).toBeVisible({ timeout: 10000 });
  await page.locator('.css-nwjfc').last().click(); // WARNING: here is using react css classes as selector
  await page.locator('#react-select-15-input').fill('test_linkedin_dest');
  await page.locator('#react-select-15-input').press('Enter');
  await expect(page.getByRole('button', { name: 'Continue' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();

  // Step 2
  await expect(page.locator('#root')).toContainText('Field mapping');
  await expect(page.getByTestId('add-filter-button')).toBeVisible({ timeout: 10000 });
  await expect(page.getByText('Sheet1 ›› description')).toBeVisible();
  await expect(page.getByText('Sheet1 ›› a')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save & publish' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & publish' }).click();

  // Step 3
  await expect(page.getByRole('button', { name: 'Explore LeadsBridge' })).toBeVisible({ timeout: 10000 });
  await page.getByRole('button', { name: 'Explore LeadsBridge' }).click();
  await expect(page.getByPlaceholder('Search for name..')).toBeVisible();
  await page.getByPlaceholder('Search for name..').click();
  await page.getByPlaceholder('Search for name..').fill('New Bridge');
  await page.getByPlaceholder('Search for name..').press('Enter');

  // Search bridge in bridge list (needs to be dynamic based on the bridge name / id)
  // await expect(page.getByPlaceholder('New bridge (10) - Enabled')).toBeVisible({ timeout: 10000 });
  // await expect(page.locator('#row_569716')).toContainText('New bridge (10) - Enabled');
});