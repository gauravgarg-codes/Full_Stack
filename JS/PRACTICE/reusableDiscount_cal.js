// REUSABLE DISCOUNT CALCULATOR
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return function() {
        return originalPrice * (1 - discountPercentage / 100);
    }
}
const discount10 = calculateDiscountedPrice(100, 10);
console.log(discount10()); // Output: 90
const discount20 = calculateDiscountedPrice(200, 20);
console.log(discount20()); // Output: 160

// SHREYANSH SIR DID THIS ONE.

function discountcalculator(discount){
    return function(price){
        return price-(price*discount/100);
}
let discounterTEN = (discountcalculator(10));
let discounterTWENTY = (discountcalculator(20));
console.log(discounterTEN(200));
console.log(discounterTWENTY(200));
}








