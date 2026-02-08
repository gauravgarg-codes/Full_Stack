// LOOPS--> repeat krne ko loop khete hai
// for, while, do-while, forin, forof, foreach
// for, while, foreach --> majority senerios solved by these means 80%

//FOR

//for(start; end; change){}
// print 1-100
for(let i=1; i<101; i++){
    console.log(i);
}

// WHILE --> check-print-change then check and loop continous

/*
start
while(end){
    //code
    change
} 
*/

let i=1;
while(i<32){
    //code
    console.log(i);
    i++;
}

// DO-WHILE --> (print-change-check) then (print-change-check) loop continous

/* start
do{

}
while(end) */

let a=1;
do{
    console.log(a);
    a++;
}
while (a<20)

//  BREAK --> used to break at that particular point

for(let x=1; x<201; x++){
    console.log(x);
    if(x === 32){
        break;
    }
}

// CONTINUE --> used to skip that particular point

for(let z=1; z<101; z++){
    if(z===32){
        continue;
    }
console.log(z);
}