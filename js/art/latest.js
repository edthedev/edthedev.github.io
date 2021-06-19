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
  color1: null,
  color2: null
};

var pulse = 0;
var beat = 30;

function draw_weave(weave) {
  fill(weave.color);
  circle(weave.x,weave.y, weave.size);
  fill(weave.color2);
  circle(weave.x + weave.size,
    weave.y + weave.size, 
    weave.size / 2);
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
  background('#222222');

  maxline = 400;
  balls = [];
  item_count = random(3,5);

  weave_template = Object(weave);
  for(i=0;i<item_count;i++){
    newb = Object.assign({}, weave_template);
    newb.x = random(0,maxline);
    newb.y = 100 + i * 40; // Make sure they each start offset a bit
    newb.color = fresh_color();
    newb.color2 = fresh_color();

    // base_path = [1,1, 1,-1, -1,-1, -1, 1];
    base_path = [1,1,1,-1];
    seq1 = base_path.map( item => item * choose([2,4,5]));
    seq2 = seq1.map( item => item * -1); // reverse?
    newb.sequence = newb.sequence.concat(seq1);
    newb.sequence = newb.sequence.concat(seq2);

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
  setup();
}
