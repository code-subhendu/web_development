        //EventBubbling-->if i listne Event in one child element then EventListener of that element and also parents Listener will also active
// document.querySelector(".child").addEventListener("click",()=>{
//     alert("child was clicked")
// })
// document.querySelector(".childContainer").addEventListener("click",()=>{
//     alert("child container was clicked")
// })
// document.querySelector(".container").addEventListener("click",()=>{
//     alert(" container was clicked")
// })


    // if i click on child part then it will show all the three alerts
    // if i click on childContainer part then it will show two alerts
    // if i click on Container part then it will show one alerts
    
        //if i want that if i click on child part that will show only one alert then we have to stop Propagation

document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("child was clicked")
})
document.querySelector(".childContainer").addEventListener("click",()=>{
    e.stopPropagation()
    alert("child container was clicked")
})
document.querySelector(".container").addEventListener("click",()=>{
    alert(" container was clicked")
})