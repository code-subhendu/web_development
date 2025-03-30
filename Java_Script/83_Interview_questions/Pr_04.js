function isUpperCase(char){
    return char===char.toUpperCase() && char !==char.toLowerCase();
}
function isLowerCase(char){
    return char===char.toLowerCase() && char !==char.toUpperCase();
}

function PasswardValidator(pw){
    let temp=0;
    if(pw.length<8){
        temp=1;
        console.log("Enter valid length pw");
    }
    let hemp=1;
    for (const element of pw) {
        if(isUpperCase(element)){
            hemp=0;
            break;
        }
    }
    let kemp=1;
    for (const element of pw) {
        if(isLowerCase(element)){
            kemp=0;
            break;
        }
    }
    let samp=1;
    for (const element of pw) {
        if(!Number.isNaN(element)){
            samp=0;
            break;
        }
    }
    if(temp==0 && hemp==0 &&kemp==0 && samp==0){
        return true;
    }
    else{
        return false;
    }

}
console.log(PasswardValidator("Maiti@1205"));
console.log(PasswardValidator("maiti@1006"));

