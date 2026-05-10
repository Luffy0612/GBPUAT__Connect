/* =========================
   GSAP SAFE START
========================= */

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".logo", {
        y: -50,
        opacity: 0,
        duration: 1
    });

    gsap.from(".hero-content h1", {
        y: 100,
        opacity: 0,
        duration: 1.5
    });

    gsap.from(".hero-content p", {
        y: 100,
        opacity: 0,
        duration: 2
    });

    gsap.from(".hero-buttons", {
        y: 60,
        opacity: 0,
        duration: 1.2
    });

}

/* =========================
   MODAL SYSTEM
========================= */

const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const modal = document.getElementById("authModal");
const closeModal = document.getElementById("closeModal");

if (loginBtn && modal) {
    loginBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });
}

if (registerBtn && modal) {
    registerBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });
}

if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}

/* =========================
   SCROLL BUTTONS
========================= */

const exploreBtn = document.getElementById("exploreBtn");
const mentorBtn = document.getElementById("mentorBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        document.querySelector(".alumni-section")
        .scrollIntoView({ behavior: "smooth" });
    });
}

if (mentorBtn) {
    mentorBtn.addEventListener("click", () => {
        document.querySelector(".about")
        .scrollIntoView({ behavior: "smooth" });
    });
}

/* =========================
   COLLEGE ALUMNI TOGGLE (FIXED)
========================= */

function toggleCollege(id){

    const sections = document.querySelectorAll(".alumni-details");

    sections.forEach(sec => {
        sec.classList.remove("active");
    });

    const current = document.getElementById(id);

    if(current){
        current.classList.add("active");

        current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

}

/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();

});

/* =========================
   MOBILE MENU
========================= */

const hamburger = document.querySelector(".hamburger");
const navButtons = document.querySelector(".nav-buttons");

if (hamburger && navButtons) {
    hamburger.addEventListener("click", () => {
        navButtons.classList.toggle("active");
    });
}

/* =========================
   PROGRESS BAR
========================= */

const progressBar = document.querySelector(".progress-bar");

if (progressBar) {
    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollPercent = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = scrollPercent + "%";

    });
}

/* =========================
   LOADER
========================= */

const loader = document.querySelector(".loader");

if (loader && typeof gsap !== "undefined") {

    window.addEventListener("load", () => {

        gsap.to(".loader", {
            opacity: 0,
            duration: 1,
            delay: 1,
            onComplete: () => {
                loader.style.display = "none";
            }
        });

    });

}

/* =========================
   PARALLAX EFFECT
========================= */

const hero = document.querySelector(".hero");

if (hero) {

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        hero.style.backgroundPosition = `${x}px ${y}px`;

    });

}
/* =========================
   REGISTER PAGE FORM SWITCH
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const studentBtn =
        document.getElementById("studentBtn");

    const alumniBtn =
        document.getElementById("alumniBtn");

    const studentForm =
        document.querySelector(".main-student-form");

    const alumniForm =
        document.querySelector(".main-alumni-form");

    if(
        studentBtn &&
        alumniBtn &&
        studentForm &&
        alumniForm
    ){

        // DEFAULT
        studentForm.classList.add("active-form");
        alumniForm.classList.remove("active-form");

        // STUDENT BUTTON
        studentBtn.addEventListener("click", () => {

            studentForm.classList.add("active-form");

            alumniForm.classList.remove("active-form");

            studentBtn.style.background =
                "#06b6d4";

            alumniBtn.style.background =
                "#1e293b";

        });

        // ALUMNI BUTTON
        alumniBtn.addEventListener("click", () => {

            alumniForm.classList.add("active-form");

            studentForm.classList.remove("active-form");

            alumniBtn.style.background =
                "#06b6d4";

            studentBtn.style.background =
                "#1e293b";

        });

    }

});
/* ABOUT BUTTON WEBSITE OPEN */

const aboutBtn = document.getElementById("aboutBtn");

if(aboutBtn){

    aboutBtn.addEventListener("click", ()=>{

        window.open(
            "https://www.gbpuat.ac.in/",
            "_blank"
        );

    });

}

/* =========================
   LOGIN FORM SWITCHING
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const studentOption =
        document.querySelector(".student-option");

    const alumniOption =
        document.querySelector(".alumni-option");

    const studentForm =
        document.querySelector(".student-form");

    const alumniForm =
        document.querySelector(".alumni-form");

    if(
        studentOption &&
        alumniOption &&
        studentForm &&
        alumniForm
    ){

        /* STUDENT */

        studentOption.addEventListener("click", () => {

            studentForm.classList.add(
                "active-form-modal"
            );

            alumniForm.classList.remove(
                "active-form-modal"
            );

            studentOption.classList.add(
                "active-role"
            );

            alumniOption.classList.remove(
                "active-role"
            );

        });

        /* ALUMNI */

        alumniOption.addEventListener("click", () => {

            alumniForm.classList.add(
                "active-form-modal"
            );

            studentForm.classList.remove(
                "active-form-modal"
            );

            alumniOption.classList.add(
                "active-role"
            );

            studentOption.classList.remove(
                "active-role"
            );

        });

    }

});
/* NAVBAR HIDE ON SCROLL */

let lastScroll = 0;

const navbar = document.querySelector("nav");

window.addEventListener("scroll", ()=>{

    const currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll){

        navbar.classList.add("hide-nav");

    }else{

        navbar.classList.remove("hide-nav");

    }

    lastScroll = currentScroll;

});
        opacity: 0,
        duration: 1.2
    });

}

/* =========================
   MODAL SYSTEM
========================= */

const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const modal = document.getElementById("authModal");
const closeModal = document.getElementById("closeModal");

if (loginBtn && modal) {
    loginBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });
}

if (registerBtn && modal) {
    registerBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });
}

if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}

/* =========================
   SCROLL BUTTONS
========================= */

const exploreBtn = document.getElementById("exploreBtn");
const mentorBtn = document.getElementById("mentorBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        document.querySelector(".alumni-section")
        .scrollIntoView({ behavior: "smooth" });
    });
}

if (mentorBtn) {
    mentorBtn.addEventListener("click", () => {
        document.querySelector(".about")
        .scrollIntoView({ behavior: "smooth" });
    });
}

/* =========================
   COLLEGE ALUMNI TOGGLE (FIXED)
========================= */

function toggleCollege(id){

    const sections = document.querySelectorAll(".alumni-details");

    sections.forEach(sec => {
        sec.classList.remove("active");
    });

    const current = document.getElementById(id);

    if(current){
        current.classList.add("active");

        current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

}

/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();

});

/* =========================
   MOBILE MENU
========================= */

const hamburger = document.querySelector(".hamburger");
const navButtons = document.querySelector(".nav-buttons");

if (hamburger && navButtons) {
    hamburger.addEventListener("click", () => {
        navButtons.classList.toggle("active");
    });
}

/* =========================
   PROGRESS BAR
========================= */

const progressBar = document.querySelector(".progress-bar");

if (progressBar) {
    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollPercent = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = scrollPercent + "%";

    });
}

/* =========================
   LOADER
========================= */

const loader = document.querySelector(".loader");

if (loader && typeof gsap !== "undefined") {

    window.addEventListener("load", () => {

        gsap.to(".loader", {
            opacity: 0,
            duration: 1,
            delay: 1,
            onComplete: () => {
                loader.style.display = "none";
            }
        });

    });

}

/* =========================
   PARALLAX EFFECT
========================= */

const hero = document.querySelector(".hero");

if (hero) {

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        hero.style.backgroundPosition = `${x}px ${y}px`;

    });

}
studentBtn.addEventListener("click", ()=>{
    document.querySelector(".main-student-form").classList.add("active-form");
    document.querySelector(".main-alumni-form").classList.remove("active-form");
});

alumniBtn.addEventListener("click", ()=>{
    document.querySelector(".main-alumni-form").classList.add("active-form");
    document.querySelector(".main-student-form").classList.remove("active-form");
});
