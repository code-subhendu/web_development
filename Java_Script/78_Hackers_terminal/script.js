// let a="r";
// async function dot(){
//     setInterval(()=>{
//         // alert("ji")
//         a=".jhk"
//     },1000)
// }
// dot()

const randomDelay=()=>{
    return new Promise((resolve,reject)=>{
        let timeout=1+6*Math.random();
        setTimeout(()=>{
            resolve();
        },timeout*1000)
    })
}

const randomDot=()=>{
    return new Promise((resolve,reject)=>{
        let timeout=1+6*Math.random();
        setInterval(()=>{
            resolve();
        },timeout*100)
    })
}
async function hack(){
    // await randomDelay();
    let t=setInterval(()=>{
        let last =document.body.getElementsByClassName("pera")[0];
        if(last.innerHTML.endsWith("..."))
        {
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        else{
            last.innerHTML=last.innerHTML+".";
        }

    },600)
    document.body.children[0].innerHTML="Initializing Hacking";
    await randomDelay();
    document.body.children[1].innerHTML="Reading your files";
    await randomDelay();
    document.body.children[2].innerHTML="Password files Dected";
    await randomDelay(); 
    document.body.children[4].innerHTML="sending all personal files to server";
    await randomDelay();
    document.body.children[3].innerHTML="Cleaning up";
    
}
hack()




// Initializing Hacking...
// Reading your files...
// Password files Dected...
// Cleaning up...

//the three dots must blink