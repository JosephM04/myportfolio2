const root = document.querySelector(".contenedor");
const header = document.querySelector(".bg")

root.addEventListener("mousemove", function(e) {
    header.style.left = `${e.clientX}px`;
    header.style.top = `${e.clientY}px`;
});

function clearCoor() {
    document.getElementById(".bg").innerHTML = "";
  }
