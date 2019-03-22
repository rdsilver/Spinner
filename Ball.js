class Ball {
    constructor(x1, y1, x2, y2, color) {
      this.x = x1;
      this.y = y1;

      let length = Math.sqrt(Math.pow(x2-this.x, 2) + Math.pow(y2-this.y, 2));
      this.xSlope = (x2-this.x)/length;
      this.ySlope = (y2-this.y)/length;
      this.red = color.red;
      this.green = color.green;
      this.blue = color.blue;
    }

    draw() {
      if (this.dead)
        return;

      this.x += this.xSlope * optns.speed;
      this.y += this.ySlope * optns.speed;

      var shouldBeDead = this.y < 0 - optns.ballSize*2 || this.y > windowHeight + optns.ballSize*2 || this.x < 0 - optns.ballSize*2 || this.x > windowWidth + optns.ballSize*2;
      if (shouldBeDead) {
        numDead++;
        return;
      }

      fill(this.red, this.green, this.blue);
      circle(this.x, this.y, optns.ballSize);
    }
}