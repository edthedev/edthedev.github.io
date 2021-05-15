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

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim = 400;
  midline = maxim / 2;
  createCanvas(maxim, maxim);
  background(maxim,maxim);
  balls = [];
  ballcount = random(3,20);
  draw_frame();

  frame_min = maxim/8;
  frame_max = 7*maxim/8;

  theball = Object(sprite);
  for(i=0;i<ballcount;i++){
    newb = Object.assign({}, theball);
    newb.x = random(frame_min + 10,frame_max - 10);
    newb.y = random(frame_min + 10, frame_max - 10);
    balls.push([newb, dewit]);
  }
}

function dewit(ball) {

  if(ball.x + 11 >frame_max) {
    ball.dx = random(-1, -4);
    ball.blue += 30;
  }
  if(ball.y + 11 >frame_max) {
    ball.dy = random(-2, -4);
    ball.red += 70;

  }
  if(ball.x - 14 <frame_min) {
    ball.dx = choose([.5, 1]);
    ball.green += 40;
  }
  if(ball.y - 14 <frame_min) {
    ball.dy = random(0.5, 1);
    ball.blue += 30;
  }

  ball.x += ball.dx;
  ball.y += ball.dy;

  fill(color(ball.red, ball.green, ball.blue));
  circle(ball.x, ball.y, 20);
  return [ball, dewit];
}


function draw() {
  fill(color(0,200,255));
  rect(frame_min, frame_min, 
    frame_max-frame_min,
    frame_max-frame_min);

  balls = balls.map( item => item[1](item[0]) );
}

function mouseClicked() {
  setup();
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