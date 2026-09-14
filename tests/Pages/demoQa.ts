import { Page, expect } from "@playwright/test";
import QALocators from "../Locators/DemoQALocators.json";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  subject: string;
  address: string;
  state: string;
  city: string;
}

export class DemoQA {
  private readonly locators = QALocators;
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async username(user: UserData): Promise<void> {
    // First Name
    const firstName = this.page.locator(
      this.locators.DemoQa.firstName
    );

    await firstName.fill(user.firstName);
    await expect(firstName).toHaveValue(user.firstName);

    // Last Name
    const lastName = this.page.locator(
      this.locators.DemoQa.lastName
    );

    await lastName.fill(user.lastName);
    await expect(lastName).toHaveValue(user.lastName);

    // Email
    const email = this.page.locator(
      this.locators.DemoQa.email
    );

    await email.fill(user.email);
    await expect(email).toHaveValue(user.email);

    // Gender
    const femaleGender = this.page.locator(
      this.locators.DemoQa.femaleGender
    );

    await this.page
      .locator(this.locators.DemoQa.femaleGenderLabel)
      .click();

    await expect(femaleGender).toBeChecked();
  }

  async mobileNumber(mobile: string): Promise<void> {
    const mobileNumber = this.page.locator(
      this.locators.DemoQa.mobileNumber
    );

    await mobileNumber.fill(mobile);

    await expect(mobileNumber).toHaveValue(mobile);
  }

  async subjects(subject: string): Promise<void> {
    const subjects = this.page.locator(
      this.locators.DemoQa.subjects
    );

    await subjects.fill(subject);

    await expect(
      this.page.locator(this.locators.DemoQa.subjectsContainer)
    ).toContainText(subject);

    await this.page.keyboard.press("Enter");
  }

  async currentAddress(addressValue: string): Promise<void> {
    const address = this.page.locator(
      this.locators.DemoQa.currentAddress
    );

    await address.fill(addressValue);

    await expect(address).toHaveValue(addressValue);
  }

  async state(stateValue: string): Promise<void> {
    const state = this.page.locator(
      this.locators.DemoQa.state
    );

    await state.scrollIntoViewIfNeeded();
    await state.click();

    const stateInput = this.page.locator(
      this.locators.DemoQa.stateInput
    );

    await stateInput.fill(stateValue);
    await this.page.keyboard.press("Enter");
  }

  async city(cityValue: string): Promise<void> {
    const city = this.page.locator(
      this.locators.DemoQa.city
    );

    await city.click();

    const cityInput = this.page.locator(
      this.locators.DemoQa.cityInput
    );

    await expect(cityInput).toBeEnabled();

    await cityInput.fill(cityValue);
    await this.page.keyboard.press("Enter");
  }
}
