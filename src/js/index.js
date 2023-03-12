/*
OBJETIVO - Quando clicarmos no botão, temos que mostrar a imagem de fundo conrrespondente */

//passo 1: pegar o elemento HTML dos botões;
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')


/*p2: identficar o clique do usuário no botão
const botao1 = document.getElementById('botao1');
botao1.addEventListener('click', () => {
    console.log('Clicou no botão 1')
})*/
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        /*p3: desmarcar o botão selecionado anterior, refatorado abaixo
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');*/
        desativarBotaoSelecionado();

        selecionarBotaoCarrosel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function mostrarImagemDeFundo(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

