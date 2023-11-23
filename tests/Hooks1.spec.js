const{test, expect} = require('@playwright/test');

test('Home Page Test', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html');
    //login
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();

    //Home data
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);

    await page.getByRole('link', { name: 'Log out' }).click();
    //logout
    await page.waitForTimeout(5000);
    page.close();

})

test('Add Product to cart', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html');
    //login
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();

    //Add product    
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog', async dialog => {
        await expect(dialog.message()).toContain('Product added.');
        await dialog.dismiss();
    })

    //logout
    await page.getByRole('link', { name: 'Log out' }).click();
    
    await page.waitForTimeout(5000);
    page.close();

})