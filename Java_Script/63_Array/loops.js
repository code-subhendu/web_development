let arr=[1,94,36,2,3,9]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// arr.forEach(e =>{console.log(e)})           //forEach loop     //to access one value there no need () brackate

// arr.forEach((value,index,array) => {
//     console.log(value,index,array);          //we can access value ,index and array also 
// });

arr.forEach((value,index) => {
    console.log(value,index);          //we can access value ,index and array also 
});


console.log("--------------------------------------");
let obj ={
    a:1,
    b:3,
    c:2
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
    }
}


console.log("--------------------------------------------");
for (const element of arr) {
    console.log(element)
} 