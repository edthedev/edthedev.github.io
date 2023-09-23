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
var color_seq = [];

function start_fractal() {
  line_bit = new_line_segment(color(0,0,0));
  line_bit.length = 300;
  line_bit.x = 200;
  line_bit.y = 0;
  line_bit.degrees = random(30, 80); 
  // roty = random(15, 170);

  warmit = .8;
  color_seq = [
    fresher_color(warmit),
    fresher_color(warmit),
    fresher_color(warmit),
    fresher_color(warmit),
    fresher_color(warmit),
    fresher_color(warmit),
  ];
  do_fractal(line_bit);
  // line_bit.degrees += roty; 
  /*
  do_fractal(line_bit);
  line_bit.degrees += roty; 
  do_fractal(line_bit);
  line_bit.degrees += roty; 
  do_fractal(line_bit);
  line_bit.degrees += roty; 
  do_fractal(line_bit);
  */
}

async function do_fractal(bit) {
  const next_bit = structuredClone(
    draw_line_with_kite_shadow(bit, color_seq));

  next_bit.length = next_bit.length*.67;
  next_bit.weight = next_bit.weight*.67;
  next_bit.degrees = add_degrees(bit.degrees, 45);

  if(next_bit.length > 1) {

    await do_fractal(next_bit);
    const bit2 = structuredClone(next_bit);
    bit2.degrees = add_degrees(bit.degrees, -90);
    await do_fractal(bit2);

  }
}

function setup() {
  // maxim = .5 * window.innderWidth;
  rando_url();
  maxim_x = 600;
  maxim_y = 400;
  midline = maxim_y / 2;
  myCanvas = createCanvas(maxim_x, maxim_y);

  background(0, 100, 200);
  start_fractal();
  console.log("setup done");
}

function draw() {
}

function mouseClicked() {
  new_random(get_url_seed());
}
