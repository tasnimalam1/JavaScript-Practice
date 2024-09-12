// task-1
// let price = 400;
// if(price > 500){
//     console.log("free Coke");
// }
// else{
//     console.log(price + 30);
// }

// BMI Calculator
// let weight = 60;
// let height = 1.5;

// let BMI = weight / (height * height);
// console.log(BMI);
// if(BMI < 18.5){
//     console.log("you are underweight.");
// }
// else if(BMI >= 18.5 && BMI<=24.9){
//     console.log("you are normal.");
// }
// else if(BMI >= 25 && BMI <= 29.9){
//     console.log("you are overweight.");
// }
// else{
//     console.log("you are obese.");
// }

// let mark = 98;

// if(mark >=90 && mark <= 100){
//     console.log("The Result Is (A)");
// }
// else if(mark >= 80){
//     console.log("The Result Is (B)");
// }
// else if(mark >= 70){
//     console.log("The Result Is (C)");
// }
// else if(mark >=60){
//     console.log("The Result Is (D)")
// }
// else{
//     console.log("The Result Is (F)");
// }

// task-4
// var score = 82;
// var fScore = 49;

// if(score > 80){
//     if(fScore > 80){
//         console.log("then go for a lunch.");
//     }
//     else if(fScore >=60){
//         console.log("good luck next time.");
//     }
//     else if(fScore >= 40){
//         console.log("keep your friend's message unseen.");
//     }
//     else{
//         console.log("block your friend");
//     }
// }
// else{
//     console.log("go to home and sleep and act sad.");
// }

// task-5
// var num1= 10;
// var num2= 35;
// var result;
// if(num1 > num2){
//     result=2*num1;
// }
// else{
//     result=num1+num2;
// }
// console.log(result);

// ternary
// var result = num1 > num2 ? 2*num1:num1+num2;
// console.log(result);
var childrenAge = 10;
var isStudent = false;
var seniorCitiyzen = 65;
var price = 800;

if(childrenAge < 10){
    console.log("ticket is free");
}
else if(isStudent === true){
    let discount = price*50/100;
    let payAmount=price-discount;
    console.log("you have got 50% discount=" + payAmount);
}
else if(seniorCitiyzen >=60){
    let discount=price*15/100;
    let payAmount=price-discount;
    console.log("you have got 15% discount, Please pay="+payAmount);
}
else{
    console.log("please pay="+price);
}