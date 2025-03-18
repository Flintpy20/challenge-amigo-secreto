let amigos = [];

function adicionarAmigo() {
    let campo = document.getElementById('amigo').value;

    if (campo === '') {
        alert('Por favor, insira um nome.');
        return;
    } else {
        amigos.push(campo);
        limparCampo();
        exibirAmigos();
    }
}

function limparCampo() {
    let campo = document.getElementById('amigo');
    campo.value = '';
}

function exibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];

        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo na lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
