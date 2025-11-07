// Funcionalidades para la página de productos
document.addEventListener('DOMContentLoaded', function() {
    
    // Animación de aparición para elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.category-card, .product-card, .process-step, .benefit-card, .testimonial-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Navegación por categorías
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProductsByCategory(category);
        });
    });

    // Funcionalidad de carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            addToCart(productName, productPrice);
        });
    });

    // Filtrado de productos por categoría
    function filterProductsByCategory(category) {
        // En una implementación real, aquí harías una petición al servidor
        // o filtrarías productos existentes en el DOM
        
        console.log(`Filtrando productos por categoría: ${category}`);
        
        // Mostrar mensaje temporal
        showNotification(`Mostrando productos de ${getCategoryName(category)}`);
    }

    // Agregar producto al carrito
    function addToCart(productName, productPrice) {
        // En una implementación real, aquí actualizarías el estado del carrito
        
        console.log(`Agregando al carrito: ${productName} - ${productPrice}`);
        
        // Efecto visual de confirmación
        const button = event.target;
        const originalText = button.textContent;
        
        button.textContent = '✓ Agregado';
        button.style.background = 'var(--color-eco)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
        
        showNotification(`${productName} agregado al carrito`);
    }

    // Mostrar notificación
    function showNotification(message) {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-eco);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Obtener nombre de categoría
    function getCategoryName(categoryKey) {
        const categories = {
            'aislantes': 'Aislantes Térmicos',
            'muebles': 'Mobiliario Ecológico',
            'accesorios': 'Accesorios Diarios',
            'construccion': 'Materiales de Construcción'
        };
        
        return categories[categoryKey] || 'Productos';
    }

    // Animación CSS para notificaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});

// Funcionalidad de búsqueda (si se implementa)
function searchProducts(query) {
    console.log(`Buscando productos: ${query}`);
    // Implementar lógica de búsqueda
}