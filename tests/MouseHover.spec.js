const{test, expect} = require('@playwright/test');

test('Mouse Hover', async ({page})=>{

    await page.goto('https://demo.opencart.com/');

    const desktops = await page.locator("//a[normalize-space()='Desktops']");
    const macbooks = await page.locator("//a[normalize-space()='Mac (1)']");
    await page.waitForTimeout(3000);
    //mouse hover
    await desktops.hover();
    await page.waitForTimeout(2000);
    await macbooks.hover();

    await page.waitForTimeout(5000);
    page.close();

})
