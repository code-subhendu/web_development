function calculate(cart){
    let sum=0;
    for (const element of cart) {   
        sum=sum+(element.quantity * element.price);
    }
    return sum;
}
let cart=[
    {name:'shoes',quantity:3,price:3000},
    {name:'mobile',quantity:1,price:20000},
    {name:'shirt',quantity:2,price:500}
]
console.log(calculate(cart))
