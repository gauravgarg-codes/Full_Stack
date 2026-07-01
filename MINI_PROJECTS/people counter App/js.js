let lap1 = 34
let lap2 = 33
let lap3 = 36
// create a function which logs out the sum of all the lap times 

function laptime(){
    let LapSum = lap1+lap2+lap3
    console.log(LapSum);
}

laptime()

let lapscompleted = 0
// create a function that increments the lapscompleted variable with one 
// Run it three times
function incrementLap(){
   lapscompleted=lapscompleted+1
   return lapscompleted;
    
}
incrementLap()
incrementLap()
console.log(incrementLap());


