const root = document.querySelector(".contenedor");
const bg = document.querySelector(".bg")

root.addEventListener("mousemove", function(e) {
    bg.style.display ="block"
    bg.style.left = `${e.clientX}px`;
    bg.style.top = `${e.clientY}px`;
});

root.addEventListener("mouseout", () => {
    bg.style.display = "none";
})

function clearCoor() {
    document.getElementById(".bg").innerHTML = "";
  }