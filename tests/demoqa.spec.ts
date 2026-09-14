import { test, expect } from "@playwright/test";
import { DemoQA } from "./Pages/demoQa";

test("verify Practice Form", async ({ page }) => {
  await page.goto("/automation-practice-form");

  await expect(
    page.getByRole("heading", { name: "Practice Form" })
  ).toBeVisible();

  const demoQA = new DemoQA(page);

  await demoQA.username();
  await demoQA.mobileNumber();
  await demoQA.dateOfBirth();
  await demoQA.subjects();
  await demoQA.hobbies();
  await demoQA.currentAddress();
  await demoQA.state();
  await demoQA.city();
});
