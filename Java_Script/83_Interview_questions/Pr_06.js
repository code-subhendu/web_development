function VowelCounter(str){
    let vowel=["a","e","i","o","u","A","E","i","O","U"];
    let count=0
    for (const element of str) {
        for (const e of vowel) {
            if(element==e){
                count++;
            }
        }
    }
    return count;
}
console.log(VowelCounter("Umbrella"))
