const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta1 = [
  {
    enunciado:"A água pura (\(H_{2}O\)) conduz eletricidade ou é uma isolante térmica/elétrica?",
    alternativas: [ 
        "conduz eletricidade", 
        "é um insolante"
    ]
  },

  {
     enunciado:"pergunta 1",
    alternativas: [ 
        "alternativas 1", 
        "alternativa 2"
    ]
  },

  {
     enunciado:"pergunta 1",
    alternativas: [ 
        "alternativas 1", 
        "alternativa 2"
    ]
  },

  {
     enunciado:"pergunta 1 bla bla ",
    alternativas: [ 
        "alternativas 1 ble", 
        "alternativa 2 bli"
    ]
  },
     ];

    let atual= 0;
    let pertuntaAtual;
    
    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
    }

    mostraPergunta();