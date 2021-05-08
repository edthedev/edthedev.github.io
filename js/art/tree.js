
/*

"Tree" is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2021.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

*/

var treepulse = 0;

var maxim = 400;
var midline = maxim / 2;

function draw_background() {
  // sky
  fill(color(0, 200, 255));
  rect(0, 0, maxim, maxim);
  // ground
  fill(color(0, 200, 0));
  rect(0, 4*maxim/5, maxim, maxim/5);
}

function setup() {
  // maxim = .5 * window.innderWidth;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  noStroke();
  draw_background();
  frameRate(200); // fast tree growth

  fill(color(255,255,100));
  circle(maxim/6, maxim/6, random(30, 100));


  treepulse = 0;
  trunk(maxim - maxim/5,
     maxim, 
     7, //width
     maxim/3); // tall
}

function trunk(x,y, wi, ta) {

  strokeWeight(10);
  tree_color = color(80, 80, 0);
  fill(tree_color);
  stroke(tree_color);
  rect(x, y-ta, wi, ta);

  le = 40;
  we = 10;

  root = 1;
  circle(x-3, y-ta, root);
  circle(x+we, y-ta, root);

  circle(x-3, y, root);
  circle(x+we, y, root);

  for(i=1; i<5; i++) {
    branch(x + i*wi/6,y-ta, le, we, 0, 0, 0);
    branch(x + i*wi/6,y-ta, le, we, 0, 0, 0);
  }
}

function branch(x, y, le, we, wi, ta, pulse) {

  pulse += 1;


  strokeWeight(we);
  wi += random(-.2,.2) * le;
  ta += random(.05,.2) * le;

  line(x, y, x+wi, y-ta);
  if(we > 2) {
    nle = le-le/random(15,20);
    branch(x+wi, y-ta, nle, we*4/5, wi, ta, pulse);
    if(random(0,40)>20){
      wi2 = wi + random(-.4,-.2) * le;
      branch(x+wi, y-ta, nle, we*4/5, wi2, ta, pulse);
    }
  }

  if(pulse >3) { // no leaves early on
    // leaf behind branch...
    if(random(0,100)>10){
      leaf_cluster(x+wi, y-ta);
    }
  }

}

function leaf_cluster(x, y) {
  green = color(33, 150, 33);
  fill(green);
  noStroke();
  for(i=0; i<random(1,6); i++) {
    circle(x + random(-4, 4), y + random(-4,4), 4);
  }
  stroke(tree_color);
  fill(tree_color);

}


function draw() {
  // slow down for snowflakes once the tree is drawn
  // treepulse+=1;
  // if(treepulse>800) frameRate(20);
}

function mouseClicked() {
  setup();
}