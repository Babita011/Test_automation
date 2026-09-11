
import { test, expect } from '@playwright/test';


test('verify Practice Form', async ({ page }) => {
  await page.goto('/automation-practice-form');
/*
  await expect(
    page.getByRole('heading', { name: 'Practice Form' })
  ).toBeVisible();

  await page.getByPlaceholder('First Name').fill('Aakshita');
  await expect(
    page.getByPlaceholder('First Name')
  ).toHaveValue('Aakshita');

  await page.getByPlaceholder('Last Name').fill('sharma');
  await expect(
    page.getByPlaceholder('Last Name')
  ).toHaveValue('sharma');
*/
  await page.locator('emailid').fill('Aakshita@example.com');
  await expect(
    page.locator('//input[@id="userEmail"]')
  ).toHaveValue('Aakshita@example.com');

  await page.locator('label[for="gender-radio-2"]').click();
  await expect(
    page.locator('#gender-radio-2')
  ).toBeChecked();

  await page.getByPlaceholder('Mobile Number').fill('9888810599');
  await page.locator('#dateOfBirthInput').click();
  await page.locator('.react-datepicker__year-select').selectOption('2001');
  await page.locator('.react-datepicker__month-select').selectOption('September');
  await page.locator('.react-datepicker__day--010').first().click();
  await page.waitForTimeout(1000);
  await page.locator('//div[@id="subjectsContainer"]//input').fill('Science');
  await expect(
    page.locator('//div[@id="subjectsContainer"]')
  ).toContainText('Science');

  await page.keyboard.press('Enter')
  await page.locator('label[for="hobbies-checkbox-2"]').click();
  await expect(
    page.locator('#hobbies-checkbox-2')
  ).toBeChecked();
  await page.locator('#currentAddress')

    .fill('Bengaluru, Karnataka, India');
  await expect(
    page.locator('#currentAddress')
  ).toHaveValue('Bengaluru, Karnataka, India');
  await page.locator('#state').scrollIntoViewIfNeeded();
  await page.locator('#state').click();
  await page.locator('#react-select-3-input').fill('Uttar Pradesh');
  await page.keyboard.press('Enter');
  await expect(page.locator('#city')).toBeEnabled();
  await page.locator('#city').click();
  const cityInput = page.locator('#react-select-4-input');
  await expect(cityInput).toBeEnabled();
  await cityInput.fill('Agra');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
});
