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
//     a. objects {}
//     b. arrays []
//     c. functions ()
//     d. dates
        // jha value mein brakets dikhe wo non-primitive hota hai --> directly copy nhi kr sakte.
        //    balki uska reference copy hota hai.
// jaise humans are classified in three categories: male feamale and others.


// Primitive data types 

let num = 45; // number.
let b = num;    // a copy of num is created in b. so if we change b, num will not be affected and if we change num, b will not be affected.
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
//-----------------------------😊----------------------------------
        // STRINGS
// STRINGS IN JAVASCRIPT --> Data wrapd in these three literals is said to be string data type.
// '' --> SINGLE QUOTES
// "" --> DOUBLE QUOTES
// `` --> BACKTICKS (TEMPLATE LITERALS)
        // NUMBER
// NUMBER IN JAVASCRIPT --> Data written without quotes is said to be number data type.
// 1234
// -1234
      // BOOLEAN
// BOOLEAN IN JAVASCRIPT --> Data written as true or false is said to be boolean data type.
// true 
// false
        // NULL 
// NULL IN JAVASCRIPT --> Data written as null is said to be null data type.
// null --> APNE jaan boojh kr koi value na dena.
        // UNDEFINED
// UNDEFINED IN JAVASCRIPT --> Data written as undefined is said to be undefined data type.
// undefined --> JAB KISI VARIABLE KO DECLARE KARO BUT USME KOI VALUE ASSIGN NA KARO TOH WO UNDEFINED HOTA HAI.
// let a;  --> a is undefined.--> the by default value given by the browser in this case is undefined. given by js engine.
        // SYMBOL
// SYMBOL IN JAVASCRIPT --> ek unique immutable value create krta hai.
// future mein hum koi liberary use krenge ab is case mein un liberaries mein kai baar kuch fields hoti hai
//      jinse similar hum bhi banna dete hai aur galti se hamari banai hui fields us liberary ki fields ko 
//      overwrite kr deti hai.ya change kar deti hai is problem ko solve krne ke liye symbol use hota hai.
