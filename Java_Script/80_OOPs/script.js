let obj={       //object
    a:1,
    b:"harry"
}
console.log(obj)
console.log(obj.a)
console.log(obj.b)


    //prototype-->this is an additinal properties which inherites some properties

let Animel={
    eats:true
};

let Rabbit={
    jumps:true
};

Rabbit.__proto__=Animel;    //sets Rabbit.[[prototype]]=Animel

console.log(Rabbit.eats)    //its gives true because it rabbit inherit Animel
console.log(Rabbit)