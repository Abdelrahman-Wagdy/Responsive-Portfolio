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