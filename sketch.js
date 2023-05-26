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
    let palavra = "ola! como vai"
    let palavra2 = "tudo bem?"
    let letras = map (mouseX, 0, width, 1, palavra.length);
    let letras2 = (touches, 0, width, 1, palavra.legth);
    let parcial = palavra.substring(0, letras)
    let parcial2 = palavra2.substring(0, letras)
    text (parcial, 960, 540);
    text (parcial2, 960, 620);
  }