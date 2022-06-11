//Variáveis pra poder puxar nas funções

var acertos = 0;
var erros = 0;
let acertou = false;
var perdeu = false;
var ganhou = false;
let posicao;
var categoriaDaPalavra;
var sorteioDaPalavra;
var caminhoImagem = ["cabeca.png", "corpo.png", "braco1.png", "braco2.png", "perna1.png", "completo.png"]

var novoJogo = document.querySelector("#nvJogo");
var desistir = document.querySelector("#desistir");


// nome e categoria das palavras que vão ser sorteadas
const palavrasDaForca = [
  {
    nome: "BRASIL",
    categoria: "PAIS"
  },

  {
    nome: "PIZZA",
    categoria: "COMIDA"
  },

  {
    nome: "LAPIS",
    categoria: "OBJETO"
  },

  {
    nome: "RETRATO",
    categoria: "OBJETO"
  },

  {
    nome: "PARQUE",
    categoria: "LUGAR"
  },

  {
    nome: "RELOGIO",
    categoria: "OBJETO"
  },
];

function criarPalavra() {
  let indexPalavra = parseInt(Math.random() * palavrasDaForca.length)

  sorteioDaPalavra = palavrasDaForca[indexPalavra].nome
  categoriaDaPalavra = palavrasDaForca[indexPalavra].categoria
  //return palavrasDaForca[indexPalavra];

}
criarPalavra() // chamar a função pra que ela apareça

// mandar pro html os valores pra que apareçam na tela.
function palavraNaTela() {
  let categoria = document.getElementById("dica");
  categoria.innerHTML = categoriaDaPalavra

  let nome = document.getElementById("palavraSecreta");
  nome.innerHTML = "";


  for (let numero = 0; numero < sorteioDaPalavra.length; numero++) {
    const element = document.createElement("div") // criando um elemento filho na div de acordo com o tamanho da palavra
    element.classList.add("letra")
    document.getElementById("palavraSecreta").appendChild(element)

  }
}

palavraNaTela()


// mostrando que a palavra apertada esta certa.
function letraMarcada(letra) {
  acertou;

  let botao = document.getElementById(letra);
  botao.setAttribute('class', 'certa'); // criando um class pra esilisar no css mostrando a tecla apertada

  let letrinha = sorteioDaPalavra.toLocaleUpperCase() // garantir que a letra fique maiúscula


  for (let i = 0; i < letrinha.length; i++){
    if (letrinha.charAt(i) == letra) {
      document.querySelectorAll("#palavraSecreta div")[i].innerHTML = letrinha.charAt(i) // ele ta pegando a div de palavraSecreta e transformando em uma array - pra adicionar a letra se a tecla apertada tiver certa pra continuar mostrando

      botao.removeAttribute('onclick'); // remover a função de cliq do botão pra que não seja clicado novamente

      acertos++;
      acertou = true;
    }
  }if (!acertou) { // 
    if (erros == 0) {
      document.getElementById("containerForca").classList.add("mostrar")
    }
  
    if (erros < 6) {
      
      document.getElementById("boneco").src = "assets/img/" + caminhoImagem[erros]
      erros++
      botao.removeAttribute('onclick');
      if (erros == 6) {
        perdeu = true;
      }
    }
  }
}






 //botão novo jogo e desistir eventos de click
  
novoJogo.addEventListener("click", function(){
      
  window.location.reload()
  
})

desistir.addEventListener("click", function(){
  document.getElementById("containerForca").classList.add("mostrar")
  document.getElementById("boneco").src = "assets/img/completo.png"

})

    

