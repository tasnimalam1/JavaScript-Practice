function getMin(numbers){
    let min=numbers[0];
    for(let num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}

let price=[30000,20000,40999,80000];
let min=getMin(price);
console.log('lowest Price Phone=',min);