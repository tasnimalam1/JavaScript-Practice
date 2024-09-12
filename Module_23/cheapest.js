function getCheapestPhone(phones){
    let min=phones[0];
    for(let phone of phones){
        if(phone.price<min.price){
            min=phone;
        }
    }
    return min;
}

let phonesPrice=[
    {name:'Nokia',price:20000,camera:'12mp',color:'white'},
    {name:'Samsung',price:50000,camera:'12mp',color:'white'},
    {name:'Xiaomi',price:18000,camera:'12mp',color:'white'},
    {name:'Asus',price:28000,camera:'12mp',color:'white'},
    {name:'OnePlus',price:67000,camera:'12mp',color:'white'},
]

let minPhonePrice=getCheapestPhone(phonesPrice);
console.log('Lowest Price Phone is=',minPhonePrice);