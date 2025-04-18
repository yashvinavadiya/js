import usermethod from "../api/user.js";
import { getvalue } from "../utils/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

const Onsubmit=(e)=>{
    e.preventDefault();

    let user={
        name:getvalue("name"),
        email:getvalue("email"),
        password:getvalue("password"),

    };
    usermethod.create(user)
}

document.getElementById("user").addEventListener("submit",Onsubmit)