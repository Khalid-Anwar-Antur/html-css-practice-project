// array double 
const nums = [4,5,6,2,58,3,85,6,6]
const doubled =[]
for(const num of nums){
    const duble =num*2;
    doubled.push(duble)
}
// console.log(doubled)

// map-> loops through each elemennt of the array and do the opeation that passed in the call bac function and hold the result from each operation in an array and finally returns you the array 
const numbers = [4,5,6,2,58,3,85,6,6,25]
function doubleit(n){
    return n*2;
}
const double2 = x => x*2;
const result = numbers.map(doubleit)
const result2= numbers.map(double2)
console.log(result)
console.log(result2)


const array = [25,56,48,65,78,68,41,14]
const digun = array.map(x=>x*2);
console.log(digun)