// CONTROL FLOW

// if-else, else-if, switch-case, early return pattern.
    
// EARLY RETURN PATTERN 
 
function getGrade(score){
    if(score>=90 && score<=100){return "a";}
    else if(score>=90 && score<=100){
        return "b";}
    else if(score>=80 && score<=89){
        return "c";}
    else if(score>=70 && score<=79){
        return "d";}
    else if(score>=60 && score<=69){
        return "e";}
    else if(score>=33 && score<=59){
        return "e";}
    else if(score>=0 && score<=32){
        return "fail";}
    else {
        return "Invalid Marks";
    }

}
console.log(getGrade(78));

// early return pattern --> more cleaner and shorter code is called early return pattern.


function getGrade(score){
    if(score>=90 && score<=100){return "a";}
    else if(score>=90 && score<=100){
        return "b";}
    if(score>=80 && score<=89)  return "c";
    if(score>=70 && score<=79)  return "d";
    if(score>=60 && score<=69)  return "e";
    if(score>=33 && score<=59)  return "e";
    if(score>=0 && score<=32)   return "fail";
    return "Invalid Marks";
    }

    // ROCK PAPER SECISSOR logic

    function rps(user,computer){
        if(user ==="rock" && computer ==="scissor") return "user";
        if(user ==="scissor" && computer ==="rock") return "computer";
        if(user ==="paper" && computer ==="rock") return "user";
        if(user ==="rock" && computer ==="paper") return "computer";
        if(user ==="paper" && computer ==="scissor") return "computer";
    }
    rps("rock", "scissor")

// more better approach

    function rps(user,computer){
        if( user===computer) return "draw";

        // user kab kab jitega
        
        if (user ==="rock"&& computer == "scissor") return "user";
        if (user ==="scissor"&& computer == "paper") return "user";
        if (user ==="paper"&& computer == "rock") return "user";
        
        return "computer";

    }
    console.log(rps("scissor","paper"));

// common confusion --> "fallthrough in switch-case" 

    let x=2;
    switch(x){
    case 2:    
        console.log("two");  // break is missing so output will be (two three)--> [that is a bug]
    case 3:
        console.log("three");
    }
 



