// let i=10;
// do{
//     console.log(i);
//     i++;
// }
// while(i<5)
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
    if (i == 5) {
    continue;
    }
    console.log(array[i]);
}