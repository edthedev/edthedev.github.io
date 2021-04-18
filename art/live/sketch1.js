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

function starfield() {
  // White start on black backgroud
  background('#222222');
  fill(color(255,255,255));
  
  // Randomly scatter stars.
  starcount = random(20,60);
  for(i=0;i<starcount;i++){
    starx = random(0, maxim);
    stary = random(0, maxim);
    circle(starx, stary, 4);
  }
}



function cornerstroke(sx1, sy1, sx2, sy2) {
  line(sx1, sy1, sx2, sy2/2);
  line(sx2, sy2/2, sx1, sy2);
}

// var colorshade = 0;

function setup() {
  maxim = 400;
  midline = maxim / 2;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  starfield();
  cornercount = random(3,10);
  for(i=0;i<cornercount;i++){
    // colorshade+=40;
    let c = color(random(0,10)*25,random(0,10)*25, random(0,10)*25);
    fill(c);
    // cornerstroke(0,0,50 * i,50*i+30);
    triangle(0,0, 50*i, 50*i+30, maxim/i, 0);
  }

}