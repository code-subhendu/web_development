/*
async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(56);

        },3000)
    })
}
// let a=await sleep()     //await must be in side the async function
                    //for that reason we have to make a async function and have to invoke that function
            //if do not want to do that things then we can use this-->  IIFE --->
(async function main() {
    let a=await sleep();
    console.log(a);
})()

*/



/*
    //Destructuring
// let a,b=5,6;     //this is not possible in js

// let a,b=[3,6];
// console.log(a,b);    //this will also not store the a=3 and b=6

    //to store we have to use in this way
let [a,b]=[3,7];
console.log(a)
console.log(b)
console.log(a,b)

let [x,y,...rest]=[1,5,2,6,7,3,8];
console.log(x)  //1 will be stored in x
console.log(y) //5 will be stored in y
console.log(rest)   //remaining values will be store in rest
*/



/*
let obj={
    p:1,
    q:4,
    r:3
}
// console.log(obj.q)
    //when we need more than one object
let {p,q}=obj
console.log(p,q)
*/


function sum(m,n,e){
    return m+n+e;
}
let arr =[6,2,9];
console.log(arr[0]+arr[1]+arr[2]);
console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr))        //...arr is called spread operator  // {0:6,1:2,2:9}