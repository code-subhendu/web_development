// let numbers=[4,2,7];
// let a=prompt("Enter the number:");
// a=Number.parseInt(a);
// numbers.push(a);
// console.log(numbers)


// let numbers=[4,2,7];
// let a;
// do
// {
//     a=prompt("Enter the number:");
//     a=Number.parseInt(a);
//     numbers.push(a);
// }while(a!=0);
// console.log(numbers)


// let arr=[1,4,10,20,15,30,80];
// console.log(arr.filter(e=>{
//     if(e%10==0)
//     {
//         return e;
//     }
// }))


let arr=[1,2,3,4,5,6]
const factorial=(a,b)=>{
    return a*b;
}
console.log(arr.reduce(factorial))

