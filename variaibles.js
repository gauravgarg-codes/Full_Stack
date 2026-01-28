// //var this variable exist till the program ends
// var num = (23*12-89)*122; // this will store this value in num till the program ends
// //declaration and intialization of variables
// let b = 45; // this variable exist till the block ends
// const pi = 3.14; // this variable exist till the program ends and its value cannot be changed
// // this above all is declare and intialization of variables in javascript

// var a = 12; 
// // ye apne ko window mein add karta hai
// // function scope hota hai
// // app firse declare kar sakte ho  same name se and error nhi aayega

// function abcd{
//     if(true){
//         var a = 34; // other programming languages mein ye just scoped hota hai but in js ye function scoped hota hai.
//     }
// }
// // SCOPE
// //funciton ke andar koi variable declare kiya toh wo function ke bahar access nhi hoga
// //   function(){
// //       let/const/var a = 23;}
// // block ke andar koi variable declare kiya toh wo block ke bahar access nhi hoga
// //   block ko let and const respect krte hai but var nhi krta
// //   {
// //       let/const a = 23; var b = 45;}
// // global scope
// // jo variable function aur block ke bahar declare kiya jata hai wo
// // global scope hota hai jo pura program mein access hota hai.
 
// // REASSIGNMENT AND REDECLARATION
// // var can be reassigned and redeclared
// // let can be reassigned but cannot be redeclared
// // const cannot be reassigned and cannot be redeclared

// var a = 12;
// a=32; // valid

// let b = 45;
// b=67; // valid ----> this is reassignment

// // let b = 89; // invalid ---> this is redeclaration

// const pi = 3.14;
// pi=3.15; // invalid
// // const pi = 3.1415; // invalid

// // TEMPORAL DEAD ZONE ---> utna area jitne mein js ko variable ke existence ka pata nhi hota pr wo apko value nhi de sakta
// // ye sirf let and const ke sath hota hai var ke sath nhi hota
 
// console.log(b); // invalid
// let b = 34;   --->

// // let a = 12;
// // console.log(a); ---> valid

// console.log(c);
// var c=45;  ---> valid

// HOISTING

// jab ap variable ko use krte ho usse pehle declare krte ho toh js apke variable ko upar le jata hai
//      ye sirf var ke sath hota hai let and const ke sath nhi hota ---> but kuch log mante hai ki 
//       ye let and const ke sath bhi hota hai but wo temporal dead zone mein hota hai isliye apko value nhi de pata
// mtlb--> jab js mein var-->variable banate hai to variable do hisso mein tut jata hai declare part upr chla jata hia
//          aur initialization wala part wahi rehta hai jaha apne likha hota hai

var a = 12;
{
    var a = 34;
}
console.log(a); // output will be 34 because dono var same variable hai mtlb ek hi variable ko do baar assign kiya hai

let b=23;
{
    let b=45;
    console.log("inside", b);
}   
console.log("outside", b); // output will be 23 because dono let alag alag variable hai mtlb block ke andar wala let block ke bahar access nhi hoga
 // output will be 45
 
// dated: 28jan2026

// confusion no.1

// why var leaks the block
// var is function scoped not block scoped
// block scoped means jo variable block ke andar declare kiya jata hai wo block ke bahar access nhi hota
// function scoped means jo variable function ke andar declare kiya jata hai wo function ke bahar access nhi hota jaise "let".

if (true){
    var x = 10; // var is function scoped
    let y = 20; // let is block scoped
}
    console.log(x); // 10
    // console.log(y); // ReferenceError: y is not defined

// confusion no.2 
    // why const allows object properties to be changed.
    const person ={ name: "harsh"};
    person.name = "harshit"; // we can change the properties of the object
    person = {}; // we cannot reassign the object

    // = ka use krke app const mein new value assign nhi kr sakte ho but app object ke andar ki properties ko change kr sakte ho.
    // now if you want that the object properties should not be changed then you can use Object.freeze() method.




