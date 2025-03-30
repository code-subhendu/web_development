// let a=prompt("Enter first number");
// let b=prompt("Enter second number");
// // let sum=a+b;     //it will not doing addition it will just append b after a because now a and b are a string
// let sum=parseInt(a)+parseInt(b);
// console.log("the value of sum is",sum);

    //if user give any non Number thing like string then there will be an error

// let a=prompt("Enter first number");
// let b=prompt("Enter second number");
// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("sorry this is not allowed"); //throwing error message to user
// }
// let sum=parseInt(a)+parseInt(b);
// console.log("the value of sum is",sum);


    //there may come any unexpected error also in that case we use try catch to run the code without interrupting the entire code

// let a=prompt("Enter first number");
// let b=prompt("Enter second number");
// let sum;
// sum=parseInt(a)+parseInt(b);
// try {   //try to run some code which are inside it
//     console.log("the value of sum is",sum*X);   //here i multiplied sum with X (which is not defined) will give error 
// } catch (error) {   //if code inside try not run then catch the error and run the code inside catch
//     console.log("Error aa gaya bhai")
//     // alert(error.name)
//     // alert(error.message)
//     // alert(error.stack)
// }


let a=prompt("Enter first number");
let b=prompt("Enter second number");
let sum;
sum=parseInt(a)+parseInt(b);
function main(){
    try {   //try to run some code which are inside it
        console.log("the value of sum is",sum*X);   //here i multiplied sum with X (which is not defined) will give error 
        return true;
    } catch (error) {   //if code inside try not run then catch the error and run the code inside catch
        console.log("Error aa gaya bhai")
        // alert(error.name)
        // alert(error.message)
        // alert(error.stack)
        return false;
    }
    finally{    //there may any error of not in the both case it will run finaly
        console.log("files are being closed and db connecton is being closed")
    }
    // console.log("files are being closed and db connecton is being closed")   // if we usethis line in the place of finally{console.log("files are being closed and db connecton is being closed")} then it will not print for the both cases because previously returned value
        //try catch does not work on asynchronous things like setTimeOut...

}
main();