const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[n].style.display = 'block';
  currentSlide = n;
}

//Mostrar o próximo slide
function nextSlide() {
  showSlide((currentSlide + 1) %slides.length);
}

//Mostrar o slide anterior
function prevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}

//Iniciar a apresentação automaticamente (a cada 15 segundos)
setInterval(nextSlide, 15000);
