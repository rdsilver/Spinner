class Spinner {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.degree = 0;
    }

    setX(x) {
      this.x = x;
    }

    setY(y) {
      this.y = y;
    }

    addBall() {
      var x2 = this.x + 1 * Math.cos(this.degree * Math.PI / 180);
      var y2 = this.y + 1 * Math.sin(this.degree * Math.PI / 180);
      this.degree = this.degree + (360 / optns.angles);
      optns.angles += .001;

      var color = {
        red: Math.abs(Math.cos((frameCount+20000)/888) * 255),
        green: Math.abs(Math.cos((frameCount+10000)/960) * 255),
        blue: Math.abs(Math.cos((frameCount+10000)/800) * 255),
      }

      var color1 = {
        green: Math.abs(Math.cos((frameCount+20000)/880) * 255),
        blue: Math.abs(Math.cos((frameCount+10000)/960) * 255),
        red: Math.abs(Math.cos((frameCount+20000)/805) * 255),
      }

      var color2 = {
        blue: Math.abs(Math.cos((frameCount+1000)/8880) * 255),
        red: Math.abs(Math.cos((frameCount+100)/9600) * 255),
        green: Math.abs(Math.cos((frameCount+1000)/8050) * 255),
      }

      var color3 = {
        blue: 255,
        red: 255,
        green: 255,
      }

      var colors = [color, color1, color2, color3];
      color = colors[frameCount%optns.colors];

      var ball = new Ball(this.x, this.y, x2, y2, color);
      balls.push(ball);
    }
}