import { test, expect } from '@playwright/test';
import users from '../test-data/users.json' with {type:"json"}


for(let user of users){
  test(`test ${user.scenario}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(user.username);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(user.password);
    await page.locator('[data-test="login-button"]').click();
  });
}







