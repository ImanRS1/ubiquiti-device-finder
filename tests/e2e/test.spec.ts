import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ubiquiti-device-finder.vercel.app/");

  await page.getByRole("link", { name: "airCube airMAX airCube" }).click();
  await page.getByRole("link", { name: "A back icon" }).click();
  await page.getByRole("button", { name: "Filter" }).click();
  await page.locator("label").filter({ hasText: "UniFi Talk" }).click();
  await page.getByRole("button", { name: "A close icon" }).click();
  await page
    .getByRole("link", { name: "UniFi VoIP Phone UniFi Talk UniFi VoIP Phone" })
    .click();
  await page.getByRole("link", { name: "A back icon" }).click();
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("touch max");
  await page
    .getByRole("link", { name: "Phone Touch Max UniFi Talk Phone Touch Max" })
    .click();
  await page.getByRole("link", { name: "A back icon" }).click();
  await page.getByRole("button", { name: "Ubiquiti logo" }).click();
  await page
    .getByRole("link", { name: "airFiber 24HD AirFiber airFiber 24HD" })
    .click();
  await page.getByRole("button", { name: "Ubiquiti logo" }).click();
  await page.getByRole("link", { name: "A back icon" }).click();
  await page.getByRole("button", { name: "Grid display symbol" }).click();
  await page.getByRole("button", { name: "Filter" }).click();
  await page.locator("label").filter({ hasText: "UISP" }).click();
  await page.locator("label").filter({ hasText: "UFiber" }).click();
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("instant");
  await page
    .getByRole("link", { name: "UFiber Instant UFiber Instant UFiber" })
    .click();
  await page.getByRole("link", { name: "A back icon" }).click();
  await page.getByRole("button", { name: "A close icon" }).click();
  await page.getByRole("button", { name: "Ubiquiti logo" }).click();
  await page.getByRole("link", { name: "NanoSwitch UniFi NanoSwitch" }).click();
  await page.getByRole("button", { name: "Ubiquiti logo" }).click();
  await page.getByRole("link", { name: "A back icon" }).click();
});
