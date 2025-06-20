/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/* Scroll Section Active Link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');



        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    /* Sticky Navbar */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when link is clicked */

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};



/* Scroll Reveal */

const sr = ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});



sr.reveal(".home-contain, .heading", { origin: "top" });
sr.reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
sr.reveal(".home-contact h1, .about-img", { origin: "left" });
sr.reveal(".home-contain p, .about-contain", { origin: "right" });

/* typed Js */

const typed = new Typed(".multiple-text", {
    strings: ['Full Stack Developer' , "Application Developer", "Web Designer"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
});



