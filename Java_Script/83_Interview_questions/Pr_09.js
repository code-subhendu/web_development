function placeOrder(){
    let rand=Math.random();
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(alert("your order is confirmed"))

        },rand*3000)
    });
}
placeOrder()