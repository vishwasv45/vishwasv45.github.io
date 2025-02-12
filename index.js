
document.addEventListener('DOMContentLoaded',()=>{
    const slides=[
        'url("images/slide-04.jpg")',
        'url("images/slide-02.jpg")',
        'url("images/slide-03.jpg")',
        'url("images/slide-04.jpg")',
        'url("images/slide-05.jpg")',
        'url("images/slide-06.jpg")',
        'url("images/slide-07.jpg")'
    ];
    let currentIndex=0;
    function changeBack(){
        document.querySelector(".banner-img").style.backgroundImage=slides[currentIndex];
       
        currentIndex=(currentIndex+1)%slides.length
    }
    setInterval(changeBack,4000);
})

let a = document.querySelector(".btn");
a.addEventListener("click", function(){
    alert("You subscribed")
})

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('open');
});
document.querySelector('.close-menu').addEventListener('click', function() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.remove('open');
});

