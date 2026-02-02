// Arithmetic, comparison, logical, assignment, unary, ternary

// 1.  +, -, /,  *,  %,  ** --> Arithmetic Operator
// 2. =, ==, ===, !=, !==, >=, <=, >, <  --> Comparison Operator
// 3. =, +=, -=, *=, /=, %= ---> Assignment Operator
    let a = 12;
    a += 3; // a=a+3 and save.
    a -= 11; // a=a-11 and save.
    a *= 2; // multiply current value of a with 2 and save.
    a /= 3; // divide current value of a with 3 and save.
    a %= 3; // remainder of current value of 3 on dividing with 3.
// 4. Logical Operator
// &&--> AndAnd, || -->OrOr, !--> Not
// && ---> true && true // true
// || ---> (true || false // true), (true || true// true)

// 5. Unary Operator [On single value only]

// +, -, !, typeof, ++, --

// TRICK --> if in console we put + before a string which can convert into the number so it will
// "text" so +"text"--> Nan
// "5" so +"5"--> 5 into number.

// 6. ternary Operator
// ?:

// condition ? true hui ka code : false hui ka code

12>13 ? console.log("true"):console.log("false")

// TYPEOF AND INSTANCEOF
// querks in typeof [remember it]
// typeof null --> oobject
// typeof array --> object
// typeof Nan --> number
// NOW TO RESOLVE THESE QUERKS

// a instanceof Array --> true
// b instanceof object -->true

// instanceof --> check the variable is the identity of given type ?-- [always works with refrences not with primitive.]
//-------------------------------------------------PRACTICE------------------------------------------------------------------------//
let x =10;
let y =20;

if (x>5 && y<25){
    console.log("A");// OUTPUT
} else {
    console.log("B");
}
//----------------------------------

let c =10;
let d =5;

if (x>5 || y<25){
    console.log("A");// OUTPUT
} else {
    console.log("B");
}
//---------------------------------

let temp =35;
if(!(temp<30)){
    console.log("hot"); // output
} 
else{
    console.log("pleasent");
}




