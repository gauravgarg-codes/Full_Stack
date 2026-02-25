// Q1. create an array with 3 fruits and print the second fruit
let fruits = ["apple", "banana", "orange"];
console.log(fruits[1]); // Output: "banana"
//Q2. Add "mango" to he end of the array and add "grape" to the beginning of the array
fruits.push("mango"); // Adds "mango" to the end of the array
fruits.unshift("grape"); // Adds "grape" to the beginning of the array
console.log(fruits); // Output: ["grape", "apple", "banana", "orange", "mango"]
//Q3. replace banana with "kiwi"
fruits.splice(2,1);
console.log(fruits); // Output: ["grape", "apple", "kiwi", "orange", "mango"]
fruits.push("kiwi");
console.log(fruits); 
[fruits[2],fruits[4]]=[fruits[4],fruits[2]];
console.log(fruits); 
fruits.splice(2,0,"banana");
console.log(fruits);
// Q4.what is the difference between push and unshift method in array?
// push method adds an element to the end of the array, while unshift method adds an element to the beginning of the array.
// Q5.remove the last element of the array and print the array
fruits.pop();
console.log(fruits); // Output: ["grape", "apple", "kiwi", "orange"]
// Q6. INSERT RED AND BLUE COLOR IN THE ARRAY AT INDEX 1.
let colors = ["yellow", "green", "purple"];
colors.splice(1,0,"red","blue");
console.log(colors); // Output: ["yellow", "red", "blue", "green", "purple"]

// q7. EXTRACT ONLY THE MIDDLE 3 ELEMENTS FROM THE ARRAY
let arr = [1,2,3,4,5,6,7];
let middleThree = arr.slice(1,4);
console.log(middleThree); // Output: [2, 3, 4]

// Q8. SORT THIS ARRAY IN ALPHABETICAL ORDER AND THEN REVERSE IT 
 
let names=["Charlie", "Alice", "Bob"];
names.sort().reverse();
console.log(names); // Output: ["Charlie", "Bob", "Alice"]

// Q9. use .map to square each element in the array and print the new array
let numbers = [1, 2, 3, 4, 5];
let newarray = numbers.map(function(val){
    return val*val;
}) // Output: [1, 4, 9, 16, 25]
console.log(newarray);

// Q10. use filter to keep numbers greater tha n 10 in the array and print the new array
let num = [5, 10, 15, 20, 25];
let filteredArray = num.filter(function(val){
    return val > 10; // Output: [15, 20, 25]
})
console.log(filteredArray);
// WE CAN ALSO USE ARROW FUNCTION INSTEAD OF NORMAL FUNCTION IN MAP AND FILTER METHODS
let newarray2 = numbers.map(val =>{val*val} );
console.log(newarray2); // Output: [1, 4, 9, 16, 25]

// Q11. USE REDUCE TO FIND THE SUM OF ALL ELEMENTS IN THE ARRAY
let ar = [1, 2, 3, 4, 5];
let sum = arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

//Q.12 use find to get the first number less than 10 in the array
let nums = [12, 5, 8, 20, 3];
let firstLessThan10 = nums.find(function(val){
    return val < 10; // Output: 5
});
console.log(firstLessThan10);

// Q13. use .some() to check if there is any student has scored below 35 in the array
let scores = [40, 50, 30, 60, 20]; 
let ans = scores.some(function(val){
    return val < 35;
})
console.log(ans); // Output: true

//Q14 use .every() to check if all the numbers are even or not in the array
let numbers2 = [2, 4, 6, 8, 10];
numbers2.every(function(val){
    return val % 2 === 0; // Output: true
});

// Q15. Distructure this array to get the first name and lastname in separate variables
let fullName = ["John", "Doe"];
let [firstName, lastName] = fullName;
console.log(firstName); // Output: "John"
console.log(lastName); // Output: "Doe"

// Q16. merge two arrays using spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6] ---> leja ke bhikher diye.

// Q17. add "India" to the start of the array using spread operator 
let countries = ["USA", "UK", "Australia"];
countries = ["India", ...countries];
console.log(countries); // Output: ["India", "USA", "UK", "Australia"] ---> leja ke bhikher diye.india rakhkar

//Q.17 clone this array properly not by reference and change the first element of cloned array to "Hello"
let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];
clonedArray[0] = "Hello";
console.log(clonedArray); // Output: ["Hello", 2, 3]
console.log(originalArray); // Output: [1, 2, 3] (original array remains unchanged)

//--------------------------END OF ARRAY PRACTICE--------------------------