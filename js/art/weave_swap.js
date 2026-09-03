/*

"Weave / Swap" is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2020.

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
  rulefun: dewit,
  size: 20
};

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim = 400;
  midline = maxim / 2;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  balls = [];
  ballcount = random(3,5);


  theball = Object(ball);
  for(i=0;i<ballcount;i++){
    newb = Object.assign({}, theball);
    maxline = random(maxim/2, maxim);
    minline = random(0, maxim/2);
    newb.x = random(0,maxline);
    newb.y = i * 22;
    balls.push([newb, dewit]);
  }
}

function dewit(ball) {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if(ball.x>maxim) ball.dx = -1;
  if(ball.y>maxim) ball.dy = -1;
  if(ball.x<0) ball.dx = 1;
  if(ball.y<0) ball.dy = 1;
  circle(ball.x, ball.y, 20);
  if(ball.y>maxim) {
    ball.dx = -1 * ball.dx;
    return [ball, backwards];
  }
  return [ball, dewit];
}

function backwards(ball) {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if(ball.x>maxim) ball.dx = -1;
  if(ball.y>maxim) ball.dy = -1;
  if(ball.x<0) ball.dx = 1;
  if(ball.y<0) ball.dy = 1;
  square(ball.x, ball.y, 20);

  if(ball.y>maxim) {
    ball.dx = -1 * ball.dx;
    return [ball, dewit];
  }

  return [ball, backwards];

}

function draw() {
  balls = balls.map( item => item[1](item[0]) );
}

function mouseClicked() {
  // background(220);
  tree(mouseX, mouseY, 20)
  // spinny(mouseX, mouseY, 20)
}

function tree(x, y, size, ang=1) {
  delta = size * .5
  if(size % 4 == 0){
    deltax = random(delta,delta*2)
    newang = random([-1,1]) 
    newx = x - deltax

    tree(newx,y,size-1, newang)
  }
  if(size>4) {
    circle(x, y, size)
    deltax = random(0,delta*2)
    newx = x - ang * deltax
    newy = y - size * .5
    tree(newx,newy,size-1)
  }
}