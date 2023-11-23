//const {test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test'

test('Locators', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');

    // click on login button -- property
    await page.locator('id=login2').click(); 
    
    //alternatively user can click on click method directly
   // await page.click('id=login2');
    
    // provide user name -- as property

   // await page.locator('id=loginusername').fill();
    await page.fill('id=loginusername', 'pavanol');
   // await page.type('id=loginusername'); -- same 

   // Provide password -- as CSS
   await page.fill("input[id='loginpassword']", 'test@123');

   // click on login button -- as xpath
   await page.click("//button[normalize-space()='Log in']");
   await page.waitForTimeout(3000);
   
   //verify login or not
   const logoutLink = await page.locator("id=logout2");
   await expect(logoutLink).toBeVisible();
   await page.close();

})