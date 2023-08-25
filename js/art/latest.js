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

var segment = {
  x: 0,
  y: 0,
  dirx: 1,
  diry: 1,
  size: 20,
  segments: 0,
};


function draw() {
  balls = balls.map( item => tree_trunk(item) );
}

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim = 600;
  midline = maxim / 2;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  balls = [];
  ballcount = random(1,3);
  ballcount = 1;


  theball = Object(segment);
  for(i=0;i<ballcount;i++){
    newb = Object.assign({}, theball);
    maxline = random(maxim/2, maxim);
    minline = random(0, maxim/2);
    newb.x = random(0,maxline);
    newb.y = random(maxim/2, maxim);
    newb.x = maxim/2;
    newb.y = maxim/3*2;
    newb.size = 30;
    balls.push(newb);
  }
}

function tree_trunk(tree) {
  if(tree.size>15) {
    fill(color(0,0,0));
    square(tree.x, tree.y, tree.size);

    // update for next
    dx = tree.size*.15;
    dy = tree.size*.7;
    tree.y = tree.y - dy;
    tree.x = tree.x + random(-dx, dx);
    tree.size = tree.size*.95;

    // next
    tree_trunk(tree);
  }
  else {
    tree_branch(tree);
  }
}

function tree_branch(tree){
  circle(tree.x, tree.y, tree.size);
}




function mouseClicked() {
  // background(220);
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


function crazy_branch(x, y, deltax, deltay){
  rect(x, y, deltax, deltay);
  if(abs(deltax) > 1){
    upity = random(-3, 5);
    if(upity < 0) {
      crazy_branch(x+deltax, y+deltay*upity, deltax*.9, -deltay*.95);
    }
    crazy_branch(x+deltax, y+deltay*upity, deltax*.9, deltay*.95);
  }
}

newb = Object.assign({}, theball);


