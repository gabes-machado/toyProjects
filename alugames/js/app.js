function alterarStatus(id) {
    // Obtém o elemento do jogo pelo ID fornecido
    let elemento = document.getElementById(`game-${id}`);
    
    // Seleciona a imagem do jogo dentro do elemento
    let imagem = elemento.querySelector('.dashboard__item__img');
    
    // Seleciona o botão de ação dentro do elemento
    let botao = elemento.querySelector('.dashboard__item__button');
    
    // Seleciona o nome do jogo dentro do elemento
    let nomeJogo = elemento.querySelector('.dashboard__item__name');
    
    // Verifica se a imagem possui a classe que indica que o jogo está alugado
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            // Remove a classe que indica que o jogo está alugado
            imagem.classList.remove('dashboard__item__img--rented');
            
            // Remove a classe do botão que indica a ação de devolver
            botao.classList.remove('dashboard__item__button--return');
            
            // Altera o texto do botão para 'Alugar'
            botao.textContent = 'Alugar';
        }
    } else {
        // Adiciona a classe que indica que o jogo está alugado
        imagem.classList.add('dashboard__item__img--rented');
        
        // Adiciona a classe do botão que indica a ação de devolver
        botao.classList.add('dashboard__item__button--return');
        
        // Altera o texto do botão para 'Devolver'
        botao.textContent = 'Devolver';
    }
}