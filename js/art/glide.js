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
  sequence: [],
  size: 10,
  color1: null,
  color2: null
};

var items = [];
var pulse = 0;
var beat = 100;
var mini_pulse = 0;
var mini_beat = 0;
var vector_i = 0;

var vector_options = [
[ // Dash
  [15,1,1],
  [5,0,1],
  [15,1,1],
  [5,0,1],
  [15,1,1],
  [5,0,1],
  [15,1,1],
  [5,0,1],
],
[ // Dash
  [15,1,-1],
  [5,0,-1],
  [15,1,-1],
  [5,0,-1],
  [15,1,-1],
  [5,0,-1],
  [15,1,-1],
  [5,0,-1],
],
[ // Pulse
  [10,1,1],
  [10,0,1],
  [10,1,0],
  [10,1,1],
],
[ // Zip
  [50,1,1],
],
];
var vector_paths = choose(vector_options);

var vector_now = vector_paths[0];

function draw_item(weave) {
    fill(weave.color2);
    circle(weave.x, weave.y, 2);
    circle(weave.x + weave.size, 
      weave.y + weave.size, 2);
    stroke(weave.color1);
    line(weave.x, weave.y, 
      weave.x+weave.size,
      weave.y+weave.size);

  return weave;
}

function bounce_weave(weave) {
  if(weave.x < 0) {
    vector_now[1] = 1;
    weave = fresh_color_item(weave); 
  }
  if(weave.x > 400) {
    vector_now[1] = -1;
    weave = fresh_color_item(weave); 
  }
  if(weave.y < 0) {
    vector_now[2] = 1;
  }
  if(weave.y > 400) {
    vector_now[2] = -1;
  }
}

function anim_item(weave) { 
  weave.x += vector_now[1];
  weave.y += vector_now[2];
  bounce_weave(weave);
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

function get_newb(x=0) {
  var newb = Object.assign({}, item_template);
  newb.x = x; 
  newb.y = 200;
  newb.color1 = fresh_color();
  newb.color2 = fresh_color();
  return newb;
}

var start_pos = [[100,300], [150, 350]];

function setup() {

  setup_canvas(400,400);
  zippy();
  var start_x = choose(start_pos);

  items.push( get_newb(start_x[0]) );
  items.push( get_newb(start_x[1]) );

  fill(fresh_color());
  maxline = 400;
}

function fresh_color_item(item) {
  item.color1 = fresh_color();
  item.color2 = fresh_color();
  return item;
}

function draw() {
  pulse++;
  if(pulse > beat) {
    pulse = 0;
    vector_paths = choose(vector_options);
  }

  mini_pulse += 1;
  if(mini_pulse >= mini_beat) {
    mini_pulse = 0;
    vector_i += 1;
    if(vector_i >= vector_paths.length) {
      vector_i = 0;
    }
    vector_now = vector_paths[vector_i];
    mini_beat = vector_now[0];
  }

  items = items.map( item => anim_item(item) );
  items = items.map( item => draw_item(item) );
}

function mouseClicked() {
  pulse = 0;
  setup();
}
