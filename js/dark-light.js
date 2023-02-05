const darkLight = document.querySelector(".dark");
const dlIcon = document.querySelector(".dark-light-icon");
const container = document.querySelector(".container-dark");
const skillsh3 = document.querySelector(".sklls-h3-dark");

let dl = true;
darkLight.addEventListener("click", () => {
    if(dl) {
        darkLight.classList.replace("dark", "light");
        dlIcon.classList.replace("bx-sun", "bx-moon");
        container.classList.replace("container-dark", "container-light");
        dl = false;
    }
    else {
        darkLight.classList.replace("light", "dark");
        dlIcon.classList.replace("bx-moon", "bx-sun");
        container.classList.replace("container-light", "container-dark");
        dl=true;
    }
})




