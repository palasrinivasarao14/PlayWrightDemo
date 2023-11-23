const{test, expect} = require('@playwright/test');

test('AutoSuggesstions', async ({page})=>{

    await page.goto('https://www.redbus.in');

    await page.locator('#src').fill('DELHI');
    await page.waitForTimeout(2000);
    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");

    const formcityOptions  = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");
    console.log("formcityOptions", formcityOptions.length);

    for(let i=0; i<formcityOptions.length; i++){
        const cityName = await formcityOptions[i].textContent();
        console.log(cityName);
        if(cityName.includes('Badarpur')){
            await cityName.click();
            break;
        }
    }
    await page.waitForTimeout(3000);
    page.close();

})