let header =  document.querySelector(".header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky-active", window.scrollY > 0);
})

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
menu.addEventListener("click", ()=>{
navbar.classList.toggle("responsive");
})


// loader

let loader = document.querySelector('.center');
window.addEventListener('load', ()=>{
loader.style.display = "none";
})