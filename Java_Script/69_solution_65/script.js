function facto()
{
    let result;
    const num = parseFloat(document.getElementById("number").value);
    if(num==0)
    {
        result=1;
        console.log("Hi")
    }
    else{
        let arr=Array.from(Array(num+1).keys())
        arr=arr.slice(1);
        result=arr.reduce((a,b)=>{
            return a*b;
        })
    }
    document.getElementById("result").textContent = 'Result: '+result;
}




// mmk=[1,2,5,7,3]
// console.log(mmk.slice(3))    //returns values from 3rd index to the end
// console.log(mmk.slice(1,3))    //returns values from 1st index to the 3-1=2nd index

// console.log(Array(n))   //it makes an array of n-1 empty items
// console.log(Array(5).keys())   //returs new array itterator which contains the keysfor each index in the given input array
// let arr=Array.from(Array(5).keys())    //return an array [0,1,2,3,4]     5 items
// arr=arr.slice(1);      //return arr from index 1 to end [1,2,3,4]