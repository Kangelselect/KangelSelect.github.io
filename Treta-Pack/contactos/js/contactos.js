// Animación al cargar
document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.querySelector(".contact-container");
  setTimeout(() => formContainer.classList.add("show"), 200);
});

// Interactividad del formulario
const form = document.getElementById("contactForm");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Animación del botón
  const button = form.querySelector("button");
  button.innerText = "Enviando...";
  button.disabled = true;

  // Simulación de envío (puedes reemplazar con tu backend o EmailJS)
  setTimeout(() => {
    respuesta.innerText = "✅ ¡Mensaje enviado con éxito!";
    button.innerText = "Enviar mensaje";
    button.disabled = false;
    form.reset();
  }, 1500);
});

// Animación flotante del logo
const logo = document.querySelector(".background-logo img");
let angle = 0;
function moveLogo() {
  angle += 0.02;
  logo.style.transform = `translate(-50%, -50%) translateY(${Math.sin(angle) * 10}px)`;
  requestAnimationFrame(moveLogo);
}
moveLogo();
