



var toggleClick = document.querySelector(".toggleBox");
var Kosz = document.querySelector(".Kosz")
toggleClick.addEventListener("click", ()=> {
    toggleClick.classList.toggle('active');
    Kosz.classList.toggle("active");
})
document.getElementById('About').onclick = function() {
    window.scrollTo(0,document.body.scrollHeight);
  }