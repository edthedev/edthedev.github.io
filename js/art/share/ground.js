var season;
var leaf_green;

function setup_season() {
  season = choose(["spring", "winter", "summer", "fall"]);
  leaf_green = color(0, random(150,200), random(0,100));
}

function draw_grass(xi,y,x_end, y_end) {

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

  // pre-fill gaps
  rect(xi, y, x_end-xi, y_end-y);

  for(x=xi;x<x_end;x+=dx){
    if(season.includes("spring")) { // random green
      fill(color(0, random(150,200), random(0,100)));
    }
    rect(x,y-random(0, 4),dx,y_end);
  }
}

function draw_ground(canv, y=0) {
  maxim_x = canv.width;
  maxim_y = canv.height;

  if(y==0) {
    y = 4*maxim_y/5;
  }

  draw_grass(0,y,maxim_x, maxim_y);
}