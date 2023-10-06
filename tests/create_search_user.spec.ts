import{ test, expect } from '@playwright/test';
test("Create a new user", async ({ request, baseURL}) => {

  // creating a post request with user data
  const response = await request.post(`${baseURL}user`, {
    data : {
      "id": 0,
      "username": "Abir",
      "firstName": "Aleks",
      "lastName": "Birchler",
      "email": "Aleks@mailfake.com",
      "password": "Aleks@123",
      "phone": "8080808080",
      "userStatus": 0
    },
  });
  // getting the response and fetching user id
  const result = await response.json();
  const userID = result.message;

  // assert that the api is working as expected
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200); 
});

test("Search user", async ({ request, baseURL}) => {
    // request existing user
    const response = await request.get(`${baseURL}user/Abir`);
  
    // getting the response and fetching user id
    const result = await response.json();
    const userID = result.message;
  
    // assert that the api is working as expected
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200); 
    });