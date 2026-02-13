// predict the results of the following code snippets: true+false, null+1, 5+"5",!!undefined 
console.log(true + false); // 1 (true is 1, false is 0)
console.log(null + 1); // 1 (null is treated as 0)
console.log(5 + "5"); // "55" (number is converted to string and concatenated)
console.log(!!undefined); // false (undefined is falsy, so !undefined is true, and !!undefined is false)


// explain the difference between == and === in JavaScript

// == checks for equality of value after type coercion, while === checks for equality of both value and type without type coercion.

console.log(5 == "5"); // true (values are equal after type coercion)
console.log(5 === "5"); // false (different types: number vs string)
// what will be the output of the following code and why: console.log(typeof NaN);
console.log(typeof NaN); // "number" (NaN is considered a special numeric value in JavaScript) 


// PRACTICE QUESTION OF LOOPS

// 01. print numbers from 1 to 10 using a for loop

for(let i=1; i<11; i++){
    console.log(i)
}

// 02. print number from 10 to 1 using a while loop.

let i=10;
while(i>0){
    console.log(i);
    i--;
}
// OR
for(let i=10; i>0; i--){
    console.log(i);
}

// 03. PRINT EVEN NUMBERS FROM 1 TO 20 USING A FOR LOOP

// my code
 /* for(let i=2; i<21; i=i+2){
    console.log(i);
 } */
// sir code
 for(let i=1; i<21; i++){
    if(i%2 === 0){
    console.log(i);
    }
 }

// 04. PRINT ODD NUMBERS FROM 1 TO 15 USING A WHILE LOOP.

let m=1;    
while(m<16){
    if(m%2===1){
        console.log(m);
    }
    m++;
}

// 05. PRINT THE MULTIPLICATION TABLE OF 5(i.e., 5x1=5, 5x2=10......5x10=50)
    for(let i=1;i<11; i++){
        console.log(`5 x ${i} = ${5*i}`);
    }

// 06. FIND THE SUM OF THE NUMBERS FROM 1 TO 100 USING A LOOP.
    let sum = 0;
    for(let i=1;i<101; i++){
        sum=sum+i;
    }
    console.log(sum);

// 07. PRINT ALL NUMBERS BETWEEN 1 TO 50 THAT ARE DIVISIBLE BY 3.

    for(let i=1; i<51; i++){
        if(i%3===0){
            console.log(i)
        }
    }
// 08. 











