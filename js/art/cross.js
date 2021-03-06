
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
  size: 10,
  minx: 0,
  miny: 0,
  maxx: 50,
  maxy: 50,
  color1: 0,
  color2: 0,
  color1: 0
};

function starfield() {
  // White start on black backgroud
  background('#222222');
  fill(color(255,255,255));
  
  // Randomly scatter stars.
  starcount = random(20,60);
  for(i=0;i<starcount;i++){
    starx = random(0, maxim);
    stary = random(0, maxim);
    circle(starx, stary, 2);
  }
}

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim = 400;
  midline = maxim / 2;
  noStroke();

  createCanvas(maxim, maxim);
  starfield();
  // background(maxim,maxim);
  balls = [];
  ballcount = random(3,15);

  theball = Object(ball);
  for(i=0;i<ballcount;i++){
    newb = Object.assign({}, theball);
    maxline = random(maxim/2, maxim);
    minline = random(0, maxim/2);
    newb.x = random(0,10) * maxline / 10;
    newb.y = i * 22;
    newb.minx = 0;
    newb.miny = 0;
    newb.maxx = maxline;
    newb.maxy = maxline;
    newb.color1 = color(random(150,255), random(150,255), random(150,255));
    newb.color2 = color(random(150,255), random(150,255), random(150,255));
    newb.color3 = color(random(150,255), random(150,255), random(150,255));
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
  fill(ball.color1);
  circle(ball.x, ball.y, ball.size);
  fill(ball.color2);
  circle(ball.x + ball.size, ball.y + ball.size, ball.size/4);
  fill(ball.color3);
  circle(ball.x + ball.size/2, ball.y - ball.size/2, ball.size/4);
  return ball;
}

function draw() {
  balls = balls.map( doBall );
}

function mouseClicked() {
  // Clicking shifts all balls direction.
  dxdir = -1;
  if(mouseX > maxline/2) {
    // Everyone head to the right!
    dxdir = 1;
  }
  balls.forEach( (ball, idx) => {
    ball.dx = dxdir;
  });
}