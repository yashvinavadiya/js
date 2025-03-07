const getvalue = (id) => {
  return document.getElementById(id).value;
};

const validateInput = (id, type) => {
  document.getElementById(id).setAttribute("class", type);
}


const handleuserData = (e) => {
  e.preventDefault();

  let name = getvalue("name");
  let email = getvalue("email");
  let number = getvalue("number");
  let password = getvalue("password");


  validateInput("name", /^[A-Za-z\s]{1,50}$/);
  validateInput("email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  validateInput( "password",/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&?])[A-Za-z\d!#$%&?]{8,20}$/ );
  validateInput("number", /^[789]\d{9}$/);
};

document.getElementById("userdata").addEventListener("submit", handleuserData);

  document.querySelector("#name").addEventListener("input",(e)=>{
    let name = e.target.value;
    let nameregex = /^[A-Za-z\s]{1,50}$/;
    validateInput("name",nameregex.test(name)?"passed":"err");
  });

  document.querySelector("#email").addEventListener("input",(e)=>{
    let email = e.target.value;
    let emailregex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    validateInput("email",emailregex.test(email)?"passed":"err");
  });

  document.querySelector("#password").addEventListener("input",(e)=>{
    let password = e.target.value;
    let passwordregex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&?])[A-Za-z\d!#$%&?]{8,20}$/;
    validateInput("password",passwordregex.test(password)?"passed":"err");
  });

  document.querySelector("#number").addEventListener("input",(e)=>{
    let number = e.target.value;
    let numberregex =  /^[789]\d{9}$/;
    validateInput("number",numberregex.test(number)?"passed":"err");
  });

  