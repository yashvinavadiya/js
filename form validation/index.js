let students = [];

const errordetails=(id,msg)=>{
    let error=document.createElement("p");
    error.innerHTML=msg;
    document.getElementById(id).append(error);
    
}

const handledelete=(index)=>{
    students.splice(index,1);
    unimaker();
};
function alldelet(){
    students=[];
    unimaker();
}

const unimaker =()=>{
    document.getElementById("tableb").innerHTML = "";
    students.map((student,i)=>{
        let td1 =document.createElement("td");
        td1.innerHTML =student.name;
        let td2 =document.createElement("td");
        td2.innerHTML =student.email;
        let td3 =document.createElement("td");
        td3.innerHTML =student.number;
        let img = document.createElement("img");
        img.src = student.img;
        let td4 =document.createElement("td");
        td4.append(img);
        let td5 =document.createElement("td");
        td5.innerHTML = student.course;
        let td6 =document.createElement("td");
        td6.innerHTML = student.fee;
        let btn=document.createElement("button");
        btn.addEventListener("click",()=>handledelete(i));
        btn.innerHTML = "button";
        let td7 =document.createElement("td");
        td7.append(btn);

        let tr=document.createElement("tr");
        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.getElementById("tableb").append(tr);
    });
};


const handlesubmit=(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value ;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let img = document.getElementById("img").value;
    let course = document.getElementById("course").value;
    let fee = document.getElementById("fee").value;

    if(name.length<2){
        errordetails("name-box","Name should be at least 2 characters");
        return;
    }
    if(email.length<2){
        errordetails("email-box","Please enter a valid email");
        return;
    }
    if(number.length<10 || number.length>10){
        errordetails("number-box","Please enter a valid number");
        return;
    }
    if(img.length<2){
        errordetails("img-box","Please enter a valid image url");
        return;
    }
    if(course.length<2){
        errordetails("course-box","Please enter a valid course");
        return;
    }
    if(fee<4){
        errordetails("fee-box","Fee should be greater than 0");
        return;
    }
    



    // console.log(name, email, number, img, course, fee);

    let student = {
        name: name,
        email: email,
        number: number,
        img: img,
        course: course,
        fee: fee
    };
    students.push(student);
    console.log(students);
    unimaker();

};
    document.getElementById("student").addEventListener("submit",handlesubmit);
