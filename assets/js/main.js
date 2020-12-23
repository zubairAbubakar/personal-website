/**
 * Show Menu
 */
const showMenu = (toggleId, navId) => {
    const toogle = document.getElementById(toggleId), 
          nav = document.getElementById(navId);

    if(toogle && nav){
        toogle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav-toogle', 'nav-menu')

/** Active and remove menu **/
const navlink = document.querySelectorAll('.nav__link');

/**
 * function to remove mobile menu when a menu link is clicked
 */
function linkAction() {
    
    // Action link 
    navlink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //Remove mobile menu
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navlink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
scrollReveal.reveal('.home__title',{}); 
scrollReveal.reveal('.button',{delay: 200}); 
scrollReveal.reveal('.home__img',{delay: 400}); 
scrollReveal.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
scrollReveal.reveal('.about__img',{}); 
scrollReveal.reveal('.about__subtitle',{delay: 400}); 
scrollReveal.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
scrollReveal.reveal('.skills__subtitle',{}); 
scrollReveal.reveal('.skills__text',{}); 
scrollReveal.reveal('.skills__data',{interval: 200}); 
scrollReveal.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
scrollReveal.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
scrollReveal.reveal('.contact__input',{interval: 200}); 


/** typing animation **/
var typed = new Typed (".roles", {
    strings: ["Software Engineer", "Developer Advocate", "Tech Entrepreneur", "Machine Learning Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});