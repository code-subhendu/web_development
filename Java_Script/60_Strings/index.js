let a="harry";
console.log(a);
console.log(a[1]);        //access nth index element
console.log(a.length);

// let my_name="Subhendu";
let my_name='Subhendu';        //same double inverted coma and single inverted coma both makes string
let friend ="Rohan";
// console.log("his name is "+my_name+" and his friends name is "+friend);


        //template literals
console.log(`his name is ${my_name} and his friends name is ${friend}`); //String Interpolation -->insert variable directly 
console.log(`hello`);
console.log(`hi i can't find the meaning of "Hello"`);        //here we can use sigle coute and double coute inside it 



        //escape sequence
// let name=" I don't know the meaning of "hello" my friend";   //this will give error
// let name=' I don't know the meaning of "hello" my friend';    //this will give error
let name=` I don't know the meaning of "hello" my friend`;     //this is right
let same=" I don't know the meaning of \"hello\" my friend";    //this is right

console.log("hi i am subhendu maiti\n i love you");         //new line
console.log("hi i am subhendu maiti\t i love you");         //tab
console.log("hi i am subhendu maiti\r i love you");         //carriage returns