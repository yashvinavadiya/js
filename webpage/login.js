let users=JSON.parse(localStorage.getItem('users'))||[]

const isExists=(email)=>{
    let isuser=users.find((user)=>user.email===email);
    if (isuser){
        return{found:true,user:isuser};
    }
    else{
        return{found:false,user:isuser};
    }

}
const handlesubmit=(e)=>{
    e.preventDefault();
    let users={
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
    }
    
    let userdata=isExists(users.email);
    if(userdata.found){
        if(userdata.user.password==users.password){
            alert("login success");
             window.location.href="./index.html"
        }
        else{
            alert("password dors not match");
        }
    }
    else{
        alert("invalid email");
    }
};

document.querySelector("#email").addEventListener("input",(e)=>{
    let email=e.target.value;
    let emailregex= /^[^@]+@[^@]+\.[^@]+$/;
    if(emailregex.test(email)){
        document.getElementById("email").setAttribute("class","passed")
    }
    else{
        document.getElementById("email").setAttribute("class","error")
    }
})


document.getElementById("login").addEventListener("submit",handlesubmit);

