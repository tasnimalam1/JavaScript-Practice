const numbers=[1,2,3,4,5,6,7,8];
// console.log(numbers);
// const reversed=numbers.reverse();
// console.log(reversed);

const rev_number=[];
// for(const num of numbers){
//     console.log(num);
//     rev_number.unshift(num);
// }
// console.log(rev_number);
const revers_number=[];
for(let i=0;i<numbers.length;i++){
    const num=numbers[i];
    revers_number.unshift(num);
}
// console.group(revers_number);

let rev_rev_number=[];
for(let i=numbers.length-1;i>=0;i--){
    const num=numbers[i];
    rev_rev_number.push(num);
}
console.log(rev_rev_number);