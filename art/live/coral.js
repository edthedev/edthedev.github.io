function setup() {
  createCanvas(400, 400);
  background(200,200) 
}

function draw() {
}

function mouseClicked() {
  // background(220);
  tree(mouseX, mouseY, 20)
}

function tree(x, y, size) {
  delta = size * .5
  if(size % 4 == 0){
    deltax = random(delta,delta*2)
    newx = x - random([-1,1]) * deltax

    tree(newx,y,size-1)
  }
  if(size>4) {
    circle(x, y, size)
    deltax = random(0,delta*2)
    newx = x - random([-1,1]) * deltax
    newy = y - size * .5
    tree(newx,newy,size-1)
  }
}