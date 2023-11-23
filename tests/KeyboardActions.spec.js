const{test, expect} = require('@playwright/test');

test('Key board actions', async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

   //await page.locator('name="text1"').fill('Welcome to automation')
   await page.type('[name="text1"]', 'Welcome to automation');
   // Ctrl+A -- Select the text
   await page.keyboard.press('Control+A');

   // Ctrl+C -- copy the text, Tab, 
   await page.keyboard.press('Control+C');

   // Tab -- tab the key hold
   await page.keyboard.down('Tab');

   // Tab -- tab the key release
   await page.keyboard.up('Tab');

   //Ctrl+V -- paste the text
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);
    page.close();

})