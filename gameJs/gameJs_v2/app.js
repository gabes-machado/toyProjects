let listaNumSorteados = [];
let limite = 100;
let num = gerarNumAleatorio();
let tentativa = 1;
mensagemInicial()

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == num) {
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > num) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativa++
    }
}

function gerarNumAleatorio() {
    let numEscolhido = parseInt((Math.random() * limite) + 1);
    let elementos = listaNumSorteados.length;
    if (elementos == limite) {
        listaNumSorteados = [];
    }
    if (listaNumSorteados.includes(numEscolhido)) {
        return gerarNumAleatorio();
    } else {
        listaNumSorteados.push(numEscolhido);
        return numEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    num = gerarNumAleatorio();
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    tentativa = 1;

}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100')
}

