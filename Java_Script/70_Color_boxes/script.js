let rand=Math.random();
let color1;
let color2;
let color3;
let color4;
let color5;
if(rand>=0.8)
{
    color1="red";
    color2="blue";
    color3="green";
    color4="yellow";
    color5="pink";
}
else if(rand>=0.6 && rand<0.8)
{
    color1="pink";
    color2="yellow";
    color3="blue";
    color4="red";
    color5="green";
}
else if(rand>=0.4 && rand<0.6)
{
    color1="yellow";
    color2="red";
    color3="green";
    color4="blue";
    color5="pink";
}
else if(rand>=0.2 && rand<0.4)
{
    color1="green";
    color2="pink";
    color3="red";
    color4="yellow";
    color5="blue";
}
else if(rand>=0 && rand<0.2)
{
    color1="blue";
    color2="green";
    color3="yellow";
    color4="pink";
    color5="red";
}


document.getElementById("box1").style.backgroundColor=color1
document.getElementById("box2").style.backgroundColor=color2
document.getElementById("box3").style.backgroundColor=color3
document.getElementById("box4").style.backgroundColor=color4
document.getElementById("box5").style.backgroundColor=color5

document.getElementById("box1").style.color=color3
document.getElementById("box2").style.color=color1
document.getElementById("box3").style.color=color5
document.getElementById("box4").style.color=color2
document.getElementById("box5").style.color=color4