const productData = {
    1: {
        title: "Shirt",
        description: "This is a detailed description of the product. It's comfortable and made from high-quality material.",
        image: "/product/product-01.jpg" ,// Path to the product image
        price: "$25.99",
    },
    2: {
        title: "T-shirt",
        description: "This T-shirt is made of 100% cotton, soft and breathable.",
        price: "$25.99",
        image: "/product/product-02.jpg" // Path to the product image
    },
    3: {
        title: "T-shirt",
        description: "This T-shirt is made of 100% cotton, soft and breathable.",
        price: "$25.99",
        image: "/product/product-03.jpg" // Path to the product image
    },
    4: {
        title: "T-shirt",
        description: "This T-shirt is made of 100% cotton, soft and breathable.",
        price: "$25.99",
        image: "/product/product-04.jpg" // Path to the product image
    },
    5: {
        title: "T-shirt",
        description: "This T-shirt is made of 100% cotton, soft and breathable.",
        price: "$25.99",
        image: "/product/product-05.jpg" // Path to the product image
    },
    6: {
        title: "T-shirt",
        description: "This T-shirt is made of 100% cotton, soft and breathable.",
        price: "$25.99",
        image: "/product/product-06.jpg" // Path to the product image
    },
    7: {
        title: "T-shirt",
        description: "This T-shirt is made of 100% cotton, soft and breathable.",
        price: "$25.99",
        image: "/product/product-07.jpg" // Path to the product image
    },
    8: {
        title: "T-shirt",
        description: "This T-shirt is made of 100% cotton, soft and breathable.",
        price: "$25.99",
        image: "/product/product-08.jpg" // Path to the product image
    },
    9: {
        title: "T-shirt",
        description: "This T-shirt is made of 100% cotton, soft and breathable.",
        price: "$25.99",
        image: "/product/product-09.jpg" // Path to the product image
    },
    10: {
        title: "T-shirt",
        description: "This T-shirt is made of 100% cotton, soft and breathable.",
        price: "$25.99",
        image: "/product/product-10.jpg" // Path to the product image
    },
    11: {
        title: "T-shirt",
        description: "This T-shirt is made of 100% cotton, soft and breathable.",
        price: "$25.99",
        image: "/product/product-11.jpg" // Path to the product image
    },
    12: {
        title: "T-shirt",
        description: "This T-shirt is made of 100% cotton, soft and breathable.",
        price: "$25.99",
        image: "/product/product-12.jpg" // Path to the product image
    },
    
   
};


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");


const product = productData[productId];

if (product) {
    document.getElementById("productImage").src = product.image;
    document.getElementById("productTitle").innerText = product.title;
    document.getElementById("productPrice").innerText = product.price; // Display price
    document.getElementById("productDescription").innerText = product.description;
} else {
   
    document.querySelector(".product-details-container").innerHTML = "<p>Product not found.</p>";
}