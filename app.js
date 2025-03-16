
let inputAmigo = document.getElementById("amigo");
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

// ingresar amigos en la lista de amigos
function agregarAmigo() {
    if(inputAmigo.value ===''){
        alert('Por favor, inserte un nombre')
    }

    if (listaAmigos.includes(inputAmigo.value)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;

    limpiarInput();
};

// sortear la lista de amigos de manera aleatoria
function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega nombres antes de sortear.");
        return;
    }
    let random = Math.floor((Math.random()*listaAmigos.length));
    let amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

    setTimeout(reiniciarJuego, 4000);
}

// Limpiar input para ingresar los nombres
function limpiarInput() {
    inputAmigo.value = "";
}

// Reiniciar el juego despues de terminar el sorteo
function reiniciarJuego() {
    listaAmigos.length = 0; 
    ulListaAmigos.innerHTML = ""; 
    ulResultado.innerHTML = ""; 
}


