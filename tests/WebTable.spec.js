const{test, expect} = require('@playwright/test');
const { table } = require('console');

test('Web table', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    const tableData = await page.locator('#productTable')

    //1) Total rows and columns in a table
    const nocoulmns = await tableData.locator('thead tr th');
    console.log("number of columns::", await nocoulmns.count()); //4
    expect(await nocoulmns.count()).toBe(4);

    const norows = await tableData.locator('tbody tr');
    console.log("number of rows::", await norows.count()); //5
    expect(await norows.count()).toBe(5);

    //2) select check box for select product 4
    // apply the filter to get matched the rows
 /*   const matchedRow = norows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })

    await matchedRow.locator('input').check(); */

    //3) select multiple products
  /*  await selectProduct(norows, page, 'Product 1');
    await selectProduct(norows, page, 'Product 3');
    await selectProduct(norows, page, 'Product 5'); */

    //4) print all the product details
 /*   for(let i=0; i< await norows.count(); i++){ //for loop for trs
        const row = norows.nth(i); // getting single row
        const tds = row.locator('td'); // getting all td in a tr
        for(let j=0; j< await tds.count()-1; j++){
            const tddata = await tds.nth(j).textContent();
            console.log("Td data ::", tddata);
        }
    } */

    //5) read data from all pages 
    const pages = await page.locator('.pagination li a');
    console.log("Pages count ::", await pages.count());

    //for loop to click on particular page and read the data. 1st page need not click
    for(let p=0; p<await pages.count(); p++ ){
        if(p>0){
            pages.nth(p).click();
        }
        for(let i=0; i< await norows.count(); i++){ //for loop for trs
            const row = norows.nth(i); // getting single row
            const tds = row.locator('td'); // getting all td in a tr
            for(let j=0; j< await tds.count()-1; j++){
                const tddata = await tds.nth(j).textContent();
                console.log("Td data ::", tddata);
            } // tds end
        } // trs end
        await page.waitForTimeout(3000);
    } // pages end

    await page.waitForTimeout(3000);
    page.close();

})

async function selectProduct(rows, page, name){
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check();
}