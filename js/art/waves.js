
/*

"Waves" is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2021.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

*/

var pulse = 0;
var fillcount = 0;

var sprite = {
  x: 0,
  y: 0,
  dx: 1,
  dy: 1,
  rulefun: dewit,
  size: 20
};

var stripecount = 0;
var stripecolors = [];
var suncolor;
var watercolor;
var sunsety = 0;
var midline = 0;

function draw_horizon() {
  var horiz_stripe_y;
  for(i=0;i<stripecount;i++){
    fill(stripecolors[i]);
    horiz_stripe_y = i*(midline/stripecount);
    rect(0, horiz_stripe_y, maxim, midline - horiz_stripe_y);
  }
}

function draw_sun() {
  draw_water();
  fill(suncolor);
  circle(maxim/2, sunsety, maxim/4);
  draw_water();
}

function draw_water() {
  fill(watercolor);
  rect(0, maxim/2 - wavetall, maxim, maxim/2 + wavetall);
}


function setup() {
  // maxim = .5 * window.innderWidth;
  maxim = 400;
  midline = maxim / 2;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  noStroke();
  frameRate(200); // fast fill, then chill


  // sunset
  var c = color(random(200,255),random(80,160), random(0,200));
  fill(c);
  rect(0, 0, maxim, maxim/2);

  stripecount = random(4,7);
  stripecolors = [];
  var stripefade = 20;
  var stripered = random(200, 255);
  var stripegreen = random(80, 160);
  var stripeblue = random(0, 200);
  for(i=0;i<stripecount;i++){
    c = color(stripered+i*stripefade,stripegreen+i*stripefade, stripeblue);
    stripecolors.push(c);
    // fill(c);
    // rect(0, i*maxim/6, maxim, maxim/2);
  }
  draw_horizon();

  var i = stripecount + 1;
  suncolor = color(stripered+i*stripefade,stripegreen+i*stripefade, stripeblue);
  watercolor = color(random(0,100),random(80,160), random(200,255));
  sunsety = maxim/2 + maxim/4 - random(0,4)*maxim/8;
  draw_sun();

  // waves
  balls = [];
  ballcount = random(10,20);
  theball = Object(sprite);
  for(i=0;i<ballcount;i++){
    newb = Object.assign({}, theball);
    maxline = maxim;
    minline = maxim/2;
    newb.x = random(0, 3*maxline/4);
    newb.y = maxim/2 + random(0, maxim/2);
    balls.push([newb, dewit]);
  }
}

var wavewide = 120;
var wavetall = 3; 

function colorchange() {
  // slow down the color changes for waves
  if(pulse % 3 == 0) {
    var c = color(random(0,100),random(80,160), random(200,255));
    fill(c);
  }
}

function dewit(ball) {
  colorchange();
  ball.y += ball.dy;
  ball.x += ball.dx;

  if(ball.y<maxim/2) ball.dy = 1;
  if(ball.x>maxim) ball.dx = -1;
  if(ball.x< -wavewide) ball.dx = 1;
  rect(ball.x, ball.y, wavewide, wavetall);

  if(ball.y>maxim) {
    ball.x -= 20;
    // ball.dx = -1 * ball.dx;
    ball.y = maxim/2;
    // return [ball, backwards];
  }
  return [ball, dewit];
}

function draw() {
  // fast fill then slow down
  fillcount+=1;
  if(fillcount>800) frameRate(20);

  // puslse for color chnages
  pulse +=1;
  if(pulse > 10000) pulse = 0;
  balls = balls.map( item => item[1](item[0]) );

  if(pulse % 1000 == 0) {
    sunsety += 1;
    draw_horizon();
    draw_sun();
    // fast refill
    fillcount = 0;
    frameRate(300);
  }

}

function mouseClicked() {
  fillcount = 0;
  frameRate(300);
  setup();
}