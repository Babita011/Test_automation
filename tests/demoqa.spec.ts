import { test, expect, Page } from "@playwright/test";
import { DemoQA } from "./Pages/demoQa";
import testData from "./TestData/DemoQATestData.json";

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
test.afterEach(async ({}, testInfo) => {
  console.log(`----- After each test ----- ${testInfo.title}`);
  console.log(`----- Test ID ----- ${testInfo.testId}`);
  console.log(`----- Test Status ----- ${testInfo.status}`);
});

// Runs once after all tests
test.afterAll(async () => {
  console.log("----- After all tests -----");
});

// Test Case 1
test("verify Practice Form - test case 1", async ({ page }) => {
  await verifyPracticeForm(page);
});

// Test Case 2
test("verify Practice Form - test case 2", async ({ page }) => {
  await verifyPracticeForm(page);
});

// Test Case 3
test("verify Practice Form - test case 3", async ({ page }) => {
  await verifyPracticeForm(page);
});

// Reusable function
async function verifyPracticeForm(page: Page): Promise<void> {
  // Verify page heading
  await expect(
    page.getByRole("heading", { name: "Practice Form" })
  ).toBeVisible();

  // Create Page Object
  const demoQA = new DemoQA(page);

  // Get test data
  const user = testData.user1;

  // Fill Practice Form
  await demoQA.username(user);
  await demoQA.mobileNumber(user.mobile);
  await demoQA.subjects(user.subject);
  //await demoQA.hobbies();
  await demoQA.currentAddress(user.address);
  await demoQA.state(user.state);
  await demoQA.city(user.city);
}
