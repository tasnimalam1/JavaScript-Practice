// task-1
// let num=0;
// while(num<60){
//     console.log("I will invest at least 6 hrs every single day for next 60 days!",num);
//     num++;
// }
// task-2
// let i=61;
// while(i<=100){
//     console.log(i);
//     if(i%2!=0){
//         console.log("the odd number is=",i);
//     }
//     i++;
// }
// task-3
// let i=81;
// let sum=0;
// while(i<=131){
//     console.log(i);
//     if(i%2!=0){
//         console.log("the odd number is=",i);
//         sum=sum+i;
//         console.log(sum);
//     }
    
//     i++;
// }
// task-3.1
// let i=206;
// let sum=0;
// while(i<=311){
//     console.log(i);
//     if(i%2===0){
//         console.log("the odd number is=",i);
//         sum=sum+i;
//         console.log(sum);
//     }
    
//     i++;
// }
// task-1-break
// for(let num =0;num<200;num++){
//     if(num>100){
//         break;
//     }
//     console.log(num);
// }
// task-2 break
// let num=1;
// let sum=0;
// while(num<=100){
//     sum=sum+num;
//     if(sum>100){
//         break;
//     }
//     console.log(sum);
//     num++;
// }
// console.log("The sum is:", sum);
// console.log("The last number is:", num);
// task-3 break

// for(let i=1;i<=100;i++){
//     let sqrt=Math.sqrt(i);
//     if(Number.isInteger(sqrt)){
//         console.log(i);
//         // break;
//     }
// }
// task-1 continue
// for(i=1;i<=40;i++){
//     if(i%2!=0){
//         continue;
//     }
//     console.log(i);
// }
// task-2 continue
for(i=55;i<=85;i++){
    if(i%5===0){
        continue;
    }
    console.log(i);
}