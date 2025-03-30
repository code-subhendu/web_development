class Animal{
    constructor(sign){
        this.name=sign;     //this crates a name variable which stores the name which is passes white crating object
        console.log("Object is created");
    }
    eats(){
        console.log("Kha raha hoon");
    }
    jump(){
        console.log("mai kood raha hoon");
    }
    // jump(p){     //java script  does not suppot method over loading
    //     console.log("i want to jump "+p+" miter")
    // }

}

class Lion extends Animal{
    constructor (fullname){
        super(fullname)     ///it will call its immidiate parent class constructor
        console.log("Object is created and he is a lion....")
    }
    kill(){
        // super.jump()
        console.log("haan ma mar deta hoon");
    }
    eats(){     //method overloading
        console.log("tu khayega")
    }
}

let a=new Animal("kalu");
console.log(a);
a.jump(4)

// let l=new Lion("Shera");
// // console.log(l);
// // l.eats();
