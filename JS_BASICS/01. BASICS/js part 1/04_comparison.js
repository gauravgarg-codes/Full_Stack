// comperison

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

// if datatype is different.

console.log("2" > 1);
console.log("02" > 1);

console.log(null>0);
console.log(null==0);
console.log(null>=0); // equality and comparison works differently
// comparison converts null to a number. treating it as 0. then null>=0 is true since 0=0 is true > converts null into a number
// and that's why null>0 is false.

// == checks value only 
// === check valu + datatypes both.
 