let users=JSON.parse(localStorage.getItem('users'))||[]

const isExists=(email)=>{
    let isuser=users.find((user)=>user.email===email);
    if (isuser){
        return{found:true,user:isuser};
    }
    else{
        return{found:false,user:isuser};
    }
// };

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

document.getElementById("login").addEventListener("submit",handlesubmit);

