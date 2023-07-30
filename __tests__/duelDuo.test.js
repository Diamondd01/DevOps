const { Builder, Browser, By, until } = require("selenium-webdriver");
const assert = require("assert");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.EDGE).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});


test("clicking the Draw button displays the div with id = 'choices'", async () => {
  await driver.get("http://localhost:8000");

  // Find the Draw button and click it
  const drawButton = await driver.findElement(By.id("draw-button"));
  await drawButton.click();

  // Wait for the 'choices' div to be displayed
  await driver.wait(until.elementLocated(By.id("choices")), 1000);

  // Assert that the 'choices' div is displayed
  const choicesDiv = await driver.findElement(By.id("choices"));
  assert.strictEqual(await choicesDiv.isDisplayed(), true);
});

test("clicking an 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
  await driver.get("http://localhost:8000");

  // Find the first 'Add to Duo' button and click it
  const addToDuoButton = await driver.findElement(By.css(".add-to-duo-button"));
  await addToDuoButton.click();

  // Wait for the 'player-duo' div to be displayed
  await driver.wait(until.elementLocated(By.id("player-duo")), 1000);

  // Assert that the 'player-duo' div is displayed
  const playerDuoDiv = await driver.findElement(By.id("player-duo"));
  assert.strictEqual(await playerDuoDiv.isDisplayed(), true);
});