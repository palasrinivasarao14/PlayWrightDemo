const { test, expect } = require("@playwright/test");

test('Assertions', async ({page})=>{

    //open page url
    await page.goto('https://demo.nopcommerce.com/register');

    //expect page url 
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //await expect(page).toHaveTitle()	Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //await expect(locator).toBeVisible()	Element is visible
    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    // enable assertion
    const enableElement = await page.locator('#small-searchterms');
    await expect(enableElement).toBeEnabled();

    //radio buttons are checked or not
    const radioButton = await page.locator('#gender-male');
    await radioButton.click();
    await expect(radioButton).toBeChecked();

     //Check box are checked or not
     const newcheckbox = await page.locator('#NewsLetter');    
     await expect(newcheckbox).toBeChecked();

     await expect(page.locator('.page-title h1')).toHaveText('Register');
     await expect(page.locator('.page-title h1')).toContainText('Regi');

})