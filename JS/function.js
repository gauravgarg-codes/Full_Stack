//console.log("Hello, World!");// 
// This is a simple JavaScript function that prints "Hello, World!" to the console.
// it will run directly when the script is loaded.
//  but You can also define a function and call it later, like this:// hum abhi nhi chhte ki chle 
// hm chate hai ki jab hm chate hai tab chale
function greet() {     
    console.log("Hello, World!");
}
greet(); // Call the function to execute it

// function declaration
function add(a, b) {
    return a + b;
}
// function expression
let subtract = function(a, b) {
    return a - b;
}
// arrow function
let multiply = (a, b) => {
    a * b;
    console.log(result);
}
// parameters and arguments
// NOW I WANT TO CALL DIFFERENT VALUE EVERY TIME OR DYNAMIC RESULT 
function dance(v1){
    console.log(`${v1} is dancing!`);
}
dance("Alice");
dance("Bob");

function add(a, b) {
    console.log(a + b);
}
add(5, 3); // Output: 8
add(10, 20); // Output: 30

// function with DEFAULT parameters
function greet(name,age) {
    console.log(`Hello, ${name},${age}!`);
}
greet();
// resolve this problem we go with default parameter
function welcome(name = "Guest", age = "unknown"){
    console.log(`Hello, ${name},${age}!`);
}
welcome(); // Output: Hello, Guest, unknown!

// REST parameters
// jab ... parameter space mein use hota hai to wo rest kha jata hai or jab array and object ke sath use hota hai to wo spread kha jata hai
function XYZ(...val){
    console.log(val);
}
XYZ(1, 2, 3); // Output: [1, 2, 3]
XYZ("a", "b", "c"); // Output: ["a", "b", "c"]

// RETURN AND EARLY RETURN
// return statement is used to return a value from a function and it also terminates the function execution.
// return sends data back to the caller and it can be used to return any type of data, including numbers, strings, objects, arrays, etc.
function abcd(v1){
    return 23+v1;
}



let value = abcd(5);
console.log(value); // Output: 28


function checkEven(num) {
    if (num % 2 === 0) {
        return true; // Early return if the number is even
    }
    return false; // Return false if the number is odd
}       
console.log(checkEven(4)); // Output: true
console.log(checkEven(7)); // Output: false

// first class functions --> functions can be used as value.

function firstClassExample(val) {
    console.log("val", val);
}
firstClassExample(function(){
    console.log("This is a first class function example.");
}); // Output: This is a first class function example.
 
// HIGH ORDER FUNCTION --> functions that can take other functions as arguments or return functions as their result.
// ye to hua arguent ke roop mein function lene ka example.
// JAISE UPR WALE EXAMPLE MEIN firstClassExample() is a higher order function because it takes another function as an argument. The function passed as an argument is called a callback function. Higher order functions are a powerful feature of JavaScript and are commonly used in functional programming.
// example of a higher order function that returns a function
function higherOrderExample() {
    return function() {
        console.log("This is a higher order function example.");
}}
let higherOrderFunc = higherOrderExample(); // higherOrderFunc is now a function that can be called
higherOrderFunc(); // Output: This is a higher order function example. 

// PURE & IMPURE FUNCTION

// A pure function is a function that always produces the same output for the same input and has no side effects (it does not modify any external state). An impure function, on the other hand, may produce different outputs for the same input or may have side effects (it modifies external state).
// example of a pure function
function pureFunction(a, b) {       
    return a + b;
}

console.log(pureFunction(2, 3)); // Output: 5

// example of an impure function
let count = 0;  
function impureFunction() {
    count++; // This modifies external state, making it impure
    return count;
}

console.log(impureFunction()); // Output: 1
console.log(impureFunction()); // Output: 

// CLOSURES AND LEXICAL SCOPING: