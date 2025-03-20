const getvalue = (id) => {
    return document.getElementById(id).value;
};

let products = JSON.parse(localStorage.getItem("products")) || [];

const uimaker = (products) => {

    document.getElementById("productlist").innerHTML = ""
    products.map((product,i) => {
        let title = document.createElement("p");
        title.innerHTML = product.title;

        let price = document.createElement("p");
        price.innerHTML = product.price;

        let image = document.createElement("img");
        image.src = product.img;

        let img = document.createElement("p");
        img.append(image);

        let btn = document.createElement("button");
        btn.innerHTML = "delete";

        let button = document.createElement("p");
        button.append(btn);

        btn.addEventListener("click",()=>handledelete(i))

        let category = document.createElement("p");
        category.innerHTML = product.category;

        document.getElementById("productlist").append(title, price, img, category,button);
    });

};


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
        img: getvalue("img"),
        category: getvalue("category"),
    };
    products.push(product);
    uimaker(products);
    localStorage.setItem("products", JSON.stringify(products));




}
uimaker(products);

document.getElementById("product").addEventListener("submit", handlesubmit)