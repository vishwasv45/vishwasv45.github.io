window.dataLayer = {
    'event': 'pageView',
    'pageView': 'guest',
    'userId': '12345', 
    'userType': 'guest', 
    'pageCategory': 'home', 
    'pageTitle': document.title, 
    'timestamp': new Date().toString(),
    'pageUrl': window.location.href, 
   
};
console.log(window.dataLayer)

document.addEventListener('DOMContentLoaded',()=>{
    const slides=[
        'url("/slides/slide-01.jpg")',
        'url("/slides/slide-02.jpg")',
        'url("/slides/slide-03.jpg")',
        'url("/slides/slide-04.jpg")',
        'url("/slides/slide-05.jpg")',
        'url("/slides/slide-06.jpg")',
        'url("/slides/slide-07.jpg")'
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

