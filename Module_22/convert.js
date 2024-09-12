// inch to fit

function inchToFeet(inch){
    let feet=inch/12;
    let feetNumber=parseInt(feet);
    let inchRemain=inch%12;
    let result=feetNumber+' ft '+inchRemain+' inch.';
    return result;
}
let size=inchToFeet(80);
// console.log(size);

// kilo to mile

function kiloToMiles(kilo){
    let miles=kilo*0.621371;
    return miles;
}
let mile=kiloToMiles(2);
// console.log('distance is=',mile)

// mile To kilo
function mileToKilo(mile){
    let kilo=mile*1.60934;
    let result=kilo+' kilo';
    return result;
}
let distance=mileToKilo(5);
// console.log('distance is=',distance);

// kg to gram
function kgToGram(kg){
    let gram=kg*1000;
    let result=gram+' g';
    return result;
}
let gram=kgToGram(5);
console.log("weight",gram);