
function draw_ground(canv) {
  maxim_x = canv.width;
  maxim_y = canv.height;

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

  y = 4*maxim_y/5;
  rect(0, y, maxim_x, maxim_y/5);

  for(x=0;x<maxim_x;x+=dx){
    if(season.includes("spring")) { // random green
      fill(color(0, random(150,200), random(0,100)));
    }
    rect(x,y-random(0, 4),dx,maxim_y/5);
  }
}