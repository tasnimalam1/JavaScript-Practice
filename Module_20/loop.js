let bottle={
    brand:'sony',
    color:'black',
    price: 34,
    'fav places':['khulna','satkhira','dhaka'],
}
// for(const bot in bottle){
//     console.log(bot);
//     console.log(bottle[bot]);
// }
const bot=Object.keys(bottle);
console.log(bot);

for(const bott of bot){
    console.log(bott);
}
