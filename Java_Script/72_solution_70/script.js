function getRandomColor()
{
    let val1 =Math.ceil(0 + Math.random()*255)      //0 + Math.random()*255  it will generate number between a and 255
    let val2 =Math.ceil(0 + Math.random()*255)      //min + (max-min)*Math.random()
    let val3 =Math.ceil(0 + Math.random()*255)      // Math.ceil(3.4)    //gives 4 upper integer
    return `rgb(${val1},${val2},${val3})`
}


// document.getElementById("box1").style.backgroundColor=getRandomColor()
// document.getElementById("box2").style.backgroundColor=getRandomColor()
// document.getElementById("box3").style.backgroundColor=getRandomColor()
// document.getElementById("box4").style.backgroundColor=getRandomColor()
// document.getElementById("box5").style.backgroundColor=getRandomColor()
// document.getElementById("box1").style.color=getRandomColor()
// document.getElementById("box2").style.color=getRandomColor()
// document.getElementById("box3").style.color=getRandomColor()
// document.getElementById("box4").style.color=getRandomColor()
// document.getElementById("box5").style.color=getRandomColor()

let boxes=document.querySelector(".container").children
Array.from(boxes).forEach(element => {
    element.style.backgroundColor=getRandomColor()
    element.style.color=getRandomColor()
});

/*
var boxes=document.querySelectorAll(".box");
for(var i=0;i<boxes.length;i++)
{
    var box=boxes[i];                           //16777215 is white in decimal
    var randomColor="#" + Math.floor(Math.random()*16777215).toString(16);      //Math.floor-->roounds a number down to the nearest Integer
    var randomBackgroundColor="#" + Math.floor(Math.random()*16777215).toString(16);
    box.style.color=randomColor;
    box.style.backgroundColor=randomBackgroundColor;
}
*/