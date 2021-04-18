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

function freshcolor() {
  let c = color(random(0,10)*30,random(0,10)*30, random(0,10)*30);
  fill(c);
}


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
    if(random(0,5)==1) {
      circle(starx -4, stary -4, 4);
    }

  }
}

function topspike() {
  cornercount = random(6,10);
  for(i=0;i<cornercount;i++){
    freshcolor();
    triangle(0,0, 50*i, 50*i+30, maxim/i, 0);
  }
  freshcolor();
}

function globe(gx, gy, size) {
  freshcolor();
  circle(gx, gy, size);
  freshcolor();
  triangle(gx-size/3, gy-size/3, gx+size/2, gy, gx+size/4, gy+size/4);
  if(size>100) {
    var gnext = Math.floor(random(1, 3));
    var gxnext = 0;
    var gynext = 0;
    if(gnext == 1) {
      gxnext = gx-size/3;
      gynext = gy-size/3;
    }
    if(gnext == 2) {
      gxnext = gx+size/2;
      gynext = gy;
    }
    if(gnext == 3) {
      gxnext = gx+size/4;
      gynext = gy+size/4;
    }
    globe(gxnext, gynext, size/3+(5*random(0,5)));
  }

}

// var colorshade = 0;

function setup() {
  maxim = 400;
  midline = maxim / 2;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  starfield();

  // Globes
  var gx = random(1, 3);
  var gy = random(2, 3);
  var gsize = 100 * random(1, 3);

  globe(gx * 100 + 50,gy*100+50, gsize);

  topspike();
}