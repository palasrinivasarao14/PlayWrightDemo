const{test, expect} = require('@playwright/test');

test('Dropdowns', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    //multiple ways to select dropdowns
    //await page.locator('#country').selectOption({label:'India'}); // Lable visible text
    // await page.locator('#country').selectOption('India'); // visible text
   // await page.locator('#country').selectOption({value:'uk'}); // based on value
    //await page.locator('#country').selectOption({index:2}); // based on index
   // await page.selectOption('#country', 'India'); // based on text

    //assertions we can use on dropdowns
    //1) check number of options
   // const options = page.locator('#country option');
   // console.log('Options count'+options.count());
  //  await expect(options).toHaveCount(10);

    //2) checking number of options
  //  const optionsArray = page.$$('#country option');
    //console.log("Options length "+(await optionsArray).length);
    //await expect(optionsArray).toBe(10);

    //3) Check the option is presence or not -- approach 1
   // const content = page.locator('#country');
   // await expect(content.includes('India')).toBeTruthy();

   //4) presence of value in the dropdown -- approach 2
   const optionsArray = page.$$('#country option');
   console.log("optionsArray length "+(await optionsArray).length);
   let status = false;
  
   for(let p=0; p < (await optionsArray).length; p++){
        const countryName = await optionsArray[p].textContent();      
        console.log('countryName ::' + countryName);
        if(countryName.includes('France')){
            status = true;
            break;
        }
    }
    await expect(status).toBeTruthy();

    await page.waitForTimeout(3000);

})