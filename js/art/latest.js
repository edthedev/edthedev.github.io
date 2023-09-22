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



balls = [];

function start_fractal() {
  line_bit = new_line_segment(color(0,0,0));
  line_bit.length = 200;
  line_bit.degrees = 45; 
  line_bit.x = 200;
  do_fractal(line_bit);
  line_bit.y = line_bit.y + 30;
  line_bit.x = line_bit.x + 2;
  do_fractal(line_bit);
}

function do_fractal(bit) {
  next = draw_line_segment(bit);
  next.length = next.length*.67;
  next.weight = next.weight*.67;
  next.degrees = next.degrees + 45;

  next2 = structuredClone(next);
  next2.degrees = next.degrees + 45;

  if(next.length > 1) {
    do_fractal(next);
    do_fractal(next2);
  }
}

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim_x = 600;
  maxim_y = 400;
  midline = maxim_y / 2;
  myCanvas = createCanvas(maxim_x, maxim_y);
  //background(maxim_x,maxim_y);
  balls = [];
  ballcount = random(1,4);
  // ballcount = 1;

  //make_horizon(0, 0, maxim_x, maxim_y);
  // draw_horizon(0, 0, maxim_x, maxim_y);
  // setup_season();
  // draw_ground(myCanvas, maxim_y /2);
}

function draw() {
  start_fractal();
}

function mouseClicked() {
  // background(220);
  // spinny(mouseX, mouseY, 20)
}
