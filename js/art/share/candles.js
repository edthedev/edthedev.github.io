
/*

"Candle" is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2021.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

+ [x] add randomized wood grain to the window frame
+ [x] randomize cloud colors
+ [x] add drips
+ [x] soften edges with dribbly bits at top and bottom
+ [x] slowly dribble a bead of wax down once side.
+ [x] build the flame with triangles for more shape control

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
    /* 
    if(pulse % (2*flame_beat) == 0) {
        fill(orange);
    } else {
        fill(orange2);
    }
    */
    // ellipse(3.5*maxim/8, 4.4*maxim/8, maxim/16, 2*maxim/16);

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

function draw_frame() {

    fill(color(200,200,200));
    stroke(color(0,0,0));

    wood_grain_colors = [
        get_wood_brown(),
        get_wood_brown(),
        get_wood_brown(),
        get_wood_brown(),
        get_wood_brown()
    ];

    rect(0, 0, maxim/8, maxim); // left
    draw_grain(0, 0, maxim/8, maxim); // left
    rect(7*maxim/8, 0, maxim/8, maxim); // right
    draw_grain(7*maxim/8, 0, maxim/8, maxim); // right
    rect(0, 7*maxim/8, maxim, maxim/8); // bottom
    draw_grain(0, 7*maxim/8, maxim, maxim/8); // bottom
    rect(0, 0, maxim, maxim/8); // top
    draw_grain(0, 0, maxim, maxim/8); // top
}

function get_wood_brown() {
    basegc = random(50,90);
    return color(
        basegc + random(30,70), 
        basegc + random(0,10), 
        basegc + random(0,10)); //random brown
}

var wood_grain_colors;

function draw_grain(grainx, grainy, grainw, graint) {
    noStroke();

    dx = 1;
    dy = 1;
    dt = 30;
    dw = 3;
    if(grainw > graint) { // set grain direction
        temp = dw;
        dw = dt;
        dt = temp;
    } 
    // console.debug("Ix is " + bobx);
    console.debug("Fw is " + grainw);

    for(bobx=0; bobx < grainw; bobx+=dw-2) {
        bobx += random(0,2);
        for(boby=0; boby < graint; boby+=dt-2) {
            boby += random(0,2);

            grainc = choose(wood_grain_colors);
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

function get_cloud_color() {
    basecc = 100;
    return color(
        basecc + random(0, 70),
        basecc + 70,
        200); // cloud color
}

var cloud_colors;

function draw_clouds() {

    cloud_colors = [
        get_cloud_color(),
        get_cloud_color(),
        get_cloud_color()
    ];

  noStroke();
  cloud_puff = random(8,27);
  puff = 2*cloud_puff;

  dropcount = random(3, 10);
  for(i=0; i<dropcount; i+=1) {
    
    x = random(0, 4*maxim/5);
    y = random(maxim/8, 3*maxim/5);

    fill(choose(cloud_colors));
    circle(x+cloud_puff, y-cloud_puff*random(0,1), puff);
    fill(choose(cloud_colors));
    circle(x+ 2*cloud_puff, y-cloud_puff*random(0,1), puff);
    fill(choose(cloud_colors));
    circle(x+ 3*cloud_puff, y-cloud_puff*random(0,1), puff);


    fill(choose(cloud_colors));
    circle(x, y, puff);
    fill(choose(cloud_colors));
    circle(x + cloud_puff, y, puff);
    fill(choose(cloud_colors));
    circle(x + 2 * cloud_puff, y, puff);
    fill(choose(cloud_colors));
    circle(x + 3 * cloud_puff, y, puff);
    fill(choose(cloud_colors));
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

function draw() {
    pulse += 1;
    if(pulse> 1000) { pulse = 0; }
    draw_flame();

    draw_dribble();
}