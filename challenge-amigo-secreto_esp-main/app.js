const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (!nombre) {
        alert("Escriba un nombre");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Ya escribió ese nombre");
        return;
    }

    listaAmigos.push(nombre);
    ulListaAmigos.innerHTML += `<li>${nombre}</li>`;
    inputAmigo.value = ""; // limpiar input
}

// 🔔 Nueva función de validación
function alertaMinimo() {
    if (listaAmigos.length < 2) {
        alert("Debe agregar al menos 2 nombres para sortear");
        return false;
    }
    return true;
}

function sortearAmigo() {
    if (!alertaMinimo()) {
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

