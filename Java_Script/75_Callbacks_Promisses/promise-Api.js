// promise-api--> it is used to run something after fulfillment of certain number of promisses (it can be  all promisses also)

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject(new Error("hiiiii"));
        resolve("value1");
    },1000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2");
    },2000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    },3000)
})



// p1.then((value)=>{
//     console.log(value)      //value will print after 1 sec of initiation
// })
// p2.then((value)=>{
//     console.log(value)      //value will print after 2 sec of initiation
// })
// p3.then((value)=>{
//     console.log(value)      //value will print after 3 sec of initiation
// })

        //if i want happend something after all the promises are fulfilled then use-->

let promise_all = Promise.all([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value);     //it will print all the values after fulfillment of all promises / after 3 sec
})

        //if there is any rejection or error then Promis.all will not run we can run using Promise.all.catch(error) but if i want that if there is any failure no problem but i want another results then use--->

// let promise_all = Promise.allSettled([p1,p2,p3]);
// promise_all.then((value)=>{
//     console.log(value);         //it will give all status ans value although there is an one rejection
// })

        //if i want that value which promise is fulfilled first then-->

// let promise_all=Promise.race([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })   //in this case if there is any rejection then there no value will be printed

        //if i want to get first resolved value then-->

// let promise_all=Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// }) 

// let promise_all=Promise.resolve(5)      //makes a resolved promise with the given value
// promise_all.then((value)=>{
//     console.log(value)
// })




// let promise_all=Promise.reject(5)      //makes a resolved promise with the given value
// promise_all.then((value)=>{
//     console.log(value)
// })

// let promise_all=Promise.reject(new Error("errorrrrr"))      //makes a rejected promise with the given error
// promise_all.then((value)=>{
//     console.log(value)
// })