students =["rohan","rahul","subhendu","subhadip","sankhadip","kalyankar","keya","ram","priyangsu","sam"];
let houses=[];
for (const stu of students) {
    if(stu.length<4){
        houses.push("Gryffindor");
    }
    else if(stu.length<6){
        houses.push("Hufflepuff");
    }
    else if(stu.length<8){
        houses.push("Ravenclaw");
    }
    else if(stu.length<10){
        houses.push("Slytherin");
    }
}
console.log(houses)
