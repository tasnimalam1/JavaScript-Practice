/**
 * create function that will return only the even numbers
 * return the sum of even number
 */

// function evenNumber(numbers){
//     let evens=[];
//     for(number of numbers){
//         if(number%2===0){
//             console.log(number);
//             evens.push(number);
//         }
//     }
//     return evens;
// }
// let even=[2,32,43,5,78,98];
// let evens=evenNumber(even);
// console.log(evens);

function evenSum(num){
    let sum=0;
    for(number of num){
        if(number%2===0){
            console.log(number);
            sum=sum+number;
        }
    }
    return sum;
}

let number=[21,32,34,5,67,87,88];
let sum=evenSum(number);
console.log('the sum is=',sum);