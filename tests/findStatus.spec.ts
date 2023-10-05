import{ test, expect } from '@playwright/test';
test("Find status sold", async ({ request, baseURL}) => {

  // creating a post request with user data
  const response = await request.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=sold`);

  // getting and saving the inventory details
  const inventory = await response.json();

  // assert that the api is working as expected
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200); 
  console.log('*****************************************');
  var count = Object.keys(inventory).length;
  console.log('Total Pets: ' + count);
  var pets: [number, string];
  for (let i in inventory) {
    if (i == 0){
        pets = [[inventory[i].id, inventory[i].name]]
    }
    else{
        pets.push([inventory[i].id, inventory[i].name])
    }

  }
  // Let's show all the pets in Json  
  const duplicated = [];
  console.log('*****************************************');

  console.log('**********      Json Pets     **************');
  console.log(pets); 
  console.log('*****************************************');
  
  const seachDuplicatePets = (arr) => {
    const setObj = new Set();
    return pets.reduce((acc, pet) => {
      if (!setObj.has(pet[1])){
        setObj.add(pet[1], pet)
        acc.push(pet)
      }
      else{
        console.log('********* duplicate found(s): ' + pet[1]);
        duplicated.push(pet)
      }
      return acc;
    },[]);
  }

  seachDuplicatePets(pets);

  console.log('********* Duplicated *************');
  console.log("duplicate pets: " + duplicated.length); 

  for (let i in duplicated) {
        console.log('Nombre: ' + duplicated[i][1]);
        console.log('ID: ' + duplicated[i][0]);
  } 
});

