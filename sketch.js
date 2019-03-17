var spinner;
var balls = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch');
  noStroke();
  spinner = new Spinner(Math.round(windowWidth/2), Math.round(windowHeight/2), 7);
}

function draw() {
  background(0,0,0);
  spinner.addBall(balls.length);

  for(var i=balls.length-1;i>=0;i--)
    balls[i].draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0,0,0);
  spinner.setX(Math.round(windowWidth/2));
  spinner.setY(Math.round(windowHeight/2));
}