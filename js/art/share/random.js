
function choose(choices, seed) {
  var rand = Math.random();

  // Support repeatable result.
  // so that every frame of animation re-uses the 
  // same choice as last.
  if(seed) {
    rand = Math.sin(seed) * 10000;
    rand = rand - Math.floor(rand);
  }
  index = Math.floor(rand * choices.length);
  return choices[index];
}