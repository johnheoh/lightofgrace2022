var slides = document.querySelectorAll("#slides > img");
var prev1 = document.getElementById("prev1");
var next1 = document.getElementById("next1");
var current = 0;

showSlides(current);
prev1.onclick = prevSlide;
next1.onclick = nextSlide;

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function prevSlide() {
  if (current > 0) current -= 1;
  else
    current = slides.length - 1;
    showSlides(current);
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else
    current = 0;
    showSlides(current);  
}
