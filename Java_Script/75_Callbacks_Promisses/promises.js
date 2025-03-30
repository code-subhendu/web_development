        //solution of callback hell
        //the code either exicute or fails in both the cases the subscriber will be notified
        //used to do parallel execution
// console.log("hello one");
// setTimeout(() => {
//         console.log("hello in 2 second")
// }, 2000);
// console.log("My name is Hello three")

/*
let promise=new Promise(function(resolve,rejected){
        alert ("hello")
        resolve(56)
})
console.log("hello one");
setTimeout(() => {
        console.log("hello in 2 second")
}, 2000);
console.log("My name is Hello three")
console.log(promise)
*/
        //-------------------------------------------------------------------------
/*
let p1=new Promise((resolve,reject)=>{
        console.log("prommise is pending")
        setTimeout(()=>{
                console.log("I am a prommise and i am resolved ")
                resolve(true)  //we can give resolve value any string ,bullian,integer,array ...
        },5000)
})
let p2=new Promise((resolve,reject)=>{
        console.log("prommise is pending")
        setTimeout(()=>{
                console.log("I am a prommise and i am rejected")
                reject(new Error("i am an error"))
        },5000)
})
//it will not print rejected message after 10 sec ,it will print after 5 sec because p1 and p2 will runn parralelly
*/

let p1=new Promise((resolve,reject)=>{
        console.log("prommise is pending")
        setTimeout(()=>{
                resolve(true)  //we can give resolve value any string ,bullian,integer,array ...
        },5000)                 //here fulfillment as resolved
})
let p2=new Promise((resolve,reject)=>{
        console.log("prommise is pending")
        setTimeout(()=>{
                console.log("I am a prommise and i am rejected")
                reject(new Error("i am an error"))
        },5000)                 //fulfillment as reject
})
p1.then((r)=>{          //when p1 is done then do this
        console.log("I am a prommise and i am resolved ")
        console.log(r)
})
p2.catch((e)=>{
        console.log("some error occcured")      //it will catch the error of p2
        console.log(e)
})
