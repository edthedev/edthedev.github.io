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


var item_template = {
  x: 0,
  y: 0,
  dx: 1,
  dy: 1,
  sequence: [],
  size: 10,
  color1: null,
  color2: null
};

var items = [];
var pulse = 0;
var beat = 25;

function draw_item(item) {
  rect(item.x, item.y, 
    item.size, 
    item.size);
  return item;
}

function anim_item(weave) { 
  weave.x += weave.dx;
  weave.y += weave.dy;
  return weave;
}
function fresh_color(warmth=30) {
  return color(random(0,10)*warmth,random(0,10)*warmth, random(0,10)*warmth);
}

function zippy() {
  noStroke();
  stripe_w = 60;
  for(i=0; i<400; i++) {
    fill(fresh_color(3)); // darker fill color
    x = i * stripe_w;
    // triangle(x, y, x+30, y-random(80), x, y+i+30);
    rect(x,0, stripe_w, 400);
  }
}
function setup() {

  setup_canvas(400,400);
  zippy();
  var newb = Object.assign({}, item_template);
  newb.x = 200; 
  newb.y = 0;
  items.push( 
   newb 
  );

  fill(fresh_color());
  maxline = 400;
}

function draw() {
  /* 
  
  if(pulse == 0) {
    items = items.map( item => shift_item(item) );
  }
  */
  pulse++;
  if(pulse > beat) {
    pulse = 0;
  }
  items = items.map( item => anim_item(item) );
  items = items.map( item => draw_item(item) );
}

function mouseClicked() {
  pulse = 0;
  setup();
}
