              //map------------------------->
let arr=[1,3,4,5]
// console.log(arr)
// let prr=arr          //store same elements in new array
// console.log(prr)


// let narr=[]
// for (let index = 0; index < arr.length; index++) {          //general method //using classical for loop
//       const element = arr[index];
//       narr.push(element**2)                   //storing square of elements
// }
// console.log(narr)

      //we can do it using map in one line
let narr=arr.map(e =>{              //one element represent value
      return e**2;                  //two element represent value,index
})                                   //threee element represent value,index,array   just like for each loop
console.log(narr)

                  // filter----------------------->
// function greaterThanSeven(e){           //method
//       if(e>7)
//       {
//             return true;
//       }
//       return false;           //there is no need to write else because if  if part is returned then it goes out do no go down
// }
// console.log(narr.filter(greaterThanSeven));     //filtering

const greaterThanSeven=(e)=>{           //method
      if(e>7)
      {
            return true;
      }
      return false;           //there is no need to write else because if  if part is returned then it goes out do no go down
}
console.log(narr.filter(greaterThanSeven));     //filtering


// console.log(narr.filter((e)=>{          //same this but written approach is different
//       if(e>7)
//       {
//             return true;
//       }
//       return false;    
//  })); 


                  //reduce----------------------------->
let hrr=[1,2,3,4,5,6];
const add=(a,b)=>{
      return a+b;
}
console.log(hrr.reduce(add));           //here we reduceing using addition



            //     Array.from()----------------------------->

console.log(Array.from("harry"))       //used to create array from any other object



                  //for-in--------------------------------->
for (const key in hrr) {
      if (Object.prototype.hasOwnProperty.call(hrr, key)) {
            const element = hrr[key];
            console.log(element)
      }
}

                  //for-of---------------------------------->
for (const element of hrr) {      
      console.log(element)
}