const { AxeBuilder } = require('@axe-core/playwright');
const playwright = require('playwright');

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://edward.delaporte.us/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Welcome - Edward Delaporte's Website");
});

test('accessibility', async ({ page }) => {
/* (async () => { */
  // const browser = await playwright.chromium.launch({ headless: true });
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto('https://edward.delaporte.us/');

  try {
    const results = await new AxeBuilder({ page }).analyze();
    console.log(results);
  } catch (e) {
    // do something with the error
  }

  await browser.close();
});