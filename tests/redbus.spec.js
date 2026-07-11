import test, { chromium } from "playwright/test";

test.use({
    storageState: "auth/session.json"
})

test("redbus automation", async({page}) => {
    await page.goto("https://www.redbus.in/");
    await page.waitForTimeout(30000);
    //await page.locator("//button[contains(text(),'Account')]").click();
    //await page.pause();
    // await page.context().storageState({
    //     path: 'auth/session.json'
    // });

});

