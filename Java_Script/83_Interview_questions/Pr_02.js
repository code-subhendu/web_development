let arr=[3,5,2,6,6,6,4,7,9,9,4,4];
function double(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1])
        {
            continue;
        }
        else{
            arr[i]=Math.pow(arr[i],2);
        }
    }
}
double(arr);
console.log(arr)