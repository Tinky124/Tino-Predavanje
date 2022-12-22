console.log("Zadatak 1:");
let ispisdatuma = `Danas je ${Date()}` ;
console.log(ispisdatuma)
console.log("Zadatak 2:");

const json = `{
    "firstName": "John",
    "lastName": "Smith",
    "isAlive": true,
    "age": 27,
    "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
    }
}`;
const obj = JSON.parse(json);
obj.firstName = obj.firstName + " " + obj.lastName;
console.log(obj.firstName);

