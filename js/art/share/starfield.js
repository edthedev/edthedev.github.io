
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