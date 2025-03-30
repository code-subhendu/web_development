class User{
    constructor(name){  //invokes setter
        this.name=name;     
    }
    get name(){
        return this._name;
    }
    set name(newName){
        // if(newName.length<4){
        //     alert("name is too short.");
        //     return;
        // }
        // this._name=newName;
        this._name=newName
    }
}
let u=new User("harry");
alert(u.name)