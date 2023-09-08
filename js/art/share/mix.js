function get_random_img(path) {
  alert(path);
  images = $.get(path);
  return random_choice(images);
}

async function get_image_list(path) {
  const resp = await fetch(path);
  const result = await resp.json();
  return result;
}

async function updateMix() {
  if(get_url_seed() == null) {
    new_random();
  }
  top_imgs = await get_image_list('/data/mix_top.json');
  bottom_imgs = await get_image_list('/data/mix_bottom.json');
  document.getElementById("imgTop").src = "/img/mix/top/" + choose(top_imgs);
  document.getElementById("imgBottom").src = "/img/mix/bottom/" + choose(bottom_imgs);
}


/* document.getElementById("#imgTop").addEventListener("load", do_stuff);
*/
