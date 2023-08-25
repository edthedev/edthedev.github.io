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

balls = [];

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

function draw() {
  balls = balls.map( item => theTree_trunk(item) );
}



function theTree_trunk(theTree) {
  if(theTree.size>15) {
    fill(color(0,0,0));
    square(theTree.x, theTree.y, theTree.size);

    // update for next
    dx = theTree.size*.15;
    dy = theTree.size*.7;
    theTree.y = theTree.y - dy;
    theTree.x = theTree.x + random(-dx, dx);
    theTree.size = theTree.size*.95;

    // next
    theTree_trunk(theTree);
  }
  else {
    start_branches(theTree);
  }

  return theTree;
}


/* Branches */

var branch = {
  x: 0,
  y: 0,
  degrees: 90,
  size: 20,
  length: 0,
};


function start_branches(theTree){
  // fruit_bunch(theTree);

  new_branch = structuredClone(branch);
  new_branch.x = theTree.x;
  new_branch.y = theTree.y;
  new_branch.degrees=90;
  new_branch.size = theTree.size*2;
  theTree_branch(new_branch);
}

function fruit_bunch(branch) {
  //draw
  fill(color(255,0,0));
  circle(branch.x, branch.y, branch.size);

  //next
  branch.x = branch.x-1;
  branch.size = branch.size*.9;
  /* if(branch.size > 1) {
    fruit_bunch(branch);
  }*/
}

function theTree_branch(branch) {

  fill(color(0,0,0));
  strokeWeight(branch.size*.1);
  line(branch.x, 
    branch.y, 
    branch.x + branch.size*Math.cos(branch.degrees),
    branch.y + branch.size*Math.sin(branch.degrees),
    )

  branch.size = branch.size -1;
  branch.x = branch.x + 20;
  branch.y = branch.y -1;
  if(branch.size > 1) {
    theTree_branch(branch);
  }
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


