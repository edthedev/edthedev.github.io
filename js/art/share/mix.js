function get_random_img(path) {
  alert(path);
  images = $.get(path);
  return random_choice(images);
}

alert('test');

function updateMix() {
  $("imgTop").src = get_random_img('/data/mix_top.json');
  $("imgBottom").src = get_random_img('/data/mix_bottom.json');
}

document.getElementById("imgTop").addEventListener("load", updateMix);
