const computer={
    mboard:'gigabyte',
    pro:'intel',
    events:['bijoy dibos','16 dec','science fair'],
    memory:{
        ram:32,
        rom:512,
        sound:{
            brand:'microlab',
            price:4000,
        }
    }
}
console.log(computer.memory.sound.price);
computer.pro='intel i5 3rd gen';
computer['memory'].rom=1024;
console.log(computer.memory.rom);
console.log(computer.events[2]);
delete computer.pro;
console.log(computer.pro);