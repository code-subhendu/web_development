// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolved after 2 sec");
//         resolve(56);
//     },2000)
// })
// p1.then((value)=>{
//     console.log(value);
//     let p2=new Promise((resolve,reject)=>{
//         resolve("promise2")
//     })
//     return p2
// }).then((value)=>{
//     console.log("we are done")
//     console.log(value)
// })

/*
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("resolved after 2 sec");        //after 2 set print -resolve after 2 sec
        resolve(56);                                   //set resolve value as 56
    },2000)
})
p1.then((value)=>{
    console.log(value);                             //print -56
    // let p2=new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve("promise2")                          //after 2 sec set resolve value as promise2   
    // },2000)
    // })
    // return p2
    return  new Promise((resolve,reject)=>{     //same thing
        setTimeout(()=>{                        
            resolve("promise2")
        },2000)
    })
}).then((value)=>{
    console.log("we are done")                      //print- we are done
    console.log(value)                                  //print resolved value
    return 2                  //this will automaatically converted into resolved value         
}).then((value)=>{
    console.log("we are pakka done");
    console.log(value)
})
*/


//------------------------------------------------------------------quick quiz

// const loadScript = (link) => {
//     return new Promise((resolve, reject) => {
//         let sc = document.createElement("script");
//         sc.src = link;
//         document.body.append(sc);
//         sc.onload = () => {
//             resolve(1)
//         }
//         sc.onerror = () => {
//             reject(0)
//         }
//     })
// }
// let p1 = loadScript("hello.js")
// p1.then((value) => {
//     console.log(value)
// }).catch((error)=>{
//     console.log("we are sorry")
// })


const loadScript = (link) => {
    return new Promise((resolve, reject) => {
        let sc = document.createElement("script");
        sc.src = link;
        document.body.append(sc);
        sc.onload = () => {
            resolve(1)
        }
        sc.onerror = () => {
            reject(0)
        }
    })
}
let p1 = loadScript("hello.js")
p1.then((value) => {
    console.log(value)
    return 90;
}).then((value)=>{
    console.log("another script is ready sir")              //we can so this also
}).catch((error)=>{
    console.log("we are sorry")
})