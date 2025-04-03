let Wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];

const displayCart = () => {
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;
    cartContainer.innerHTML = Wishlist.length === 0 ? '<tr><td colspan="6">Your cart is empty.</td></tr>' : "";
    Wishlist.forEach((item, index) => {
        let total = item.price * item.quantity;
        totalPrice +=  total; 
 cartContainer.innerHTML += `
       
        <tr>
            <td><img src="${item.image}" width="50" height="50"></td>
            <td>${item.title}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button class="btn btn-sm btn-dark" onclick="updateQuantity(${index}, -1)">-</button>
                <span class="mx-2">${item.quantity}</span>
                <button class="btn btn-sm btn-dark" onclick="updateQuantity(${index}, 1)">+</button>
            </td>
            <td>$${total.toFixed(2)}</td>
            <td><button class="btn btn-dark btn-sm" onclick="removeFromCart(${index})">DELETE</button></td>
        </tr>`;
    });

   
    document.getElementById("total-price").textContent  = totalPrice.toFixed(2);
    localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
};

const updateQuantity = (index, change) => {
    if (Wishlist[index]) {
        Wishlist[index].quantity += change;

      
        if (Wishlist[index].quantity <= 0) {
            Wishlist.splice(index, 1);
        }

        localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
        displayCart(); 
    }
};

const removeFromCart = (index) => {
    Wishlist.splice(index, 1);
    localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
    displayCart();
};

displayCart(); 
