const getvalue = (id) => {
    return document.getElementById(id).value;
};

let value=JSON.parse(localStorage.getItem("value1")) || [];

const handlesubmit=(e) => {
e.preventDefault();

     let value1={
        title:getvalue("title"),
        description:getvalue("description"),
        img:getvalue("img"),
        category:getvalue("category"),

     }
     value.push(value1);
     localStorage.setItem("value1",JSON.stringify(value));
}
const uimaker=(value) => {
    

    document.getElementById("ui").innerHTML=" ";
    value.map((news,i)=>{
        let title = document.createElement("title");
        title.innerHTML=news.title;

        let description= document.createElement("description");
        description.innerHTML=news.description;

        let img = document.createElement("img");
        img.src=news.img1;

        let image=document.createElement("p");
        image.append(img);

        let btn = document.createElement("button");
        btn.innerHTML = "delete";

        btn.addEventListener("click",()=>handledelet(i))

         let button = document.createElement("p");
        button.append(btn);


        let category = document.createElement("category");
        category.innerHTML=news.category;

        let div=document.createElement("div");
        div.append(title,description,image,button,category);

        document.getElementById("ui").append(div);
    });
};

const handledelet=(i) => {
    value.splice(i,1);
    localStorage.setItem("value",JSON.stringify(value));
    uimaker(value);

}

 const search=(value)=>{
    let temp=value.filter((ele)=>ele.title.tolowercase().includes(value.tolowercase));
        uimaker(temp);
 }


uimaker(value);
document.getElementById("form").addEventListener("submit",handlesubmit)