import { Page, expect } from "@playwright/test";
import QALocators from "../Locators/DemoQALocators.json";

export class DemoQA {
  private readonly locators = QALocators;
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async username(): Promise<void> {
    // First Name
    const firstName = this.page.locator(
      this.locators.DemoQa.firstName
    );
    await firstName.fill("MonaLisa");
    await expect(firstName).toHaveValue("MonaLisa");

    // Last Name
    const lastName = this.page.locator(
      this.locators.DemoQa.lastName
    );
    await lastName.fill("sharma");
    await expect(lastName).toHaveValue("sharma");

    // Email
    const email = this.page.locator(
      this.locators.DemoQa.email
    );
    await email.fill("MonaLisa@example.com");
    await expect(email).toHaveValue("MonaLisa@example.com");

    // Gender
    const femaleGender = this.page.locator(
      this.locators.DemoQa.femaleGender
    );

    await this.page
      .locator(this.locators.DemoQa.femaleGenderLabel)
      .click();

    await expect(femaleGender).toBeChecked();
  }

  async mobileNumber(): Promise<void> {
    const mobileNumber = this.page.locator(
      this.locators.DemoQa.mobileNumber
    );

    await mobileNumber.fill("9888810599");

    await expect(mobileNumber).toHaveValue("9888810599");
  }

  async dateOfBirth(): Promise<void> {
    await this.page
      .locator(this.locators.DemoQa.dateOfBirth)
      .click();

    await this.page
      .locator(this.locators.DemoQa.yearSelect)
      .selectOption("2001");

    await this.page
      .locator(this.locators.DemoQa.monthSelect)
      .selectOption("September");

    await this.page
      .locator(this.locators.DemoQa.day)
      .first()
      .click();
  }

  async subjects(): Promise<void> {
    const subjects = this.page.locator(
      this.locators.DemoQa.subjects
    );

    await subjects.fill("Science");

    await expect(
      this.page.locator(this.locators.DemoQa.subjectsContainer)
    ).toContainText("Science");

    await this.page.keyboard.press("Enter");
  }

  async hobbies(): Promise<void> {
    const sportsHobby = this.page.locator(
      this.locators.DemoQa.sportsHobby
    );

    await this.page
      .locator(this.locators.DemoQa.sportsHobbyLabel)
      .click();

    await expect(sportsHobby).toBeChecked();
  }

  async currentAddress(): Promise<void> {
    const address = this.page.locator(
      this.locators.DemoQa.currentAddress
    );

    await address.fill("Bengaluru, Karnataka, India");

    await expect(address).toHaveValue(
      "Bengaluru, Karnataka, India"
    );
  }

  async state(): Promise<void> {
    const state = this.page.locator(
      this.locators.DemoQa.state
    );

    await state.scrollIntoViewIfNeeded();
    await state.click();

    const stateInput = this.page.locator(
      this.locators.DemoQa.stateInput
    );

    await stateInput.fill("Uttar Pradesh");
    await this.page.keyboard.press("Enter");
  }

  async city(): Promise<void> {
    const city = this.page.locator(
      this.locators.DemoQa.city
    );

    await city.click();

    const cityInput = this.page.locator(
      this.locators.DemoQa.cityInput
    );

    await expect(cityInput).toBeEnabled();

    await cityInput.fill("Agra");
    await this.page.keyboard.press("Enter");
  }
}
