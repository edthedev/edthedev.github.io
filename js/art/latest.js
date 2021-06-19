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
  size: 20,
  color: null
};

var pulse = 0;
var beat = 30;

function draw_weave(weave) {
  fill(weave.color);
  circle(weave.x,weave.y, weave.size);
  return weave;
}

function anim_weave(weave) { 
  weave.x += weave.dx;
  weave.y += weave.dy;
  return weave;
}

function fresh_color() {
  let c = color(random(0,10)*30,random(0,10)*30, random(0,10)*30);
  return c;
}

function setup() {

  setup_canvas();

  maxline = 400;
  balls = [];
  item_count = random(3,5);

  weave_template = Object(weave);
  for(i=0;i<item_count;i++){
    newb = Object.assign({}, weave_template);
    newb.x = random(0,maxline);
    newb.y = i * 22; // Make sure they each start offset a bit
    newb.color = fresh_color();

    base_path = [1,1, 1,-1, -1,-1, -1, 1];
    newb.sequence = base_path.map( item => item * choose([1,2,3]));

    console.debug(newb);
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
  pulse++;
  if(pulse > beat) {
    pulse = 0;
    balls = balls.map( item => shift_weave(item) );
  }
  balls = balls.map( item => anim_weave(item) );
  balls = balls.map( item => draw_weave(item) );
}

function mouseClicked() {
  setup();
}
