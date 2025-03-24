let like= JSON.parse(localStorage.getItem("like")) || [];

const uimaker=(like)=>{
  
        document.getElementById("likes").innerHTML=" ";
        like.map((ele,i)=>{
        let img=document.createElement("img");
        img.src=ele.image1

        let title = document.createElement("p");
        title.innerHTML = ele.title;

        let price = document.createElement("p");
        price.innerHTML = ele.price;

        let btn = document.createElement("button");
        btn.innerHTML = "delete";

        btn.addEventListener("click", () => {
            like.splice(i, 1);
            localStorage.setItem("like", JSON.stringify(like));
            uimaker(like)
          });

        let div=document.createElement("div");
        div.append(img,title,price,btn);

        document.getElementById("likes").append(div);

    });
};
uimaker(like);