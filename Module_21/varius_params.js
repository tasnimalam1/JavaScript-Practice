// function evenOfString(str){
//     let size=str.length;
//     console.log(str,size);
//     if(size%2===0){
//         console.log('even size')
//         return true;
//     }
//     else{
//         console.log('odd size')
//         return false;
//     }
// }
// // evenOfString('khulna');
// // evenOfString('dhaka');

// function doubleOrNot(number,doDouble){
//     if(doDouble===true){
//         let result=number*2;
//         return result;
//     }
//     else{
//         let result=number*3;
//         return result;
//     }
// }

// console.log(doubleOrNot(23,true));
// console.log(doubleOrNot(23,false));

function arrayOfNum(number1){
    let len=number1.length;
    return len;
}
let len=arrayOfNum([2,34,45,65,6,54,67,6]);
console.log(len);

function getAge(person){
    let age=person.age;
    return age;
}