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