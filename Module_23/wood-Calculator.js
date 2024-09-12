function woodCalc(chair,table,bed){
    let chairWood=3;
    let tableWood=10;
    let bedWood=40;

    let chairTotalWood=chair*chairWood;
    let tableTotalWood=table*tableWood;
    let bedTotalWood=bed*bedWood;

    let totalWood=chairTotalWood+tableTotalWood+bedTotalWood;

    return totalWood;
}
let wood=woodCalc(2,0,1);
console.log('Total Wood=',wood);

// home Task
/**
 * shirt price 500
 * pant price 400
 * shoe price 700
 * 
 * we need to calculate total price? how many pice we buy and calculate all product price total.
 */