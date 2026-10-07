
/*

"Candles" is part of Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2021.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

+ [x] add drips
+ [x] soften edges with dribbly bits at top and bottom
+ [x] slowly dribble a bead of wax down once side.
+ [x] build the flame with triangles for more shape control
+ [ ] refactor this to create re-usable candles.

*/

var maxim = 400;
var midline = maxim / 2;
var pulse = 0;

var leaf_green;
var orange;
var orange2;
var blue1;
var blue2;
var flame_beat;


var dribblex;
var dribbley;

var yellows;
var oranges;
var blues;

function get_flame_yellow() {
  return color(
    random(195, 255),
    random(180,240), 
    random(20,80));
}

function get_flame_orange() {
  return color(
    random(240, 255),
    random(50,70), 
    random(30,90));
}

function get_flame_blue() {
  basefc = 70;
  return color(
    basefc + random(0, 30),
    basefc + random(140, 180),
    255);
}

function setup_flame() {
  oranges = [
    get_flame_orange(),
    get_flame_orange(),
    get_flame_orange()
  ];
  yellows = [
    get_flame_yellow(),
    get_flame_yellow(),
    get_flame_yellow()
  ];
  blues = [
    get_flame_blue(),
    get_flame_blue(),
    get_flame_blue()
  ]
}

function draw_flame() {

flame_beat = 10;

flame_top = 3.5*maxim/8;
flame_base = 5*maxim/8;
flame_x = 3.5*maxim/8;
flame_w = maxim/32;

if(pulse % flame_beat == 0) {
    // outer
    dx = random(-3, 3);
    dy = random(0, 10);

    noStroke();
    fill(choose(oranges));

    triangle(flame_x + dx, 
      flame_top + 1.5*flame_w, 
      flame_x,
      flame_base,
      flame_x + flame_w,
      flame_base - flame_w
    );
    triangle(flame_x + dx, 
      flame_top + 1.5*flame_w, 
      flame_x,
      flame_base,
      flame_x - flame_w,
      flame_base - flame_w
    );

    // middle
    fill(choose(yellows));
    triangle(dx + flame_x, 
      flame_top + 2*flame_w + dy, 
      flame_x,
      flame_base,
      flame_x + .6*flame_w,
      flame_base - flame_w
    );
    triangle(dx + flame_x + 1, 
      flame_top + 2.9*flame_w, 
      flame_x,
      flame_base,
      flame_x - .6*flame_w,
      flame_base - flame_w
    );

    // inner

    fill(choose(blues));
    triangle(dx + flame_x, 
      flame_top + 4*flame_w, 
      flame_x,
      flame_base - .5*flame_w,
      flame_x + .3*flame_w,
      flame_base - flame_w
    );
    triangle(dx + flame_x + 1, 
      flame_top + 3.5*flame_w, 
      flame_x,
      flame_base - .5*flame_w,
      flame_x - .32*flame_w,
      flame_base - flame_w
    );

    }

}

function draw_candle() {

  candle_top = 5*maxim/8;
  candlex = 7*maxim/16;
  candley = 30.5*maxim/32;
  candlew = maxim/8;
  candlet = maxim/32;

  candledx = candlex/7;


    // plate
    gold = color(200,200,0);
    fill(gold);
    stroke(color(0,0,0));
    ellipse(candlex, 30.5*maxim/32, candlew, maxim/32);
    ellipse(candlex, 59*maxim/64, 2*candlew, maxim/16);

    // wax
    wax = color(random(213, 247), random(213, 247), random(213,247));
    fill(wax);
    stroke(wax);
    rect(candlex - candledx, candle_top, candlew, 4.5*maxim/16);

    // candle base
    fill(wax);
    stroke(wax);
    ellipse(candlex, 29*maxim/32, candlew, maxim/16);

    dribblex = candlex - candledx;
    dribbley = 20*maxim/32;
    dribbley_max = 29*maxim/32;
    dribblex2 = 4*maxim/8;
    dribbley2 = 20*maxim/32;

    // dribbly upper edge
    dy = 0;
    for(i=6*candledx; i<8*candledx; i++) {
        dy+= random(-1, 1);
        if(dy > 4) dy = 4;
        if(dy < 0) dy = 0;
        circle(i, candle_top - dy, 6);
    }


}

function draw_dribble() {
    if(pulse % 100 == 0) {
        if(dribbley < dribbley_max) {
            dribbley += random(0,3);
        }
    }
    if(pulse % 100 == 20) {
        if(dribbley2 < dribbley_max) {
            dribbley2 += random(0,3);
        }
    }

    // dribble
    fill(wax);
    circle(dribblex, dribbley, 6);
    circle(dribblex2, dribbley2, 6);
}

function animate_candle() {
    pulse += 1;
    if(pulse> 1000) { pulse = 0; }
    draw_flame();

    draw_dribble();
}