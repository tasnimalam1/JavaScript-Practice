const nam=['rasel','nadim','asif'];
const shortNam=nam.sort();
// console.log(shortNam);

const number=[3,56,7,3,7,4,2,1];
// const numbers_asc=number.sort() //not working
const numbers_asc=[...number].sort(function (a,b){return a-b})
const numbers_dsc=[...number].sort(function (a,b){return b-a})
console.log(numbers_asc);
console.log(numbers_dsc);