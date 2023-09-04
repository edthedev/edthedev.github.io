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
    newb.size = 25;
    balls.push(newb);
  }
}

function draw() {
  balls = balls.map( item => theTree_trunk(item) );
  balls.pop();
}



function theTree_trunk(theTree) {
  fill(color(0,0,0));
  square(theTree.x, theTree.y, theTree.size);

  if(theTree.size>15) {
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

var alphaBranch = {
  x: 0,
  y: 0,
  degrees: 0,
  length: 0,
  age: 0,
  energy: 0,
};


function start_branches(theTree){
  // fruit_bunch(theTree);

  
  alphaBranch.x = theTree.x + theTree.size/2;
  alphaBranch.y = theTree.y + theTree.size/2;
  alphaBranch.length = theTree.size*1.8;
  alphaBranch.energy = 80;

  root_branch_count = random(5,9);
  max_degrees = 370;
  branch_degrees = 200;

  for(i=0;i<root_branch_count;i++){
    new_branch = structuredClone(alphaBranch);
    add_degrees = random(10, (max_degrees-branch_degrees)/(root_branch_count - i));
    branch_degrees = branch_degrees + add_degrees;
    new_branch.degrees = branch_degrees;
    theTree_branch(new_branch);
  }
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}


function theTree_branch(branch) {

  // Keep the degrees in reason
  if(branch.degrees > 360) {
    branch.degrees -= 360;
  }

  // don't point downward for long 
  if(branch.degress > 260 && branch.degrees < 330) {
    branch.degrees-=90;
  }

  // grow
  branch.energy += 10;

  /*
  if(branch.age < 3) {
    branch.length = branch.length /2;
  }
  */
  
  fill(color(0,0,0));
  stroke(0,0,0);
  strokeWeight(branch.length*.2);
  branch = draw_branch_bit(branch);

  // next
  branch.age = branch.age +1;
  branch.degrees = branch.degrees + random(-25+branch.age, 25-branch.age);
  branch.length= branch.length-3;

  // no infinite branches
  if(branch.length <= 1) {
    return;
  }

  if(branch.age < 3) {
    if(random(0,100) < 110) {
      // branch.energy = branch.energy * .7;
      new_branch = structuredClone(branch);
      new_branch.degrees += random_plus_minus(20, 45);
      new_branch.length = branch.length * random(.2, 1);
      theTree_branch(new_branch);
    }
  }
  else {
    if(random(0,100) < 100) {
      // branch.energy = branch.energy * .7;
      new_branch = structuredClone(branch);
      new_branch.degrees += random_plus_minus(20, 30);
      new_branch.length = branch.length * random(.2, 1);
      theTree_branch(new_branch);
    }
  }

  // chance of fruit
  if(random(1, 100)<15+branch.age){
    branch.energy = fruit_bunch(branch); 
  }

  // leaves
  if(branch.age > 3) {
    twig(branch);
  }

  theTree_branch(branch);
}

function draw_branch_bit(branch) {
  // draw
  angleRad = toRadians(branch.degrees);
  endx = branch.x + branch.length*Math.cos(angleRad);
  endy = branch.y + branch.length*Math.sin(angleRad),
  line(branch.x, branch.y, endx, endy);
  new_branch = structuredClone(branch);
  new_branch.x = endx;
  new_branch.y = endy;
  return new_branch;
}


function twig(branch) { 
  branch.angle += random(-30,30);
  branch = draw_branch_bit(branch);
  leaf_bunch(branch);
}

function leaf(branch, angle) {
  branch.angle += angle;
  draw_branch_bit(branch);
}

function leaf_bunch(branch) {
  // draw
  // green
  stroke(40,random(200, 255),40);
  strokeWeight(2);

  leaf(branch, random(-45,-80));
  leaf(branch, random(45,80));
}

function fruit_bunch(branch) {
  // no fruit too soon
  if(branch.age < 3) {
    return branch.energy;
  }
  if(branch.energy < 5) {
    return branch.energy;
  }

  //draw
  strokeWeight(1);
  fill(color(255,0,0));

  dx = random(-.5,.5)*branch.length;
  dy = random(.5,1.1)*branch.length;

  line(branch.x, branch.y, branch.x+dx, branch.y+dy);
  circle(branch.x+dx, branch.y+dy, branch.length*.5);

  return branch.energy - 20;
}



function mouseClicked() {
  // background(220);
  // spinny(mouseX, mouseY, 20)
}


// TODO: Twigs
// TODO: Leaves

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


