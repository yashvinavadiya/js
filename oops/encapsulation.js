class student{
    #name;
    constructor(name, number,grid,course){
        this.#name=name;
        this.number=number;
        this.grid=grid;
        this.course=course;
    }

    
getname(){
    console.log(this.#name);
}

setname(name){
    this.#name=name;
}
}

let std=new student("yashvi",23456787,9045,"fullstack");

std.setname("yashu");
std.getname();

