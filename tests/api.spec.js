

import test, { expect } from "playwright/test";


test("handling alert @api", async ({request})=>{
    let authEndpoint = "http://localhost:4000/api/auth/login";
    let authResponse = await request.post(authEndpoint,{
       data:{
        "email": "admin@acme.test",
        "password": "admin123"
        }
    });
    expect(await authResponse.status()).toBe(200);
    let json = await authResponse.json();
    let token = json.data.token;

    let userEndpint = "http://localhost:4000/api/users";
    let userResponse = await request.post(userEndpint, {
        headers:{
            "Authorization" : `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        data: {
            "firstName": "Nikita 1",
            "lastName": "Dharmik",
            "email": "Nikita.d@testometer.com",
            "phone": "9876543210",
            "role": "QA",
            "status": "Active"
         }
    });

    expect(await userResponse.status()).toBe(201);
    let userjson = await userResponse.json();
    console.log(userjson);



});

// 1 - Create a user, 
// 2 - get user
// 3 - updtae user
// 4 - get user
// 5 - delete user
// 6 - get user - user not available