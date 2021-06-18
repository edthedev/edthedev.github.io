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
  rulefun: dewit,
  size: 20,
  color = color(0, 255,0);
};

function draw_weave(weave) {
  fill(weave.color);
  rect(x,y, 20);
}
function anim_weave(weave) { 
  weave.x += dx;
  weave.y += dy;
  return weave;
}

function setup() {
  ani_clear();

  balls = [];
  ballcount = random(3,5);

  theball = Object(weave);
  for(i=0;i<ballcount;i++){
    newb = Object.assign({}, theball);
    maxline = random(maxim/2, maxim);
    minline = random(0, maxim/2);
    newb.x = random(0,maxline);
    newb.y = i * 22;
    balls.push([newb, dewit]);
  }


}

function draw() {
  balls = balls.map( item => item[1](item[0]) );
}

function mouseClicked() {
  setup();
}
