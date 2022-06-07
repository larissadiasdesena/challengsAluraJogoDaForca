//Variáveis pra poder puxar nas funções
var tentativas = 6;
var acertos = 0;
var imagem = 0;
let posicao; 
var categoriaDaPalavra;
var sorteioDaPalavra;

var total = document.querySelector("#nvJogo");





// nome e categoria das palavras que vão ser sorteadas
const palavrasDaForca = [
    { nome : "BRASIL",
      categoria : "PAIS"},

    { nome: "PIZZA",
      categoria: "COMIDA"},

    { nome: "LAPIS",
      categoria: "OBJETO"},

    { nome: "RETRATO",
      categoria: "OBJETO"},

    { nome: "PARQUE",
     categoria: "LUGAR"},

    { nome: "RELOGIO",
      categoria: "OBJETO"},
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

   
        for(let numero = 0; numero < sorteioDaPalavra.length; numero++){
            const element = document.createElement("div") // criando um elemento filho na div de acordo com o tamanho da palavra
            element.classList.add("letra")
            document.getElementById("palavraSecreta").appendChild(element) 
            
        }
     

}

palavraNaTela() 

    
let acertou = false;                                                                                                                                                        

// mostrando que a palavra apertada esta certa.
function letraMarcada(letra) {

  

  let botao = document.getElementById(letra);
  botao.setAttribute('class', 'certa'); // criando um class pra esilisar no css mostrando a tecla apertada
  
  let letrinha = sorteioDaPalavra.toLocaleUpperCase() // garantir que a letra fique maiúscula
  

    for(let i =  0; i < letrinha.length; i++){
        if(letrinha.charAt(i) == letra){ 
          document.querySelectorAll("#palavraSecreta div")[i].innerHTML = letrinha.charAt(i) // ele ta pegando a div de palavraSecreta e transformando em uma array - pra adicionar a letra se a tecla apertada tiver certa pra continuar mostrando
           
          botao.removeAttribute('onclick'); // remover a função de cliq do botão pra que não seja clicado novamente
            
          acertos++;
          acertou = true;

  
        }
       
    }

  }
       
         
 

       


            
          
          
          
 



/*
 








  if (chances === 0) {
      let mensagem = document.createElement("p");
      let t1 = document.createTextNode("Você perdeu!");
      mensagem.appendChild(t1);

      let botao = document.createElement("button");
      let t2 = document.createTextNode("jogar novamente");
      
      botao.appendChild(t2);
      botao.setAttribute('class', 'novo-bt');
      botao.setAttribute('onclick', 'window.location.reload()');

      let div = document.getElementById("novo");
      div.appendChild(mensagem);
      div.appendChild(botao);
  }

  if (acertos === palavra.length) {
      let mensagem = document.createElement("p");
      let t1 = document.createTextNode("Você venceu!");
      mensagem.appendChild(t1);

      let botao = document.createElement("button");
      let t2 = document.createTextNode("jogar novamente");
      
      botao.appendChild(t2);
      botao.setAttribute('class', 'novo-bt');
      botao.setAttribute('onclick', 'window.location.reload()');

      let div = document.getElementById("novo");
      div.appendChild(mensagem);
      div.appendChild(botao);
  }
}
  
            
           */ 
      

