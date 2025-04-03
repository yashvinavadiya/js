let data=[ {
    "id": 1,
    "title": "Computer",
    "price": 35000,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.",
    "category": "Computer",
    "image": "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg",
  
  },
  {
    "id": 2,
    "title": "Computer ",
    "price": 40000,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric .",
    "category": "Computer",
    "image": "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_640.jpg",
   
  },
  {
    "id": 3,
    "title": "Computer",
    "price": 30000,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
    "category": "Computer",
    "image": "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?cs=srgb&dl=pexels-joshsorenson-1714208.jpg&fm=jpg",
  
  },
  {
    "id": 4,
    "title": "Laptop",
    "price": 15990,
    "description": "The color could be slightly different between on the screen. ",
    "category": "Laptop",
    "image": "https://www.techtarget.com/rms/onlineimages/hp_elitebook_mobile.jpg",
   
  },
  {
    "id": 5,
    "title": "Laptop",
    "price": 69500,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to.",
    "category": "Laptop",
    "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/01/hero-21-1920x1080.jpg",
   
  },
  {
    "id": 6,
    "title": "Laptop ",
    "price": 168000,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.",
    "category": "Laptop",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrndjBeW1ZP8IOUCBppHIERcpfMo0JZDxvKHQy2G5MhmOe2-uWxaYv4F65Rby4Dj5sHm8&usqp=CAU",
  
  },
  {
    "id": 7,
    "title": "Laptop",
    "price": 99999,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
    "category": "Laptop",
    "image": "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg",
   
  },
  {
    "id": 8,
    "title": "Laptop",
    "price": 10000,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.",
    "category": "Laptop",
    "image": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
   
  },
  {
    "id": 9,
    "title": "Laptop ",
    "price": 64000,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity. ",
    "category": "Laptop",
    "image": "https://media.istockphoto.com/id/1140137769/photo/blank-screen-laptop-in-living-room.jpg?s=612x612&w=0&k=20&c=Q7D1Ssdf1w5Y_sM-x8neoIXRMDnPzZ092Oeuev07DC4=",
   
  },
  
  
  
  ]

  
  let Wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
  
  const uimaker = (data) => {
    let temp = " ";
  
    for (let i = 0; i < data.length; i++) {
      temp += `
      <div class="col-lg-4 col-md-6 py-3 main">
        <div class="box">
          <div class="flex"> <img src="${data[i].image}" alt="" class="img-fluid img"></div>
          <div class="flex"> <h3 class="ti">${data[i].title}</h3></div>
          <div class="flex"> <p class="ti1">${data[i].price}</p></div>
          <div class="flex"> <p>${data[i].description}</p></div>
          <button class="AddToWishList" data-id="${data[i].id}">Add Wish List</button>
        </div>
      </div>
      `;
    }
    document.getElementById("products").innerHTML = temp;
  
    addToCartListener(); // Attach event listeners
  };
  
  // Check if product exists in Wishlist
  const isExists = (id) => Wishlist.findIndex((item) => item.id == id);
  
  const addToCartListener = () => {
      document.querySelectorAll(".AddToWishList").forEach((button) => {
          button.addEventListener("click", (e) => {
              const productId = e.target.getAttribute("data-id");
              const productIndex = isExists(productId);
              const product = data.find((p) => p.id == productId);
  
              if (!product) {
                  console.error("Product not found!");
                  return;
              }
  
              if (productIndex !== -1) {
                  // Product already exists → Increase quantity
                  Wishlist[productIndex].quantity += 1;
                  alert("Product quantity increased in the wishlist.");
              } else {
                  // Product does not exist → Add with quantity = 1
                  product.quantity = 1;
                  Wishlist.push(product);
                  alert("Product added to the wishlist.");
              }
  
              localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
          });
      });
  };
  
  uimaker(data);

  // for sorting
  const handleSort = (orderby) => {
    if (orderby === "lth") {
      data.sort((a, b) => a.price - b.price);
    } else if (orderby === "htl") {
      data.sort((a, b) => b.price - a.price);
    }
  
    uimaker(data);
  };
  
  uimaker(data);
  
  document
    .getElementById("htl")
    .addEventListener("click", () => handleSort("htl"));
  document
    .getElementById("lth")
    .addEventListener("click", () => handleSort("lth"));

    //category

    const filterbycategory=(category)=>{
      if(category=="all")
      {
          uimaker(data);
          return;
      }
      let temp=data.filter((category1)=>category1.category==category);
      uimaker(temp);
    }

    document.getElementById("Laptop").addEventListener("click",()=>filterbycategory("Laptop"));
document.getElementById("Computer").addEventListener("click",()=>filterbycategory("Computer"));
document.getElementById("all").addEventListener("click",()=>filterbycategory("all"));


    //searching
const search=(value)=>{
  let temp=data.filter((ele)=>ele.title.toLowerCase().includes(value.toLowerCase()));
  uimaker(temp);
 
}
document.getElementById("search").addEventListener("input",()=>{
  let value=document.getElementById("search").value;
  search(value);
});
