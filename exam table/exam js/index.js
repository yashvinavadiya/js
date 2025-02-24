let arr=[]

const handeldelete = (index)=>{
    arr.splice(index, 1);
     uimaker();
};

function alldelete()
{
    arr=[];
    uimaker();
}

const uimaker =()=>{
    document.getElementById("tableBody").innerHTML="";
    arr.map((employ,i)=>{

        
        let img=document.createElement("img");
        img.src=employ.img;

        let td1=document.createElement("td");
        td1.append(img);

        let td2=document.createElement("td");
        td2.innerHTML=employ.name;

        let td3=document.createElement("td");
        td3.innerHTML=employ.number;

        let td4=document.createElement("td");
        td4.innerHTML=employ.email;
        
        let td5=document.createElement("td");
        td5.innerHTML=employ.jobRoll;

        let td6=document.createElement("td");
        td6.innerHTML=employ.experience;

        let td7=document.createElement("td");
        td7.innerHTML=employ.sallery;

        let button=document.createElement("button");
        button.addEventListener("click",()=>handeldelete(i))
        button.innerHTML="Delete";

        let td8=document.createElement("td");
        td8.append(button);

        let tr=document.createElement("tr");
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        document.getElementById("tableBody").append(tr);



    });
};

const handelsubmit =(e) =>{
    e.preventDefault();

    let img=document.getElementById("img").value;
    let name=document.getElementById("name").value;
    let number=document.getElementById("number").value;
    let email=document.getElementById("email").value;
    let jobRoll=document.getElementById("jobRoll").value;
    let experience=document.getElementById("experience").value;
    let Sallery=document.getElementById("Sallery").value;

    let newEmploy={
        img:img,
        name:name,
        number:number,
        email:email,
        jobRoll:jobRoll,
        experience:experience,
        Sallery:Sallery
    };

    arr.push(newEmploy);

    uimaker();

};
    document.getElementById("newEmploy").addEventListener("submit",handelsubmit);
   