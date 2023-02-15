// @ts-check
const { test, expect } = require('@playwright/test');


// test.describe('has title', () => {
//   test('has title', async ({ page }) => {

//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
//   });
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });


test.describe('A single describe', () => {
  test.beforeAll(async ({ page }) => {
   // await page.goto('https://playwright.dev/');
    console.log('in beforeAll');
  });
  
  test.beforeEach(async ({ page }) => {
   // await page.goto('https://playwright.dev/');
    console.log('in beforeEach');
  });

  test('Test spec A', async ({ page }) => {
   // await page.goto('https://playwright.dev/');
    console.log('in spec A');
   // expect(true).toBe(true);
  });
  test('Test spec B', async ({ page }) => {
   // await page.goto('https://playwright.dev/');
    console.log('in spec B');
   // expect(true).toBe(true);
  });
});