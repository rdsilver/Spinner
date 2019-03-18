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
      this.redDirection = 1.1;
      this.greenDirection = 1.2;
      this.blueDirection = 1.3;
    }

    draw() {
      this.x += this.xSlope * 3;
      this.y += this.ySlope * 3;

      if (this.redDirection + this.red < 0 || this.redDirection + this.red > 255)
        this.redDirection *= -1;

      if (this.greenDirection + this.green < 0 || this.greenDirection + this.green > 255)
        this.greenDirection *= -1;

      if (this.blueDirection + this.blue < 0 || this.blueDirection + this.blue > 255)
        this.blueDirection *= -1;

      this.red+=this.redDirection;
      this.green+=this.greenDirection;
      this.blue+=this.blueDirection;

      fill(this.red, this.green, this.blue);
      circle(this.x, this.y, 300);
    }
}