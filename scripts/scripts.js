
            // SCRIPT PARA GENERAR ESTRELLAS
    document.addEventListener("DOMContentLoaded", function () {
        const starContainer = document.querySelector(".stars");
    
        setInterval(() => {
            const star = document.createElement("div");
            star.classList.add("star");
    
            // Generar una posición aleatoria centrada
            const containerWidth = starContainer.offsetWidth;
            const starWidth = 8;  // El tamaño de la estrella
            const maxLeft = containerWidth - starWidth;  // Calcular el límite de la posición horizontal
            const randomLeft = Math.random() * (maxLeft * 0.6) + (maxLeft * 0.2); // Estrellas centradas
    
            const randomDuration = Math.random() * 1 + 1; // Duración aleatoria entre 1 y 2 segundos
    
            star.style.left = `${randomLeft}px`;  // Ubicación horizontal centrada
            star.style.animationDuration = `${randomDuration}s`; // Duración aleatoria de la animación
    
            // Agregar la estrella al contenedor
            starContainer.appendChild(star);
    
            setTimeout(() => {
                star.remove();
            }, randomDuration * 1000); // Eliminar la estrella después de que termine la animación
        }, 500); // Cada 0.5s aparece una nueva estrella
    });




    // SCRIPT PARA LAS IMAGENES MODAL
    var modalImage = document.getElementById('modalImage');
    
    // Seleccionar todas las imágenes con data-bs-toggle="modal"
    var images = document.querySelectorAll('img[data-bs-toggle="modal"]');

    // Añadir un evento para cambiar la imagen del modal al hacer clic en cualquiera de las imágenes
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Obtener la URL de la imagen de la propiedad data-bs-src
            var src = image.getAttribute('data-bs-src');
            // Asignar la URL de la imagen grande al modal
            modalImage.src = src;
        });
    });
