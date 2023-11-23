const{test, expect} = require('@playwright/test');

test('Handle Inner Frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/website/frames/');

    //total number of frames

    const allFrames = page.frames();
    console.log("number of frames ::", allFrames.length);
    
    // approach one using name or url of the frame   
    const frame3 = await page.frame({url:'https://ui.vision/demo/website/frames/frame_3.html'});
    //await frame3.locator("input[name='my test3']").fill('welcome');

    //nested frames
    const childFrames = await frame3.childFrames();
    await childFrames[0].locator("//*[@id=i5]/div[3]/div").check();


    await page.waitForTimeout(5000);
    page.close();

})