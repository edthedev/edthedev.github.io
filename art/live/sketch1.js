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

var colorblue = 0;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function brushstroke(sx1, sy1, sx2, sy2) {
  console.log("X1: " + sx1);
  colorblue+=1;
  let c = color(100,colorblue,colorblue);
  fill(c);
  circle(sx1, sy1, 15);
  if(sx1<sx2) { sx1+=(sx2-sx1)/sx2 + 1; }
  if(sy1<sy2) { sy1+=(sy2-sy1)/sy2 + 1; }

  if(sx1<sx2 || sy1<sy2) {
    sleep(500);
    // setTimeout(brushstroke.bind(sx1+1, sy1+1, sx2, sy2), 300);
    brushstroke(sx1, sy1, sx2, sy2);
  }
}

function cornerstroke(sx1, sy1, sx2, sy2) {
  line(sx1, sy1, sx2, sy2/2);
  line(sx2, sy2/2, sx1, sy2);
}

function setup() {
  maxim = 400;
  midline = maxim / 2;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  cornercount = random(3,10);
  for(i=0;i<cornercount;i++){
    cornerstroke(0,0,50 * i,50*i+30);
  }

}