let totalGeral;
limpar();

function adicionar(params) {
    const produto = document.getElementById('produto').value;
    const valorProduto = parseInt(produto.match(/\d+/g)[0]);
    const nomeProduto = produto.match(/^[^-]+/)[0].trim();
    const quantidade = parseInt(document.getElementById('quantidade').value);
    
    let preco = valorProduto * quantidade;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(params) {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

