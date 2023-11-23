const{test, expect} = require('@playwright/test');

//////// Reporters //////////
test('test1', async ({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');

    await page.waitForTimeout(3000);
    page.close();
})

test('test2', async ({page})=>{
    await page.goto('https://demo.opencart.com');
    await expect(page).toHaveTitle('Your Store');

    await page.waitForTimeout(3000);
    page.close();
})

test('test3', async ({page})=>{
    await page.goto('https://demo.nopcommerce.com');
    await expect(page).toHaveTitle('nopCommerce demo store');

    await page.waitForTimeout(3000);
    page.close();
})
