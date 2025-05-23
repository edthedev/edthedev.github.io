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


function get_start_color(idx=0){
  // Four Color Tiling
  return [
    color(242, 92, 92), // light red
    color(48, 159, 219), // cyan
    color(55, 222, 58), // green
    color(186, 39, 149), // magenta
    color(116, 207, 212), // bluish
    color(242, 92, 92) // light red
  ][idx];
}

var dimmer_dx = 0;
function get_tile_color(idx=0){
  // Four Color Tiling
  result = [
    [55, 222, 58], // green
    [176, 34, 242], // light purple
    [255, 239, 61], // yellow
    [255, 59, 245], // pink
    [116, 207, 212], // bluish
    [186, 39, 149] // magenta
    // Guess who helped pick colors?
  ][idx];
  result[0] -= dimmer_dx;
  result[1] -= dimmer_dx;
  result[2] -= dimmer_dx;
  return color(result);
}

var square_template = {
  idx: 0,
  color_idx: 0
}

function setup_grid() {
  var newsq = new_square();
  newsq.idx = grid_memory.length;
  newsq.color_idx = choose([1,2,3,4]);
  grid_memory[newsq.idx] = newsq;
}

/* Four Color Tiling */
function tile_grid() {
  var newsq = new_square();
  // Choose a random tile to recolor.
  newsq.idx = int(random(0, grid_memory.length));
  newsq.color_idx = choose_valid_color(newsq.idx);
  grid_memory[newsq.idx] = newsq;
}

function choose_valid_color(idx) {
  var acceptable = [1, 2, 3, 4];
  var color_idx = -1;
  // check square to left
  color_idx = get_color_idx(idx - 1); 
  removeItemOnce(acceptable, color_idx + 1); // Left margin is color idx +1

  // check square to right
  color_idx = get_color_idx(idx + 1) + 1; 
  removeItemOnce(acceptable, color_idx);

  // check square above
  color_idx = get_color_idx(idx - grid_width); 
  removeItemOnce(acceptable, color_idx - 1); // top margin is color idx - 1

  // check square below
  color_idx = get_color_idx(idx + grid_width) - 1; 
  removeItemOnce(acceptable, color_idx);

  if(acceptable.length == 0) {
    acceptable == [0]; 
    // brute force deal with edge cases 
    // - such as right edge overflow
    // by always returning a value.
  }
  var chosen = choose(acceptable);
  // console.debug(chosen);
  return chosen;
}

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function get_color_idx(idx) {
  /*
  console.debug("IDX", idx);
  console.debug("Length", grid_memory.length);
  */
  // out of bounds - high
  if(grid_memory.length <= idx) {
    return -1;
  }
  // out of bounds - low
  if(idx < 0) {
    return -1;
  }
  return grid_memory[idx].color_idx;
}

function draw_top_triangle(idx) {

    margin = 30;
    xul = 0 + idx * margin;
    xur = 400 - idx * margin;
    xpoint = 200;

    yul = 0;
    yur = 0;
    ypoint = 200 - idx*margin;
    console.debug("idx: " + idx);
    
    var sq_color_idx = grid_memory[idx].color_idx;
    var sq_color = get_tile_color(sq_color_idx);
    if(grid_memory.length < grid_width*grid_width) {
      sq_color = get_start_color(sq_color_idx);
    }

    // Main color
    fill(sq_color);
    triangle(xul, yul, xpoint, ypoint, xur, yur);
}

function draw_bottom_triangle(idx) {
    idx = idx - 25;

    margin = 15;
    xul = 0 + idx * margin;
    xur = 400 - idx * margin;
    xpoint = 200;

    yul = 400;
    yur = 400;
    ypoint = 200 + idx*margin - margin;
    
    var sq_color_idx = grid_memory[idx].color_idx;
    var sq_color = get_tile_color(sq_color_idx);
    if(grid_memory.length < grid_width*grid_width) {
      sq_color = get_start_color(sq_color_idx);
    }

    // Main color
    fill(sq_color);
    triangle(xul, yul, xpoint, ypoint, xur, yur);
}


function draw_grid() {
  for(var i=0; i<grid_memory.length; i++) {
    if(i<=25){
      draw_top_triangle(i);
    } else {
      draw_bottom_triangle(i);
    }
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
  starfield(400,400,4);
  setup_background_circles(200, 300);
}

var pulse = 0;
var pulse_delay = 35;
pulse_delay = 10;

function draw() {
  pulse++;
  if(pulse % pulse_delay == 0) {
    if(grid_memory.length < grid_width*grid_width) {
      setup_grid();
    }
    else {
      pulse_delay = 35;
      if(dimmer_dx < 200){
        dimmer_dx+=1;
      }
      // Add 5 extra items for the lines.
      if(grid_memory.length <= grid_width*grid_width + 5) {
        setup_grid();
      }
      tile_grid();
    }
  }
  draw_grid();
}

function mouseClicked() {
  setup();
}
