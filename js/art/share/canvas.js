
function setup_canvas(maxim_x=800, maxim_y=400) {
  midline = maxim_x / 2;

  myCanvas = createCanvas(maxim_x, maxim_y);

}


/*
Used by Zippy
*/
function fresh_color(warmth=30) {
  return color(random(0,10)*warmth,random(0,10)*warmth, random(0,10)*warmth);
}

function zippy() {
  /// Dark Striped Background
  noStroke();
  stripe_w = 60;
  for(i=0; i<400; i++) {
    fill(fresh_color(3)); // darker fill color
    x = i * stripe_w;
    // triangle(x, y, x+30, y-random(80), x, y+i+30);
    rect(x,0, stripe_w, 400);
  }
}
