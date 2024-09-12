const money = -20;

if(money > 300){
    console.log("you are rich");
}
else{
    if(money > 200){
        console.log("you can come with us");
    }
    else{
        if(money > 0){
            console.log("you can not come with us");
        }
        else{
            console.log("don not come with us, you are very poor");
        }
    }
}