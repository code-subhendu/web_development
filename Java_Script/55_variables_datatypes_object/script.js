console.log("hai this is video no 55.........");

var a=5;
var b=8;
var c="Harry";
console.log(a+b+5);
console.log(c);
console.log(typeof a,typeof b,typeof c);

        // constant can't be  changed
const a1=56;
// a1=a1+6;   this is not possible -not allowed



console.log("___________________________________");
var k=9;
let m=1;

if(k>=2)
    {
        var k=81;
        console.log(k);
    }
    console.log(k);
    
    if(m<=2)
        {
            let m=10;
            console.log(m);
        }
        console.log(m);

console.log("___________________________________");
//primitive data types and object
// null -->there is nothing
//number-->1,34,5,8,9..
//string -->inside double cote ""
//symble
//undefined-->varible declared but no value assigned
//booldean -->true ,false
//bigint-->store big integers

let x="harry bhai";
let y=33;
let z=3.45;
const p=true;
let q=undefined;
let l=null;
console.log(x,y,z,p,q,l);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof l);

console.log("___________________________________");
let o={
    name:"Harry",
    "job code":5600,
    "is handsome":true
}
console.log(o);
o.salary="100 coror";   //we can add
console.log(o);
o.salary="500 coror";   //we can change also
console.log(o);
