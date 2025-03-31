let messages=JSON.parse(localStorage.getItem("messages")) || [];
const isExist=(email)=>{
    let isusers=messages.find((message)=> message.email===email);
    if(isusers){
        return true;
    }
    else{
        return false;
    }
}

const handlesubmit=(e)=>{
    e.preventDefault();

    let message={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    };

    if(isExist(message.email)){
        alert("Email already exists.");
        return;
    }
   else{
    messages.push(message);
    localStorage.setItem("messages",JSON.stringify(messages));
    alert("created successfully");
    document.getElementById("signup").reset();
   }
  

}
document.getElementById("signup").addEventListener("submit",handlesubmit);