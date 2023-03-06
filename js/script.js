"use strict";

const darkLight = document.querySelector(".dark");
const dlIcon = document.querySelector(".dark-light-icon");
const body = document.querySelector(".body");
const email = document.getElementById("email");

let dl = true;
darkLight.addEventListener("click", () => {
    if(dl) {
        darkLight.classList.replace("dark", "light");
        dlIcon.classList.replace("bx-sun", "bx-moon");
        body.style.backgroundImage = "linear-gradient(to right, #cfcfcf 0%, #fafafa 100%)";
        body.style.color ="#333";
        email.style.color="#000";
        email.style.textShadow = "1px 1px 2px #fff";
        dl = false;
    }
    else {
        darkLight.classList.replace("light", "dark");
        dlIcon.classList.replace("bx-moon", "bx-sun");
        body.style.backgroundImage = "linear-gradient(to right, #505050 75%, #b3b6b8 150%)";  
        body.style.color ="#f3f3f3";
        email.style.color="#fff";
        email.style.textShadow = "1px 1px 2px #000";
        dl=true;
    }   
})

// menu de navegación

const navBar = document.querySelector(".navbar");
const showNavBtn = document.querySelector(".button-nav");
const icon = document.querySelector(".icon-nav");

let contIcon = true;

showNavBtn.addEventListener('click', () =>{
    navBar.classList.toggle("show-nav");
    if(navBar.classList.contains("show-nav")) icon.classList.replace("bx-chevron-down", "bx-chevron-up");
    else icon.classList.replace("bx-chevron-up", "bx-chevron-down");
});

window.addEventListener('click', e=>{
    if(navBar.classList.contains('show-nav') && e.target!=navBar && e.target!=icon){
        icon.classList.replace("bx-chevron-up", "bx-chevron-down");
        navBar.classList.toggle("show-nav");
    }
});





