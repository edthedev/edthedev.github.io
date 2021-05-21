/*

This is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2020.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

*/

var sprite = {
  x: 0,
  y: 0,
  dx: 1,
  dy: 1,
  rulefun: dewit,
  blue: 0,
  red: 0,
  green: 0,
  size: 20
};

var mindx = .1;

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim = 400;
  midline = maxim / 2;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  balls = [];
  ballcount = random(9,40);
  mindx = random(.1, 2);
  draw_frame();

  frame_min = maxim/8;
  frame_max = 7*maxim/8;

  make_horizon();
  theball = Object(sprite);
  for(i=0;i<ballcount;i++){
    newb = Object.assign({}, theball);
    newb.x = random(frame_min + 10,frame_max - 10);
    newb.y = random(frame_min + 10, frame_max - 10);
    newb.dx = mindx;
    balls.push([newb, dewit]);
  }
  setup_snowman();
}


function draw() {
  fill(color(230,230,230));
  rect(frame_min, frame_min, 
    frame_max-frame_min,
    frame_max-frame_min);

  draw_horizon();
  draw_snowman();

  balls = balls.map( item => item[1](item[0]) );
}

function mouseClicked() {
  setup();
}


function dewit(ball) {

  if(ball.x + 11 >frame_max) {
    ball.x = frame_min + 11;
  }
  if(ball.y + 11 >frame_max) {
    ball.y = frame_min + 11;
  }
  if(ball.x - 14 <frame_min) {
    ball.dx = mindx + choose([.5, 1]);
  }
  if(ball.y - 14 <frame_min) {
    ball.dy = random(0.5, 1);
  }

  ball.x += ball.dx;
  ball.y += ball.dy;

  fill(color(ball.red, ball.green, ball.blue));
  // circle(ball.x, ball.y, 20);
  draw_flake(ball.x, ball.y);
  return [ball, dewit];
}

function draw_flake(startx, starty) {
  stroke(color(255,255,255));
  flake_size = 3;

    line(startx-flake_size, starty-flake_size, 
      startx+flake_size, starty+flake_size);
    line(startx+flake_size, starty-flake_size, 
      startx-flake_size, starty+flake_size);
    line(startx, starty-flake_size-1, 
      startx, starty+flake_size+1);
    line(startx-flake_size-1, starty, 
      startx+flake_size+1, starty);

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

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

var stripecount = 0;
var stripecolors = [];

function make_horizon() {

  var c = color(random(100,200),random(80,160), random(0,200));
  fill(c);

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

  sund = random(30,50);
  sunx = random(frame_min + sund, frame_max - sund);
  suny = random(frame_min + sund, frame_max/2 - sund);
}

function draw_horizon() {
  noStroke();
  var horiz_stripe_y;
  for(i=0;i<stripecount-1;i++){
    fill(stripecolors[i]);
    horiz_stripe_y = frame_min + i*(frame_max/stripecount);
    rect(frame_min, horiz_stripe_y, 
      frame_max - frame_min, 
      frame_max - horiz_stripe_y - frame_min);
  }

  // sun
  noStroke();
  fill(color(255,255,100));
  circle(sunx, suny, sund);
}

var snowman = {}

function setup_snowman() {
  snowman.size = random(40, 80);
  snowman.x = random(frame_min + snowman.size, frame_max - snowman.size);
  snowman.y = frame_max - snowman.size / 2;
  snowman.head_y = snowman.y - 1.7*snowman.size/3;
  snowman.arm_len = snowman.size/8;
  snowman.arm_y = snowman.head_y + snowman.size/8;
  snowman.arm_updown = choose([
    snowman.arm_y + snowman.arm_len, 
    snowman.arm_y - snowman.arm_len]);
}

function draw_snowman() {
  fill(color(255,255,255));
  //balls
  circle(snowman.x, snowman.y, snowman.size / 2);
  circle(snowman.x, snowman.y - snowman.size/3, snowman.size / 3);
  circle(snowman.x, snowman.head_y, snowman.size / 4);


  //face
  eye_y = snowman.head_y + snowman.size/32;
  eye_x = snowman.x - snowman.size/16;
  fill(color(0,0,0));
  circle(eye_x, eye_y, 2);
  eye_x = snowman.x + snowman.size/16;
  circle(eye_x, eye_y, 2);

  // arms
  stroke(color(120,90,90));
  arm_x = snowman.x + snowman.size / 8;
  line(arm_x, snowman.arm_y, arm_x + snowman.arm_len, snowman.arm_updown);
  arm_x = snowman.x - snowman.size / 8;
  line(arm_x, snowman.arm_y, arm_x - snowman.arm_len, snowman.arm_updown);

}