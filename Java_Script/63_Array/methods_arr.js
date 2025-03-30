let arr=[1,3,6,9]
console.log(arr)

console.log(arr.toString())     //converting array to string

console.log(arr.join(" and "))        //joining all elements using and
console.log(arr.join("-"))        //joining all elements using -

arr.pop()    //pop last element  and return it 
console.log(arr)

arr.push(10)             //adding new element in an array
console.log(arr)

arr.shift()         //remove first element and return it  --brother of pop()
console.log(arr)

arr.unshift(18)        //adds element to the  begening   --brother of push()
console.log(arr)

delete arr[2]      //delete nth index element but don't change the array length
console.log(arr)

let prr=["hi", "i",12,"boy"]
let gtt=[1,4,6]
console.log(arr.concat(prr,gtt,[12,90]))     //concating     //it does not change the existing array
console.log(arr)

let mms=[3,6,1,2,9]
mms.sort()
console.log(mms)

mmp=[1,4,2,9,3]
mmp.splice(2,1,89,45,23)         //(position to add, no of elements to be removed, elemnts to add)  
// mmp.splice(2,2)             //(position to add, no of elements to be removed)
console.log(mmp)

mmk=[1,2,5,7,3]
console.log(mmk.slice(3))    //returns values from 3rd index to the end
console.log(mmk.slice(1,3))    //returns values from 1st index to the 3-1=2nd index

console.log(mmk.reverse())      //it reverse the array