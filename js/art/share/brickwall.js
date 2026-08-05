function tile_background(maxim_x, maxim_y) {

  line_shade = 70;
  stroke(line_shade, line_shade, line_shade);
  fill(150,50,50);
  background(maxim_x,maxim_y);
  xp = 0;
  yp = 0;
  min_tile_size = maxim_y;
  while(yp<maxim_y) {
    tile_size = random(40,100);
    console.log("size" + tile_size);
    if(tile_size < min_tile_size)
    {
      min_tile_size = tile_size;
      console.log("min tile is now " + min_tile_size);
    }

    rect(xp, yp, xp+tile_size, yp+tile_size);
    xp += tile_size;
    if(xp>maxim_x) {
      xp=0;
      yp+=min_tile_size;
      min_tile_size = maxim_y;
    }
  }
}