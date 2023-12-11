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

function start_fractal() {
  line_bit = new_line_segment(color(0,0,0));
  line_bit.y = 200;
  line_bit.length = 70;
  line_bit.x = 300;
  line_bit.degrees = 0; 
  roty = random(40, 170);
  do_fractal(line_bit);
  line_bit.degrees += roty; 
  do_fractal(line_bit);
  line_bit.degrees += roty; 
  do_fractal(line_bit);
  /* 
  line_bit.degrees += roty; 
  do_fractal(line_bit);
  line_bit.degrees += roty; 
  do_fractal(line_bit);
  */
}

async function do_fractal(bit) {
  stroke(random(150, 255),random(150,255),random(150, 255));
  const next_bit = structuredClone(draw_line_segment(bit));
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

function tile_background(maxim_x, maxim_y) {

  line_shade = 70;
  stroke(line_shade, line_shade, line_shade);
  fill(150,50,50);
  background(maxim_x,maxim_y);
  xp = 0;
  yp = 0;
  min_tile_size = maxim_y;
  while(yp<maxim_y) {
    tile_size = random(40,100);
    console.log("size" + tile_size);
    if(tile_size < min_tile_size)
    {
      min_tile_size = tile_size;
      console.log("min tile is now " + min_tile_size);
    }

    rect(xp, yp, xp+tile_size, yp+tile_size);
    xp += tile_size;
    if(xp>maxim_x) {
      xp=0;
      yp+=min_tile_size;
      min_tile_size = maxim_y;
    }
  }
}

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim_x = 600;
  maxim_y = 400;
  midline = maxim_y / 2;
  myCanvas = createCanvas(maxim_x, maxim_y);
  tile_background(maxim_x, maxim_y);

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
