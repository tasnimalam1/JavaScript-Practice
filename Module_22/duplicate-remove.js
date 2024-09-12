function duplicate(arr){
    let unique=[];
    for(let friend of arr){
        if(unique.includes(friend)===false){
            unique.push(friend)
        }
    }
    return unique;
}
let friends=['tasnim','nadim','rafi','tasnim','russel','rafi'];
let final=duplicate(friends);
console.log(final);