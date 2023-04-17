
let ani_stack = [];
let ani_stack_max = 30;

// Called to add a planned animation.
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

