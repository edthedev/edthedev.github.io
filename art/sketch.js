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
  if(size>4) {
    circle(x, y, size)
    newx = x - random(-3,3)
    newy = y - size * .5
    tree(newx,newy,size-1)
  }
}