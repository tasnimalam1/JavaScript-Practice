function checkName(name){
    if(typeof name !=='string'){
        return 'Invalid';
    }
    let lastLetter=name.slice(-1).toLowerCase();
    let result=false;
    let checkArray=['a','y','i','e','o','u','w'];
    for(let array of checkArray){
        if(array===lastLetter){
            result=true;
        }
    }
    return result? 'Good Name':'Bad Name';
}

console.log(checkName('salman'));
console.log(checkName('RAFEE'));
console.log(checkName('jhankar'));
console.log(checkName(199));
console.log(checkName(["Rashed"]));