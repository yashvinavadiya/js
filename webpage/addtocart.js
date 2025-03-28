 let Wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];

const displayCart = () => {
  let cartContainer = document.getElementById("cart-items");



  if (Wishlist.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }


  cartContainer.innerHTML = Wishlist.map(
    (item, index) => `
    <div class="cart-item">
      <div class="col-lg-4 col-md-6 py-3">
        <div class="box">
          <div class="flex"><img src="${item.image}" alt="" class="img-fluid im"></div>
          <div class="flex"><h3 class="ti">${item.title}</h3></div>
          <div class="flex"><p class="des">${item.description}</p></div>
          <div class="flex"><p class="ti1">$${item.price}</p></div>
        
          <button class="btn btn-dark" onclick="removeFromCart(${index})">DELETE</button>
        </div>
      </div>
    </div>
  `
  ).join("");
};

const removeFromCart = (index) => {
  Wishlist.splice(index, 1); 
  localStorage.setItem("Wishlist", JSON.stringify(Wishlist)); 
  displayCart(); 
};

displayCart();