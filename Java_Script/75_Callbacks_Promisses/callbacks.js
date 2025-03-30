        //callbacks
// const loadScript=(link,callback)=>{
//     let sc=document.createElement("script");
//     sc.src=link;
//     sc.onload=callback();
//     document.body.append(sc);
// }
// // loadScript("hello.js",GoodMorning)     //whatever function we can give here as an argument that will run 
// loadScript("hello.js",Hello) 
// function Hello()
// {
//     alert("hello!")
// }
// function GoodMorning()
// {
//     alert("good morning!")
// }

// const loadScript=(link,callback)=>{
//     let sc=document.createElement("script");
//     sc.src=link;
//     sc.onload=callback("baby");  //can take argument also
//     document.body.append(sc);
// }
// // loadScript("hello.js",GoodMorning)     //whatever function we can give here as an argument that will run 
// loadScript("hello.js",Hello) 
// function Hello(a)
// {
//     alert("hello! "+a);
// }
// function GoodMorning()
// {
//     alert("good morning!");
// }


const loadScript=(link,callback)=>{
    let sc=document.createElement("script");
    sc.src=link;
    sc.onload=function(){
        callback(null,link);  //can take argument also  //no error-then error=null
        console.log("Loaded script with src:"+link)
    }
    sc.onerror=function(){
        console.log("Error loading with src:"+link)
        callback(new Error("link got some error"))
    }
    document.body.append(sc);

}
// loadScript("hello.js",GoodMorning)     //whatever function we can give here as an argument that will run 
loadScript("hello.js",Hello) 
function Hello(err,a)
{
    if(err)
    {
        console.log("hi "+err)
        return
    }
    alert("hello! "+a);
}
function GoodMorning(err,a)
{
    if(err)
    {
        console.log("dj "+err)
        return
    }
    alert("Good Morning! "+a);
}

