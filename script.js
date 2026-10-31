 document.addEventListener("DOMContentLoaded", function() {
            // Selecciona todos los elementos que tienen la clase de fade-in
            const faders = document.querySelectorAll('.fade-in-section');

            // Configuración del Intersection Observer
            const appearOptions = {
                threshold: 0.15, // Ejecutar cuando el 15% del elemento sea visible
                rootMargin: "0px 0px -50px 0px" // Margen de activación
            };

            const appearOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return; // Si no está en pantalla, no hacer nada
                    } else {
                        // Si aparece en pantalla, añadir la clase 'is-visible'
                        entry.target.classList.add('is-visible');
                        // Dejar de observar el elemento una vez que ya apareció
                        observer.unobserve(entry.target);
                    }
                });
            }, appearOptions);

            // Observar cada sección
            faders.forEach(fader => {
                appearOnScroll.observe(fader);
            });
        });