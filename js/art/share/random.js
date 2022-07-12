/* 

Reusable random functions

*/

function new_random() {
  var searchParams = new URLSearchParams(window.location.search);
  seed = get_random_seed();
  searchParams.set("r", seed);
  window.location.search = searchParams.toString();
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

function get_random_from_seed(seed, max=1) {
    rand = Math.sin(seed) * 10000;
    rand = rand - Math.floor(rand);
    return rand * max;
}

function fresh_color(warmth, seed) {
  if(!seed) {
    seed = get_url_seed();
  }
  if(!warmth) { warmth = 40; }
  r1 = get_random_from_seed(seed, 10);
  r2 = get_random_from_seed(seed, 10);
  r3 = get_random_from_seed(seed, 10);
  return color(r1*warmth,r2*warmth,r3*warmth);
}


function choose(choices, seed) {
  // Support repeatable result.
  // so that every frame of animation re-uses the 
  // same choice as last.
  if(!seed) {
    seed = get_url_seed();
  }
  rand = get_random_from_seed(seed);
  index = Math.floor(rand * choices.length);
  return choices[index];
}