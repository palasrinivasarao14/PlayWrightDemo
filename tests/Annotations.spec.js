const{test, expect} = require('@playwright/test');

//only is used to run particular annotations 
test.skip('Annotations1', async ({page})=>{
    
    console.log("this is Annotations 11");
    
})

// skip will not execute
test.skip('Annotations2', async ({page})=>{
    
    console.log("this is Annotations 22");
    
})

// skip based on conditions
test.skip('Annotations3', async ({page, browserName})=>{
    
    console.log("this is Annotations 33");
    if(browserName=='chromium'){
        test.skip();
    }
    
})

//Fixme 
test('Annotations4', async ({page})=>{
    test.fixme();
    console.log("this is Annotations 44");
})

//Fail 
test.skip('Annotations5', async ({page})=>{
    test.fail(); //exp
    console.log("this is Annotations 55");
   // expect(1).toBe(1); //actual
    expect(1).toBe(2); //actual
})

//Fail based on condition 
test.skip('Annotations6', async ({page, browserName})=>{
    console.log("this is Annotations 66");
    if(browserName=='firefox'){
        test.fail();
    }
})

//slow -- we can increase the time out to 3 times
test('Annotations7', async ({page})=>{   
    test.slow();
    //test.setTimeout(5000);
    await page.goto('https://demoblaze.com/index.html');
    console.log("this is Annotations 77");
    page.close();
})

