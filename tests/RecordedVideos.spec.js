//Using configuration is video on

const{test, expect} = require('@playwright/test');

test('Video Recording', async ({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    console.log('video recording along config on ');
    await page.waitForTimeout(2000);
    await expect(page.locator('#logout')).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();
   // page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.jpg'});

    await page.waitForTimeout(2000);
    page.close();
})
