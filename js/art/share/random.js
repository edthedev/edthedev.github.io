/* 

Reusable random functions

*/

function new_random() {
  seed = get_random_seed();
  window.location.search = "?r=" + seed;
}

function get_url_seed() {
  const params = new URLSearchParams(location.search);
  seed = params.get('r');
  return seed;
}

function get_random_seed() {

  rand = Math.random();
  rand = Math.sin(seed) * 10000;
  seed = rand - Math.floor(rand);
  return seed;
}

function get_random_from_seed(seed, max_r=1) {
    rand = Math.sin(seed) * 10000;
    rand = rand - Math.floor(rand); // Get remainder
    return Math.floor(rand * max_r);
}

var color_shift = 0;
function fresh_color(warmth=.9, seed) {
  if(!seed) {
    seed = get_url_seed();
    color_shift+=1;
    seed = seed^color_shift;
  }
  r1 = get_random_from_seed(seed, 255);
  r2 = get_random_from_seed(seed*r1, 255);
  r3 = get_random_from_seed(seed*r2, 255);
  console.log('r1: ' + r1);
  console.log('r2: ' + r2);
  return color(r1*warmth,r2*warmth,r3*warmth);
}


function choose(choices, seed) {
  // Support repeatable result.
  // so that every frame of animation re-uses the 
  // same choice as last.
  if(!seed) {
    seed = get_url_seed();
  }
  rand = get_random_from_seed(seed, 1);
  index = Math.floor(rand * choices.length);
  return choices[index];
}