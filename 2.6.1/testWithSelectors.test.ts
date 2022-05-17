import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.css('[name="hdrInput"]');
    const mkeInput: By = By.css('[name="mkeInput"]');
    const oaiInput: By = By.css('[name="oriInput"]');
    const nameInput: By = By.css('[name="namInput"]');
    const clrBtn: By = By.css('[id="clearBtn"]');
    const submitBtn: By = By.css('[id="saveBtn"]');
    //this next line did not work in the test run
    const errorMsg: By = By.xpath('//input[@id="validHeader"]');

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Lorem Ipsum")
        await driver.findElement(mkeInput).sendKeys("Test Data")
        await driver.findElement(oaiInput).sendKeys("Testerton McTestFace")
        await driver.findElement(nameInput).sendKeys("Testie McTestFace")
        await driver.findElement(submitBtn).click()
       // expect(errorMsg).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    })
})