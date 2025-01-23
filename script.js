const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display= 'none';
    currentSlide = (n +slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

//Mostrar o próximo slide
function nextSlide() {
    show nextSlide(currentSlide + 1);
}

//Mostrar o slide anterior
function prevSlide() {
    showSlide(currentSlide - 1);
}

//Iniciar a apresentação automaticamente (a cada 15 segundos)
setInterval(nextSlide, 15000);