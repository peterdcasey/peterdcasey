function setup() {
  createCanvas(800, 600);
}

function draw() {
  if (mouseIsPressed) {
    fill(color(45,67,123));
  }
  else {
    fill(255);
  }

  ellipse(mouseX, mouseY, 80, 80);
}