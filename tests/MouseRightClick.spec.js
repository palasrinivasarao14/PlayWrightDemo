const{test, expect} = require('@playwright/test');

test('Mouse Right Click', async ({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const rightButton = await page.locator("//span[@class='context-menu-one btn btn-neutral']");
    await page.waitForTimeout(3000);

    //mouse right click
    await rightButton.click({button:'right'});

    await page.waitForTimeout(5000);
    page.close();

})