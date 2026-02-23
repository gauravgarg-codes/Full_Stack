// Q. use rest parameter to create a function that takes any number of score and returns their sum.
function getscore(...scores){
let total = 0;
scores.forEach(function(val){
    total=total+val;
});
return total;
}
console.log(getscore(10, 20, 30)); // Output: 60

// Q converted into the early return from if else statement.

function checkEven(num) {
    if (num % 2 === 0) return true; // Early return if the number is even
    return false; // Return false if the number is odd
}
console.log(checkEven(4)); // Output: true
console.log(checkEven(7)); // Output: false 

//Q
function fn(){
    return;
}
console.log(fn()); // Output: undefined

// Q. pass a function into a another function and execute it inside the function.

function abcd(val){
    val(); // Output: hey there

}
abcd(function(){
    console.log("hey there");
}); // Output: hey there


// COUNTER ----> this is the example of closure because the inner function is able to access the variable count which is defined in the outer function even after the outer function has finished executing. 
// Closure allows the inner function to remember and access the variables of its outer function even after the outer function has completed its execution.

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

let c=(counter()); // counter ek nya fnc return karega or yuse hm c mein store krlenge
c(); // ab hm jase hi c ko chalyenge to return wala function chalega or count updated value pr hi hold karpayega 
// ye jo c hai ye ek counter se nikla hua function hai so count apni value hold kr pa rha hai
console.log(c()); // Output: 2
console.log(c()); // Output: 3      
console.log(c()); // Output: 4
// d ka apna alag count hoga because d bhi counter se nikla hua function hai so d apni value hold karega
let d=(counter());
console.log(d()); // Output: 1
console.log(d()); // Output: 2


// Q create a pure function to transfrom a value

function double(val){  // iske andar hum kisi bhi value ko double kar sakte hai because ye ek pure function hai jo ki apne input ke basis par output deta hai without any side effect.
    return val*2;   // aur isme humne kisis external state ko modify nahi kiya hai so ye ek pure function hai.
} // na hmne console inside the function use kiya hai na hi kisi external variable ko modify kiya hai so ye ek pure function hai.
console.log(double(5)); // Output: 10

// use IIFE to isolate variables
(funciton(){
    const password = "secret";
    console.log(password);
})(); // Output: secret
// console.log  
console.log(password); // Output: ReferenceError: password is not defined
// because password variable is not accessible outside the IIFE, it is isolated within the function scope of the IIFE. This helps to prevent naming conflicts and keeps the global scope clean.