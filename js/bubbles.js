var bubbles = [
    "<a href='/art' class=bubble>Artful</a>",
    "<a href='/learn2code' class=bubble>Thoughtful</a>",
    "<a href='/art/live' class=bubble>Clever</a>",
    "<a href='/code' class=bubble>Experienced</a>",
    "<a href='/pikachu' class=bubble>Silly</a>",
    "<a href='/slides' class=bubble>Presentable</a>",
    "<a href='/resume' class=bubble>Employable</a>",
    "<a href='/basic' class=bubble>Passionate</a>",
    "<a href='/robots' class=bubble>Fun</a>",
];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function randomize_bubbles() {
    var bubble_list = shuffle(bubbles);
    for(var i=0; i<9;i+=1) {
        var bubble_id = "bubble" + i;
        var content = bubble_list[i];
        $("#"+ bubble_id).html(content);
    }
}
