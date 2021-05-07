
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

var pulse = 0;
var fillcount = 0;

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

  tree(maxim/2,maxim/2, 200);

}

function draw() {
  // slow down for snowflakes once the tree is drawn
  fillcount+=1;
  if(fillcount>800) frameRate(20);

}

function mouseClicked() {
  fillcount = 0;
  setup();
}

function tree(x, y, size, ang=1) {
  dx = 0;
  dy = -1;
  tree_color = color(80, 80, 0);
  fill(tree_color);
  stroke(tree_color);
  delta = size * .1
  if(size>4) {
    rect(x, y, size / 4, size)
    deltax = random(0,delta*2)
    newx = x - deltax
    newy = y - size * .5
    tree(newx,newy,size/2)

    if(size % 4 == 0){
      deltax = random(delta,delta*2)
      newang = random([-1,1]) 
      newx = x - deltax

      tree(newx,y,size/2, newang)
    }

  }
}