const{test, expect} = require('@playwright/test');

test('Date Picker', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    //1) date as input tag
   // await page.locator('#datepicker').fill('06/15/2024');

    //2) Direct adding the date with logic
    const year = "2024";
    const month = "March";
    const day = "20";
    await page.click('#datepicker');

    while(true){
        const currentMonth = await page.locator('.ui-datepicker-month').textContent(); //get the current month
        const currentYear = await page.locator('.ui-datepicker-year').textContent(); // get the current year

        if(currentYear == year && currentMonth == month){
            break;
        }
        await page.click('[title="Next"]'); // Next year
      //  await page.click('[title="Prev"]'); // Previous year
    }

    //now select the date from the expected year and month by using loop
 /*   const dates = page.$$("//a[@class='ui-state-default']");
    for(let i=0; i< (await dates).length; i++){

        if(await dates[i].textContent()==day){
            await dates[i].click();
            break;
        }
    } */
    //date select without loop
    await page.click(`//a[@class='ui-state-default'][text()='${day}']`)

    await page.waitForTimeout(5000);
    page.close();

})