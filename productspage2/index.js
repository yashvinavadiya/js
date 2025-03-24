const getvalue = (id) => {
    return document.getElementById(id).value;
};

let products = JSON.parse(localStorage.getItem("products")) || [];
let like= JSON.parse(localStorage.getItem("like")) || [];


const uimaker = (products) => {

    document.getElementById("productlist").innerHTML = " ";
    products.map((product,i) => {
        let title = document.createElement("p");
        title.innerHTML = product.title;

        let price = document.createElement("p");
        price.innerHTML = product.price;

        let image = document.createElement("img");
        image.src = product.image1;

        let img = document.createElement("p");
        img.append(image);

        let btn = document.createElement("button");
        btn.innerHTML = "delete";

        let button = document.createElement("p");
        button.append(btn);

        let likebtn=document.createElement("button");
        likebtn.innerHTML="likebbtn";

        

        btn.addEventListener("click",()=>handledelete(i))
        likebtn.addEventListener("click",()=>{
            if(isExists(product.id))
            {
                alert("product already exists");
                uimaker(products);
            }
            else{
                like.push(product)
                alert("added");
                localStorage.setItem("like",JSON.stringify(like));
                uimaker(products);
            } 
        })
   

        let category = document.createElement("p");
        category.innerHTML = product.category;

        let div= document.createElement("div");
        div.append( img,title, price, category,button,likebtn);

        document.getElementById("productlist").append(div);
    });

};

uimaker(products);

const isExists=(id)=>{
    for(let i=0;i<like.length;i++)
    {
        if(like[i].id==id)
        {
            return true;
        }
    }
    return false;
}



const handlesort=(orderby)=>{
    if(orderby=="lth")
    {
        let temp=products.sort((a,b)=>a.price-b.price);
        uimaker(temp);
    }
    else{
        let temp=products.sort((a,b)=>b.price-a.price);
        uimaker(temp);
    }
    
};
    document.getElementById("lth").addEventListener("click",()=>handlesort("lth"));
    document.getElementById("htl").addEventListener("click",()=>handlesort("htl"));
const handledelete=(i)=>{
    products.splice(i,1)
    uimaker(products);
    localStorage.setItem("products", JSON.stringify(products));
}

const filterbycategory=(category)=>{
    if(category=="all")
    {
        uimaker(products);
        return;
    }
    let temp=products.filter((category1)=>category1.category==category);
    uimaker(temp);
}
document.getElementById("women").addEventListener("click",()=>filterbycategory("women"));
document.getElementById("men").addEventListener("click",()=>filterbycategory("men"));
document.getElementById("kids").addEventListener("click",()=>filterbycategory("kids"));
document.getElementById("all").addEventListener("click",()=>filterbycategory("all"));


const handlesubmit = (e) => {
    e.preventDefault();

    let product = {
        title: getvalue("title"),
        price: getvalue("price"),
        image1: getvalue("img"),
        category: getvalue("category"),
        id:Date.now()
    };
    products.push(product);
    uimaker(products);
    localStorage.setItem("products", JSON.stringify(products));
}


const search=(value)=>{
    let temp=products.filter((ele)=>ele.title.toLowerCase().includes(value.toLowerCase()));
    uimaker(temp);
   
}
document.getElementById("search").addEventListener("input",()=>{
    let value=getvalue("search");
    search(value);
});

document.getElementById("product").addEventListener("submit", handlesubmit)