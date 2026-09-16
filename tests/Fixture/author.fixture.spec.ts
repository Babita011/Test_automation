import { test as base, expect } from "@playwright/test";

type AuthorFixture = {
  author: string;
};

export const test = base.extend<AuthorFixture>({
  author: async ({}, use) => {
    console.log("Setting up Author Fixture");

    await use("Babita Thakur");

    console.log("Tearing down Author Fixture");
  },
});

export { expect };