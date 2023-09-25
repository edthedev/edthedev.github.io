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

var color_seq = [];



balls = [];

function start_fractal(color_seq) {
  line_bit = new_line_segment(color_seq);
  console.log("color?" + line_bit.color);
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
}

var first_angle = 60;
var second_angle = random_plus_minus(30, 140);

async function do_fractal(bit) {
  if(bit.history == 3) {
    bit.color = bit.color_seq[1];
  }
  if(bit.history == 6) {
    bit.color = bit.color_seq[2];
  }
  if(bit.history == 9) {
    bit.color = bit.color_seq[3];
  }
   stroke(bit.color.levels[0],
          bit.color.levels[1],
          bit.color.levels[2]);
  /*
  if(bit.history > 10) {
    bit.color = bit.color_seq.pop();
  }*/
  // console.log(bit.color.green);
  const next_bit = structuredClone(draw_line_segment(bit));

  next_bit.length = next_bit.length*.67;
  next_bit.weight = next_bit.weight*.67;
  next_bit.degrees = add_degrees(bit.degrees, first_angle);

  if(next_bit.length > 4) {

    ani_setup( 
        item = function() { 
          do_fractal(next_bit);
          const bit2 = structuredClone(next_bit);
          bit2.degrees = add_degrees(bit.degrees, second_angle);
          do_fractal(bit2);
          if(second_angle < 90) {
            const bit3 = structuredClone(next_bit);
            bit3.degrees = add_degrees(bit.degrees, second_angle*2);
            do_fractal(bit3);
          }
        }
    );

  }
}

function setup() {
  rando_url();
  ani_clear();

  color_seq = [
    color(0,0,0),
    color(255,160,0),
    color(0,160,255),
    color(0,255,160),
  ];

  second_angle = random_plus_minus(30, 140);
  maxim_x = 600;
  maxim_y = 500;
  midline = maxim_y / 2;
  myCanvas = createCanvas(maxim_x, maxim_y);
  start_fractal(color_seq);
  console.log("setup done");
}

function mouseClicked() {
  new_random(get_url_seed());
}


function draw() {
  ani_draw();
}