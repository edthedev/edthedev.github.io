/* 

Reusable random functions

*/

function get_url_seed() {
  const params = new URLSearchParams(location.search);
  seed = params.get('r');
  return seed;
}

function get_random_from_seed(seed, max_r=1) {
    rand = Math.sin(seed) * 10000;
    rand = rand - Math.floor(rand); // Get remainder
    return Math.floor(rand * max_r);
}

function choose(choices, seed) {
  // Support repeatable result.
  // so that every frame of animation re-uses the 
  // same choice as last.
  if(!seed) {
    seed = get_url_seed();
  }
  index = get_random_from_seed(seed, choices.length);
  return choices[index];
}