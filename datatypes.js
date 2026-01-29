// datatypes.js
// data ka types ---😊


// 1. Primitive data types
//  ---> aisi saari values jinko copy karne par tumhe ek real copy milti hai
//     a. number
//     b. string        
//     c. boolean
//     d. undefined
//     e. null
//     f. symbol
//     g. bigint
// 2. Non-primitive data types
//  ---> aisi saari values jinko copy karne par tumhe ek reference milta hai asli value (parent) ka
//     a. objects
//     b. arrays
//     c. functions
//     d. dates
// jaise humans are classified in three categories: male feamale and others.
// Primitive data types 
let num = 45; // number.
let b = num;    // a copy of num is created in b. so if we change b, num will not be affected.
// and if we change num, b will not be affected.
let str = "Hello, World!"; // string
let bool = true; // boolean
let undef; // undefined
let nul = null; // null
let sym = Symbol('sym'); // symbol
let bigIntNum = 9007199254741991n; // bigint            
// Non-primitive data types
let obj = { name: "Alice", age: 30 }; // object 
let arr = [1, 2, 3, 4, 5]; // array
function greet() { // function
    console.log("Hello!");
}       
let date = new Date(); // date



