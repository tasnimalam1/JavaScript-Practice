const price = 14000;

if(price >= 15000){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price >= 10000){
    const discount = price * 5 / 100;
    const payAmount =price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}