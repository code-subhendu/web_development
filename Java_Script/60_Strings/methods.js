let b="Harry Bhai";
console.log(b.length);
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.slice(2,4));   //from index 2 to 4-1=3
console.log(b.slice(2));   //from index 2 to end
console.log(b.replace("Bhai","Bhau")); 


let name1="harry";
let name2="subhendu";
let name3=name1.concat( name2)
console.log(name3)
// console.log(`${name1}${name2}`)  //same
// console.log(name1+""+name2)  //same

let a="  Harr y ";
console.log(a.trim());   //remove leading and treading white spaces only
console.log(a.replaceAll(" ","")); //used to replacxe all white spaces
let c="  harry'd";
console.log(c.replace(" ",""));  //used to remove first single white space
