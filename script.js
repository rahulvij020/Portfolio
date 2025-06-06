document.addEventListener("DOMContentLoaded",()=>{
var typed = new Typed(".multiple-text",{
    strings:["MERN Developer","Full Stack Web Developer","DSA enthusiast"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});


const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click",()=>{
    navbar.classList.toggle("active");
});

document.addEventListener("click",(e)=>{
    if(!hamburger.contains(e.target) && !navbar.contains(e.target)){
    navbar.classList.remove("active");
    }
});

let contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    contactForm.submit();
});
}, {once:true});