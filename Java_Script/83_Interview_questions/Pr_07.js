// if(localStorage.getItem("name")){   //here name will be the key and Subhendu will be the  value
//     a=localStorage.getItem("name");
//     document.write("welcome "+a)
// }
// else{   //if there is no value with key name
//     let a=prompt("Enter your name");
//     localStorage.setItem("name",a);
//     document.write("welcome "+a)
// }


function saveNoteToLocalStorage(note){
    localStorage.setItem("note",note);
}

let b=localStorage.getItem("note")
if(b){
    document.write(b);
}

document.querySelector("button").addEventListener("click",()=>{
    let a=prompt("Enter your note");
    saveNoteToLocalStorage(a);
    // document.write(note)
})