function setup() {
  createCanvas(400, 400);
}

function draw() {
  c = color(134, 120, 50);
  background(c);
  
  fill(255,255,255)
  ellipse(100,100, 150, 50);
  
  fill(255,0,0);
  ellipse(200,200, 50, 150);
  
  fill(0,255,0);
  ellipse(300,100, 100, 100);
}