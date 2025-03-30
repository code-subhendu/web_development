let p1=new Promise((resolve,reject)=>{
    alert("hei i am resolved")
    setTimeout(()=>{
        resolve(1);
    },2000)
})
p1.then(()=>{
    console.log("Congratulations this promise is now resolved")
})
p1.then(()=>{
    console("hurray")
})