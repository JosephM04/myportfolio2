"use strict";

// --------------------------------All sections -----------------------------------------------------

// ------------------Customized cursor-----------------------------
document.addEventListener("DOMContentLoaded", function () {

    let cursor = document.querySelector(".custom-cursor"); //Cursor is the mouse
    let bg = document.querySelector(".mouse-background"); //mouse background is a div used to make a circle click effect 

    // function to make the customized mouse get the position on the website
    function moveCursor(e) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
        bg.style.top = `${e.clientY}px`;
        bg.style.left = `${e.clientX}px`;
        bg.style.display = "block"
    }

    //when the mouse move it will call the function to get the position on the cursor and move
    document.addEventListener("mousemove", moveCursor);
    //  When the cursor is inside the website opacity will be 1
    document.addEventListener("mouseenter", function () {
        cursor.style.opacity = "1";
        bg.style.opacity = "1"
    });
    // when the cursor is outside the website opacity will be 0.1
    document.addEventListener("mouseleave", function () {
        cursor.style.opacity = "0.1";
        bg.style.opacity = "0.1"

    });

    //function to replace the normal cursor into a hand cursor in clickable elements, 
    //the hand will replace the normal cursor if the element is an A link, a button 
    //or the element has the "clickable-element class" 
    document.addEventListener('mouseover', function (e) {
        if (e.target.tagName === 'A' || e.target.classList.contains('clickable-element') || e.target.tagName === "BUTTON") {
            cursor.classList.add('pointer');
        } else {
            cursor.classList.remove('pointer');
        }
    });

    //code to make an click effect, when left click is down starts the animation
    document.addEventListener("mousedown", () => {
        bg.classList.add("clicked"); //"clicked" will be added to make the animation effect on click
        setTimeout(() => {
            bg.classList.remove("clicked"); //class will be removed after pass 1ms
        }, 100);
    });

    //to eliminate the normal cursor
    document.body.style.cursor = "none";
});

// function to know if the website if loaded in a smartphone or tablet to eliminate the customized cursor, 
//the animation on click effect stills
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
const cursorImg = document.querySelector(".custom-cursor-img");
if (isMobile()) {
    cursorImg.style.display = "none";
} else {
    cursorImg.style.display = "block";
}

// ------------------------------------------------Navigation menu-----------------------------------------------

//calling the elements
const navBar = document.querySelector(".cont-navbar");
const showNavBtn = document.querySelector(".button-nav");
const icon = document.querySelector(".icon-nav");

// When click the nav button
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
//---------------------------------------------------------index section ----------------------------------------------



// KNOWLEDGE + buttons config

const infoBtn = document.querySelectorAll(".plus-btn");
const infoBox = document.querySelectorAll(".info-box");
const plusIcon = document.querySelectorAll(".plus-icon");

infoBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // closes all the windows
        infoBox.forEach((box, boxIndex) => {
            if (boxIndex !== index) {
                box.classList.remove("info-box-show");
                plusIcon[boxIndex].classList.remove("minus-icon");
                plusIcon[boxIndex].classList.add("plus-icon");
            }
        });

        // opens or closes the current window
        if (infoBox[index].classList.contains("info-box-show")) {
            hideInfoBox(index);
        } else {
            showInfoBox(index);
        }
    });

    // Event handler to close all the windows when clicked outside
    document.addEventListener("click", (event) => {
        if (!infoBtn[index].contains(event.target) && !infoBox[index].contains(event.target)) {
            hideInfoBox(index);
        }
    });
});

// function to close the windows.
function hideInfoBox(index) {
    infoBox[index].classList.remove("info-box-show");
    plusIcon[index].classList.remove("minus-icon");
    plusIcon[index].classList.add("plus-icon");
}

// function to show the windows.
function showInfoBox(index) {
    infoBox[index].classList.add("info-box-show");
    plusIcon[index].classList.add("minus-icon");
    plusIcon[index].classList.remove("plus-icon");
}

// ------------------------------------Projects section---------------------------------------------

//project container transition
window.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.classList.add("show"); //when content is loaded the class "show" will be added to "project-container" to change opacity:0.1 to 1
});

// button when click start shaking 
const shakeBtn = document.querySelector(".button-shake");
const shakeDiv = document.querySelector(".shake-div");
if (shakeBtn) {
    shakeBtn.addEventListener("click", () => {
        shakeDiv.classList.add("shake");
        setTimeout(() => {
            shakeDiv.classList.remove("shake");
        }, 1000);
    });
}
