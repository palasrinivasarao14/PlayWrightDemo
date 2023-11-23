const{test, expect} = require('@playwright/test');

test('CheckBoxActions', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html');
    //single check box

    await page.locator("//input[@id='monday' and @type='checkbox']").check();
   // await page.check("//input[@id='monday' and @type='checkbox']");
    await expect(page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    await expect(page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
    await page.waitForTimeout(5000);

    await expect(page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();
    await page.waitForTimeout(3000);

    //Mutliple check boxes
    const checkboxesArray = ["//input[@id='monday' and @type='checkbox']", "//input[@id='saturday' and @type='checkbox']",
                                "//input[@id='sunday' and @type='checkbox']"];

    for(const locator of checkboxesArray){
        await page.locator(locator).check();

    }

    // to uncheck the check boxes
    for(const locale1 of checkboxesArray){
        if(await page.locator(locale1).isChecked()){
            await page.locator(locale1).uncheck();
        }
       
    }
})