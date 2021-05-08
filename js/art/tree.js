
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
  rect(0, 0, maxim, maxim/2);
  // ground
  fill(color(0, 200, 0));
  rect(0, maxim/2, maxim, maxim/2);
}

function setup() {
  // maxim = .5 * window.innderWidth;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  noStroke();
  draw_background();
  frameRate(200); // fast tree growth

  treepulse = 0;
  trunk(maxim - maxim/5,
     maxim, 
     maxim/5, 
     maxim/2);
}

function trunk(x,y, wi, ta) {

  strokeWeight(10);
  tree_color = color(80, 80, 0);
  fill(tree_color);
  stroke(tree_color);
  rect(x, y-ta, wi, ta);

  le = wi * 1;

  for(i=0; i<5; i++) {
    branch(x + i*wi/5,y-ta, le, wi/5);
  }
}

function branch(x, y, le, we) {
  strokeWeight(we);
  wi = random(-.7,.7) * le;
  ta = random(.3,.7) * le;

  line(x, y, x+wi, y-ta);
  if(le > 4) {
    branch(x+wi, y-ta, le-1, we/2);
  }
}
function tree(x, y, dx, dy, le, we) {

  // draw this section
  // fill(tree_color);

  // add more branches
  if(dx>4) {

    // get much smaller after trunk
    if(le >= 200) {
      le = 50;
    }
    we = we * 1/4;
    le = le * 1/4;
    dy = dy * 4/5;
    dx = random(0,2) - 1;

    tree(x-dx*le,y-dy*le,dx, dy, le, we);

    if(dx % 4 == 0){
      tree(x-dx*le,y-dy*le,dx, dy, le, we);
    }

  }
}

function draw() {
  // slow down for snowflakes once the tree is drawn
  treepulse+=1;
  if(treepulse>800) frameRate(20);

}

function mouseClicked() {
  setup();
}