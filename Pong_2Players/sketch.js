// variaveis da bolinha
let xBolinha = 200;
let yBolinha = 100;
let diametro = 20;
let xVelocidade = 3;
let yVelocidade = 3;
let raio = diametro / 2;

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 75;

// variaveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let yVelocidadeOponente;

// colisão
let colidiu = false

// variaiveis do placar
let meusPontos = 0;
let pontosOponente = 0

// cores
let fundo = '#E3CCAE'
let placar = '#0C0B0B'
let corRaquete = '#262A56'
let corBolinha = '#B8621B'

// Invocação das funções
function setup() {
  createCanvas(600, 300);

}

function draw() {
  
  background(fundo);
  criaBolinha();
  mexeBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  raqueteColisao(xRaquete, yRaquete);
  raqueteColisao(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

//Funções da bolinha

function criaBolinha() {
  fill(corBolinha)
  circle(xBolinha, yBolinha, diametro);
}

function mexeBolinha() {
  
  xBolinha += xVelocidade;
  yBolinha += yVelocidade;
}

function verificaColisaoBorda() {
  
  if (xBolinha + raio > width || xBolinha < 0 + raio) {
    xVelocidade *= -1;
  }

  if (yBolinha + raio > height || yBolinha < 0 + raio) {
    yVelocidade *= -1;
  }
}

//Funções da raquete

function mostraRaquete(x,y) {
  fill(corRaquete)
  noStroke();
  rect(x, y, larguraRaquete, alturaRaquete);
} 

function movimentaMinhaRaquete() {
  
  if (keyIsDown(87)) {
      yRaquete -= 5;
  }
  if (keyIsDown(83)) {
      yRaquete += 5;
  }
}

function movimentaRaqueteOponente() {
  
  if (keyIsDown(UP_ARROW)) {
      yRaqueteOponente -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
      yRaqueteOponente += 5;
  }
}

// function verificaColisaoRaquete() {
//  if(xBolinha - raio < xRaquete + larguraRaquete &&
//     yBolinha - raio < yRaquete + alturaRaquete &&
//     yBolinha + raio > yRaquete) {
//    xVelocidade *= -1
//  }
// }

function raqueteColisao(x, y) {
  colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio)
  
  if(colidiu) {
    xVelocidade *= -1
  }
}

//Funções do placar

function incluiPlacar() {
  textSize(26)
  textAlign(CENTER)
  fill(placar);
  text(meusPontos, 250, 20);
  text(pontosOponente, 359, 20);

}

function marcaPonto() {
  if (xBolinha > width - raio) {
    meusPontos += 1;
    voltaBolinha()
  }
  if (xBolinha < 0 + raio) {
    pontosOponente += 1;
    voltaBolinha(pontoDoOponente = true)
  }
}

function voltaBolinha(pontoDoOponente = false) {
  xBolinha = 200
  yBolinha = 100

  if(pontoDoOponente) {
    xVelocidade *= -1;
  } else {
    xVelocidade = 3;
  }
}