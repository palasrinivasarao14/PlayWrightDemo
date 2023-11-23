const{test, expect} = require('@playwright/test');

test.skip('Alert with OK', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    //enabling alert dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        await page.waitForTimeout(3000);
        expect(dialog.message()).toContain('I am an alert box');
        await dialog.accept();
    })

    await page.click("//button[normalize-space()='Alert']");
    
    await page.waitForTimeout(5000);
    page.close();

})

test.skip('Alert with Confirm', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    //enabling confirm dialog window handler
        page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        await page.waitForTimeout(3000);
        expect(dialog.message()).toContain('Press a button');
        await dialog.accept(); // accepting by Ok button
       // await dialog.dismiss(); //accepting by Cancel button
    })

    await page.click("//button[normalize-space()='Confirm Box']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);
    page.close();

})

test('Alert with Prompt', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    //enabling confirm dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        await page.waitForTimeout(3000);
        expect(dialog.message()).toContain('Please enter your name');
        await expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('John'); // accepting by giving the vale
    })

    await page.click("//button[normalize-space()='Prompt']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');
    await page.waitForTimeout(5000);
    page.close();

})