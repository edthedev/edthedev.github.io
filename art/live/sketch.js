function setup() {
  // maxim = .5 * window.innderWidth;
  maxim = 400
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  balls = [];
  for(i=0;i<6;i++){
    balls.push([random(0, maxim),i*15, 1, 1]);
  }
}

function dewit(ball) {
  ball[0]+=ball[2];
  ball[1]+=ball[3];
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