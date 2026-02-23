// BMI CALCULATOR
function bmi(weight, height) {
    return weight/height**2; // don't do return= weight/height**2; because it will return the value of weight/height**2 and assign it to return which is not correct.
}
bmi(70, 1.75); // Output: 22.857142857142858
console.log(bmi(80, 1.8).toFixed(2)); // Output: 24.69
