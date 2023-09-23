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
  // do_fractal(line_bit);
}

async function do_fractal(bit) {
  const next_bit = structuredClone(draw_line_segment(bit));
  next_bit.length = next_bit.length*.67;
  next_bit.weight = next_bit.weight*.67;
  next_bit.degrees = add_degrees(bit.degrees, 45);

  if(next_bit.length > 1) {

    const bit2 = structuredClone(next_bit);
    bit2.degrees = add_degrees(bit.degrees, 90);
    console.log("second-" + bit2.degrees + "-" + bit2.length);
    await do_fractal(bit2);

    console.log("first " + next_bit.degrees);
    await do_fractal(next_bit);

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
  start_fractal();
  console.log("setup done");
}

function draw() {
}

function mouseClicked() {
  // background(220);
  // spinny(mouseX, mouseY, 20)
}
