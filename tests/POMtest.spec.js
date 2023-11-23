const{test, expect} = require('@playwright/test');
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

//////// POM //////////
test('POM', async ({page})=>{

    //Login functionality
    const loginpage = new LoginPage(page);
    await loginpage.gotoLoginPage();
    await loginpage.login('pavanol', 'test@123');
    await page.waitForTimeout(2000);

    //Home page functionality
    const homePage = new HomePage(page);
    await page.waitForTimeout(3000);
    await homePage.addProductToCart('Nexus 6');
    await page.waitForTimeout(2000);
    await homePage.gotCart();
    await page.waitForTimeout(2000);

    //cart page
    const cartPage = new CartPage(page);
    const status = await cartPage.checkProductsInCart('Nexus 6');
    console.log("Status of the product ::", status);
    await page.waitForTimeout(3000);
    expect(await status).toBe(true);

    page.close();
})
