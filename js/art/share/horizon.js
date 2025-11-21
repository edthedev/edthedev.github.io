/*

"Horizon" is part of a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2021.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

*/

var stripecount = 0;
var stripecolors = [];

function make_horizon(
  frame_minx, 
  frame_miny,
  frame_maxx,
  frame_maxy
) {

  var c = color(random(100,200),random(80,160), random(0,200));
  fill(c);

  stripecount = random(4,7);
  stripecolors = [];
  var stripefade = 20;
  var stripered = random(140, 200);
  var stripegreen = random(20, 100);
  var stripeblue = random(0, 200);
  for(i=0;i<stripecount;i++){
    c = color(stripered+i*stripefade,stripegreen+i*stripefade, stripeblue);
    stripecolors.push(c);
  }

  sund = random(30,50);
  sunx = random(frame_minx + sund, frame_maxx - sund);
  suny = random(frame_miny + sund, frame_maxy/2 - sund);
}

function draw_horizon(
  frame_minx, 
  frame_miny,
  frame_maxx,
  frame_maxy
  ) {

  fill(color(230,230,230));
  rect(frame_minx, frame_miny, 
    frame_maxx-frame_minx,
    frame_maxy-frame_miny);

  noStroke();
  var horiz_stripe_y;
  for(i=0;i<stripecount-1;i++){
    fill(stripecolors[i]);
    horiz_stripe_y = frame_miny + i*(frame_maxy/stripecount);
    rect(frame_minx, horiz_stripe_y, 
      frame_maxx - frame_minx, 
      frame_maxy - horiz_stripe_y - frame_miny);
  }

  // sun
  noStroke();
  fill(color(255,255,100));
  circle(sunx, suny, sund);
}