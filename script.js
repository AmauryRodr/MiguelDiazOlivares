// --- Animación de sobre ---
document.getElementById("sobre-inicial").addEventListener("click", function () {
  const sobre = this;
  sobre.classList.add("animar-salida");

  setTimeout(() => {
    sobre.style.display = "none";
    document.getElementById("contenido-principal").style.display = "block";
    window.scrollTo(0, 0);
  }, 1000);
});

// --- Contador regresivo ---
const fechaBoda = new Date("2026-02-24T12:45:00");
const countdownEl = document.getElementById("countdown");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaBoda - ahora;

  if (diferencia <= 0) {
    countdownEl.innerHTML = "¡Hoy es el día!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / 1000 / 60) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  countdownEl.innerHTML = `
    <span class="tiempo"><strong>${dias}</strong><br>Días</span>
    <span class="tiempo"><strong>${horas}</strong><br>Horas</span>
    <span class="tiempo"><strong>${minutos}</strong><br>Minutos</span>
    <span class="tiempo"><strong>${segundos}</strong><br>Segundos</span>
  `;
}
setInterval(actualizarContador, 1000);

// ✅ Confirmación de asistencia con WhatsApp
document.getElementById("form-rsvp").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const asistentes = parseInt(document.getElementById("asistentes").value);
  const mensajeEl = document.getElementById("mensaje");

  if (nombre.length < 3) {
    mensajeEl.innerText = "Por favor, ingresa un nombre válido.";
    return;
  }

  if (isNaN(asistentes) || asistentes < 1) {
    mensajeEl.innerText = "Indica cuántas personas asistirán.";
    return;
  }

  // Número de WhatsApp al que llegará la confirmación
  const numeroWhatsApp = "5214613613044"; // ← CAMBIA este número por el tuyo

  // Mensaje para enviar por WhatsApp
  const mensajeWA = `Hola! Confirmo mi asistencia a la boda de Ricardo y Yesi. Mi nombre es ${nombre} y asistirán ${asistentes} persona(s).`;

  // Redirección a WhatsApp
  window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWA)}`, "_blank");

  // Ocultar el formulario y mostrar mensaje de agradecimiento
  document.getElementById("form-rsvp").style.display = "none";
  mensajeEl.innerText = "✅ ¡Gracias por confirmar tu asistencia!";
});

// --- Animación fade-in al hacer scroll ---
const elementos = document.querySelectorAll(".fade-in");
function mostrarScroll() {
  elementos.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", mostrarScroll);
window.addEventListener("load", mostrarScroll);

// --- Botón para controlar música ---
const btnMusica = document.getElementById("btn-musica");
const musica = document.getElementById("musica-boda");
btnMusica.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

// --- Carrusel de galería ---
const imagenesGaleria = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
let indiceActual = 0;
const imgCarrusel = document.getElementById("imagen-carrusel");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

function mostrarImagen() {
  imgCarrusel.style.opacity = 0;
  setTimeout(() => {
    imgCarrusel.src = imagenesGaleria[indiceActual];
    imgCarrusel.style.opacity = 1;
  }, 200);
}

btnAnterior.addEventListener("click", () => {
  indiceActual = (indiceActual - 1 + imagenesGaleria.length) % imagenesGaleria.length;
  mostrarImagen();
});

btnSiguiente.addEventListener("click", () => {
  indiceActual = (indiceActual + 1) % imagenesGaleria.length;
  mostrarImagen();
});

setInterval(() => {
  indiceActual = (indiceActual + 1) % imagenesGaleria.length;
  mostrarImagen();
}, 5000);

mostrarImagen();

// --- Animaciones del programa ---
function animarElemento(clase) {
  const items = document.querySelectorAll(`.${clase} .liquido`);
  items.forEach((el) => {
    const rect = el.getBoundingClientRect();
    el.style.height = rect.top < window.innerHeight - 50 ? "100%" : "0%";
  });
}

window.addEventListener("scroll", () => {
  animarElemento("iglesia");
  animarElemento("comida");
  animarElemento("vals");
  animarElemento("musica");
});
window.addEventListener("load", () => {
  animarElemento("iglesia");
  animarElemento("comida");
  animarElemento("vals");
  animarElemento("musica");
});
