function maxResult(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
let number=maxResult(33,56,78);
console.log('max is=',number);

function maxResult1(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log('you are boss');
    }
    else if(num2>num1 && num2>num3){
        console.log('hey you are good');
    }
    else{
        console.log('your also go home');
    }
    return num1,num2,num3;
}
let number1=maxResult1(33,56,78);
console.log('max is=',number1);

// multiple number check
console.log(Math.max(23,45,65,21,4));