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

function start_fractal() {
  line_bit = new_line_segment(color(0,0,0));
  line_bit.length = 100;
  line_bit.x = 300;
  line_bit.y = 200;
  line_bit.degrees = random_plus_minus(30, 80); 
  roty = random(30, 72);
  an_count = 365 / roty;

  color_seq = [
    color(230,85,85),
    color(85,230,85),
    color(85,85,230),
  ];
  do_fractal(line_bit);
  for(i=0; i<an_count; i++) {
    line_bit.degrees += roty; 
    do_fractal(line_bit);
  }
}

var pri_angle = random_plus_minus(30, 60);
var sec_angle = random_plus_minus(45, 90);

async function do_fractal(bit) {
  const next_bit = structuredClone(
    draw_line_with_shadow(bit, color_seq));

  next_bit.length = next_bit.length*.67;
  next_bit.weight = next_bit.weight*.8;
  next_bit.degrees = add_degrees(bit.degrees, pri_angle);

  if(next_bit.length > 1) {

    await do_fractal(next_bit);
    const bit2 = structuredClone(next_bit);
    bit2.degrees = add_degrees(bit.degrees, sec_angle);
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

  background(0, 
    120+random_plus_minus(30,60), 
    150+random_plus_minus(30,60));
  start_fractal();
  console.log("setup done");
}

function mouseClicked() {
  new_random(get_url_seed());
}

function draw_line_with_shadow(line_seg, color_seq) {

  // prep
  seg = structuredClone(line_seg);
  angleRad = toRadians(seg.degrees);
  endx = seg.x + seg.length*Math.cos(angleRad);
  endy = seg.y + seg.length*Math.sin(angleRad);

  // draw shadow
  shadow_idx = (seg.history % color_seq.length);
  sha_c = color_seq[shadow_idx];
  ///stroke(sha_c.red, sha_c.green, sha_c.blue);
  noStroke();
  fill(sha_c);
  swe = seg.weight*8;
  quad(
    seg.x,seg.y, 
    endx,endy,
    endx+swe,endy+swe,
    seg.x+swe,seg.y+swe, 
    );

  // draw line
  stroke(seg.color.red, seg.color.green, seg.color.blue);
  strokeWeight(seg.weight);
  line(seg.x, seg.y, endx, endy);

  // house keeping
  seg.history+=1;
  next_seg = structuredClone(seg);
  next_seg.x = endx;
  next_seg.y = endy;
  return next_seg;
}
