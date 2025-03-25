

const getvalue = (id) => {
    return document.getElementById(id).value;
};

let value=JSON.parse(localStorage.getItem("value1")) || [];

const handlesubmit=(e) => {
    e.preventDefault();

     let value11={
        title:getvalue("title"),
        description:getvalue("description"),
        img:getvalue("img"),
        category:getvalue("category"),

     }
     value.push(value11);
     localStorage.setItem("value1",JSON.stringify(value));
}

document.getElementById("form").addEventListener("submit",handlesubmit)