
function setup_canvas(maxim_x=800, maxim_y=400) {
  midline = maxim_x / 2;

  myCanvas = createCanvas(maxim_x, maxim_y);

}

function zippy() {
  /// Dark Striped Background
  noStroke();
  stripe_w = 60;
  for(i=0; i<400; i++) {
    fill(fresh_color(.3)); // darker fill color
    x = i * stripe_w;
    // triangle(x, y, x+30, y-random(80), x, y+i+30);
    rect(x,0, stripe_w, 400);
  }
}

function setup_background_circles(centerx, max_diam){
  xo = centerx;
  yo = centerx;
  for(var i=0; i<9; i++){
    ccolor = fresh_color();
    diam = max_diam -i*20;
    fill(ccolor);
    circle(xo, yo, diam);
  }
}

function starfield(max_x, max_y, star_size=4) {
  // white stars
  noStroke();
  fill(color(255,255,255));
  
  // Randomly scatter stars.
  starcount = random(20,60);
  for(i=0;i<starcount;i++){
    starx = random(0, max_x);
    stary = random(0, max_y);
    circle(starx, stary, star_size);
    if(random(0,5)==1) {
      circle(starx -4, stary -4, star_size);
    }

  }
}