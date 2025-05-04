/*========================== Toggle Icon navbar ===================================== */

let nemuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-solid fa-x");
    navbar.classList.toggle('active');
}

/*========================== Scroll Section active link ===================================== */

/*let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sewc => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.Attribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active'); 
            })
        }
    });


/*========================== Sticky navbar ===================================== */
/*let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*========================== remove toggle icon and navbar ===================================== */
/*menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/*========================== Scroll Reveal ===================================== */
/*ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content,heading',{ origin: 'top' });
 ScrollReveal().reveal('.home-img,.skills-container,.contact-box, contact form',{ origin:'buttom'});
 ScrollReveal().reveal('.home-contact h1, .about-img',{ origin:'left'});
 ScrollReveal().reveal('.home-contact p, .about-content',{ origin:'right'});