function setup() {
  // maxim = .5 * window.innderWidth;
  maxim = 400;
  midline = maxim / 2;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  balls = [];
  ballcount = random(3,15);
  for(i=0;i<ballcount;i++){
    maxline = random(maxim/2, maxim);
    minline = random(0, maxim/2);
    balls.push([maxline,i*15, 1, 1, minline, maxline]);
  }
}

function dewit(ball) {
  ball[0]+=ball[2];
  ball[1]+=ball[3];

  // mineline
  if(ball[0]<ball[4]){
    ball[2] = 1;
  } 

  // maxline
  if(ball[0]>ball[5]){
    ball[2] = -1;
  } 

  if(ball[0]>maxim) ball[2] = -1;
  if(ball[1]>maxim) ball[3] = -1;
  if(ball[0]<0) ball[2] = 1;
  if(ball[1]<0) ball[3] = 1;
  circle(ball[0], ball[1], 20);
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