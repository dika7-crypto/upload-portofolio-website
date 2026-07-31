/* ===================================
   MOBILE MENU
=================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Tutup menu saat link diklik */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* ===================================
   BACK TO TOP
=================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ===================================
   STICKY HEADER
=================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(15,23,42,.7)";
        header.style.boxShadow = "none";

    }

});

/* ===================================
   TYPING EFFECT
=================================== */

const typing = document.getElementById("typing");

const words = [
    "Untuk Bisnis",
    "Untuk UMKM",
    "Untuk Sekolah",
    "Untuk Gaming",
    "Yang Responsive"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();

/* ===================================
   COUNTER ANIMATION
=================================== */

const counters = document.querySelectorAll(".num");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-val");
        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

        const update = () => {

            current += increment;

            if(current >= target){
                counter.innerText = target + "+";
            }else{
                counter.innerText = current;
                requestAnimationFrame(update);
            }

        }

        update();

    });

};

const counterSection = document.querySelector(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounter();
            counterObserver.disconnect();

        }

    });

},{
    threshold:.4
});

counterObserver.observe(counterSection);

/* ===================================
   SCROLL REVEAL
=================================== */

const revealItems = document.querySelectorAll(
".card, .project, .about, .contact, .testimonial, .counter"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

revealItems.forEach(item=>{

    item.classList.add("hidden");

    revealObserver.observe(item);

});

/* ===================================
   ACTIVE NAVIGATION
=================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ===================================
   SMOOTH HOVER EFFECT
=================================== */

document.querySelectorAll(".card,.project").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX-rect.left;
        const y = e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(56,189,248,.18),
        #1e293b 60%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#1e293b";

    });

});

/* ===================================
   PRELOADER (OPSIONAL)
=================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

console.log("✅ Dika Web Studio Loaded");