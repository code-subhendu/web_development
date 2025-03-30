function nice(name) {
    console.log("hey " + name + " you are so cute!");
    console.log("hey " + name + " you are so butiful!");
    console.log("hey " + name + " you are so elegent!");
    console.log("hey " + name + " you looking like a wow!");
}
nice("Dear");           //it is a calling a function or invocation


console.log("------------------------------------------");

function sum(a, b) {
    console.log(a + b);
}
sum(6, 4);

console.log("------------------------------------------");

function mul(a, b) {
    return a * b;
}
let result = mul(5, 4);
let result1 = mul(6, 4);
let result2 = mul(3, 4);
console.log(result);
console.log(result1);
console.log(result2);

console.log("------------------------------------------");

function suum(a, b, c = 4)          //here c is the default parameter
{
    console.log(a, b, c);
    return a + b + c;
}
let res = suum(8, 9);         //by default the value of c is 4 but we can give another value also
let res1 = suum(4, 9, 7);
let res2 = suum(5);      //it will give an error because value of b is not given here which must have to give
//returns  NaN->not a number
console.log(res);
console.log(res1);
console.log(res2);

console.log("------------arrow function------------------------------");

const hello=(a)=>{                     //here hello is a variable also which is a fnction also
    console.log("I am an arrow function",a);
}

hello(23);
hello(21);
hello(3);
