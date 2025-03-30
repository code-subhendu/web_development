function getRandomColor()
{
    let val1 =Math.ceil(0 + Math.random()*255)      //0 + Math.random()*255  it will generate number between a and 255
    let val2 =Math.ceil(0 + Math.random()*255)      //min + (max-min)*Math.random()
    let val3 =Math.ceil(0 + Math.random()*255)      // Math.ceil(3.4)    //gives 4 upper integer
    return `rgb(${val1},${val2},${val3})`
}




document.querySelector(".container").addEventListener("click",()=>{
    alert(" container was clicked")
})

// setInterval(()=> {
//     document.querySelector(".container").style.backgroundColor=getRandomColor()
// },3000)          //it will change after and after 3000 mili second=3 second


// let a=setInterval(()=> {
    //     document.querySelector(".container").style.backgroundColor=getRandomColor()
    // },3000)   
// console.log(a)
// clearInterval(a)     //it will clear the setInterval and stop that


// setTimeout(()=> {
//     document.querySelector(".container").style.backgroundColor=getRandomColor()
// },3000)           //the code will run just one time afeter certain period of time


let b=setTimeout(()=> {
    document.querySelector(".container").style.backgroundColor=getRandomColor()
},3000)   
clearTimeout(b)         //it will cancel the setTimeout