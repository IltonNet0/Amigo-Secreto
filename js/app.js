let lista = [];
function adicionar(){
    let nomes = document.getElementById('nome-amigo').value;
    let nomesIncluidos = document.getElementById('lista-amigos');
    
    if (nomes.trim() === '') {
        alert('Por favor, digite um nome.');
        return;
    }

    lista.push(nomes);

    nomesIncluidos.textContent = lista.join(', ');

    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    let qtd = lista.length;
    let numero;

    if(qtd % 2 != 0){
        alert('O número de pessoas tem que ser par para ser sorteado!');
        return;
    }

    let listaEmbaralhada = embaralhar([...lista]);

    for (let i = 0; i < listaEmbaralhada.length; i++) {
        if (listaEmbaralhada[i] === lista[i]) {
        
            let proximo = (i + 1) % listaEmbaralhada.length;
            [listaEmbaralhada[i], listaEmbaralhada[proximo]] = [listaEmbaralhada[proximo], listaEmbaralhada[i]];
        }
    }

    let resultado = [];
    for (let i = 0; i < lista.length; i++) {
        resultado.push(`${lista[i]} -----> ${listaEmbaralhada[i]}`);
    }
       

    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = resultado.join('<br>');
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;
}

function reiniciar(){
    lista = []; 
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').textContent = '';
    document.getElementById('lista-amigos').textContent = '';
}