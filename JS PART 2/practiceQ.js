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
// <b> Updated </b> by javascript
let p=document.querySelector("p");
p.innerHTML = "<b>Updated</b> by javascript";

// HOW TO DO YOU GET THE SRC OF AN IMAGE USING JAVASCRIPT
let img = document.querySelector("img");
console.log(img.src);
//OR
console.log(img.getAttribute("src"));

// what does setAttribute() do?
document.querySelector("img").setAttribute("src","https://images.unsplash.com/photo-1773088843510-277540282242?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8");

// SELECT A LINK AND UPDATE ITS HREF TO POINT TO (https://shreyians.com)
let a = document.querySelector("a");
a.href = "https://www.shreyians.com"

// add a tittle attribute to div dynamically
let div = document.querySelector("div");
div.setAttribute("tittle","some Info");

// remove a disabled attribute from a button

let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// what does createElement() do? what's returned ?

