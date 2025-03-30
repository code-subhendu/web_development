console.log("hello i am conditional tutorial");
let age =45;
if(age>18)
{
    console.log("you can drive");
}
else{
    console.log("You cannnot drive");
}

let a=3;
let b=2;
    //operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);       //exponential

if("5"==5)    //compares only value
{
    console.log("equal ==");
}
if("5"===5)   //compares value and type
{
    console.log("equal ===");
}
if("5"!=5)    //conpares only value
{
    console.log("equal !=");
}
if("5"!==5)     //compares value and type
{
    console.log("equal !==");
}


let marks=98;
if(marks<50)
{
    console.log("bad");
}
else if(marks>=50  && marks<70)
{
    console.log("Good");
}
else if(marks>=70 && marks<90)
{
    console.log("better");
}
else if(marks>=90)
{
    console.log("best");
}

       //tarnary operator ? used to write one line if else statement
let m=9;
let k=14;
r= m>k ?(m-k):(k-m);    //one line if else  statement

/*       above line is same as
if(m>k)
{
    r=m-k;
} 
else
{
    r=k-m;
}
    */
console.log(r);

