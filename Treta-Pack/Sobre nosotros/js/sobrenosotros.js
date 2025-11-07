// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animación para las estadísticas
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / speed;
        let current = 0;
        
        const updateNumber = () => {
            if(current < target) {
                current += increment;
                stat.textContent = Math.ceil(current) + (stat.textContent.includes('%') ? '%' : '+');
                setTimeout(updateNumber, 1);
            } else {
                stat.textContent = target + (stat.textContent.includes('%') ? '%' : '+');
            }
        };
        
        updateNumber();
    });
}

// Activar animación de estadísticas cuando sean visibles
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.getElementById('impacto'));

// Efecto de aparición para las tarjetas
const cards = document.querySelectorAll('.process-step, .benefit-card, .application-card');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    cardObserver.observe(card);
});

// Cambiar estilo del header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(46, 125, 50, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)';
        header.style.backdropFilter = 'none';
    }
});