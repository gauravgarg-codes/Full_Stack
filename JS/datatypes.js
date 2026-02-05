 // DATATYPES IN JAVASCRIPT
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
let s = num;    // a copy of num is created in b. so if we change b, num will not be affected and if we change num, b will not be affected.
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
let shreyjs = {
        uid: 12,
        model:"harsh"
}
shreyjs.uid = 1;// overwriting the uid field.

// to avoid this problem we use symbol.
let uid = Symbol("uid");
let shreyjs2 = {
        [uid]: 12,
        model:"harsh"
}
      //BigInt
// BigInt IN JAVASCRIPT --> ek aisa data type jo bahut bade numbers ko represent kr sakta hai.
// normally javascript mein hum max 2^53 -1 tak ke numbers ko hi represent kr sakte hai.
let bigIntNumber = BigInt(123456789012345678901234567890); // using BigInt function
let bigIntNumber2 = 123456789012345678901234567890n; // using 'n' at the end 

//-----------------------------😊----------------------------------
                 // REFERENCE DATA TYPES---> = KE BAAD BRACKETS AA JATE HAIN
        // ARRAYS 
    let a = [1,2,3]; // array
    let b = a; // b is a reference to a
    b.pop(); // removing last element from b
    console.log(a); // a is also affected because b is a reference to a
    console.log(b); // b is also affected because b is a reference to a
        // OBJECTS
    let c ={
        name:"shrey",
    }   
    let d = c; // b is a reference to a
    b.name = "harsh";   // changing name property of b and this also makes changes in a because b is a reference to a.
    // and same happens for functions.

    // DYNAMIC TYPING IN JAVASCRIPT'

    // javascript is a dynamically typed language NOT A STATICALLY TYPED LANGUAGE.
    // iska matlab hai ki hum ek variable ko declare krne ke baad usme kisi bhi type ki value assign kar sakte hai(data ko change kr sakte hai)
        let data = 45; // data is a number              
        data = "Hello, World!"; // now data is a string
        data = true; // now data is a boolean
        data = { name: "Alice", age: 30 }; // now data is an object
        data = [1, 2, 3, 4, 5]; // now data is an array
        data = function() { console.log("Hello!"); }; // now data is a function
        data = null; // now data is null
        data = undefined; // now data is undefined
        data = Symbol('sym'); // now data is a symbol
        data = 9007199254741991n; // now data is a bigint
   // isliye javascript mein type checking karna thoda mushkil hota hai kyuki ek variable mein alag alag types ki values aa sakti hai.
                // static is better than dynamic typing. type checking easy hota hai.

   // typeof quirks (e.g. typeof null === "object")
    typeof NaN;
    typeof null;
    typeof "hello";
    typeof 123;
    typeof true;
    // some precision error in float numbers operations
        0.1 + 0.2 === 0.3; // false
        0.1 + 0.2; // 0.30000000000000004

// type coercion --> concept jisme javascript automatically ek type ko dusre type mein convert kar deta hai.
    let x = "5";
    let y = 1;
        console.log(x + y); // 510 (string concatenation) // this is type coercion
        console.log(Number(x) + y); // 15 (type conversion)
        console.log(x-2); // 4 (type coercion)

// Truthy and falsy values
// falsy values --> false, 0, -0, 0n, "", null, undefined, NaN   rest all are truthy values.
        if(12){
                console.log("This is truthy");
        }



        