class student{
    constructor(name,number,grid,course){
        this.name=name;
        this.number=number;
        this.grid=grid;
        this.course=course;
    }
}

 class vipstudent extends student {
        constructor(name,number,grid,course,fee){
             
                super(name, number, grid, course);
                this.fee=fee;   
        
    }

    leave(){
        console.log("leave",this.name);
    }
    printdetails(){
        console.log(`name: ${this.name}, number: ${this.number}, grid: ${this.grid}, course: ${this.course}`);
    }


}


let std=new student("yashvi",23456787,9045,"fullstack");
let std2=new student("nidhi",6754328,8765,"fullstack");
console.log(std);
 console.log(std2);
 let vip=new vipstudent("jensie",98765432,9035,"fullstack",5000);
 vip.leave();
 vip.printdetails();
 console.log(vip);