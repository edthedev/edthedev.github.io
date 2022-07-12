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

function get_random_from_seed(seed) {
    rand = Math.sin(seed) * 10000;
    rand = rand - Math.floor(rand);
    return rand;
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