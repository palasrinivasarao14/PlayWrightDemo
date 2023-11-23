const{test, expect} = require('@playwright/test');

test.beforeAll(async()=>{
    console.log('this is before all block');
})

test.afterAll(async()=>{
    console.log('this is after all block');
})

test.beforeEach(async()=>{
    console.log('this is before Each block');
})

test.afterEach(async()=>{
    console.log('this is After Each block');
})

test.describe.skip('Group1', ()=>{
    test('Test1', async ({page})=>{

        console.log('Test 1');
    
    })
    
    test('Test2', async ({page})=>{
    
        console.log('Test 2');
    
    })
})

test.describe('Group2', ()=>{
    test('Test3', async ({page})=>{

        console.log('Test 3');
    
    })
    
    test('Test4', async ({page})=>{
    
        console.log('Test 4');
    
    })
})




