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

      var color = {
        red: Math.abs(Math.cos(frameCount/100) * 255),
        green: Math.abs(Math.cos(frameCount/107) * 255),
        blue: Math.abs(Math.cos(frameCount/109) * 255),
      }

      if (frameCount%2 == 0) {
        color.red = Math.abs(Math.cos(frameCount/55) * 255);
        color.green = Math.abs(Math.cos(frameCount/205) * 255);
        color.blue = Math.abs(Math.cos(frameCount/192) * 255);
      }

      var ball = new Ball(this.x, this.y, x2, y2, color);
      balls.push(ball);
    }
}