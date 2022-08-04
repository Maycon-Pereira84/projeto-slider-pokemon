/* Objetivo 1 -Quando clicarmos na seta avançar temos que mostrar o proximo cartão da lista
    - passo 1 - Dar um jeitode pegar o elemento html da seta avançar
    - passo 2 - Dar um jeito de identificar o clic do usuario na seta avançar
    - passo 3 - Fazer aparecer o proximo cartão da lista
    - passo 4 - Buscar o proximo cartão selecionado e esconder
   Objetivo 2 -Quando clicarmos na seta voltar temos que mostrar o cartão anterior da lista
    - passo 1 - Dar um jeitode pegar o elemento html da seta voltar
    - passo 2 - Dar um jeito de identificar o clic do usuario na seta voltar
    - passo 3 - Fazer aparecer o cartão anterior da lista
    - passo 4 - Buscar o proximo cartão selecionado e esconder 
*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[cartaoAtual].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;
  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;
  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
