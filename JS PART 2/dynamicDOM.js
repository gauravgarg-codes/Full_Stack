// let h1 = document.createElement("h1");
// h1.textContent = "bye bye kaise ho?"; // nhi aya screen pe
// document.body.append(h1); // ab aya screen pe
// document.body.prepend(h1); // ab aya screen pe but upar chala gaya
// // phele create karo then append karo ya prepend karo ja bhi chahiye element ko
// // append krne pr script ke baad aayega element
// // prepend krne pr script ke pehle aayega element

// // create karo ---> append karo/prepend karo

// document.createElement("h2"); // create kr diya element but screen pe nhi aya
// let h2 = document.createElement("h2");
// h2.textContent = "Hello, I am h2!";
// document.body.append(h2);
// // another way to add created element to the DOM or body.
// document.querySelector("body").prepend(h2); // h2 ko upar le aaya.

// //h1.remove(); // it will remove the element from the dom or body

// let h3 = document.createElement("h3");
// h3.textContent = "jey mein bhar hu";

// document.querySelector("div").appendChild(h3) // due this h3 element added to div element and shown up on the screen and body.
// // if i do prepend and append so it will not added to div but added to the body.

// // style manipulation using js---> js se css badalna


// let h1=document.querySelector("h1");
// console.dir(h1);
// h1.style.color ="red";
// console.dir("h1");
// h1.style.backgroundColor = "pink";
// h1.style.fontFamily = "Gilroy";
// h1.style.textTransform ="capitalize";

// ABB JS KI HELP SE KISI ELEMENT PE CLASS HATAYE YA LAGAYE KAISE

let h1=document.querySelector("h1");
console.dir(h1);
// isme classlist mein abcd class hai 
// ek method hai (or hn jab bhi method bole to brakets lga do)
h1.classList.add("abcd")

