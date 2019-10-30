var angle = 0.0;
var offset = 210;
var scalar = 5;
var speed = 0.05;

function setup() {
  createCanvas(420, 420);
  fill(0);
}

function draw() {
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  stroke(random(40,255),
             random(40,255),
             random(40,255));
  ellipse( x, y, 10, 10);
  angle += speed;
  scalar += speed;
}