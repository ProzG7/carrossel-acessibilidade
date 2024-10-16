const bolinhas = document.querySelectorAll('.bolinha');
const carrosselSeg = document.querySelector('.carrossel-seg');
let index = 0; //index é a posição	de um elemento.

//atualiza o carrossel ao clicar na bolinha
bolinhas.forEach((bolinha, i) => { //for each executa uma função fornecida uma vez para cada
    bolinha.addEventListener('click', () => {
        index = i; //atualiza o index. i representa o elemento atual guardado dentro da bolinha
        atualizarCarrossel();
    });
});

//função para atualizar a imagem e as bolinhas ativas
function atualizarCarrossel() {
    //atualiza a posição do carrossel
    carrosselSeg.style.transform = `translateX(-${index * 100}%)`; //translateX move um elemento na horizontal

    //ativa a bolinha correspondente à posição do carrossel
    bolinhas.forEach(b => b.classList.remove('ativa'));
    bolinhas[index].classList.add('ativa');
}
setInterval(() => { //: Função JavaScript  que executa repetidamente uma função ou trecho de codigo.
    index = (index + 1) % bolinhas.length; //index + 1: Aumenta o valor do index em 1, ou seja, passa para o proximo item
    atualizarCarrossel();
}, 3000); // Muda a imagem a cada 3 segundos