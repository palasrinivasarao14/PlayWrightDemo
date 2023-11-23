const{test, expect} = require('@playwright/test');

test('BootstrapDropdown', async ({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator("//button[@data-toggle='dropdown']").click();

    //1) 
    const options = await page.locator('ul>li label input')
    await expect(options).toHaveCount(11);
   
  
    await page.waitForTimeout(3000);

    page.close();

})