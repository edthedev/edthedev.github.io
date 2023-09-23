

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
};

function draw_line_segment(line_seg) {
  seg = structuredClone(line_seg);
  seg.history+=1;
  stroke(seg.color.red, seg.color.green, seg.color.blue);
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


function draw_line_with_shadow(line_seg, color_seq) {
  // fill(segment.color);
  seg = structuredClone(line_seg);

  // draw shadow
  shadow_idx = seg.history % color_seq.length
  shadow_color = color_seq[shadow_idx];
  stroke(shadow_color.red, shadow_color.green, shadow_color.blue);
  strokeWeight(seg.weight*4);

  // draw line
  stroke(seg.color.red, seg.color.green, seg.color.blue);
  strokeWeight(seg.weight);
  angleRad = toRadians(seg.degrees);
  endx = seg.x + seg.length*Math.cos(angleRad);
  endy = seg.y + seg.length*Math.sin(angleRad),
  line(seg.x, seg.y, endx, endy);

  // house keeping
  seg.history+=1;
  next_seg = structuredClone(seg);
  next_seg.x = endx;
  next_seg.y = endy;
  return next_seg;
}


function new_line_segment(color) {
  seg = structuredClone(line_segment);
  seg.color = color;
  return seg;
}