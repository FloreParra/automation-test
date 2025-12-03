import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://blazedemo.com/index.php');
  await expect (page.locator('//h1[text()="Welcome to the Simple Travel Agency!"]')).toBeVisible();
  await page.locator('select[name="fromPort"]').selectOption('Portland');
  await page.locator('select[name="toPort"]').selectOption('New York');
  await page.locator('input[type="submit"]').click();
  await page.locator('//tr[1]/td[1]/input').click();
  await page.locator('input[id="inputName"]').fill('Florencia');
  await page.locator('input[id="address"]').fill('Calle falsa123');
  await page.locator('input[id="city"]').fill('Buenos Aires');
  await page.locator('input[id="state"]').fill('Argentina');
  await page.locator('input[id="zipCode"]').fill('1234');
  await page.locator('#cardType').selectOption('amex');
  await page.locator('input[id="creditCardNumber"]').fill('125287475456');
  await page.locator('input[id="creditCardMonth"]').fill('12');
  await page.locator('input[id="creditCardYear"]').fill('2036');
  await page.locator('input[id="creditCardName"]').fill('Doe John');
  await page.locator('input[type="submit"]').click();
  await expect (page.locator('//h1[text()="Thank you for your purchase today!"]')).toBeVisible();
});
