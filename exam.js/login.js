let messages=JSON.parse(localStorage.getItem("messages")) || [];

const isExists=(email)=>{
    let isuser=messages.find((message)=>message.email===email);
    if (isuser){
        return{found:true,message:isuser};
    }
    else{
        return{found:false,message:isuser};
    }

};
const handlesubmit=(e)=>{
    e.preventDefault();
    let user={
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
    }
    
    let userdata=isExists(user.email);
    if(userdata.found){
        if(userdata.message.password==user.password){
            alert("login success");
        }
        else{
            alert("password dors not match");
        }
    }
    else{
        alert("invalid email");
    }
};

document.getElementById("login").addEventListener("submit",handlesubmit);

