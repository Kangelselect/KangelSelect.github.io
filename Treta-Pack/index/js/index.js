// /Treta-Pack/index/js/index.js

// Función principal para inicializar las animaciones
function initAnimations() {
    // Seleccionar todas las imágenes dentro de las cajas de características
    const featureImages = document.querySelectorAll('.feature-box img');
    const featureBoxes = document.querySelectorAll('.feature-box');
    
    // Función para animar las imágenes
    function animateImages() {
        featureImages.forEach((img, index) => {
            // Aplicar un retraso escalonado para un efecto más dinámico
            setTimeout(() => {
                img.classList.add('centered');
            }, index * 400);
        });
    }
    
    // Función para animar las cajas
    function animateBoxes() {
        featureBoxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add('visible');
            }, index * 200);
        });
    }
    
    // Función para verificar si un elemento está en la vista
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Función para manejar el scroll y activar animaciones
    function handleScrollAnimation() {
        const featuresSection = document.querySelector('.features');
        
        if (featuresSection && isElementInViewport(featuresSection)) {
            animateImages();
            animateBoxes();
            // Remover el event listener después de activar una vez
            window.removeEventListener('scroll', handleScrollAnimation);
        }
    }
    
    // Iniciar las animaciones cuando la página esté cargada
    document.addEventListener('DOMContentLoaded', function() {
        // Esperar un poco para que la página se estabilice
        setTimeout(() => {
            // Verificar si la sección ya está visible al cargar
            const featuresSection = document.querySelector('.features');
            if (featuresSection && isElementInViewport(featuresSection)) {
                animateImages();
                animateBoxes();
            } else {
                // Si no está visible, activar con scroll
                window.addEventListener('scroll', handleScrollAnimation);
            }
        }, 300);
        
        // Inicializar navegación activa
        setActiveNavigation();
    });
    
    // Navegación activa
    function setActiveNavigation() {
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            // Verificar si el enlace coincide con la página actual
            if (currentPage.includes(linkHref)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Inicializar todas las funcionalidades
initAnimations();