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

var terms = [
  'LOADING', 
  'READY.', 
  'RUN',
  '****',
  '64 BASIC V2',
  'SEARCHING FOR $',
  'LIST',
  '664 BLOCKS FREE.',
  '64K RAM',
  '38911 BASIC',
  'BYTES FREE',
  'LOAD "*", 8, 1',
  '10 PRINT "HELLO"',
  'INPUT A$',
  '900 END',
  'CLR',
  'GOSUB 2000',
  '20 GOTO 10',
  'REM ART BY ED',
];

var layout = [];
/*
var layout = [
  [1,1,'LOADING'],
  [1,2,'READY.'],
  [1,3,'RUN'],
];
*/

var grid_width = 32;
var grid_size = grid_width * 40;
var grid_y_start = 13;
var grid_x_start = 40;
var grid_x_increment = 15;
var grid_y_increment = 40;
var sq_wide = 400 / grid_width;
var sq_tall = 400 / grid_width;

function draw_letter(term, x, y) {
  fill('#B19EFF');
  text(term, x * grid_x_increment + grid_x_start, 
    y * grid_y_increment + grid_y_start);
}

function setup_layout() {
  for(var i=0; i<grid_size; i++) {
    var [x,y] = get_xy(i);
    var next_term = choose(terms);
    var new_row = [x, y, next_term];
    layout.push(new_row);
    i+= next_term.length;
    i+= 5;
  }
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

function setup() {
  setup_canvas(400,400);
  // Set text characteristics
  textFont(font);
  textSize(30);
  textAlign(CENTER, CENTER);

  setup_layout();
  
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
}

function mouseClicked() {
  setup();
}
