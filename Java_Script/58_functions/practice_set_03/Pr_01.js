let marks ={
    harry:87,
    rohan:70,
    aakash:36
}

for (let i=0;i<Object.keys(marks).length;i++)              //Object.keys(marks)   -->it returns an array of keys of marks
{                                                          //Object.keys(marks).length    -->length of array
    console.log(marks[Object.keys(marks)[i]]);             // Object.keys(marks)[i]   --> arr[i]
}

console.log("---------------------------------------");

for(const key in marks)
{
    console.log(marks[key]);
}


