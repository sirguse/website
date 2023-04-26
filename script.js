AOS.init();



var toggleClick = document.querySelector(".toggleBox");
var Kosz = document.querySelector(".Kosz")
toggleClick.addEventListener("click", ()=> {
    toggleClick.classList.toggle('active');
    Kosz.classList.toggle("active");
})

// Do poprawy
/*
const obrazek = document.getElementById('Profil');

let initialX;
let initialY;

obrazek.addEventListener('mouseenter', (event) => {
  initialX = event.clientX;
  initialY = event.clientY;
});

obrazek.addEventListener('mousemove', (event) => {
  const diffX = event.clientX - initialX;
  const diffY = event.clientY - initialY;

  obrazek.style.transform = `translate(${diffX * 0.1}px, ${diffY * 0.1}px)`;
});

obrazek.addEventListener('mouseleave', () => {
  obrazek.style.transform = `translate(0px, 0px)`;
});

obrazek.addEventListener('mousemove', (event) => {
  const diffX = event.clientX - initialX;
  const diffY = event.clientY - initialY;

  obrazek.style.transform = `translate(${diffX * 0.3}px, ${diffY * 0.3}px)`;
});
*/
const obrazek = document.getElementById('Profil');

let initialX;
let initialY;

obrazek.addEventListener('mouseenter', (event) => {
  initialX = event.clientX;
  initialY = event.clientY;
});

obrazek.addEventListener('mousemove', (event) => {
  const diffX = event.clientX - initialX;
  const diffY = event.clientY - initialY;

  obrazek.style.transition = 'all 0.3s';
  obrazek.style.transform = `translate(${diffX * 0.15}px, ${diffY * 0.15}px)`;
});

obrazek.addEventListener('mouseleave', () => {
  obrazek.style.transform = `translate(0px, 0px)`;
});







window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");
  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add("active");
    }
    else{
      reveals[i].classList.remove("active");
    }
  }
}