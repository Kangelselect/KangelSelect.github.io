// Efecto de aparición del formulario
document.addEventListener("DOMContentLoaded", () => {
    const loginBox = document.querySelector(".login-container");
    loginBox.style.opacity = 0;
    loginBox.style.transform = "translateY(-50px)";
    setTimeout(() => {
        loginBox.style.transition = "all 0.8s ease";
        loginBox.style.opacity = 1;
        loginBox.style.transform = "translateY(0)";
    }, 300);
});

// Efecto al escribir en los inputs
const inputs = document.querySelectorAll(".id-input, .password-input");

inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        input.style.boxShadow = "0 0 10px rgba(68, 0, 255, 0.5)";
    });

    input.addEventListener("blur", () => {
        input.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        input.style.boxShadow = "none";
    });
});

// Efecto al hacer clic en los botones
const loginBtn = document.getElementById("loginButton");
const registerBtn = document.getElementById("registerButton");

function bounceButton(button) {
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 150);
}

loginBtn.addEventListener("click", () => {
    bounceButton(loginBtn);
    alert("Iniciando sesión...");
});

registerBtn.addEventListener("click", () => {
    bounceButton(registerBtn);
    alert("Redirigiendo al registro...");
});

// Animación sutil del logo de fondo (movimiento flotante)
const logo = document.querySelector(".background-logo img");
let angle = 0;
function moveLogo() {
    angle += 0.02;
    logo.style.transform = `translate(-50%, -50%) translateY(${Math.sin(angle) * 10}px)`;
    requestAnimationFrame(moveLogo);
}
moveLogo();
