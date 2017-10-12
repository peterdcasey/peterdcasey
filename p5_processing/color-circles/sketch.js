function setup() {
  createCanvas(640, 480);
  fill(240,240,240);
  rect(0,0,width,height);
}

var oldX;
var oldY;

function draw() {
  if (mouseX !== oldX || mouseY !== oldY) {
    if (mouseIsPressed) {
      fill(0);
    }
    else {
      fill(random(256),random(256),random(256));
    }
  }
  ellipse(mouseX, mouseY, 80, 80);
  oldX = mouseX;
  oldY = mouseY;
}