// use querySelectorAll to select all buttons with class "buy-now "
let buynow=document.querySelectorAll(".buy-now");
console.log(buynow);

// TASK NO.: 01
// Select the heading of a page by ID and change its to "welcome to shreyians!"
    let heading=document.querySelector("#heading");
    heading.textContent="wlcome to shreyiansh!";

// select all <li> elements and print their text using a loop

let lis = document.querySelectorAll("li");
lis.forEach(function(val){
    console.log(val.textContent);
});
// OR
let liss = document.querySelectorAll("li");
for(let i=0; i < liss.length; i++){
    console.log(liss[i].textContent);
}

// what is the difference between innerText, textContent, and innerHMTL ?

// TASK 03.
// SELECT A PARAGRAPH AND REPLACE ITS CONTENT WITH:
// 

