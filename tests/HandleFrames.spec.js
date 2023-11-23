const{test, expect} = require('@playwright/test');

test.skip('Handle Frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/website/frames/');

    //total number of frames

    const allFrames = page.frames();
    console.log("number of frames ::", allFrames.length);
    
    // approach one using name or url of the frame
    //const frame1 = await page.frame('name')
    //const frame1 = await page.frame({url:'https://ui.vision/demo/website/frames/frame_1.html'});
   // await frame1.fill("[name='my test']", 'Hello');

   //approach 2 - using frame locator
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='my test']");
    await inputbox.fill('Hello');

    await page.waitForTimeout(5000);
    page.close();

})