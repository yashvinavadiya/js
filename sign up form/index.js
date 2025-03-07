const getvalue=(id)=>{
    return document.getElementById(id).value
}
const validateInput = (id, regex) => {
    let value = document.getElementById(id).value;
    let isValid = regex.test(value);
    document.getElementById(id).setAttribute("class", isValid ? "paased" : "err");
  };
  
const handleuserData=(e)=>{
    e.preventDefault();


    let name=getvalue("name").value;
    let email=getvalue("email").value;
    let number=getvalue("number").value;
    let password=getvalue("password").value;

  validateInput("name", /^(?=.*[0-9])(?=.*[A-Za-z]).{8,32}$/); 
  validateInput("email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/); 
  validateInput(
    "password",
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
  ); 
  validateInput("number", /^\d{10}$/);

}
document.getElementById("userdata").addEventListener("submit",handleuserData);