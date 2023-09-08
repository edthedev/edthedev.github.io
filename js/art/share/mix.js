function get_random_img(path) {
  alert(path);
  images = $.get(path);
  return random_choice(images);
}

alert('test');

function updateMix() {
  $("imgTop").src = get_random_img('/img/mix/top');
  $("imgBottom").src = get_random_img('/img/mix/bottom');
}

document.getElementById("imgTop").addEventListener("load", updateMix);
