/*
  Sample Sketch
*/

var cnv;

function setup() {
  cnv = createCanvas(800, 600);
  centerCanvas();
  background(240, 240, 240);
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function draw() {
    if (mouseX !== pmouseX || mouseY !== pmouseY) {
      if (mouseIsPressed) {
        fill(0);
      }
      else {
        fill(random(256),random(256),random(256));
      }
    }
  ellipse(mouseX, mouseY, 80, 80);
}