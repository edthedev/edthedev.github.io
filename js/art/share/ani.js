
let ani_stack = [];
let ani_stack_max = 30;

// Called to add a planned animation.
// item should be a function that adds calls for it's future steps via ani_setup
/*
Example:
        ani_plan( 
          item = 
          function() { 
            branch(x+wi, y-ta, nle, we*4/5, wi2, ta, pulse);
          }
        );

*/
function ani_setup(item) {
  if(ani_stack.length < ani_stack_max) {
    ani_stack.push(item);
  }
  // console.debug(ani_stack.length);
}

// Called at the start of setup
function ani_clear() {
  while(ani_stack.length > 0) {
    ani_stack.pop();
  }
}

// Call during draw
function ani_draw() {
  ani_speed = 4;
  for(ani_i = 0; ani_i < ani_speed; ani_i++) {
    if(ani_stack.length > 0) {
      anim = ani_stack.pop();
      anim();
    }
  }
}