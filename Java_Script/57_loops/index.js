console.log("This is the tutorial on loops...");
for(let i=0;i<=5;i++)
{
    console.log(i);
}

console.log("-------------------------------------------");

let obj ={
    name:"Harry",
    class:"3rd year",
    roll:276001220532,
    sex:"Male"
}
for (const key in obj) {
    // console.log(key);
    const element = obj[key];
    //  console.log(element);         //use for printing only elements 
    console.log(key ,element);       //use for printing key and elements
    
}

console.log("-------------------------------------------");

let p="pagol";
for (const i of p) {
    console.log(i);
}

for (const i of "harry") {
    console.log(i);
}

console.log("-------------------------------------------");

let i=6;
while(i<10)
    {
        console.log(i);
        i++;
    }
    
console.log("-------------------------------------------");
let j=10;
do{
    console.log(j);
    j++;
}
while(j<3);
