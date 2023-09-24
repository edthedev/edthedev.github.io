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
  line_bit.y = 250;
  line_bit.length = 80;
  line_bit.x = 300;
  line_bit.degrees = 0; 
  roty = random(15, 170);
  do_fractal(line_bit);
  line_bit.degrees += roty; 
  do_fractal(line_bit);
  line_bit.degrees += roty; 
  do_fractal(line_bit);
  line_bit.degrees += roty; 
  do_fractal(line_bit);
  line_bit.degrees += roty; 
  do_fractal(line_bit);
}

var first_angle = 60;
var second_angle = -120;

async function do_fractal(bit) {
  const next_bit = structuredClone(draw_line_segment(bit));

  // extra line
  /*
  bit.length = bit.length * .67;
  bit.x += bit.weight * 5;
  bit.y += bit.weight * 5;
  draw_line_segment(bit);
  */

  next_bit.length = next_bit.length*.67;
  next_bit.weight = next_bit.weight*.67;
  next_bit.degrees = add_degrees(bit.degrees, first_angle);

  if(next_bit.length > 1) {

    ani_plan( 
        item = function() { 
          do_fractal(next_bit);
          const bit2 = structuredClone(next_bit);
          bit2.degrees = add_degrees(bit.degrees, second_angle);
          do_fractal(bit2);
        }
    );

  }
}

function setup() {
  rando_url();
  ani_clear();
  maxim_x = 600;
  maxim_y = 500;
  midline = maxim_y / 2;
  myCanvas = createCanvas(maxim_x, maxim_y);
  start_fractal();
  console.log("setup done");
}

function mouseClicked() {
  new_random(get_url_seed());
}


function draw() {
  ani_draw();
}