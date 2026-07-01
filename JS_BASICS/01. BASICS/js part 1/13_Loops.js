// for loop

/*for (let index = 0; index < array.length; index++) {
    const element = index;
    console.log(element);
}*/

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
       // console.log("5 is the best number");
    }
   // console.log(element);
}
// ----------------------------------------------------------------------
// 10 CLASSES AND EACH CLASS HAS 10 STUDENTS AND YOU NEED TO VISIT EVERY STUDENT
for (let i = 0; i <10; i++) {
    console.log(`outer loop value ${i}`);
   for (let j = 0; j < 10; j++) {
   // console.log(`inner loop value ${j} and the inner loop ${i}`);
    // console.log(i+'*'+j+'='+ i*j); // print you tables from 0 to 9
   }

    
}
// for loop ideally array pe kaam krna prefer bhi krta hai

let myarray =["flash", "batman", "superman"]

for (let index = 0; index < myarray.length; index++) { // yha hmne less than isliye use kiya kyunki length to 3 hai but index starts from 0 so 0,1,2 if we do less than equal to so 
    const element = myarray[index];
    console.log(element);
}

// break and continue
/*for (let index = 1; index < 20; index++) {
    if (index ==5){
        console.log("detected 5");
        break;
    }
    console.log(`value of i is ${index}`);
}*/

for (let index = 1; index <= 20; index++) {
    if (index ==5){
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${index}`);
}

 /* **************************************************** */
 //  WHILE LOOP

let index = 0

while (index <=10) {
    console.log(`value of index is ${index}`);
    index = index+2;
}

let Myarray = ["flash","batman","superman"]

let arr = 0
while (arr < Myarray.length) {
    console.log(`value is ${Myarray[arr]}`);
    arr = arr+1;
}

// DO-WHILE LOOP
// phele kaam hoga fir condition check hogi

let score = 1

do{
    console.log(`score is ${score}`);
    score ++
} while (score <=10);


//-----------------------------------------------------------------------
for (let i = 0; i < 3; i++) {
    const element = array[i];
    
}

let matrix=[];
for (let i = 0; i <3; i++) {
    matrix[i]=[];
    for (let j = 0; j < 3; j++) {
        matrix[i][j]=+prompt(`enter the value of matrix at cords${i}${j}`,'');
    }
}
console.table(matrix);  