const getvalue=(id)=>{
    return document.getElementById(id).value
}
const handleuserData=(e)=>{
    e.preventDefault();

    let nameregex= /^[a-zA-Z ]{2,30}$/;
    let emailregex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let numberregex=/[0-9]/;
    let passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    let name=getvalue("name").value;
    let email=getvalue("email").value;
    let number=getvalue("number").value;
    let password=getvalue("password").value;

    if(nameregex.test(name)){
        document.getElementById("name").setAttribute("class","passed");
    }
    else{
        document.getElementById("name").setAttribute("class","err");
    }

}
document.getElementById("userdata").addEventListener("submit",handleuserData);