const{test, expect} = require('@playwright/test');

test.skip('Single file', async ({page})=>{

    await page.goto('https://www.foundit.in/');
    
    await page.locator('.mqfihd-upload').click();
    await page.waitForTimeout(3000);

    await page.locator('#file-upload').setInputFiles('tests/UploadFiles/Test1.pdf');

    await page.waitForTimeout(5000);
    page.close();

})

test('Multiple files upload', async ({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.waitForTimeout(3000);
    
    await page.locator('#filesToUpload').setInputFiles(['tests/UploadFiles/Test1.pdf', 'tests/UploadFiles/Test2.pdf']);
    await page.waitForTimeout(3000);
    expect(page.locator('#fileList li:nth-child(1)')).toHaveText('Test1.pdf');
    expect(page.locator('#fileList li:nth-child(2)')).toHaveText('Test2.pdf');

    await page.waitForTimeout(3000);
    //remove the files
    await page.locator('#filesToUpload').setInputFiles([]);
    expect(page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
    
    await page.waitForTimeout(5000);
    page.close();

})