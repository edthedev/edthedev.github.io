/*

This is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2021.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

*/



var sprite = {
  x: 0,
  y: 0,
  dx: 1,
  dy: 1,
  rulefun: dewit,
  size: 20
};

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim = 600;
  midline = maxim / 2;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  balls = [];
  ballcount = random(1,3);
  ballcount = 1;


  theball = Object(sprite);
  for(i=0;i<ballcount;i++){
    newb = Object.assign({}, theball);
    maxline = random(maxim/2, maxim);
    minline = random(0, maxim/2);
    newb.x = random(0,maxline);
    newb.y = random(maxim/2, maxim);
    newb.x = maxim/2;
    newb.y = maxim/3*2;
    balls.push(newb);
  }
}


function do_tree(one) {
  tree(one.x, one.y, 40);
}

function draw() {
  balls = balls.map( item => do_tree(item) );
  tree(maxim/2, maxim/3, 4, 0);
}

function mouseClicked() {
  // background(220);
  tree(mouseX, mouseY, 20)
  // spinny(mouseX, mouseY, 20)
}

function branch(x, y, deltax, deltay){
  rect(x, y, deltax, deltay);
  if(abs(deltax) > 1){
    upity = random(-3, 5);
    if(upity < 0) {
      branch(x+deltax, y+deltay*upity, deltax*.9, -deltay*.95);
    }
    branch(x+deltax, y+deltay*upity, deltax*.9, deltay*.95);
  }
}

function tree(x, y, size, ang=1) {
  delta = size * .1

  // branches
  /*
  if(size % 4 == 0){
    deltax = random(delta,delta*2)
    newang = random([-1,1]) 
    newx = x - deltax

    tree(newx,y,size-1, newang)
  }
  */


  // trunk
  if(size>15) {
    fill(color(0,0,0));
    circle(x, y, size);
    deltax = random(0,delta*2);
    newx = x - (ang * deltax);
    newy = y - size * .5;
    deltay = random(0,delta*2.5);
    newang = random([-1,1]);
    tree(newx,newy,size-deltay, newang);
  }
  else {
    branch(newx, newy, size*newang, -size/3);
    branch(newx, newy, -size*newang, -size/3);
  }
}