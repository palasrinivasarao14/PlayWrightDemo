//Using configuration is on

const{test, expect} = require('@playwright/test');

test('Page Screen shot', async ({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    console.log('Page Screen shot along config on ');
   // page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.jpg'});

    await page.waitForTimeout(2000);
    page.close();
})
