/*
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(456);
        },3500);
    });
}
console.log("loading Modeles");
console.log("So something else");
console.log("Load data");

let data=getData();
console.log(data);

console.log("process data");     //here 'process data' and 'task 2' will not wait for completion of data from get data 3.5 sec  --because java is asynchronous in nature
console.log("task 2");
*/


        //if we want to wait for data coming or fulfilled  there is two way for waiting
        //no-1: we can use  .then 

/*
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(456);
        },3500);
    });
}
console.log("loading Modeles");
console.log("So something else");
console.log("Load data");

let data=getData();
console.log(data);
data.then((val)=>{
    console.log("process data");    //these will print after 3.5 sec
    console.log("task 2");
})
*/

        //no-2: Await           --this is better way 
    //to use await the function must be async because await works only inside async function

/*
async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(456);
        },3500);
    });
}

async function main()
{
    console.log("loading Modeles");
    console.log("So something else");
    console.log("Load data");
    
    let data=await getData();   //here it will wait for fulfillment of getData
    console.log(data);  //the await keyword makes java scrippt wait untill the promise settles and returns its value
    
    console.log("process data");
    console.log("task 2");
}

main();
*/


async function getData(){
    // Simulate gating data from a server
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')   //promise of getting data
    let data=await x.json();    //promise of parsing data to json
    // let data=await x.text();    //promise of parsing data to text
    console.log(data);
}       //this overall function is returning promise

async function main()
{
    console.log("loading Modeles");
    console.log("So something else");
    console.log("Load data");
    
    let data=await getData();   //here it is waiting for fulfillment of getData  //if we dont wait here then we will not get any data 
    console.log(data);  //the await keyword makes java scrippt wait untill the promise settles and returns its value
    
    console.log("process data");
    console.log("task 2");
}

main();

//settle means resolve of reject
//resolve means, promise has settled successfully
//reject means promise has not settled successfully