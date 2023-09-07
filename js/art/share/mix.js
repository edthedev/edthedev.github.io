function get_random_img(path) {
  images = $.get(path);
  return random_choice(images);
}

window.onClick = function() {
$("imgTop").src = get_random_img('/img/mix/top');
$("imgBottom").src = get_random_img('/img/mix/bottom');
}
