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

var terms = ['LOADING', 'READY', 'RUN'];

var grid_memory = [];
var grid_width = 32;
var grid_size = grid_width * 40;
var grid_y_start = 10;
var grid_x_increment = 15;
var grid_y_increment = 40;
var sq_wide = 400 / grid_width;
var sq_tall = 400 / grid_width;

function draw_letter(letter, position) {
  fill('#B19EFF');
  var x=(position % grid_width);
  var y=int(position/grid_width);
  console.debug("X: ", x);
  console.debug("Y: ", y);
  text(letter, x * grid_x_increment, 
    y * grid_y_increment + grid_y_start);

}

function draw_grid() {
  /*
  for(var i=0; i<grid_memory.length; i++) {
    draw_letter("?", i)
  }*/
}

function update_grid(pulse) {
  var tile = pulse % grid_size;
  /*
  console.debug("Pulse: ", pulse);
  console.debug("Tile: ", tile);
  */
  draw_letter("?", tile);
}


function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('/css/Basic-Regular.ttf');
}

function setup() {
  setup_canvas(400,400);
  // Set text characteristics
  textFont(font);
  textSize(30);
  textAlign(CENTER, CENTER);
  
  grid_memory = [];
  background('#6953F5');
  // starfield(400,400,4);
}

var pulse = 0;
var pulse_delay = 35;
pulse_delay = 10;

function draw() {
  pulse++;
  if(pulse % pulse_delay == 0) {
    update_grid(pulse / 10);
  }
  draw_grid();
}

function mouseClicked() {
  setup();
}
