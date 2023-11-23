import {test, expect} from '@playwright/test'

test('SfotAssertions', async ({page}) =>{

    await page.goto('https://demoblaze.com/index.html');

    //hard assertions
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await expect(page.locator('.navbar-brand')).toBeVisible();

    //soft assertions
    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
})