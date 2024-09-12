// for(let i=1;i<=30;i++){
//     if(i%3===0 || i%5===0){
//         console.log(i);
//     }
// }
let sum=0;
for(let i=1;i<=30;i++){
    if(i%3===0 || i%5===0){
        console.log(i);
        sum=sum+i;
        console.log(sum);
    }
}
console.log(sum);