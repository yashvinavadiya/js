let data=[ {
  "id": 1,
  "title": "Computer",
  "price": 35000,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.",
  "category": "men's clothing",
  "image": "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg",

},
{
  "id": 2,
  "title": "Computer ",
  "price": 40000,
  "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric .",
  "category": "men's clothing",
  "image": "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_640.jpg",
 
},
{
  "id": 3,
  "title": "Computer",
  "price": 30000,
  "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
  "category": "men's clothing",
  "image": "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?cs=srgb&dl=pexels-joshsorenson-1714208.jpg&fm=jpg",

},
{
  "id": 4,
  "title": "Laptop",
  "price": 15990,
  "description": "The color could be slightly different between on the screen. ",
  "category": "men's clothing",
  "image": "https://www.techtarget.com/rms/onlineimages/hp_elitebook_mobile.jpg",
 
},
{
  "id": 5,
  "title": "Laptop",
  "price": 69500,
  "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to.",
  "category": "jewelery",
  "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/01/hero-21-1920x1080.jpg",
 
},
{
  "id": 6,
  "title": "Laptop ",
  "price": 168000,
  "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.",
  "category": "jewelery",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrndjBeW1ZP8IOUCBppHIERcpfMo0JZDxvKHQy2G5MhmOe2-uWxaYv4F65Rby4Dj5sHm8&usqp=CAU",

},
{
  "id": 7,
  "title": "Laptop",
  "price": 99999,
  "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
  "category": "jewelery",
  "image": "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg",
 
},
{
  "id": 8,
  "title": "Laptop",
  "price": 10000,
  "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.",
  "category": "jewelery",
  "image": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
 
},
{
  "id": 9,
  "title": "Laptop ",
  "price": 64000,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity. ",
  "category": "electronics",
  "image": "https://media.istockphoto.com/id/1140137769/photo/blank-screen-laptop-in-living-room.jpg?s=612x612&w=0&k=20&c=Q7D1Ssdf1w5Y_sM-x8neoIXRMDnPzZ092Oeuev07DC4=",
 
},



]
// let Wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
// const uimaker=(data)=>{

// let temp=" ";

// for(let i=0; i<data.length; i++) {
//   temp += `
// <div class="col-lg-4 col-md-6 py-3 main">
//   <div class="box  ">
//      <div class="flex"> <img src=${data[i].image} alt="" class="img-fluid img"></div>
//      <div class="flex"> <h3 class="ti">${data[i].title}</h3></div>
//      <div class="flex"> <p  class="ti1">${data[i].price}</p></div>
//      <div class="flex"> <p >${data[i].description}</p></div>
//      <div class="flex"> <button class=" bt2 ">Add to cart</button></div>
//      <button class="AddToWishList" data-id="${data[i].id}">Add Wish List</button>
//   </div>
// </div>
//   `;
// }
//   document.getElementById('products').innerHTML=temp;
// };

// // Find by Id
// const IsExists = (id) => {
//   for (let i = 0; i < Wishlist.length; i++) {
//     if (Wishlist[i].id == id) {
//       return true;
//     }
//   }
//   return false;
// };

// // Event listener for "Add Wish List" buttons
// const addToWishListButtons = document.querySelectorAll(".AddToWishList");
// addToWishListButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const productId = e.target.getAttribute("data-id");
//     const data = data.find((p) => p.id == productId);

//     if (IsExists(data.id)) {
//       alert("This product is already in your wishlist.");
//     } else {
//       Wishlist.push(data);
//       localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
//       alert("Your product has been added to the wishlist!");
//     }
//   });
// });




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
        <div class="flex"> <button class="bt2">Add to cart</button></div>
        <button class="AddToWishList" data-id="${data[i].id}">Add Wish List</button>
      </div>
    </div>
    `;
  }
  document.getElementById("products").innerHTML = temp;

  // Add event listeners to buttons after rendering UI
  addWishListEventListeners(data);
};

// Function to check if a product exists in the wishlist
const IsExists = (id) => {
  return Wishlist.some((item) => item.id == id);
};

// Function to add event listeners to "Add Wish List" buttons
const addWishListEventListeners = (data) => {
  document.querySelectorAll(".AddToWishList").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      const product = data.find((p) => p.id == productId);

      if (!product) {
        console.error("Product not found!");
        return;
      }

      if (IsExists(product.id)) {
        alert("This product is already in your wishlist.");
      } else {
        Wishlist.push(product);
        localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
        alert("Your product has been added to the wishlist!");
      }
    });
  });
};

// Example usage:
// Assuming `productData` is your array of products
// Call `uimaker(productData)` to render products and attach event listeners




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

