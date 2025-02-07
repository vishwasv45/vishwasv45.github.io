

 const products = [
    { id: 1, title: "Shirt", price: "$25.99", image: "/product/product-01.jpg" },
    { id: 2, title: "T-shirt", price: "$15.99", image: "/product/product-02.jpg" },
    { id: 3, title: "Jeans", price: "$40.00", image: "/product/product-03.jpg" },
    { id: 4, title: "Jeans", price: "$40.00", image: "/product/product-04.jpg" },
    { id: 5, title: "Jeans", price: "$40.00", image: "/product/product-05.jpg" },
    { id: 6, title: "Jeans", price: "$40.00", image: "/product/product-06.jpg" },
    { id: 7, title: "Jeans", price: "$40.00", image: "/product/product-07.jpg" },
    { id: 8, title: "Jeans", price: "$40.00", image: "/product/product-08.jpg" },
    { id: 9, title: "Jeans", price: "$40.00", image: "/product/product-09.jpg" },
    { id: 10, title: "Jeans", price: "$40.00", image: "/product/product-10.jpg" },
    { id: 11, title: "Jeans", price: "$40.00", image: "/product/product-11.jpg" },
    { id: 12, title: "Jeans", price: "$40.00", image: "/product/product-12.jpg" },
    { id: 13, title: "Jeans", price: "$40.00", image: "/product/product-13.jpg" },
    { id: 14, title: "Jeans", price: "$40.00", image: "/product/product-13.jpg" },
    { id: 15, title: "Jeans", price: "$40.00", image: "/product/product-13.jpg" },
    { id: 16, title: "Jeans", price: "$40.00", image: "/product/product-13.jpg" },
    
];
 
 
// Function to show the "View" button on hover
function showViewButton(card) {
    const button = card.querySelector(".view-btn");
    button.style.display = "block";
}

// Function to hide the "View" button when not hovering
function hideViewButton(card) {
    const button = card.querySelector(".view-btn");
    button.style.display = "none";
}

// Function to navigate to the product details page
function goToProductPage(productId) {
    window.location.href = `product_details.html?productId=${productId}`;
}

// Function to generate product cards dynamically
function generateProductCards() {
    const container = document.getElementById("productContainer");
    products.forEach(product => {
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

// Call the function to generate the cards when the page loads
window.onload = generateProductCards;

 let a = document.querySelector(".btn");
a.addEventListener("click", function(){
    alert("You subscribed")
})