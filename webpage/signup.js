let users=JSON.parse(localStorage.getItem('users'))||[]
const isExists=(email)=>{
    let isusers=users.find((user)=>user.email===email);
    if(isusers){
        return true;
    }
    else{
        return false;
    }
}

const handlesubmit=(e)=>{
    e.preventDefault();
    let user={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
    };

    if(isExists(users.email)){
        alert("user already exists");
        return;
    }
    else{
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        alert("user created successfully");
        document.getElementById("SignUp").reset();
    }
};

document.getElementById("SignUp").addEventListener("submit",handlesubmit);

