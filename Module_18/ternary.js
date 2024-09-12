/**
 * TERNARY --> THREE PART
 */

const age = 14;
if(age >= 18){
    console.log("you can vote");
}
else{
    console.log("you can not vote");
}
// simple ternary
age >= 18 ? console.log("you can vote") : console.log("you can not vote");

let price = 700;
const isLeader = true;
if(isLeader === true){
    price = 0;
}
else{
    price = price - 100;
}
console.log(price)

price = isLeader === true ? 0 : price + 120;
console.log(price)

// semi-ternary

if(isLeader === true){
    if(price > 600){
        price = price /2
    }
    else{
        price = 0;
    }
}
else{
    price = price + 130;
}
console.log(price)

// ternary
price = isLeader === true ? price > 600 ? price/2 : 0 : price +130;
console.log(price);