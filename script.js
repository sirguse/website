



var toggleClick = document.querySelector(".toggleBox");
var Kosz = document.querySelector(".Kosz")
toggleClick.addEventListener("click", ()=> {
    toggleClick.classList.toggle('active');
    Kosz.classList.toggle("active");
})