function oddAverage(numbers){
    let odd=[];
    for(let number of numbers){
        if(number%2!==0){
            odd.push(number);
        }
    }
    let sum=0;
    for(let number of odd){
        sum=sum+number;
    }
    let count=odd.length;
    console.log('the sum of odd number is=',sum,'array length is=',count);
    let avg=sum/count;
    return avg;
}
let number=[23,3,57,97,11,22,4,8,9,5];
let result=oddAverage(number);
console.log('the average is=',result.toFixed(2));