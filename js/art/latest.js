/*

This is a Live Art work created by Edward Delaporte.

This script is Copyright Edward Delaporte 2020.

This script and the art it creates are licensed under 
a Creative Commons Attribution-ShareAlike 4.0 
International License.

http://creativecommons.org/licenses/by-sa/4.0/

You can share your own remix of this code 
as long as you display this license and attribution.


+ [x] add grass/ground around base of each tree.

*/

let ani_stack = [];

function ani_plan(item) {
  ani_stack.push(item);
  console.debug(ani_stack);
}

function ani_do() {
  anim = ani_stack.pop();
  anim();

  /*
  ani_stack.forEach(
    async function(anim) {
      anim();
    }
    );
  ani_stack = [];
  */
}

function setup() {
  // maxim = .5 * window.innderWidth;
  maxim_x = 800;
  maxim_y = 400;
  midline = maxim_x / 2;
  myCanvas = createCanvas(maxim_x, maxim_y);
  fill(color(230,230,230));

  make_horizon(0, 0, maxim_x, maxim_y);
  draw_horizon(0, 0, maxim_x, maxim_y);

  setup_tree();

  draw_ground(myCanvas);

  num_trees = choose([2, 3, 4, 5]);
  for(tree_count=0; tree_count<num_trees; tree_count++) {
    trunk(
      random(0, maxim_x),
      7/8*maxim_y,
      3,
      60
    );
  }

}

function draw() {
  ani_do();
}

function mouseClicked() {
  setup();
}
