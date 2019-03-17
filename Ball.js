class Ball {
    constructor(x1, y1, x2, y2, color) {
      this.x = x1;
      this.y = y1;

      let length = Math.sqrt(Math.pow(x2-this.x, 2) + Math.pow(y2-this.y, 2));
      this.xSlope = (x2-this.x)/length;
      this.ySlope = (y2-this.y)/length;
      this.color = color;
    }

    draw() {
      this.x += this.xSlope * 3;
      this.y += this.ySlope * 3;
      fill(this.color);
      circle(this.x, this.y, 300);
    }
}