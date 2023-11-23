const{test, expect} = require('@playwright/test');

test('Dropdowns', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    //multiple options to select dropdowns
   // await page.selectOption('#colors', ['Red', 'Blue', 'Yellow']);

    //Assertions
    //1) Check number of options
  //  const colorsOpts = page.locator('#colors option');
   // console.log('colorsOpts count'+colorsOpts.count());
   // await expect(colorsOpts).toHaveCount(5);

  /*   //2) checking number of options
    const colorsArray = page.$$('#colors option');
    console.log("colorsArray length "+(await colorsArray).length);
    await expect(colorsArray).toBe(5); */

    //3) Presence of option in the drop down
    const colorName = page.locator('#colors').textContent();
    await expect(colorName.includes('Blue')).toBeTruthy();
  
    await page.waitForTimeout(3000);

    page.close();

})