// let users=JSON.parse(localStorage.getItem('users'))||[]

// const isExists=(email)=>{
//     let isuser=users.find((user)=>user.email===email);
//     if (isuser){
//         return{found:true,user:isuser};
//     }
//     else{
//         return{found:false,user:isuser};
//     }
// };
// let userdata=isExists(users.email);
// if(userdata.found){
//     if(userdata.user.password==user.password){
//         alert("login success");
//     }
//     else{
//         alert("password dors not match");
//     }
// }
// else{
//     alert("invalid email");
//     console.log(userdata);
// }

// const handlesubmit=(e)=>{
//     e.preventDefault();
//     let user={
//         email:document.getElementById('email').value,
//         password:document.getElementById('password').value,
//     }
    
//     if(isExists(users.email)){
//         alert("user already exists");
//         return;
//     }
//     else{
//         users.push(user);
//         localStorage.setItem("users",JSON.stringify(users));
//         alert("user created successfully");
//         document.getElementById("login").reset();
//     }
// };

// document.getElementById("login").addEventListener("submit",handlesubmit);


let users = JSON.parse(localStorage.getItem('users')) || [];

const isExists = (email) => {
    let isUser = users.find((user) => user.email === email);
    return isUser ? { found: true, user: isUser } : { found: false, user: null };
};

const handlesubmit = (e) => {
    e.preventDefault();
    
    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    let userdata = isExists(user.email);

    if (userdata.found) {
        alert("User already exists");
        return;
    } else {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("User created successfully");
        document.getElementById("login").reset();
    }
};

document.getElementById("login").addEventListener("submit", handlesubmit);

// LOGIN FUNCTIONALITY
const handleLogin = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let userdata = isExists(email);

    if (userdata.found) {
        if (userdata.user.password === password) {
            alert("Login success");
        } else {
            alert("Password does not match");
        }
    } else {
        alert("Invalid email");
        console.log(userdata);
    }
};

// Attach login event to a button (assuming there's a button with id="loginBtn")
document.getElementById("loginBtn").addEventListener("click", handleLogin);
