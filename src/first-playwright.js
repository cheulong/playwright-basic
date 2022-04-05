/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-lines */
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click strong:has-text("English")
  await page.locator('strong:has-text("English")').click();
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Main_Page');
  // Click div[role="main"] >> text=Community portal
  await page.locator('div[role="main"] >> text=Community portal').click();
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Wikipedia:Community_portal');
  // ---------------------
  await context.close();
  await browser.close();
})();
