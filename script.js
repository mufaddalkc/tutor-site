document.addEventListener('DOMContentLoaded', function(){
    const toggleBtn = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    toggleBtn.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    });
});

// navbar scroll

window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 0){
        navbar.classList.add('navbar-scroll');
    }else{
        navbar.classList.remove('navbar-scroll')
    }
})