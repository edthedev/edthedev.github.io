

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

function add_degrees(angle, degrees) {
  updated = angle + degrees;
  if(updated > 360) {
    updated = updated - 360;
  }
  return updated;
}

var line_segment = {
  x: 0,
  y: 0,
  weight: 4,
  degrees: 0,
  length: 20,
  history: 0,
  color: null,
  color_seq: [],
};

function draw_line_segment(line_seg) {
  seg = structuredClone(line_seg);
  seg.history+=1;
  // stroke(seg.color.red, seg.color.green, seg.color.blue);
  strokeWeight(seg.weight);
  angleRad = toRadians(seg.degrees);
  endx = seg.x + seg.length*Math.cos(angleRad);
  endy = seg.y + seg.length*Math.sin(angleRad),
  line(seg.x, seg.y, endx, endy);
  next_seg = structuredClone(seg);
  next_seg.x = endx;
  next_seg.y = endy;
  return next_seg;
}


function draw_line_with_kite_shadow(line_seg, color_seq) {

  // prep
  seg = structuredClone(line_seg);
  angleRad = toRadians(seg.degrees);
  endx = seg.x + seg.length*Math.cos(angleRad);
  endy = seg.y + seg.length*Math.sin(angleRad);

  if(line_seg.history > 0) { // skip first line

  // draw shadow
  shadow_idx = (seg.history % color_seq.length);
  sha_c = color_seq[shadow_idx];
  stroke(sha_c.red, sha_c.green, sha_c.blue);
  fill(sha_c);
  swe = seg.weight*16;
  quad(
    seg.x,seg.y, 
    seg.x+swe,seg.y+swe, 
    endx,endy,
    endx+swe,endy+swe
    );

  // draw line
  stroke(seg.color.red, seg.color.green, seg.color.blue);
  strokeWeight(seg.weight);
  line(seg.x, seg.y, endx, endy);

  } else {
    endx = seg.x;
    endy = seg.y;
  }

  // house keeping
  seg.history+=1;
  next_seg = structuredClone(seg);
  next_seg.x = endx;
  next_seg.y = endy;
  return next_seg;
}


function new_line_segment(color_seq) {
  seg = structuredClone(line_segment);
  seg.color_seq = color_seq;
  seg.color = seg.color_seq[0];
  return seg;
}