console.log("har\"".length);

console.log("---------------------------------------------");
let r="The quick brown fox jump over the lezzy dog";
let word="fox";
console.log(r.includes(word));
console.log(`the word ${word} ${r.includes(word) ? "is" :"is not"} in the sentence`);

console.log(r.startsWith("The"));
console.log(r.endsWith("frog"));


console.log("--------------------------------------------");
let a="HI I am Subhendu Maiti";
let b=a.toLowerCase();
console.log(b);


console.log("--------------------------------------------");
let str="Plese give me Rs. 1000";
let amount=str.slice("Plese give me Rs. ".length);
console.log(amount);
console.log(typeof amount);
amount=Number.parseInt(amount);
console.log(typeof amount);


console.log("--------------------------------------------");
let friend="Rahul";
friend[3]="m";    //it does not change the string because string is immutable
console.log(friend);
