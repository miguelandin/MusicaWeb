// Importamos las imagenes y el sonido
const images = document.querySelectorAll('.album');
const sound = document.getElementById('wii');

// Añadir un listener a cada imagen
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        sound.currentTime = 0; // Reset sound to start
        sound.play(); // Play sound
    });

    image.addEventListener('mouseout', () => {
        sound.pause(); // Pause sound when mouse leaves
    });
});
