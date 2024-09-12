// leap year
// simple logic
function leapYear(year){
    if(year%4===0){
        // console.log('leapyear');
        return true;
    }
    else{
        return false;
    }
}
let year=leapYear(2024);
// console.log(year);

/**
 * 1. those year that is not divisible by 100, if the year is divisible by 4 then it will be a leap year.
 * 2. those year that is divisible by 100 and 400 then it will be a leap year.
 */

function isLeapYear(year){
    if(year%100!==0 && year%4===0){
        return true;
    }
    if(year%100===0 && year%400===0){
        return true;
    }
    return false;
}
// you can write this way
function isLeapYear(year){
    if(year%100!==0 && year%4===0){
        return true;
    }
    else if(year%100===0 && year%400===0){
        return true;
    }
    else{
        return false;
    }
}
let year0=isLeapYear(2000);
let year1=isLeapYear(2022);
let year2=isLeapYear(2052);
let year3=isLeapYear(2040);
console.log(year0,year1,year2,year3);