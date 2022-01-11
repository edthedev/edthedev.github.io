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

function get_start_color(idx=0){
  // Four Color Tiling
  return [color(48, 159, 219), // cyan
    color(55, 222, 58), // green
    color(255, 239, 61), // yellow
    color(242, 92, 92) // light red
  ][idx];
}

function draw_tile(x1, y1, x2, y2,
  sq_color1, sq_color2, index) {
    var variant = index % 2;

    fill(sq_color1);
    rect(x1,y1,x2,y2);
    if(variant == 1) {
      fill(sq_color2);
      triangle(x1, y1, x2,y2, x1, y2);
    }
    if(variant == 2) {
      var sqm = 2;
      rect(x1+sqm,y1+sqm,x2-sqm,y2-sqm);
    }

}

function get_color(index, sequence) {
  return [
    color(200,0,0),
    color(0,200,0),
    color(0,0,200),
    color(0,0,0),
    color(255,255,255),
  ][sequence];
  /*
  if(sequence == 1) {
    return color(150,150,255);
  }
  return color(255,255,0);
  */
}

var layout = [];

var grid_y_start = 13;
var grid_x_start = 40;
var grid_x_increment = 15;
var grid_y_increment = 40;

function setup_layout() {
}

function get_xy(position) {
  var x=(position % grid_width);
  var y=int(position/grid_width);
  return [x,y];
}

function update_grid(pulse) {
  var position = pulse % grid_size;
  var [x,y] = get_xy(position);
  /*
  console.debug("X: ", x);
  console.debug("Y: ", y);
  */
  for(let i=0; i<layout.length; i++) {
    var item = layout[i];
    console.debug("item", item);
    if(x==item[0] && 
      y==item[1]
      ) {
        draw_letter(item[2], x,y);
      }
  }
}


function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('/css/Basic-Regular.ttf');
}

function mouseClicked() {
  setup();
}

var grid_w = 40;
var row_count = choose([2,3,5,7]);
var grid_size = 40 * row_count;

function setup() {
  setup_canvas(400,400);
  zippy();
  var row_count = choose([2,3,5,7]);
  var grid_size = 40 * row_count;

  var grid = get_new_grid(grid_size);
}

var pulse = 0;
var pulse_delay = 45;
pulse_delay = 10;

function draw() {
  /*
  pulse++;
  if(pulse % pulse_delay == 0) {
    if(grid_memory.length < grid_width*grid_width) {
      setup_grid();
    }
    else {
      if(pulse % 5 == 0) {
        // tile a bit slower
        tile_grid();
      }
    }
  }*/
  draw_grid(grid, grid_w, 400, 400, 
    get_color,
    draw_tile);
}
