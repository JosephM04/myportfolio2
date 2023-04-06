"use strict";

// Animación de particulas en la pantalla de carga
const particles = document.querySelector(".particles");

window.addEventListener("load", () => {
    particles.style.display = "none";
})

// configuración para cambiar entre modo oscuro y modo claro
const darkLight = document.querySelector(".dark");
const dlIcon = document.querySelector(".dark-light-icon");
// const body = document.querySelector(".body");
// const email = document.getElementById("email");
// const navA = document.querySelectorAll(".nav-a-dark");

// // si dl es true está activado el modo oscuro  y cambiará a modo claro, de lo contrario está en modo claro y cambiará a modo oscuro
// let dl = true;

// body.style.backgroundColor = "#1a253c";
// body.style.color = "#f3f3f3";


// // evento al dar click en el boton
// darkLight.addEventListener("click", () => {
//     for (let i = 0; i < navA.length; i++) {
//         navA[i].classList.toggle("nav-a-light");
//     }
//     if (dl) {
//         darkLight.classList.replace("dark", "light");
//         dlIcon.classList.replace("bx-sun", "bx-moon");
//         body.style.backgroundColor = "#fff";
//         body.style.color = "#333";
//         email.style.color = "#000";
//         email.style.textShadow = "1px 1px 2px #fff";
//         dl = false;
//     }
//     else {
//         darkLight.classList.replace("light", "dark");
//         dlIcon.classList.replace("bx-moon", "bx-sun");
//         body.style.backgroundColor = "#1a253c";
//         body.style.color = "#f3f3f3";
//         email.style.color = "#fff";
//         email.style.textShadow = "1px 1px 2px #000";
//         dl = true;
//     }
// })

// menu de navegación

const navBar = document.querySelector(".cont-navbar");
const showNavBtn = document.querySelector(".button-nav");
const icon = document.querySelector(".icon-nav");

showNavBtn.addEventListener('click', () => {
    navBar.classList.toggle("show-nav");
    if (navBar.classList.contains("show-nav")) icon.classList.replace("bx-chevron-down", "bx-chevron-up");
    else icon.classList.replace("bx-chevron-up", "bx-chevron-down");
});

window.addEventListener('click', e => {
    if (navBar.classList.contains('show-nav') && e.target != navBar && e.target != icon) {
        icon.classList.replace("bx-chevron-up", "bx-chevron-down");
        navBar.classList.toggle("show-nav");
    }
});