

function get_new_grid(grid_size) {
  grid = [];

  var tile_template = {color1: 1, color2: 2}

  for(var i=0; i<grid_size; i++) {
    var new_tile = {}
    Object.assign(new_tile, tile_template);
    grid.push(new_tile);
  }
  console.debug("Grid", grid);
  return grid;
}


function draw_grid(
  grid_map, 
  grid_w, 
  canvas_w, 
  canvas_h,
  get_color,
  draw_tile) {
  tile_w = int(canvas_w / grid_w);
  row_count = int(grid_map.length / grid_w);
  tile_h = int(canvas_h / row_count );

  // debugger;
  for(var i=0; i<grid_map.length; i++) {
    iy = int(i / grid_w); // row
    ix = i % grid_w; //col

    x1 = tile_w * ix;
    x2 = x1 + tile_w;
    y1 = tile_h * iy;
    y2 = y1 + tile_h;

    var sq_color1 = get_color(i, 1);
    var sq_color2 = get_color(i, 2);

    draw_tile(x1,y1,x2,y2, sq_color1, sq_color2, i);

  }

}

