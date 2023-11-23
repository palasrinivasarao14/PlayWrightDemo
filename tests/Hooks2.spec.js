const{test, expect} = require('@playwright/test');

let page;

test.beforeEach (async ({browser}) =>{
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/index.html');
    //login
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(3000);
});

test.afterEach(async()=>{
    //logout
    await page.getByRole('link', { name: 'Log out' }).click();
    page.close();
})

test('Home Page Test', async ()=>{
    //Home data
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);
    await page.waitForTimeout(2000);
})

test('Add Product to cart', async ()=>{
    //Add product    
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog', async dialog => {
        await expect(dialog.message()).toContain('Product added.');
        await dialog.dismiss();
    })

    await page.waitForTimeout(2000);
})