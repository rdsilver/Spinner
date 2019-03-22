var spinner;
var balls = [];
var optns = {
  angles: 1, 
  colors: 2,
  speed: 3,
  ballSize: 300,
};
var numDead = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch');
  noStroke();
  spinner = new Spinner(Math.round(windowWidth/2), Math.round(windowHeight/2));
}

function draw() {
  background(0,0,0);

  spinner.addBall();

  for(var i=balls.length-1;i>=numDead;i--)
    balls[i].draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0,0,0);
  balls = [];
  spinner.setX(Math.round(windowWidth/2));
  spinner.setY(Math.round(windowHeight/2));
}