
/*

"Cross" is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2021.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

*/

var ball = {
  x: 0,
  y: 0,
  dx: 1,
  dy: 1,
  size: 20,
  minx: 0,
  miny: 0,
  maxx: 50,
  maxy: 50,
  color: 0
};

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim = 400;
  midline = maxim / 2;

  createCanvas(maxim, maxim);
  background(maxim,maxim);
  balls = [];
  ballcount = random(3,15);
  xory = 0;

  theball = Object(ball);
  for(i=0;i<ballcount;i++){
    newb = Object.assign({}, theball);
    maxline = random(maxim/2, maxim);
    minline = random(0, maxim/2);
    newb.x = random(0,maxline);
    newb.y = i * 22;
    newb.minx = 0;
    newb.miny = 0;
    newb.maxx = maxline;
    newb.maxy = maxline;
    newb.color = color(random(100,255), random(100,255), random(100,255));
    balls.push(newb);
  }
}

function doBall(ball) {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if(ball.x>ball.maxx) ball.dx = -1;
  if(ball.y>ball.maxy) ball.dy = -1;
  if(ball.x<ball.minx) ball.dx = 1;
  if(ball.y<ball.miny) ball.dy = 1;
  fill(ball.color);
  circle(ball.x, ball.y, ball.size);
  return ball;
}

function draw() {
  balls = balls.map( doBall );
}

function mouseClicked() {
  if(xory == 1) {
    line(0, mouseY, maxim, mouseY);

    balls.forEach( (ball, idx) => {
      if(balls[idx].y > mouseY) {
        balls[idx].miny = mouseY;
      } else {
        balls[idx].maxy= mouseY;
      }
    }
    );

    xory = 0;
  } else {
    line(mouseX, 0, mouseX, maxim);
    balls.forEach( (ball, idx) => {
      if(balls[idx].x > mouseX) {
        balls[idx].minx = mouseX;
      } else {
        balls[idx].maxx= mouseX;
      }
    }
    );
    xory = 1;
  }
}