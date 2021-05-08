
/*

"Tree" is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2021.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

*/

var treepulse = 0;

var maxim = 400;
var midline = maxim / 2;
var season = "spring";
var leaf_green;

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function draw_background() {
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


  // ground
  draw_ground();

  // rain
  if(random(0,10)>5) {
    setup_rain();
    dropcount = random(60, 120);
    for(i=0; i<dropcount; i+=1) {
      draw_rain();
    }
  }



}


function setup() {
  // maxim = .5 * window.innderWidth;
  leaf_green = color(33, 150, 33);
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  noStroke();
  frameRate(200); // fast tree growth
  season = choose(
    ["spring", "winter", "fall", "summer"]);
  // season = "winter"; // for testing
  draw_background();

  treepulse = 0;
  trunk(maxim - maxim/5,
     maxim, 
     7, //width
     maxim/3); // tall
}

function trunk(x,y, wi, ta) {

  strokeWeight(10);
  tree_color = color(80, 80, 0);
  fill(tree_color);
  stroke(tree_color);
  rect(x, y-ta, wi, ta);

  le = 40;
  we = 10;

  root = 1;
  circle(x-3, y-ta, root);
  circle(x+we, y-ta, root);

  circle(x-3, y, root);
  circle(x+we, y, root);

  for(i=1; i<5; i++) {
    branch(x + i*wi/6,y-ta, le, we, 0, 0, 0);
    branch(x + i*wi/6,y-ta, le, we, 0, 0, 0);
  }
}

function branch(x, y, le, we, wi, ta, pulse) {

  pulse += 1;


  strokeWeight(we);
  if(pulse < 3) {
    wi += random(-.2,.2) * le;
    ta += random(.1,.2) * le;
    nle = le-1;
  } else {
    wi += random(-.4,.4) * le; // wider
    ta += random(.05,.1) * le; // not as tall later
    nle = le-le/random(1,4);
  }

  line(x, y, x+wi, y-ta);
  if(we > 2) {
    branch(x+wi, y-ta, nle, we*4/5, wi, ta, pulse);

    // another branch?
    if(pulse < 3) {
      wi2 = wi + random(-.4,-.2) * le;
      if(random(0,40)>20){
        branch(x+wi, y-ta, nle, we*4/5, wi2, ta, pulse);
      }
    } else {
      wi2 = wi + random(-.9,-.3) * wi;
      ta2 = ta + random(-.9,.9) * ta;
      if(random(0,40)>5){ // much more likely
        branch(x+wi, y-ta, nle, we*4/5, wi2, ta, pulse);
      }
    }
  }

  if(pulse >4) { // no leaves early on
    // leaf behind branch...
    if(random(0,100)>10){
      leaf_cluster(x+wi, y-ta);
    }
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

  y = 4*maxim/5;
  rect(0, y, maxim, maxim/5);

  for(x=0;x<maxim;x+=dx){
    if(season.includes("spring")) { // random green
      fill(color(0, random(150,200), random(0,100)));
    }
    rect(x,y-random(0, 4),dx,maxim/5);
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

function leaf_cluster(x, y) {
  green = color(33, 150, 33);
  fill(green);
  noStroke();
  for(i=0; i<random(1,6); i++) {

    if(season.includes("fall")) {
      fill(color(
        random(150, 255), random(100, 200), 100));
    }

    circle(x + random(-4, 4), y + random(-4,4), 4);
    if(season.includes("winter")) {
      fill(color(255,255,255)); // white
      circle(x + random(-4, 4), y + random(-5,3), 4);
    }
  }

  stroke(tree_color);
  fill(tree_color);

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

function draw() {
  // slow down for snowflakes once the tree is drawn
  // treepulse+=1;
  // if(treepulse>800) frameRate(20);
}

function mouseClicked() {
  setup();
}