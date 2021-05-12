
/*

"Candle" is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2021.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

+ [ ] add randomized wood grain to the window frame
+ [ ] add drips
+ [ ] soften edges with dribbly bits at top and bottom
+ [ ] build the flame with triangles for more shape control
+ [ ] slowly dribble a bead of wax down once side.

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


function setup_flame() {
    orange = color(random(170, 230),random(170,230), random(30,90));
    orange2 = color(random(230, 255),random(200,255), random(30,90));
    blue1 = color(random(60, 100), random(170,230), random(200,255));
    blue2 = color(random(60, 100), random(170,230), random(200,255));
}

function draw_flame() {

flame_beat = 10;
if(pulse % flame_beat == 0) {
    // outer
    dx = random(-3, 3);

    noStroke();
    if(pulse % (2*flame_beat) == 0) {
        fill(orange);
    } else {
        fill(orange2);
    }
    ellipse(3.5*maxim/8, 4.4*maxim/8, maxim/16, 2*maxim/16);

    // inner

    if(pulse % (2*flame_beat) == 0) {
        fill(blue1);
    } else {
        fill(blue2);
    }
    ellipse(dx + 3.5*maxim/8, 4.8*maxim/8, .45*maxim/16, .75*maxim/16);

    }

}

function mouseClicked() {
  setup();
}

function setup() {

    noStroke();
    createCanvas(maxim, maxim);
    background(maxim,maxim);
    leaf_green = color(33, 150, 33);
    draw_background();
    draw_frame();
    draw_candle();
    setup_flame();

}

function draw_candle() {


    // plate
    gold = color(200,200,0);
    fill(gold);
    stroke(color(0,0,0));
    ellipse(7*maxim/16, 30.5*maxim/32, maxim/8, maxim/32);
    ellipse(7*maxim/16, 59*maxim/64, 2*maxim/8, maxim/16);

    // wax
    wax = color(random(213, 247), random(213, 247), random(213,247));
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
    draw_grain(0, 0, maxim/8, maxim); // left
    rect(7*maxim/8, 0, maxim/8, maxim); // right
    rect(0, 7*maxim/8, maxim, maxim/8); // bottom
    rect(0, 0, maxim, maxim/8); // top
}

function get_wood_brown() {
    return color(
        random(110,160), 
        random(100, 130), 
        random(70, 85)); //random brown
}

function draw_grain(grainx, grainy, grainw, graint) {
    noStroke();

    dx = 1;
    dy = 1;
    dt = 15;
    dw = 5;
    /* if(fw > ft) { // set grain direction
        t = 5;
        w = 40;
    } */
    // console.debug("Ix is " + bobx);
    console.debug("Fw is " + grainw);

    grain1 = get_wood_brown();
    grain2 = get_wood_brown();
    grain3 = get_wood_brown();


    for(bobx=0; bobx < grainw; bobx+=dw-2) {
        bobx += random(0,2);
        for(boby=0; boby < graint; boby+=dt) {

            grainc = choose([grain1, grain2, grain3]);
            fill(grainc);

            rect(grainx+bobx, grainy+boby, dw, dt);
        }
    }
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
    fill(color(0, 100, 155));
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

  // ground
  draw_ground();

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

  // var c = color(random(200,255),random(80,160), random(0,200));
  var c = color(random(100,200),random(80,160), random(0,200));
  fill(c);
  rect(0, 0, maxim, maxim/2);

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
  fill(color(170,170,200)); // cloud color
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

function draw_ground() {
  noStroke();
  dx = 1; // spiked grass
  fill(leaf_green); // summer
  if(season.includes("fall)")) {
    fill(color(20, 20, 30));
    dx = 5; // smoother ground
  }
  if(season.includes("winter")) {
    fill(color(255,255,255)); //white snow
    dx = 3; // smoother ground
  }

  y = 6.5*maxim/8;
  rect(0, y, maxim, maxim/5);

  for(x=0;x<maxim;x+=dx){
    if(season.includes("spring")) { // random green
      fill(color(0, random(150,200), random(0,100)));
    }
    rect(x,y-random(0, 4),dx,maxim/5);
  }
}


function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function draw() {
    pulse += 1;
    if(pulse> 1000) { pulse = 0; }
    draw_flame();
}