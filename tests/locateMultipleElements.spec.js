import {test, expect} from '@playwright/test';

test('locateMultipleElements', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');

  /*  const allLinks = await page.$$('a');
    console.log('Length of the links :::' + allLinks.length);

    for(let i = 0; i < allLinks.length; i++)
    {
        const linktext = await allLinks[i].textContent();      
        console.log('linktext ::' + linktext);
    }
*/
    page.waitForTimeout(3000);
    page.waitForSelector("//div[@id='tbodyid']//div/h4/a");
    const allproducts = await page.$$("//div[@id='tbodyid']//div/h4/a");
    console.log('Length of the products :::' + allproducts.length);
    
    for(let p=0; p < allproducts.length; p++){
        const productName = await allproducts[p].textContent();      
        console.log('productName ::' + productName);
    }
})