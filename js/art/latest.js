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


var weave = {
  x: 0,
  y: 0,
  dx: 1,
  dy: 1,
  sequence: [],
  size: 10,
  color1: null,
  color2: null
};

var pulse = 0;
var beat = 25;

function draw_weave(weave) {
  stroke(color(0,0,0)); // black outline
  fill(weave.color2);

  edge_dx = .5 * weave.size;

  // large background square
  rect(weave.x - edge_dx,
    weave.y - edge_dx,
    weave.size + edge_dx,
    weave.size + edge_dx
    );

  stroke(color(255,255,255)); // white outline
  fill(weave.color);

  // cross wide
  rect(weave.x - edge_dx, weave.y, 
    weave.size + edge_dx, weave.size / 4);
  // cross tall
  rect(weave.x, weave.y - edge_dx, 
    weave.size / 4, weave.size + edge_dx);
  return weave;
}

function anim_weave(weave) { 
  weave.x += weave.dx;
  weave.y += weave.dy;
  return weave;
}
function fresh_color(warmth=30) {
  return color(random(0,10)*warmth,random(0,10)*warmth, random(0,10)*warmth);
}

function zippy() {
  noStroke();
  tri_size = 60;
  for(i=0; i<400; i++) {
    fill(fresh_color(3)); // darker fill color
    x = i;
    y = 400 - i
    triangle(x, y, x+30, y-random(80), x, y+i+30);
  }
}

function setup() {

  setup_canvas(400,400);
  background('#4444CC');
  setup_grain();
  starfield(400,400, 2);
  // draw_wood_frame(400);
  // draw_grain(0,200,400,401);
  zippy();

  maxline = 400;
  balls = [];
  item_count = 2;


  // base_path = [1,1,1,-1]; // squarish
  base_path = [];
  fun_curves = [
    [2,0,
     2,0,
      0,2,
      ], // wide box
    [2,0,
      0,2,
      -1,0,
      0,-1,
      -1,0,
      0,2,
      2,0,
      ], // spiral
    [0,2,
      1,0,
      0,-2
      ] // U

  ];
  var curve_count = 4;
  for(i=0; i<curve_count; i++) {
    base_path = base_path.concat(
      choose(fun_curves)
    );
  }
  
  latest_path = base_path;

  weave_template = Object(weave);

  startx = [330, 70];
  starty = [330, 70];

  for(i=0;i<item_count;i++){
    newb = Object.assign({}, weave_template);

    newb.x = startx[i];
    newb.y = starty[i]; // Make sure they each start offset a bit


    newb.color = fresh_color();
    newb.color2 = fresh_color();

    latest_path = latest_path.map( item => item * -1);
    seq1 = latest_path;
    seq2 = seq1.map( item => item * -1); // reverse to close loop
    newb.sequence = newb.sequence.concat(seq1);
    newb.sequence = newb.sequence.concat(seq2);

    balls.push(newb);
  }
  noStroke();

}

function shift_weave(item) {
  if(item.sequence.length > 0) {
    item.dx = item.sequence.shift();
    item.dy = item.sequence.shift();
  } else {
    item.dx = 0;
    item.dy = 0;
  }
  return item;
}

function draw() {
  if(pulse == 0) {
    balls = balls.map( item => shift_weave(item) );
  }
  pulse++;
  if(pulse > beat) {
    pulse = 0;
  }
  balls = balls.map( item => anim_weave(item) );
  balls = balls.map( item => draw_weave(item) );
}

function mouseClicked() {
  pulse = 0;
  setup();
}
