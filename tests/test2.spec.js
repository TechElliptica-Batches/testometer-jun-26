
import test, { expect }  from "playwright/test";

test.beforeEach( async({page})=>{
    await page.goto("https://www.saucedemo.com",{timeout: 60000});
})

test("My tetscase", async({page}) => {
    // goto = open the page
    // playwright - element locator - 30 sec
    // playwirght - assertion - 5 sec
// locator - placeholder, Label, Title, Role, testid, Text, AltText
// locator = xpath and css selector
    // await page.goto("https://www.saucedemo.com",{timeout: 60000});
    expect(await page.getByPlaceholder("Username")).toBeVisible();
    await page.getByPlaceholder("Username").fill("abcd");
    expect(await page.getByPlaceholder("Password")).toBeVisible();
    await page.getByPlaceholder("Password").fill("abcd");
    expect(await page.locator("[value='Login']")).toBeVisible();
    await page.locator("[value='Login']").click();
    const errorMsg = await page.locator("[data-test='error']").textContent();
    // Assertion - Validation
    // expect(errorMsg).toBe("Epic sadface: Username and password do not match any user in this service");

    expect(await page.locator("[data-test='error']")).toBeVisible({timeout: 10000});
    expect.soft(await page.locator("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");

    // Hard Assertion - next step will not executed
    // Soft Assertion - next step will execute

    // login to application 
    // user profile 
    // firstname, lastname, dob, gender
});

test.only("Valid Credentials login user", async({page}) => {
    // await page.goto("https://www.saucedemo.com",{timeout: 60000});
    expect(await page.getByPlaceholder("Username")).toBeVisible();
    await page.getByPlaceholder("Username").fill("standard_user");
    expect(await page.getByPlaceholder("Password")).toBeVisible();
    await page.getByPlaceholder("Password").fill("secret_sauce");
    expect(await page.locator("[value='Login']")).toBeVisible();
    await page.locator("[value='Login']").click();
    await page.locator("[data-test='product-sort-container']").selectOption({value: "hilo"});
    await page.locator("[data-test='inventory-item']").filter({hasText: "Sauce Labs Fleece Jacket"}).getByText("Add to cart").click();
    await page.locator("[data-test='inventory-item']").filter({hasText: "Sauce Labs Backpack"}).getByText("Add to cart").click();
    await page.waitForTimeout(15000);
    // Alert, multiple windows, 
});


