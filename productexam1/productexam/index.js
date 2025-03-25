const getvalue = (id) => {
    return document.getElementById(id).value;
};

let value=JSON.parse(localStorage.getItem("value1")) || [];


const uimaker=(value) => {
    

    document.getElementById("ui").innerHTML=" ";
    value.map((news,i)=>{
        let title = document.createElement("h1");
        title.innerHTML=news.title;

        let description= document.createElement("p");
        description.innerHTML=news.description;

        let img = document.createElement("img");
        img.src=news.img;

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
        div.append(title,image,description,category,button);

        document.getElementById("ui").append(div);
    });
};

const handledelet=(i) => {
    value.splice(i,1);
    localStorage.setItem("value1",JSON.stringify(value));
    uimaker(value);

}

 const searching=(value1)=>{
    let temp=value.filter((ele)=>ele.title.toLowerCase().includes(value1.toLowerCase()));
        uimaker(temp);
 }

 document.getElementById("search").addEventListener("input",()=>{
    let value=getvalue("search");
    searching(value);
 });

 const filterbycategory=(category)=>{
    if(category=="all")
    {
        uimaker(value)
        return;
    }
    let temp=value.filter((categ)=>categ.category==category);
    uimaker(temp);
 }

 document.getElementById("food").addEventListener("click",()=>filterbycategory("food"));
document.getElementById("clothing").addEventListener("click",()=>filterbycategory("clothing"));
document.getElementById("health").addEventListener("click",()=>filterbycategory("health"));
document.getElementById("all").addEventListener("click",()=>filterbycategory("all"));

uimaker(value);
