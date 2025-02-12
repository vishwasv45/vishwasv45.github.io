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
const productId = urlParams.get('productId');

const product = productData[productId]; // Get product details using the productId

if (product) {
    const productDetails = document.getElementById("productDetails");
    productDetails.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h2>${product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: ${product.description}</p>
    `;
} else {
    document.getElementById("productDetails").innerHTML = "<p>Product not found.</p>";
}


function displayRelatedProducts() {
    const relatedProductsContainer = document.getElementById("relatedProductsContainer");
    const relatedProducts = getRandomProducts(productId);

    relatedProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("related-product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.title;

        const productTitle = document.createElement("div");
        productTitle.classList.add("product-title");
        productTitle.innerText = product.title;

        const productPrice = document.createElement("div");
        productPrice.classList.add("product-price");
        productPrice.innerText = product.price;

        productElement.appendChild(productImage);
        productElement.appendChild(productTitle);
        productElement.appendChild(productPrice);

        relatedProductsContainer.appendChild(productElement);
    });
}

displayRelatedProducts();