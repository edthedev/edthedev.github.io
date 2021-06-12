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



function setup() {
  // maxim = .5 * window.innderWidth;
  maxim_x = 800;
  maxim_y = 400;
  midline = maxim_x / 2;
  myCanvas = createCanvas(maxim_x, maxim_y);
  fill(color(230,230,230));

  make_horizon(0, 0, maxim_x, maxim_y);
  setup_tree();

  trunk(
    random(0, maxim_x),
    random(0, maxim_y),
    maxim_x / 5,
    maxim_y / 5,
  );

}

function draw() {
  draw_horizon(0, 0, maxim_x, maxim_y);
}

function mouseClicked() {
  setup();
}
