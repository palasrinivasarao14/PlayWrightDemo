const{test, expect, chromium} = require('@playwright/test');

//////// Handle mmultiple windows/pages //////////
test('Handle pages/windows', async ({page})=>{

    const browser = await chromium.launch();
    const contextTxt = await browser.newContext();

    const page1 = await browser.newPage();
    const page2 = await browser.newPage();

    const allpages = contextTxt.pages();

    console.log("number of pages", allpages.length);

    await page1.goto('https://demoblaze.com/index.html');
    await expect(page1).toHaveTitle("STORE");

    await page2.goto('https://www.orangehrm.com/');
    await expect(page2).toHaveTitle("OrangeHRM HR Software | OrangeHRM");
   // page.close();
})

test.only('Handle mutliple pages/windows', async ({page})=>{

    const browser = await chromium.launch();
    const contextTxt = await browser.newContext();
    const page1 = await browser.newPage();
   
    const allpages = contextTxt.pages();

    console.log("number of pages", allpages.length);
    
    await page1.goto('https://demoblaze.com/index.html');
    await expect(page1).toHaveTitle("STORE");
    await page1.waitForTimeout(3000);
    const pagePRomise = contextTxt.waitForEvent('page');
    await page1.locator('#login2').click();

    const newpage = await pagePRomise;
    await expect(newpage.locator('#logInModalLabel')).toHaveText('Log in');

    await page1.waitForTimeout(2000);
    await newpage.waitForTimeout(2000);
    browser.close();
})