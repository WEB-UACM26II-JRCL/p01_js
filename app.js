// Practica 01: Adivina el numero
// Desarrolla el programa siguiendo la guia.
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
console.log("Numero secreto:", numeroSecreto);


function comprobar() {
    let texto = document.getElementById("numero").value;
    let numero = Number(texto);
    
    if (texto.trim() === "" || !Number.isInteger(numero) || numero < 1 || numero > 100){ 
        alert("Escribe un numero entero entre 1 y 100.");
        return;
    }
    
    intentos = intentos + 1
    
    if (numero < numeroSecreto) {
        document.getElementById("mensaje").textContent = "El numero secreto es mayor.";
    }
    else if (numero > numeroSecreto) {
        document.getElementById("mensaje").textContent = "El numero secreto es menor.";
    }
    else {
        document.getElementById("mensaje").textContent = "Acertaste!";
    }
    document.getElementById("intentos").textContent = intentos;
}
    
    
function nuevoJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    
    document.getElementById("numero").value = "";
    document.getElementById("mensaje").textContent = "Ingresa un numero para comenzar.";
    document.getElementById("intentos").textContent = intentos;
    console.log("Nuevo numero secreto:", numeroSecreto);
}
