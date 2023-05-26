 //by: zhar

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background("white");
  fill ("black");
  textSize (64);
  textAlign (CENTER, CENTER);
  
  let maximo = width;
  let monimo = 0;
  let palavra = "Antes de mais nada, vamos deixar claro: Javascript não é Java. Apesar da confusão que as pessoas normalmente fazem sobre essas duas linguagens, Java e Javascript não possuem nenhuma ligação direta uma com a outra a não ser o java no nome. Tendo isso em mente, vamos para a definição de o que é Javascript." ; 
  let letras = map (mouseX, 0, width, 1, palavra.length);
  let letras2 = (touches, 0, width, 1, palavra.legth)
  let parcial = palavra.substring(0, letras)
  text (parcial, 200, 200);
  
}