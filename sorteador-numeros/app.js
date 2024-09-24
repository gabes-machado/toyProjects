function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resultado = document.getElementById('resultado');
    let sorteados = [];

    if (de >= ate || quantidade > (ate - de + 1)) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número", e o campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    } else {
    for (let i = 0; i < quantidade; i++) {
        num = gerarNumAleatorio(de, ate);
        while (sorteados.includes(num)) {
            num = gerarNumAleatorio(de, ate);
        }
        sorteados.push(num);
    }   
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alterarStatusBotao();
    }
}

function gerarNumAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    alterarStatusBotao();
    limparCampo();
}

function limparCampo() {
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>'
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}