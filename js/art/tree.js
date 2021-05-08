
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
  }


  // ground
  draw_ground();

  // rain
  // TODO: Randomize whether it rains
  if(random(0,10)>5) {
    setup_rain();
    dropcount = random(60, 120);
    for(i=0; i<dropcount; i+=1) {
      draw_rain();
    }
  }
  draw_sprout();

  // sun
  noStroke();
  fill(color(255,255,100));
  circle(maxim/6, maxim/6, random(30, 90));

}

function draw_sprout() {
  x = maxim/5;
  y = 4*maxim/5;
  le = 16;

  nsprout(x,y,le);
}

function nsprout(x, y, le) {
  circle(x,y,.3);
  nx = x;
  if(le % 6 == 0) {
    nx = nx + rain_dx;
  }

  if(le>1) {
    nsprout(nx,y-2,le-1);
  }
}

function draw_ground() {
  noStroke();
  fill(color(0, 200, 0));
  y = 4*maxim/5;
  rect(0, y, maxim, maxim/5);
  for(x=0;x<maxim;x++){
    fill(color(0, random(150,200), random(0,100)));
    rect(x,y-random(0, 4),1,maxim/5);
  }
}

function setup() {
  // maxim = .5 * window.innderWidth;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  noStroke();
  draw_background();
  frameRate(200); // fast tree growth

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
    circle(x + random(-4, 4), y + random(-4,4), 4);
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


function draw() {
  // slow down for snowflakes once the tree is drawn
  // treepulse+=1;
  // if(treepulse>800) frameRate(20);
}

function mouseClicked() {
  setup();
}