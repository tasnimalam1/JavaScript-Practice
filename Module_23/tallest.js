function getMax(numbers){
    let max=numbers[0];
    for(let num of numbers){
        if(num>max){
            max=num;
        }
    }
    return max;
}

let height=[33,55,67,87,76.35,86];
let max=getMax(height);
console.log('most tallest man is=',max);

function getMin(numbers){
    let min=numbers[0];
    for(let num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}

let height1=[33,55,67,87,76.35,86];
let min=getMin(height1);
console.log('most tallest man is=',min);