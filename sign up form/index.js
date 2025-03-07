const getvalue = (id) => {
  return document.getElementById(id).value;
};

const validateInput = (id, regex) => {
  let value = document.getElementById(id).value;
  let isValid = regex.test(value);
  document.getElementById(id).setAttribute("class", isValid ? "passed" : "err");
};

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