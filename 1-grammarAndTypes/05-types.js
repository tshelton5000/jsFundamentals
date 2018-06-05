//Types

//Booleans
var bool = true;
console.log(bool);

let noBool = false;
console.log(noBool);

//null
var empty = null;
console.log(empty);

//Undefined
let grass;
console.log(typeof grass);

//numbers
var degrees = 90;
console.log(`It is currently ${degrees} degrees.`);

var precise = 999999999999999;
console.log(precise);

var rounded = 9999999999999999;
console.log(rounded);

console.log(0.2+0.1);

//strings
let stringone = "double quotes";
let stringtwo = 'single quotes';
console.log(stringone, stringtwo);

//numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first, second);

let third = '100' + 1050;
console.log(third);

var firstName = 'Tyler';
var lastName = 'Shelton';
var houseNumber = 5132;
var aptNumber = 'N/A';
var street = 'Rosslyn Avenue';
var city = 'Indianapolis';
var state = 'IN';
var zipcode = 46205;

console.log(firstName, lastName, houseNumber, aptNumber, street, city, state, zipcode);

//objects
let burritoNow = {
    size: 'large',
    quantity: 4,
    now: true
};

console.log(typeof burritoNow.now);

//arrays
var burritos = ['large', 4, true];
console.log(burritos);