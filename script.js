/* =====================================
   ELEMENTOS
===================================== */

const inicio = document.getElementById("inicio");
const regalo = document.getElementById("regalo");
const final = document.getElementById("final");

const comenzar = document.getElementById("comenzar");
const mostrarMensaje = document.getElementById("mostrarMensaje");
const volver = document.getElementById("volver");

const musica = document.getElementById("musica");
const contenedorPetalos = document.getElementById("petalos");


/* =====================================
   CAMBIAR DE PANTALLA
===================================== */

function cambiarPantalla(pantalla) {

    document.querySelectorAll(".pantalla").forEach((p) => {
        p.classList.remove("activa");
    });

    pantalla.classList.add("activa");
}


/* =====================================
   BOTÓN COMENZAR
===================================== */

comenzar.addEventListener("click", () => {

    cambiarPantalla(regalo);

    musica.play().catch(() => {
        console.log("El navegador bloqueó el audio.");
    });

    crearPetalos();
});


/* =====================================
   MOSTRAR CARTA FINAL
===================================== */

mostrarMensaje.addEventListener("click", () => {

    cambiarPantalla(final);

});


/* =====================================
   VOLVER AL RAMO
===================================== */

volver.addEventListener("click", () => {

    cambiarPantalla(regalo);

});


/* =====================================
   CREAR PÉTALOS QUE CAEN
===================================== */

let petalosIniciados = false;

function crearPetalos() {

    if (petalosIniciados) {
        return;
    }

    petalosIniciados = true;

    setInterval(() => {

        const petalo = document.createElement("div");

        petalo.className = "petalo-caida";

        /* Puedes cambiar 🌼 por 🌻 si quieres */
        petalo.textContent = "🌼";

        petalo.style.left =
            Math.random() * 100 + "vw";

        petalo.style.fontSize =
            (12 + Math.random() * 18) + "px";

        const duracion =
            5 + Math.random() * 5;

        petalo.style.animationDuration =
            duracion + "s, " +
            (2 + Math.random() * 3) + "s";

        contenedorPetalos.appendChild(petalo);


        /* Eliminar cuando termina */
        setTimeout(() => {

            petalo.remove();

        }, duracion * 1000);

    }, 550);
}