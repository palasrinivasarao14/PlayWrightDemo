const{test, expect} = require('@playwright/test');

test('Drag And Drop', async ({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const sourceRome = await page.locator("#box6");
    await page.waitForTimeout(3000);
    const targetItely = await page.locator("#box106");
    await page.waitForTimeout(3000);

    //Approach 1
    await sourceRome.hover();
    await page.mouse.down();
    await targetItely.hover();
    await page.mouse.up(); 

    //Approch 2
    const washton = await page.locator('#box3');
    const usa = await page.locator('#box103');    
    await washton.dragTo(usa);

    await page.waitForTimeout(5000);
    page.close();

})