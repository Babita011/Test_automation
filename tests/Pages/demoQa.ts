import { Page, expect } from "@playwright/test";
import DemoQALocators from "../Locators/DemoQALocators.json";

export class DemoQA {
  private Locators = DemoQALocators;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async username() {
    await this.page.getByPlaceholder("First Name").fill("Aakshita");

    await expect(
      this.page.getByPlaceholder("First Name")
    ).toHaveValue("Aakshita");

    await this.page.getByPlaceholder("Last Name").fill("sharma");

    await expect(
      this.page.getByPlaceholder("Last Name")
    ).toHaveValue("sharma");
  }
}
