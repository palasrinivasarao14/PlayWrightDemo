const {test, expect} = require('@playwright/test');

test('Home Page', async ({page}) =>{
  
  await page.goto('https://demoblaze.com/index.html');

  const pageTitle = page.title();
  console.log('pageTitle :::' + pageTitle);

  await expect(page).toHaveTitle('STORE');

  const pageUrl = page.url();
  console.log("pageUrl :::" + pageUrl);

  await expect(page).toHaveURL('https://demoblaze.com/index.html');

  page.close();

} )

