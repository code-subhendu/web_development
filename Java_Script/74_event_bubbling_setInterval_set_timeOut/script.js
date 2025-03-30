let button=document.getElementById("btn")
button.addEventListener("contextmenu",()=>{
    alert("don't right click please")
})
button.addEventListener("click",()=>{
    // alert("Hei i am clicked ,yehhh!")
    document.querySelector(".box").innerHTML="<b> yehhh You are clicked</b> Enjoy your click"
})
document.addEventListener("keydown",(e)=>{
    alert("hi.........")
    console.log(e)
    console.log(e.key,e.keyCode)
})

// button.removeEventListener("contextmenu",()=>{
//     alert("right click please")
// })


// mouse Events--->
/*
click	A user clicks on an element
contextmenu	 A user right-clicks on an element
dblclick	A user double-clicks on an element
mousedown	A mouse button is pressed over an element
mouseenter	The mouse pointer moves into an element
mouseleave	The mouse pointer moves out of an element
mousemove	The mouse pointer moves over an element
mouseout	The mouse pointer moves out of an element
mouseover	The mouse pointer moves onto an element
mouseup	A mouse button is released over an element
*/

// keyboard events---->
/*
keydown	A user presses a key
keypress	A user presses a key
keyup	A user releases a key
*/