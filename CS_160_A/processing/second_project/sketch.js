function setup() {
  createCanvas(800,600);
}

function draw() {
  if (mouseIsPressed) {
    c = color(random(0,255), random(0,255), random(0,255));
    fill(c);
  }
  else {
    fill(255);
  }
  
  ellipse(mouseX,mouseY,80,80);
}