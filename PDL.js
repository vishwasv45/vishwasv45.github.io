const products = [
    { id: 1, title: "Shirt", price: "$25.99", image: "/product/product-01.jpg", category: "women" },
    { id: 2, title: "T-shirt", price: "$15.99", image: "/product/product-02.jpg", category: "men" },
    { id: 3, title: "Jeans", price: "$40.00", image: "/product/product-03.jpg", category: "women" },
    { id: 4, title: "Jeans", price: "$40.00", image: "/product/product-04.jpg", category: "men" },
    { id: 5, title: "Jeans", price: "$40.00", image: "/product/product-05.jpg", category: "women" },
    { id: 6, title: "Jeans", price: "$40.00", image: "/product/product-06.jpg", category: "accessories" },
    { id: 7, title: "Jeans", price: "$40.00", image: "/product/product-07.jpg", category: "women" },
    { id: 8, title: "Jeans", price: "$40.00", image: "/product/product-08.jpg", category: "accessories" },
    { id: 9, title: "Jeans", price: "$40.00", image: "/product/product-09.jpg", category: "women" },
    { id: 10, title: "Jeans", price: "$40.00", image: "/product/product-10.jpg", category: "women" },
    { id: 11, title: "Jeans", price: "$40.00", image: "/product/product-11.jpg", category: "women" },
    { id: 12, title: "Jeans", price: "$40.00", image: "/product/product-12.jpg", category: "accessories" },
    { id: 13, title: "Jeans", price: "$40.00", image: "/product/product-13.jpg", category: "women" },
    { id: 14, title: "Jeans", price: "$40.00", image: "/product/product-14.jpg", category: "men" },
    { id: 15, title: "Jeans", price: "$40.00", image: "/product/product-15.jpg", category: "accessories" },
    { id: 16, title: "Jeans", price: "$40.00", image: "/product/product-16.jpg", category: "women" },
];

function generateProductCards(filteredProducts) {
    const container = document.getElementById("productContainer");
    container.innerHTML = ""; // Clear the container before adding new cards

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.setAttribute("onmouseover", "showViewButton(this)");
        card.setAttribute("onmouseout", "hideViewButton(this)");

        const productHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="view-btn" style="display: none;" onclick="goToProductPage(${product.id})">View</button>
            </div>
        `;
        
        card.innerHTML = productHTML;
        container.appendChild(card);
    });
}

function showViewButton(card) {
    const button = card.querySelector(".view-btn");
    button.style.display = "block";
}

function hideViewButton(card) {
    const button = card.querySelector(".view-btn");
    button.style.display = "none";
}

function goToProductPage(productId) {
    window.location.href = `prod_desc.html?productId=${productId}`; // Redirect to product description page with productId
}

function filterProducts(category) {
    if (category === "all") {
        generateProductCards(products); // Show all products
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        generateProductCards(filteredProducts); // Show filtered products
    }
}

window.onload = () => generateProductCards(products); 