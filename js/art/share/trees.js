/*

"Tree" is part of a Live Art work created by Edward Delaporte.

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
var season = "spring";
var leaf_green;

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
  if(pulse < 3) {
    wi += random(-.2,.2) * le;
    ta += random(.1,.2) * le;
    nle = le-1;
  } else {
    wi += random(-.4,.4) * le; // wider
    ta += random(.05,.1) * le; // not as tall later
    nle = le-le/random(1,4);
  }

  line(x, y, x+wi, y-ta);
  if(we > 2) {
    branch(x+wi, y-ta, nle, we*4/5, wi, ta, pulse);

    // another branch?
    if(pulse < 3) {
      wi2 = wi + random(-.4,-.2) * le;
      if(random(0,40)>20){
        branch(x+wi, y-ta, nle, we*4/5, wi2, ta, pulse);
      }
    } else {
      wi2 = wi + random(-.9,-.3) * wi;
      ta2 = ta + random(-.9,.9) * ta;
      if(random(0,40)>5){ // much more likely
        branch(x+wi, y-ta, nle, we*4/5, wi2, ta, pulse);
      }
    }
  }

  if(pulse >4) { // no leaves early on
    // leaf behind branch...
    if(random(0,100)>10){
      leaf_cluster(x+wi, y-ta);
    }
  }

}

function draw_ground() {
  noStroke();
  dx = 1; // spiked grass
  fill(leaf_green); // summer
  if(season.includes("fall)")) {
    fill(color(20, 20, 30));
    dx = 5; // smoother ground
  }
  if(season.includes("winter")) {
    fill(color(255,255,255)); //white snow
    dx = 3; // smoother ground
  }

  y = 4*maxim/5;
  rect(0, y, maxim, maxim/5);

  for(x=0;x<maxim;x+=dx){
    if(season.includes("spring")) { // random green
      fill(color(0, random(150,200), random(0,100)));
    }
    rect(x,y-random(0, 4),dx,maxim/5);
  }
}

function leaf_cluster(x, y) {
  green = color(33, 150, 33);
  fill(green);
  noStroke();
  for(i=0; i<random(1,6); i++) {

    if(season.includes("fall")) {
      fill(color(
        random(150, 255), random(100, 200), 100));
    }

    circle(x + random(-4, 4), y + random(-4,4), 4);
    if(season.includes("winter")) {
      fill(color(255,255,255)); // white
      circle(x + random(-4, 4), y + random(-5,3), 4);
    }
  }

  stroke(tree_color);
  fill(tree_color);

}
