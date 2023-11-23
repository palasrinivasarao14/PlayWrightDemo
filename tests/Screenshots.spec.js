const{test, expect} = require('@playwright/test');

test('Page Screen shot', async ({page})=>{
    await page.goto('https://demo.opencart.com/');
   // await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(3000);
    console.log('Page Screen shot');
    page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.jpg'});

    await page.waitForTimeout(2000);
    page.close();
})

test('Full page Screen shot', async ({page})=>{
    //await page.goto('https://demo.opencart.com/');
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(3000);
    console.log('Full page Screen shot');
    page.screenshot({path:'tests/screenshots/'+Date.now()+'Fullpage.jpg', fullPage:true});

    await page.waitForTimeout(2000);
    page.close();
})

test.only('Element Screen shot', async ({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(3000);
    console.log('Element Screen shot');
    page.locator("//body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[1]").screenshot({path:'tests/screenshots/'+Date.now()+'elementScreenshot.jpg', });
   
    await page.waitForTimeout(2000);
    page.close();
})