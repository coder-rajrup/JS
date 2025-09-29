// #Primitive Data Types in JavaScript

// const { use } = require("react");

// 7 types of primitive data types in JavaScript:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol (ES6)
// 7. BigInt (ES11)

// const score = 100; // Number
// const scoreValue = 100.5; // Number
// const isLoggedIn = false; // Boolean
// const outsideTemp = null; // Null
// let userEmail; // Undefined
// const id = Symbol("123"); // Symbol
// const anotherId = Symbol("123"); // Symbol
// const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// console.log(typeof bigNumber); // "bigint"
// console.log(typeof id); // "symbol"
// console.log(typeof userEmail); // "undefined"
// console.log(typeof outsideTemp); // "object" (this is a known quirk in JavaScript)
// console.log(typeof isLoggedIn); // "boolean"
// console.log(typeof score); // "number"
// console.log(typeof scoreValue); // "number"
// console.log(id === anotherId); // "false"



// // ## Reference Types(Non-Primitive Data Types)
// // 1. Object
// // 2. Array
// // 3. Function
// // 4. Date
// // 5. Anything else...
// const heros = ["Shaktiman", "Naagraj", "Doga"]; // Array
// let myObj = {
//   name: "Rajrup",
//     age: 26,
//     };
// console.log(typeof heros); // "object"
// console.log(typeof myObj); // "object"

// const myFunc = function() {
//   console.log("Hello World");
// }



// console.log(typeof myFunc); // "object"


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive Data Types) vs Heap (Non-Primitive Data Types)



// let myName = "Rajrup"; // Stored in Stack
// let anotherName = myName; // Stored in Stack
// anotherName = "Kumar"; // Stored in Stack

// console.log( anotherName); 
// console.log(myName); 

let userOne = {
  email: "rajrup@example.com",
  name: "Rajrup",
  age: 26
}; // Stored in Heap

let userTwo = userOne; // Stored in Stack (Reference to the object in Heap)

userTwo.name = "Kumar"; // Modifying the object in Heap

console.log(userTwo.name); 
console.log(userOne.name);
 