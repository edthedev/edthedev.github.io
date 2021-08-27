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

var grid_memory = [];
var grid_width = 5;
var sq_wide = 400 / grid_width;
var sq_tall = 400 / grid_width;

function get_color(idx=0){
  return [color(255,0,0),
    color(0,255,0),
    color(0,0,255),
    color(0,200,200)
  ][idx];
}

var square_template = {
  idx: 0,
  color_idx: 0
}

function setup_grid() {
  var newsq = new_square();
  newsq.idx = grid_memory.length;
  newsq.color_idx = choose([0,1,2,3]); // TODO: Add tiling rules.
  grid_memory[newsq.idx] = newsq;
}

/* Four Color Tiling */
function tile_grid() {
  var newsq = new_square();
  // Choose a random tile to recolor.
  newsq.idx = int(random(0, grid_width*grid_width));
  newsq.color_idx = choose_valid_color(newsq.idx);
  grid_memory[newsq.idx] = newsq;
}

function choose_valid_color(idx) {
  var acceptable = [0, 1, 2, 3];
  var color_idx = -1;
  // check square to left
  color_idx = get_color_idx(idx - 1);
  acceptable.remove(acceptable.indexOf(color_idx));

  // check square to right
  color_idx = get_color_idx(idx + 1); // TODO: Deal with row overflow
  acceptable.remove(acceptable.indexOf(color_idx));

  // check square above
  color_idx = get_color_idx(idx - grid_width); 
  acceptable.remove(acceptable.indexOf(color_idx));

  // check square below
  color_idx = get_color_idx(idx + grid_width); 
  acceptable.remove(acceptable.indexOf(color_idx));

  if(acceptable.length == 0) {
    acceptable == [0]; 
    // brute force deal with edge cases 
    // - such as right edge overflow
    // by always returning a value.
  }
  return choose(acceptable);
}

function get_color_idx(idx) {
  if(grid_memory.length < idx) {
    // out of bounds
    return -1;
  }
  else {
    return grid_memory[idx].color_idx;
  }
}

function draw_grid() {
  for(var i=0; i<grid_memory.length; i++) {
    iy = int(i / grid_width); // row
    ix = i % grid_width; //col

    x1 = sq_wide * ix;
    x2 = x1 + sq_wide;
    y1 = sq_tall * iy;
    y2 = y1 + sq_tall;

    var sq_color_idx = grid_memory[i].color_idx;
    var sq_color = get_color(sq_color_idx);
    fill(color(0,0,0));
    rect(x1,y1,x2,y2);
    fill(sq_color);
    var sqm = 20;
    rect(x1+sqm,y1+sqm,x2-sqm,y2-sqm);
  }

}

function new_square() {
  return Object.assign({}, square_template);
}

var start_pos = [[100,300], [150, 350]];

function setup() {
  setup_canvas(400,400);
  grid_memory = [];
  zippy();
}

var pulse = 0;

function draw() {
  pulse++;
  if(pulse % 35 == 0) {
    if(grid_memory.length < grid_width*grid_width) {
      setup_grid();
    }
    else {
      tile_grid();
    }
  }
  draw_grid();
}

function mouseClicked() {
  setup();
}
