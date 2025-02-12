document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.getElementById("cartItemsContainer");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            const itemImage = document.createElement("img");
            itemImage.src = item.image;
            itemImage.alt = item.title;

            const itemTitle = document.createElement("div");
            itemTitle.classList.add("cart-item-title");
            itemTitle.innerText = item.title;

            const itemPrice = document.createElement("div");
            itemPrice.classList.add("cart-item-price");
            itemPrice.innerText = item.price;

            cartItem.appendChild(itemImage);
            cartItem.appendChild(itemTitle);
            cartItem.appendChild(itemPrice);

            cartContainer.appendChild(cartItem);
        });
    }
});
