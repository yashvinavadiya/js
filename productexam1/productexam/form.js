let value=JSON.parse(localStorage.getItem("value1")) || [];

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
uimaker(value);