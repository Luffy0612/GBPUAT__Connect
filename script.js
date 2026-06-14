window.addEventListener("load",()=>{

    const modal =
    document.getElementById("authModal");

    if(modal){

        modal.classList.remove("active");
    }

});
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
   PREMIUM MODAL SYSTEM
========================= */

const loginBtn =
document.querySelector(".login-btn");

const modal =
document.getElementById("authModal");

/* FORCE MODAL CLOSED ON LOAD */

if(modal){

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}

const closeModal =
document.getElementById("closeModal");

/* OPEN MODAL */

if(loginBtn && modal){

    loginBtn.addEventListener("click", ()=>{

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

        if(typeof gsap !== "undefined"){

            gsap.fromTo(
                ".modal-box",
                {
                    opacity:0,
                    scale:0.82,
                    y:60
                },
                {
                    opacity:1,
                    scale:1,
                    y:0,
                    duration:0.6,
                    ease:"power3.out"
                }
            );

        }

    });

}

/* CLOSE MODAL */

function closePremiumModal(){

    if(!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

    if(typeof gsap !== "undefined"){

        gsap.set(".modal-box",{
            clearProps:"all"
        });

    }

}

/* CLOSE BUTTON */

if(closeModal && modal){

    closeModal.addEventListener("click", ()=>{

        if(typeof gsap !== "undefined"){

            gsap.to(".modal-box",{

                opacity:0,
                scale:0.85,
                y:40,
                duration:0.35,
                ease:"power2.in",

                onComplete:()=>{

                    modal.classList.remove("active");

                    document.body.style.overflow =
                    "auto";
                }

            });

        }

        else{

            modal.classList.remove("active");

            document.body.style.overflow =
            "auto";
        }

    });

}

/* CLOSE WHEN CLICK OUTSIDE */

window.addEventListener("click",(e)=>{

    if(!modal) return;

    if(e.target === modal){

        closePremiumModal();
    }

});

/* ESC KEY CLOSE */

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        closePremiumModal();
    }

});


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

const counters =
document.querySelectorAll(".counter");

const statsSection =
document.querySelector(".stats-section");

let started = false;

function startCounters(){

    if(started) return;

    started = true;

    counters.forEach(counter=>{

        counter.innerText = "0";

        const target =
        +counter.getAttribute("data-target");

        let current = 0;

        const increment = target / 100;

        const updateCounter = ()=>{

            current += increment;

            if(current < target){

                counter.innerText =
                Math.ceil(current);

                requestAnimationFrame(updateCounter);

            }

            else{

                counter.innerText = target;
            }

        };

        updateCounter();

    });

}

window.addEventListener("scroll",()=>{

    if(!statsSection) return;

    const sectionTop =
    statsSection.offsetTop;

    if(window.scrollY >
       sectionTop - 500){

        startCounters();
    }

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

    hero.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        hero.style.backgroundPosition = `${x}px ${y}px`;

    });

}
/* =========================
   REGISTER PAGE FORM SWITCH
========================= */

document.addEventListener("DOMContentLoaded", () => {

    if(typeof gsap !== "undefined"){

        gsap.from(".register-container",{

            opacity:0,
            y:50,
            scale:0.96,

            duration:1.1,
            ease:"power4.out"
        });

        gsap.from(".field",{

            opacity:0,
            y:30,

            stagger:0.05,

            duration:0.8,

            delay:0.3,

            ease:"power3.out"
        });        

    }

    const studentBtn =
    document.getElementById("studentBtn");

    const alumniBtn =
    document.getElementById("alumniBtn");

    const studentForm =
    document.querySelector(".main-student-form");

    const alumniForm =
    document.querySelector(".main-alumni-form");

    const leftPanel =
    document.querySelector(".register-left");

    const leftTitle =
    document.getElementById("leftTitle");

    const leftText =
    document.getElementById("leftText");

    if(
        studentBtn &&
        alumniBtn &&
        studentForm &&
        alumniForm
    ){

        /* DEFAULT STATE */

        studentBtn.classList.add("student-active");
        studentForm.classList.add("active-form");
        alumniForm.classList.remove("active-form");

        /* DEFAULT BUTTON LOOK */

        studentBtn.style.opacity = "1";
        alumniBtn.style.opacity = "0.65";

        /* DEFAULT LEFT PANEL */

        leftPanel.style.background =
        "linear-gradient(180deg,#2563eb,#06b6d4)";

        leftTitle.innerHTML =
        `Start Building <br> Your Career`;

        leftText.innerHTML =
        `Connect with mentors,
        discover internships,
        and grow your skills.`;

        /* STUDENT BUTTON */

        studentBtn.addEventListener("click", ()=>{

            /* BUTTON COLORS */

            studentBtn.classList.add("student-active");

            alumniBtn.classList.remove("alumni-active");

            alumniBtn.style.opacity = "0.65";

            studentBtn.style.opacity = "1";

            /* FORM SWITCH */

            studentForm.classList.add("active-form");

            alumniForm.classList.remove("active-form");

            /* LEFT PANEL */

            leftPanel.style.background =
            "linear-gradient(180deg,#2563eb,#06b6d4)";

            leftTitle.innerHTML =
            `Start Building <br> Your Career`;

            leftText.innerHTML =
            `Connect with mentors,
            discover internships,
            and grow your skills.`;

            /* ANIMATION */

            if(typeof gsap !== "undefined"){

                gsap.fromTo(
                    ".active-form .field",
                    {
                        opacity:0,
                        y:20
                    },
                    {
                        opacity:1,
                        y:0,
                        stagger:0.04,
                        duration:0.45,
                        ease:"power2.out"
                    }
                );

            }

        });

        /* ALUMNI BUTTON */

        alumniBtn.addEventListener("click", ()=>{

            /* BUTTON COLORS */

            alumniBtn.classList.add("alumni-active");

            studentBtn.classList.remove("student-active");

            studentBtn.style.opacity = "0.65";

            alumniBtn.style.opacity = "1";

            /* FORM SWITCH */

            alumniForm.classList.add("active-form");

            studentForm.classList.remove("active-form");

            /* LEFT PANEL */

            leftPanel.style.background =
            "linear-gradient(180deg,#7c3aed,#f59e0b)";

            leftTitle.innerHTML =
            `Guide The <br> Next Generation`;

            leftText.innerHTML =
            `Share your experience,
            mentor students,
            and create opportunities.`;

            /* ANIMATION */

            if(typeof gsap !== "undefined"){

                gsap.fromTo(
                    ".active-form .field",
                    {
                        opacity:0,
                        y:20
                    },
                    {
                        opacity:1,
                        y:0,
                        stagger:0.04,
                        duration:0.45,
                        ease:"power2.out"
                    }
                );

            }

        });

    }

});

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

        /* DEFAULT STATE */

        studentOption.classList.add("active-role");

        alumniOption.classList.remove("active-role");

        studentOption.style.opacity = "1";

        alumniOption.style.opacity = "0.65";

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

            studentOption.style.opacity = "1";

            alumniOption.style.opacity = "0.65";

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

            alumniOption.style.opacity = "1";

            studentOption.style.opacity = "0.65";

        });

    }

});

/* PREMIUM NAVBAR SCROLL */

const navbar =
document.querySelector(".premium-nav");

let lastScroll = 0;

if(navbar){

    window.addEventListener("scroll",()=>{

        const currentScroll =
        window.pageYOffset;

        /* SCROLL EFFECT */

        if(currentScroll > 30){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");
        }

        /* HIDE ON DOWN */

        if(
            currentScroll > lastScroll &&
            currentScroll > 120
        ){

            navbar.style.transform =
            "translateX(-50%) translateY(-120px)";
        }

        else{

            navbar.style.transform =
            "translateX(-50%) translateY(0)";
        }

        lastScroll = currentScroll;

    });

}
/* =========================
   STUDENT REGISTER
========================= */

const studentRegisterForm =
document.getElementById("studentRegisterForm");

if(studentRegisterForm){

    studentRegisterForm.addEventListener("submit",
    async (e)=>{

        e.preventDefault();

        const data = {

            role: "student",

            fullName:
            document.getElementById("studentName").value,

            email:
            document.getElementById("studentEmail").value,

            phone:
            document.getElementById("studentPhone").value,

            password:
            document.getElementById("studentPassword").value,

            college:
            document.getElementById("studentCollege").value,

            department:
            document.getElementById("studentDepartment").value,

            skills:
            document.getElementById("studentSkills").value
        };

        try{

            const response = await fetch(
                "/register",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(data)
                }
            );

            const result = await response.json();

            alert(result.message);

            studentRegisterForm.reset();

        }catch(error){

            alert("Registration Failed");

        }

    });

}
/* =========================
   DYNAMIC DEPARTMENTS
========================= */

const departments = {

    technology: [
        "Computer Engineering",
        "Information Technology",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electrical Engineering",
        "Electronics & Communication",
        "Biotechnology"
    ],

    agriculture: [
        "Agronomy",
        "Genetics & Plant Breeding",
        "Soil Science",
        "Agricultural Economics",
        "Horticulture",
        "Plant Pathology",
        "Entomology"
    ],

    veterinary: [
        "Veterinary Medicine",
        "Veterinary Surgery",
        "Animal Genetics",
        "Animal Nutrition",
        "Livestock Production"
    ],

    agribusiness: [
        "Agribusiness Management",
        "Agri Marketing",
        "Rural Management"
    ],

    basic: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Statistics",
        "Microbiology",
        "Biochemistry"
    ],

    community: [
        "Food & Nutrition",
        "Human Development",
        "Textiles & Apparel",
        "Family Resource Management"
    ],

    pg: [
        "MBA",
        "MTech",
        "MSc",
        "PhD"
    ],

    fisheries: [
        "Aquaculture",
        "Fish Processing Technology",
        "Fisheries Resource Management"
    ]
};

function setupDepartmentDropdown(collegeId, departmentId) {

    const collegeSelect =
    document.getElementById(collegeId);

    const departmentSelect =
    document.getElementById(departmentId);

    if(!collegeSelect || !departmentSelect) return;

    collegeSelect.addEventListener("change", ()=>{

        const selectedCollege =
        collegeSelect.value;

        departmentSelect.innerHTML =
        `<option value="">Select Department</option>`;

        if(departments[selectedCollege]){

            departments[selectedCollege]
            .forEach((dept)=>{

                const option =
                document.createElement("option");

                option.value = dept;

                option.textContent = dept;

                departmentSelect.appendChild(option);

            });

        }

    });

}
setupDepartmentDropdown(
    "studentCollege",
    "studentDepartment"
);

setupDepartmentDropdown(
    "alumniCollege",
    "alumniDepartment"
);
const upload =
document.getElementById("profileUpload");

const preview =
document.getElementById("previewImage");

const uploadText =
document.getElementById("uploadText");

const removeBtn =
document.getElementById("removeImage");

const uploadTrigger =
document.getElementById("uploadTrigger");

if(
    upload &&
    preview &&
    uploadText &&
    removeBtn &&
    uploadTrigger
){

    /* OPEN FILE PICKER */

    uploadTrigger.addEventListener("click",()=>{

        if(!upload.files.length){

            upload.click();
        }

    });

    /* FILE SELECT */

    upload.addEventListener("change",(e)=>{

        const file = e.target.files[0];

        if(file){

            preview.src =
            URL.createObjectURL(file);

            preview.style.display = "block";

            removeBtn.style.display = "flex";

            let fileName = file.name;

            if(fileName.length > 18){

                fileName =
                fileName.substring(0,18) + "...";
            }

            uploadText.innerText = fileName;
        }

    });

    /* REMOVE IMAGE */

    removeBtn.addEventListener("click",(e)=>{

        e.preventDefault();

        upload.value = "";

        preview.src = "";

        preview.style.display = "none";

        removeBtn.style.display = "none";

        uploadText.innerText =
        "Upload Profile Photo";
    });

}
/* IMAGE MODAL */

const imageModal =
document.getElementById("imageModal");

const fullPreview =
document.getElementById("fullPreviewImage");

const closeImageModal =
document.getElementById("closeImageModal");

if(
    preview &&
    imageModal &&
    fullPreview &&
    closeImageModal
){

    preview.addEventListener("click",(e)=>{

        e.stopPropagation();

        fullPreview.src = preview.src;

        imageModal.classList.add("active");
    });

    closeImageModal.addEventListener("click",()=>{

        imageModal.classList.remove("active");
    });

    imageModal.addEventListener("click",(e)=>{

        if(e.target === imageModal){

            imageModal.classList.remove("active");
        }

    });

}

/* =========================
   PASSWORD TOGGLE
========================= */

const toggleButtons =
document.querySelectorAll(".toggle-password");

toggleButtons.forEach((btn)=>{

    btn.addEventListener("click", ()=>{

        const input =
        btn.parentElement.querySelector("input");

        const icon =
        btn.querySelector("i");

        if(!input || !icon) return;

        if(input.type === "password"){

            input.type = "text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

        }

        else{

            input.type = "password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");

        }

    });

});

const alumniSearch =
document.getElementById("alumniSearch");

if(alumniSearch){

    alumniSearch.addEventListener("keyup",()=>{

        const value =
        alumniSearch.value.toLowerCase();

        const alumniBoxes =
        document.querySelectorAll(".alumni-box");

        alumniBoxes.forEach(box=>{

            const text =
            box.innerText.toLowerCase();

            if(text.includes(value)){

                box.style.display = "block";

            }

            else{

                box.style.display = "none";
            }

        });

    });

}
if(typeof gsap !== "undefined"){

    gsap.utils.toArray("section").forEach((section)=>{

        gsap.from(section,{

            opacity:0,
            y:80,

            duration:1,

            scrollTrigger:{
                trigger:section,
                start:"top 80%"
            }
        });

    });

}
