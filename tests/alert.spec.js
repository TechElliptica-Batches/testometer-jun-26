import test, { chromium } from "playwright/test";


test("handling alert", async ({page})=>{
    await page.goto("file:///Users/vaibhavsingh/Desktop/techelliptica-batches/testometer-jun-26/html/test1.html")

// Trigger one event
    let alertWaitingProcess = page.waitForEvent("dialog");
    await page.getByText(" click me for alert ").click(); 
    let alert = await alertWaitingProcess;
    console.log(await alert.message());
    await alert.accept(); // ok
    // dismiss // cancel
    //await alert.dismiss();
//    await page.getByText("Amazon Page").click();
    //await page.waitForTimeout(5000);

});

test("handling window @windowtest", async ({page})=>{
    await page.goto("file:///Users/vaibhavsingh/Desktop/techelliptica-batches/testometer-jun-26/html/test1.html")

// Trigger one event
    let newWindowWaitingProcess = page.waitForEvent("popup");
    await page.getByText("Amazon Page").click();
    let newWindow = await newWindowWaitingProcess;
    await page.waitForTimeout(2000);
    console.log(await newWindow.title());
    await newWindow.getByPlaceholder("Search Amazon").fill("Phone");
    await newWindow.getByPlaceholder("Search Amazon").press("Enter");
    await page.waitForTimeout(5000);
    // dismiss // cancel
    //await alert.dismiss();

    //await page.waitForTimeout(5000);
});

// OTP validation , captha validation
// qa, dev, 
// 1 - by pass these actions - 5%
// 2 - always same - 95%

// login with microsoft 
// login with sso
// login with 

// session details - cokkies, cache
// token, session cache , 
// save - session loading process 

// playwright - save session details and you can load that session again




// Jenkins - schudular 
// window-

