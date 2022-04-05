/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-lines */
const { test, expect } = require('@playwright/test');

test.describe('first-test', async () => {
  test('Open Wikipedia', async ({ page, context }) => {
    await context.tracing.start({ screenshots: true, snapshots: true });
    await page.goto('https://www.wikipedia.org/');
    await page.locator('strong:has-text("English")').click();
    const title = await page.title();
    expect(title).toBe('Wikipedia, the free encyclopedia');
    await context.tracing.stop();
  });

  test('Wikipedia match snapshot', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await page.click('strong:has-text("English")');
    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});
