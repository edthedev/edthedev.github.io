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


var tree_split = random_plus_minus(30,90);

function start_fractal() {
  line_bit = new_line_segment(color(0,0,0));
  line_bit.y = 300 + random_plus_minus(0, 75);
  line_bit.length = 60;
  line_bit.x = 300;
  line_bit.degrees = 270; 
  do_fractal(line_bit);

  line_bit.y = 300 + random_plus_minus(0, 75);
  line_bit.x += random_plus_minus(60, 120);
  tree_split = tree_split + random_plus_minus(5,30);
  do_fractal(line_bit);

  line_bit.y = 300 + random_plus_minus(0, 75);
  line_bit.x += random_plus_minus(60, 240);
  tree_split = tree_split + random_plus_minus(5,30);
  do_fractal(line_bit);
}

async function do_fractal(bit) {
  const next_bit = structuredClone(draw_line_segment(bit));
  next_bit.length = next_bit.length*.67;
  next_bit.weight = next_bit.weight*.67;
  next_bit.degrees = add_degrees(bit.degrees, tree_split);

  if(next_bit.length > 1) {

    await do_fractal(next_bit);
    const bit2 = structuredClone(next_bit);
    bit2.degrees = add_degrees(bit.degrees, -33);
    await do_fractal(bit2);

  }
}

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim_x = 600;
  maxim_y = 400;
  midline = maxim_y / 2;
  myCanvas = createCanvas(maxim_x, maxim_y);
  make_horizon(0,0,600,400);
  draw_horizon(0,0,600,400);
  setup_season();
  draw_ground(myCanvas, maxim_y /2);
  start_fractal();
  console.log("setup done");
}

function draw() {
}

function mouseClicked() {
  new_random(get_url_seed());
}
