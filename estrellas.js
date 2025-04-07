let lastStarTime = 0; // Tiempo de la última estrella
const starInterval = 100; // Intervalo en milisegundos para crear estrellas

// Crear una estrella en el mouse
document.addEventListener('mousemove', function(e) {
    const currentTime = Date.now();
    if (currentTime - lastStarTime > starInterval) {
        crearEstrella(e.clientX, e.clientY);
        lastStarTime = currentTime; // Actualiza el tiempo de la última estrella
    }
});

// Crear una estrella
function crearEstrella(x, y) {
    const estrella = document.createElement('img');
    estrella.src = 'media/img/star.png'; // Cambia esto por la ruta de tu imagen
    estrella.classList.add('estrella');

    estrella.style.left = `${x}px`;
    estrella.style.top = `${y + window.scrollY}px`;

    document.body.appendChild(estrella);

    // Eliminar la estrella después de que caiga
    estrella.addEventListener('animationend', function() {
        estrella.remove();
    });
}
