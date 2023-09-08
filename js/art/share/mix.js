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

const topImgIds = [
  "imgTop11", "imgTop21", "imgTop31",
  "imgTop12", "imgTop22", "imgTop32"
];
const bottomImgIds = [
  "imgBottom11", "imgBottom21", "imgBottom31",
  "imgBottom12", "imgBottom22", "imgBottom32"
];

async function updateMix() {
  if(get_url_seed() == null) {
    new_random(Date.now());
  }
  seed = get_url_seed();
  top_imgs = await get_image_list('/data/mix_top.json');
  bottom_imgs = await get_image_list('/data/mix_bottom.json');

  topImgIds.map( function update(id) {
    seed = get_random_seed(seed);
    document.getElementById(id).src = "/img/mix/top/" + choose(top_imgs, seed);
  });
  bottomImgIds.map( function update(id) {
    seed = get_random_seed(seed);
    document.getElementById(id).src = "/img/mix/bottom/" + choose(bottom_imgs, seed);
  });

}

/* Easy randomizer */
function random_me() {
    new_random(Date.now());
}
