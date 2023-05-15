"use strict";
// button when click start shaking 
const shakeBtn = document.querySelector(".button-shake");
const shakeDiv = document.querySelector(".shake-div");

shakeBtn.addEventListener("click", () => {
    shakeDiv.classList.add("shake");
    setTimeout(() => {
        shakeDiv.classList.remove("shake");
    }, 2000);
});

// Particles while the page is loading
// const particles = document.querySelector(".particles");

// window.addEventListener("load", () => {
//     particles.style.display = "none";
// })

//daek light mode (Desactivated)
// const darkLight = document.querySelector(".dark");
// const dlIcon = document.querySelector(".dark-light-icon");
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

// Nav menu

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

// Knowledge + buttons config
const infoBtn = document.querySelectorAll(".plus-btn");
const infoBox = document.querySelectorAll(".info-box");
const plusIcon = document.querySelectorAll(".plus-icon");

infoBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // cierra todas las otras ventanas infoBox
        infoBox.forEach((box, boxIndex) => {
            if (boxIndex !== index) {
                box.classList.remove("info-box-show");
                plusIcon[boxIndex].classList.remove("minus-icon");
                plusIcon[boxIndex].classList.add("plus-icon");
            }
        });

        // abre o cierra la ventana actual
        if (infoBox[index].classList.contains("info-box-show")) {
            hideInfoBox(index);
        } else {
            showInfoBox(index);
        }
    });

    // controlador de eventos para cerrar la ventana actual al hacer clic fuera de ella
    document.addEventListener("click", (event) => {
        if (!infoBtn[index].contains(event.target) && !infoBox[index].contains(event.target)) {
            hideInfoBox(index);
        }
    });
});

function hideInfoBox(index) {
    infoBox[index].classList.remove("info-box-show");
    plusIcon[index].classList.remove("minus-icon");
    plusIcon[index].classList.add("plus-icon");
}

function showInfoBox(index) {
    infoBox[index].classList.add("info-box-show");
    plusIcon[index].classList.add("minus-icon");
    plusIcon[index].classList.remove("plus-icon");
}
