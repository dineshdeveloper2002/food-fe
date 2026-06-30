import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/docs/intro');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('docs/writing-tests');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.only('get started link1212', async ({ page, browser }) => {
  await page.goto('docs/writing-tests');

  // Click the get started link.
  const context = await browser.newContext();
  const tab = await context.newPage()
  const context1 = await browser.newContext();
  const browserTab = await context1.newPage()
});
