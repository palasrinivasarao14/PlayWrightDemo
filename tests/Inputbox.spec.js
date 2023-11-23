const{test, expect} = require('@playwright/test');

test('InputBoxCheck', async ({page}) =>{

    await page.goto('https://demoblaze.com/index.html');

    await page.locator('id=login2').click(); 

    await expect(page.locator("//input[@id='loginusername']")).toBeVisible();
    await expect(page.locator("//input[@id='loginusername']")).toBeEmpty();
    await expect(page.locator("//input[@id='loginusername']")).toBeEditable();
    await expect(page.locator("//input[@id='loginusername']")).toBeEnabled();

    await page.locator("//input[@id='loginusername']").fill('John');
    await page.waitForTimeout(5000);
    await page.close();
})