/*

"Tree" is part of a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2021.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.

+ [x] clean up tree edges.

*/

var treepulse = 0;

var maxim = 400;
var midline = maxim / 2;
var season = "spring";
var leaf_green;

function setup_tree() {
  season = choose(["spring", "winter", "summer", "fall"]);
  leaf_green = color(0, random(150,200), random(0,100));
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

  fill(color(255,0,0));
  // round the top
  circle(x + wi/2, y-ta-2*wi, wi/1.3);

  // grass the bottom
  draw_grass(x - 2*wi, y, x + 3*wi, maxim_y);
  stroke(tree_color);

  for(i=1; i<5; i++) {

    ani_plan( 
      item = 
      function() { 
        branch(x + i*wi/6,y-ta, le, we, 0, 0, 0);
      }
    );

    ani_plan( 
      item = 
      function() { 
        branch(x + i*wi/6,y-ta, le, we, 0, 0, 0);
      }
    );


  }
}

function branch(x, y, le, we, wi, ta, pulse) {

  // abort early if we're about to waste energy.
  if(pulse > 6) {
    return;
  }
  // scraggly trees
  /*
  if(abs(le) < .5) {
    return;
  }
  */

  pulse += 1;


  strokeWeight(we);
  if(pulse < 3) {
    // Try to never have too smal dx.
    dw = random(.1,.3) * le;
    ta += random(.1,.2) * le;
    nle = le-1;
  } else {
    dw = random(.2,.4) * le; // wider
    ta += random(.1,.12) * le; // not as tall later
    nle = le-le/random(1,3);
  }

  // If growing aggressively wide
  // favor getting less wide as we go.
  if(wi > 7) {
    dw -= 5;
  }
  // Choose direction after size change.
  dw = dw * choose([-1, 1]);
  wi += dw;

  line(x, y, x+wi, y-ta);
  if(we > 2) {
    ani_plan( 
      item = 
      function() { 
        branch(x+wi, y-ta, nle, we*4/5, wi, ta, pulse) 
      }
    );

    // another branch?
    if(pulse < 3) {
      wi2 = wi + random(-.4,-.2) * le;
      if(random(0,40)>20){

        ani_plan( 
          item = 
          function() { 
            branch(x+wi, y-ta, nle, we*4/5, wi2, ta, pulse);
          }
        );


      }
    } else {
      wi2 = wi + random(-.9,-.3) * wi;
      ta2 = ta + random(-.9,.9) * ta;
      if(random(0,40)>5){ // much more likely

        ani_plan( 
          item = 
          function() { 
            branch(x+wi, y-ta, nle, we*4/5, wi2, ta, pulse);
          }
        );

      }
    }
  }

  if(pulse >4) { // no leaves early on
    // leaf behind branch...
    if(random(0,100)>10){

        ani_plan( 
          item = 
          function() { 
            leaf_cluster(x+wi, y-ta);
          }
        );

    }
  }

}

function leaf_cluster(x, y) {
  fill(leaf_green);
  noStroke();
  for(i=0; i<random(2,5); i++) {

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
