import { test, expect } from "@playwright/test";
import { DemoQA } from "./Pages/demoQa";

// Runs once before all tests
test.beforeAll(async () => {
  console.log("----- Before all tests -----");
});

// Runs before every test
test.beforeEach(async ({ page }) => {
  console.log("----- Before each test -----");

  await page.goto("/automation-practice-form");
});

// Runs after every test
test.afterEach(async ({ page } , testInfo) => {
  console.log(`----- After each test -----${testInfo.title}`);
  console.log(`----- After each test -----${testInfo.testId}`);
   console.log(`----- After each test -----${testInfo.status}`);
 
});

// Runs once after all tests
test.afterAll(async ({ page }, testInfo) => {
  console.log(`----- After all tests -----${testInfo.title}`);
});

test("verify Practice Form - test case 1", async ({ page }) => {
  await verifyPracticeForm(page);
});

test("verify Practice Form - test case 2", async ({ page }) => {
  await verifyPracticeForm(page);
});

test("verify Practice Form - test case 3", async ({ page }) => {
  await verifyPracticeForm(page);
});

// Reusable function
async function verifyPracticeForm(page: any): Promise<void> {
  // Verify page heading
  await expect(
    page.getByRole("heading", { name: "Practice Form" })
  ).toBeVisible();

  // Create Page Object
  const demoQA = new DemoQA(page);

  // Fill Practice Form
  await demoQA.username();
  await demoQA.mobileNumber();
  await demoQA.dateOfBirth();
  await demoQA.subjects();
  await demoQA.hobbies();
  await demoQA.currentAddress();
  await demoQA.state();
  await demoQA.city();
}