// JavaScript para o Carousel de Imagens
const carouselImages = document.getElementById('carouselImages');
const images = carouselImages.getElementsByTagName('img');
const totalImages = images.length;
let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = 'translateX(' + offset + '%)';
}

// Auto slide a cada 5 segundos
setInterval(function() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, 5000);