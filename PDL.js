 // Get the modal element
 const modal = document.getElementById("productModal");

 // Get the close button
 const closeBtn = document.querySelector(".close");

 // Get all the "View More" buttons
 const viewMoreButtons = document.querySelectorAll(".view-more");

 // Data for each product
 const productData = {
     1: {
         title: "Shirt",
         description: "This is a detailed description of the product. It's comfortable and made from high-quality material.",
         image: "/product/product-01.jpg" // Path to the product image
     },
     2: {
         title: "T-shirt",
         description: "This T-shirt is made of 100% cotton, soft and breathable.",
         image: "/product/product-02.jpg" // Path to the product image
     },
     3: {
         title: "T-shirt",
         description: "This T-shirt is made of 100% cotton, soft and breathable.",
         image: "/product/product-03.jpg" // Path to the product image
     },
     4: {
         title: "T-shirt",
         description: "This T-shirt is made of 100% cotton, soft and breathable.",
         image: "/product/product-04.jpg" // Path to the product image
     },
     5: {
         title: "T-shirt",
         description: "This T-shirt is made of 100% cotton, soft and breathable.",
         image: "/product/product-05.jpg" // Path to the product image
     },
     6: {
         title: "T-shirt",
         description: "This T-shirt is made of 100% cotton, soft and breathable.",
         image: "/product/product-06.jpg" // Path to the product image
     },
     7: {
         title: "T-shirt",
         description: "This T-shirt is made of 100% cotton, soft and breathable.",
         image: "/product/product-07.jpg" // Path to the product image
     },
     8: {
         title: "T-shirt",
         description: "This T-shirt is made of 100% cotton, soft and breathable.",
         image: "/product/product-08.jpg" // Path to the product image
     },
     9: {
         title: "T-shirt",
         description: "This T-shirt is made of 100% cotton, soft and breathable.",
         image: "/product/product-09.jpg" // Path to the product image
     },
     10: {
         title: "T-shirt",
         description: "This T-shirt is made of 100% cotton, soft and breathable.",
         image: "/product/product-10.jpg" // Path to the product image
     },
     11: {
         title: "T-shirt",
         description: "This T-shirt is made of 100% cotton, soft and breathable.",
         image: "/product/product-11.jpg" // Path to the product image
     },
     12: {
         title: "T-shirt",
         description: "This T-shirt is made of 100% cotton, soft and breathable.",
         image: "/product/product-12.jpg" // Path to the product image
     },
     
    
 };

 
 viewMoreButtons.forEach(button => {
    button.addEventListener("click", function() {
        const productId = this.closest('.prod').dataset.prod;  
        const product = productData[productId];  

        
        document.getElementById("modalImage").src = product.image;
        document.getElementById("modalTitle").innerText = product.title;
        document.getElementById("modalDescription").innerText = product.description;

     
         modal.style.display = "flex";
    });
});



 closeBtn.addEventListener("click", function() {
     modal.style.display = "none";
 });


 window.addEventListener("click", function(event) {
     if (event.target === modal) {
         modal.style.display = "none";
     }
 });

 let a = document.querySelector(".btn");
a.addEventListener("click", function(){
    alert("You subscribed")
})