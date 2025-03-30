function sum(arr){
    let s=0;
    for (const element of arr) {
        if(element >=0){
            s=s+element;
        }
        else{
            break;
        }
    }
    return s;
}
let arr=[2,5,3,0,-3,0,4]
console.log(sum(arr))