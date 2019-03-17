class Spinner {
    constructor(x, y, steps) {
        this.x = x;
        this.y = y;
        this.degree = 0;
        this.steps = steps;
    }

    setX(x) {
      this.x = x;
    }

    setY(y) {
      this.y = y;
    }

    addBall(numBall) {
      var x2 = this.x + 1 * Math.cos(this.degree * Math.PI / 180);
      var y2 = this.y + 1 * Math.sin(this.degree * Math.PI / 180);
      this.degree = this.degree + (360 / this.steps);

      var colors = ['blue','gold'];
      var color = colors[frameCount%colors.length];

      var ball = new Ball(this.x, this.y, x2, y2, color);
      balls.push(ball);
    }
}