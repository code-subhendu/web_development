async function delay() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4);
        },500)
    })   
}
async function main(){
    let arr=[2,5,1,7,3,4,9,0,2];
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]*2;
        await delay()
        console.log(arr[i]);
    }
    
}
console.log(main());
