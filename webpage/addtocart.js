let Wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];

const displayCart = () => {
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;

    if (Wishlist.length === 0) {
        cartContainer.innerHTML = `<tr><td colspan="6">Your cart is empty.</td></tr>`;
        document.getElementById("total-price").innerText = "$0.00"; // Update total price to 0
        return;
    }

    cartContainer.innerHTML = Wishlist.map((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal; // Update total price

        return `
        <tr>
            <td><img src="${item.image}" width="50" height="50"></td>
            <td>${item.title}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button class="btn btn-sm btn-dark" onclick="updateQuantity(${index}, -1)">-</button>
                <span class="mx-2">${item.quantity}</span>
                <button class="btn btn-sm btn-dark" onclick="updateQuantity(${index}, 1)">+</button>
            </td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">DELETE</button></td>
        </tr>`;
    }).join("");

    // Update total price on UI
    document.getElementById("total-price").innerText = `$${totalPrice.toFixed(2)}`;
};

const updateQuantity = (index, change) => {
    if (Wishlist[index]) {
        Wishlist[index].quantity += change;

        // Remove if quantity is 0 or less
        if (Wishlist[index].quantity <= 0) {
            Wishlist.splice(index, 1);
        }

        localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
        displayCart(); // Re-render cart
    }
};

const removeFromCart = (index) => {
    Wishlist.splice(index, 1);
    localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
    displayCart();
};

displayCart(); // Initial cart display
