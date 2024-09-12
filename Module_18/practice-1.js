let price=500;
let isChild=false;
// if(isChild===true){
//     if(price>450){
//         price=price*50/100;
//     }
//     else{
//         price=price;
//     }
// }
// else{
//     price=price-40;
// }
// console.log(price);
price=isChild===true? price>450? price*50/100:price:price-40;
console.log(price);