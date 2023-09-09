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
  alt_text = await get_image_list('/data/mix_alt.json');

  all_alt = {};
  topImgIds.map( function update(id) {
    seed = get_random_seed(seed);
    next_img = choose(top_imgs, seed);
    document.getElementById(id).src = "/img/mix/top/" + next_img;
    document.getElementById(id).alt = alt_text[next_img];
    all_alt[id] = alt_text[next_img];
  });
  bottomImgIds.map( function update(id) {
    seed = get_random_seed(seed);
    next_img = choose(bottom_imgs, seed);
    document.getElementById(id).src = "/img/mix/bottom/" + next_img;
    document.getElementById(id).alt = alt_text[next_img];
    all_alt[id] = alt_text[next_img];
  });
  all_alt_text = all_alt["imgTop11"] + " on " + all_alt["imgBottom11"];
}

/* Easy randomizer */
function random_me() {
    new_random(Date.now());
}
