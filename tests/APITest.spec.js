const{test, expect} = require('@playwright/test');

var userId;
//////// API Testing //////////
test('Get users', async ({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('Create User', async ({request})=>{
    const response = await request.post('https://reqres.in/api/users', 
                {
                    data:{"name": "Spala","job": "Trainer"},
                    headers:{"Accept":"application/json"}
                });
    console.log(await response.json());
    expect(response.status()).toBe(201);
    const res = response.json();
    userId = res.id;
    console.log("user id::", userId);
})

test('Update User', async ({request})=>{
    const response = await request.post('https://reqres.in/api/users/'+userId, 
                {
                    data:{"name": "Spala","job": "Engineer"},
                    headers:{"Accept":"application/json"}
                });
    console.log(await response.json());
    expect(response.status()).toBe(201);   
})

test('Delete User', async ({request})=>{
    const response = await request.delete('https://reqres.in/api/users/'+userId);
    expect(response.status()).toBe(204);   
})
