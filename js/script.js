// Dark Theme mode
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun';

// we need to validate if the user has previously chosen a topic
if (selectedTheme) {
    document.body.classList[(selectedTheme) === 'dark'?'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme);
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    //Add or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    //we save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

console.log("Theme setting is working!");
//=============== Menu show Y Hidden =================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ============== Menu Show ==================
/* Validate if the constact exists */
if (navToggle) {
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add('show-menu');
    })
}
if (navClose) {
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove('show-menu');
    })
}
console.log("Menu Y is working!");
//============= Remove Menu Profile =================
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on nav__links we remove the show menu
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
console.log("Remove menu profile is working!");

// =================== Typewriter Effect =================
new Typewriter('#typewriter', {
  strings: ['AbdelRahman Amr', 'Mechatronics Engineer', 'Web developer'],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("Typewritter effect is working!");

// ======================== Portfolio Slider =====================
var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert:false,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    pagination: {
      el: ".blog-slider__pagination",
    },
    // mousewheel: true,
    keyboard: true,
  });
console.log("Portfolio Swiper is working");
// ======================= Scroll Up section ==========================
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll higher that 560 viewpoint, then the scroll up icon should appear and on clicking should reach top
    if(this.scrollY>= 560){
        scrollUp.classList.add('show-scroll');
        console.log("inside if");
    }
    else{
        scrollUp.classList.remove('show-scroll');
    }
    console.log("Scroll up is being called");
}

window.addEventListener('scroll', scrollUp);

// ===================== Scroll section active highlight ================
const section = document.querySelectorAll('section[id');
function scrollActive() {
    const scrollY = window.pageYOffset;
    section.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*='+sectionId + ']').classList.remove('active-link')
        }
    })
    console.log('section highlight working!');
}
window.addEventListener('scroll', scrollActive)