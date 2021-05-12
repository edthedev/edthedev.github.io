
/*

"Candle" is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2021.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

*/

var maxim = 400;
var midline = maxim / 2;

function mouseClicked() {
  setup();
}

function setup() {

    noStroke();
    createCanvas(maxim, maxim);
    background(maxim,maxim);
    draw_background();
    draw_frame();
    draw_candle();

}

function draw_candle() {


    // plate
    gold = color(200,200,0);
    fill(gold);
    stroke(color(0,0,0));
    ellipse(7*maxim/16, 59*maxim/64, 2*maxim/8, maxim/16);

    // wax
    wax = color(255,255,255);
    fill(wax);
    stroke(wax);
    rect(3*maxim/8, 5*maxim/8, maxim/8, 4.5*maxim/16);

    // candle base
    fill(wax);
    stroke(wax);
    ellipse(7*maxim/16, 29*maxim/32, maxim/8, maxim/16);
}

function draw() {

}

function draw_frame() {

    fill(color(200,200,200));
    stroke(color(0,0,0));
    rect(0, 0, maxim/8, maxim); // left
    rect(7*maxim/8, 0, maxim/8, maxim); // right
    rect(0, 7*maxim/8, maxim, maxim/8); // bottom
    rect(0, 0, maxim, maxim/8); // top
}


// Background

function draw_background() {

  season = choose(
    ["spring", "winter", "fall", "summer"]);

  // sky
  if(random(0,8) < 7) {
    // sunset
    sunsety = maxim/5;
    make_horizon();
    draw_horizon();
  }
  else {
    // blue sky
    fill(color(0, 200, 255));
    rect(0, 0, maxim, maxim);
    draw_clouds(); // always clouds in blue sky
  }

  // sun
  noStroke();
  fill(color(255,255,100));
  circle(maxim/6, maxim/6, random(30, 90));

  // clouds
  if(random(0,10)>5) {
    draw_clouds();
  }

  // precipitation
  if(random(0,10)>6) {
    if(season.includes("winter")) {
      draw_snow();
    } else {
      setup_rain();
      dropcount = random(60, 120);
      for(i=0; i<dropcount; i+=1) {
        draw_rain();
      }
    }
  }
}

function setup_rain() {
  strokeWeight(1);
  rain_dx = random(-6,0);
  rain_dy = random(20, 30);
}

function draw_rain() {
  var c = color(random(0,100),random(80,160), random(200,255));
  stroke(c);
  startx = random(0, maxim);
  starty = random(0, maxim);
  line(startx, starty, startx+rain_dx, starty+rain_dy);
}

var stripecount = 0;
var stripecolors = [];

function make_horizon() {

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
  }
}

function draw_horizon() {
  var horiz_stripe_y;
  for(i=0;i<stripecount;i++){
    fill(stripecolors[i]);
    horiz_stripe_y = i*(maxim/stripecount);
    rect(0, horiz_stripe_y, maxim, maxim - horiz_stripe_y);
  }
}

function draw_clouds() {

  noStroke();
  fill(color(230,230,255));
  cloud_puff = random(8,27);
  puff = 2*cloud_puff;

  dropcount = random(3, 10);
  for(i=0; i<dropcount; i+=1) {
    
    x = random(0, 4*maxim/5);
    y = random(maxim/8, 3*maxim/5);


    circle(x+cloud_puff, y-cloud_puff*random(0,1), puff);
    circle(x+ 2*cloud_puff, y-cloud_puff*random(0,1), puff);
    circle(x+ 3*cloud_puff, y-cloud_puff*random(0,1), puff);


    circle(x, y, puff);
    circle(x + cloud_puff, y, puff);
    circle(x + 2 * cloud_puff, y, puff);
    circle(x + 3 * cloud_puff, y, puff);
    circle(x + 4 * cloud_puff, y, puff);
  }
}

function draw_snow() {

  stroke(color(255,255,255));
  flake_size = 3;

  dropcount = random(60, 120);
  for(i=0; i<dropcount; i+=1) {
    
    startx = random(0, maxim);
    starty = random(0, maxim);

    line(startx-flake_size, starty-flake_size, 
      startx+flake_size, starty+flake_size);
    line(startx+flake_size, starty-flake_size, 
      startx-flake_size, starty+flake_size);
    line(startx, starty-flake_size-1, 
      startx, starty+flake_size+1);
    line(startx-flake_size-1, starty, 
      startx+flake_size+1, starty);

  }
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
