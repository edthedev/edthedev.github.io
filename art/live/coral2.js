function setup() {
  createCanvas(400, 400);
  background(200,200) 
}

function draw() {
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