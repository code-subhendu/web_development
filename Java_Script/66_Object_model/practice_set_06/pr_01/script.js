let a=prompt("Enter your age:");
a=Number.parseInt(a);
// if(a>=18)
// {
//     alert("you can drive!");
// }
// else{
//     alert("you can't drive");
// } 


const canDrive=(i)=>{
    (a>=18)?true:false;
}
if(canDrive(a))
{
    alert("you can drive!");
}
else{
    alert("you can't drive");
}
