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
  // Setup randomization
  if(get_url_seed() == null) {
    new_random(Date.now());
  }
  seed = get_url_seed();

  // Get available images and ALT text
  top_imgs = await get_image_list('/data/mix_top.json');
  bottom_imgs = await get_image_list('/data/mix_bottom.json');
  alt_text = await get_image_list('/data/mix_alt.json');

  all_alt = {};
  // Set the top images
  topImgIds.map( function update(id) {
    seed = get_random_seed(seed);
    next_img = choose(top_imgs, seed);
    document.getElementById(id).src = "/img/mix/top/" + next_img;
    document.getElementById(id).alt = alt_text[next_img];
    all_alt[id] = alt_text[next_img];
    top_imgs = remove_item(top_imgs, next_img);  // No repeats
  });

  // Set the bottom images
  bottomImgIds.map( function update(id) {
    seed = get_random_seed(seed);
    next_img = choose(bottom_imgs, seed);
    document.getElementById(id).src = "/img/mix/bottom/" + next_img;
    document.getElementById(id).alt = alt_text[next_img];
    all_alt[id] = alt_text[next_img];
    bottom_imgs = remove_item(bottom_imgs, next_img);  // No repeats
  });

  // Write an alt-text summary
  all_alt_text = "Six sketches on 12 note cards:\n" +
    "\n" + all_alt["imgTop11"] + " on " + all_alt["imgBottom11"] + "." +
    "\n" + all_alt["imgTop12"] + " on " + all_alt["imgBottom12"] + "." +
    "\n" + all_alt["imgTop21"] + " on " + all_alt["imgBottom21"] + "." +
    "\n" + all_alt["imgTop22"] + " on " + all_alt["imgBottom22"] + "." +
    "\n" + all_alt["imgTop31"] + " on " + all_alt["imgBottom31"] + "." +
    "\n" + all_alt["imgTop32"] + " on " + all_alt["imgBottom32"] + ".";
  document.getElementById("altTextSummary").textContent = all_alt_text;

  share_prefix = "\n\nMix and match notecards by Edward Delaporte\n\n";
  share_text = window.location + encodeURIComponent(share_prefix + all_alt_text);
  share_link_href="https://edward.delaporte.us/slides/share.html#text=" + share_text;
  document.getElementById("share_link").href = share_link_href;

}

/* Easy randomizer */
function random_me() {
    new_random(Date.now());
}
