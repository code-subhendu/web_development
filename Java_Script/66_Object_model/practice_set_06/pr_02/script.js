// if(a>=18)
// {
//     alert("you can drive!");
// }
// else{
    //     alert("you can't drive");
    // } 
    
const canDrive=(i)=>{
    return (i>=18)?true:false;
}
let runagain=true;
while(runagain){
    let a=prompt("Enter your age:");
    a=Number.parseInt(a);
    if(a<0)
    {
        console.error("please Enter right age");
        break;
    }
    if(canDrive(a))
    {
        alert("you can drive!");
    }
    else{
        alert("you can't drive");
    }
    runagain=confirm("do you want to run again:");
}
