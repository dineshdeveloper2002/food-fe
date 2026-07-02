import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/docs/intro');
  console.log(process.env.BASE_URL)
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log(process.env.COMPANY_ID)
});
