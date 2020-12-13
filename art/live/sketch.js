var ball = {
  x: 0,
  y: 0,
  dx: 1,
  dy: 1,
  size: 20,
  ruleset: dewit
};

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim = 400;
  midline = maxim / 2;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  balls = [];
  ballcount = random(3,15);


  theball = Object(ball);
  for(i=0;i<ballcount;i++){
    newb = Object.assign({}, theball);
    maxline = random(maxim/2, maxim);
    minline = random(0, maxim/2);
    newb.x = random(0,maxline);
    newb.y = i * 22;
    balls.push(newb);
  }
}

function dewit(ball) {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if(ball.x>maxim) ball.dx = -1;
  if(ball.y>maxim) ball.dy = -1;
  if(ball.x<0) ball.dx = 1;
  if(ball.y<0) ball.dy = 1;
  circle(ball.x, ball.y, ball.size);
  return ball;
}

function draw() {
  balls = balls.map( dewit );
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