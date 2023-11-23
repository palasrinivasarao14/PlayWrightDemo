const{test, expect} = require('@playwright/test');

test('AutoSuggesstions', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    await page.waitForTimeout(2000);
    await page.locator("//body/div[@id='app']/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[2]/a[1]/span[1]").click();
    

    await page.locator("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();

    // waiting for options 
    await page.waitForTimeout(5000);
    
    const jobtitleOptions  = await page.$$("//div[@role='Listbox']//span");
    console.log("jobtitleOptions", jobtitleOptions.length);

    for(let i=0; i<jobtitleOptions.length; i++){
        const jobName = await jobtitleOptions[i].textContent();
        console.log(jobName);
       
    }
    await page.waitForTimeout(3000);
    page.close();

})