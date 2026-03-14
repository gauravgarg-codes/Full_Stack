// Q1 create an object for a student with name, age and isEnrolled properties.
let student = {
    name: "John Doe",
    age: 20,
    isEnrolled: true,
};

// Q2. can an object key be a number or boolean ?
// Yes, in JavaScript, object keys can be strings or symbols. If you use a number or boolean as a key, it will be converted to a string. For example:

let obj = {
    1: "one",
    true: "yes",
};

// Q2. access the value of "first-name" key from the object below

let person = {
    "first-name": "Alice",
    "last-name": "Smith",
};
//user.first-name; // This will cause an error because of the hyphen in the key
// To access the value of "first-name", you can use bracket notation:

let firstName = person["first-name"];
console.log(firstName); // Output: Alice

// Q3. given a dynamic key let key = "age", how can you access the value of age from the object below

let key = "age";
let user = {
    age: 25,
};
console.log(user[key]); // Output: 25

// Q4. from the object below print the latitude

const locations = {
    city: "Bhopal",
    coordinates: {
    latitude: 40.7128,
    longitude: -74.0060,
},
};  
console.log(locations.coordinates.latitude); // Output: 40.7128

// Q5. what will happen if coordinates is missing? how to prevent the error while accessing latitude?

// If the "coordinates" property is missing from the "locations" object, trying to access "locations.coordinates.latitude" will result in a TypeError because you would be trying to access a property of undefined. To prevent this error, you can use optional chaining (?.) which allows you to safely access nested properties without causing an error if any part of the chain is undefined. Here's how you can do it:
console.log(locations?.coordinates?.latitude); // Output: 40.7128 (if coordinates exists)
// If coordinates is missing, it will return undefined instead of throwing an error.

//Q7. distructure the city and latitude from the locations object  

let {city} = locations;
let {latitude} = locations.coordinates;
console.log(city); // Output: Bhopal

// Q8. distructure the key first-name as the variable called firstName from the person object

let{"first-name": firtName} = person; // nikal hum person se first-name ko firstName variable me store karna chahte hai to colon ke baad jo bhi name hoga wo name variable ko dediya jayega
console.log(firtName); // Output: Alice

// Q9. use for-in to log all keys in this object: 

const course = {
    title: "JavaScript Basics",
    duration: "4 weeks",
    level: "Beginner",
};
for(let key in course){
    console.log(key); // Output: title, duration, level
}

// Q10. Use object.entiries to print all key value pairs as an array:

   Object.entries(course).forEach(function(val){
    console.log(val[0]+": "+val[1]); // Output: title: JavaScript Basics, duration: 4 weeks, level: Beginner
});

// Q11. copy this object using spread operator
const original = {a:1, b:2};
const copy = {...original};
console.log(copy); // Output: {a: 1, b: 2}

// Q12.  what is problem with the given object copying 
const obj1 ={info:{score:80}};
const clone ={...obj1};
clone.info.score = 100;
console.log(obj1.info.score); // Output: 100
// The problem with the given object copying is that it creates a shallow copy of the object. This means that while the top-level properties are copied, any nested objects (like the "info" object in this case) are still referenced to the same memory location. 
// Therefore, when you modify the "score" property in the "clone" object, it also modifies the "score" property in the "obj1" object because they both reference the same "info" object. 
// To create a deep copy of the object, you can use a method like JSON.parse(JSON.stringify(obj1)) or a library like lodash's _.cloneDeep() function.

// now deep clone obj1 safely
let newobj=JSON.parse(JSON.stringify(obj1)); // This will create a deep copy of obj1, so modifying the clone will not affect the original object.
newobj.info.score = 100;
console.log(obj1.info.score); // Output: 80

//Q13. re-write this safely using optional chaining
const man ={};
console.log(person.address.street); // This will cause an error because "address" is undefined
// To safely access the "street" property without causing an error, you can use optional chaining:
console.log(person?.address?.street); // Output: undefined (instead of throwing an error)

// Q14. use a variable to dynamically assign a property
const keyy ="roles";
let object ={
    name:"harsh",
    [key]: "admin" // This will create a property "roles" with the value ["admin", "editor"]
}



//----------end of obejcts- practice.js------------------