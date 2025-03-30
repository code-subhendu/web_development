rand=Math.random();
let Adj;
if(rand<0.4)
{
    Adj="Crazy";
}
else if(rand>0.4 && rand<0.7)
{
    Adj="Amazing";
}
else{
    Adj="Fire";
}

hand=Math.random();
let Shope_name;
if(hand<0.4)
{
    Shope_name="Engine";
}
else if(hand>0.4 && rand<0.7)
{
    Shope_name="Foods";
}
else{
    Shope_name="Garments";
}

jand=Math.random();
let Another_name;
if(jand<0.4)
{
    Another_name="Bros";
}
else if(jand>0.4 && rand<0.7)
{
    Another_name="Limited";
}
else{
    Another_name="Hub";
}
let hi=Adj.concat(" ",Shope_name," ",Another_name);
// console.log(hi);
document.getElementById("show").textContent = hi;
