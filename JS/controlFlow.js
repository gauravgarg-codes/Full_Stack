// CONTROL FLOW

// if-else, else-if, switch-case, early return pattern.
    
// EARLY RETURN PATTERN 
 
function getGrade(score){
    if(score>=90 && score<=100){return "a";}
    else if(score>=90 && score<=100){return "b";}
    else if(score>=80 && score<=89){return "c";}
    else if(score>=70 && score<=79){return "d";}
    else if(score>=60 && score<=69){return "e";}
    else if(score>=33 && score<=59){return "e";}
    else if(score>=0 && score<=32){return "fail";}
    else {
        return "Invalid Marks";
    }

}
console.log(getGrade(78));


