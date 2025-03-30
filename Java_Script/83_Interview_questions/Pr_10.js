async function brewCoffee(coffeeType){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${coffeeType} is  ready`);
        },1000*Math.random())
    })
}
// brewCoffee('Espresso')
brewCoffee('Espresso').then(a=>console.log(a));