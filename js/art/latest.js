/*

This is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2020.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

*/


var mindx = .1;

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim_x = 800;
  maxim_y = 400;
  midline = maxim_x / 2;
  createCanvas(maxim_x, maxim_y);
  fill(color(230,230,230));
  background(maxim_x,maxim_y);
  mindx = random(.1, 2);

  make_horizon(0, 0, maxim_x, maxim_y);
  trunk();

}

function draw() {
  draw_horizon(0, 0, maxim_x, maxim_y);
}

function mouseClicked() {
  setup();
}
