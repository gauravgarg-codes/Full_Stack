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