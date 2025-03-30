  //DOM--> a programming  interface that allows script to interect with web documents.This allowes developers to modify the content ,structure and style of the web pages
alert("hello");
document.title="Harry is a good  guy";
console.log(document.title);
console.log(document.body);
document.body.style.backgroundColor="green";       //it will create an inline css





      //console onbject methods--------->
console.log(console);
console.warn("hi  nnnn");
console.info("hi i am subhendu");



console.time("forLoop");

for(let i=0;i<=6;i++)
  {
    console.log(6);
  }

console.timeEnd("forLoop");

console.time("forLoop");
let a=0
while(a!=6)
{
  console.log(6);
  a++;
}

console.timeEnd("forLoop");

confirm("hi");
var k=prompt("Enter your number");