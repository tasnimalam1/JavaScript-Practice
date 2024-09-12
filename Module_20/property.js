let bottle={
    brand:'sony',
    color:'black',
    price: 34,
    'fav places':['khulna','satkhira','dhaka'],
}
console.log(bottle);

// dot notation

// console.log(bottle.color);
// const dam=bottle.price;
// console.log(dam);

// bracket notation

// console.log(bottle['price']);
// const rong=bottle['color'];
// console.log(rong);

// console.log(bottle. 'fav places') //given output must error


// we can change the value of property
bottle.color='white';
bottle['brand']= 'nokia';
bottle['fav places']=['bali','srilanka','maldivs'];
// console.log(bottle);

const keyName='color';
bottle[keyName]='yellow';
console.log(bottle)
console.log(bottle[keyName]);

