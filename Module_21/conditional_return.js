function even(number){
    if(number%2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(even(5));
let result=even(4);
console.log(result);

function evenNum(number){
    if(number%2===0){
        return true;
    }
    return false;
}
console.log(evenNum(3));
let even2=evenNum(4);
console.log(even2);