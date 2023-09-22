

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

var line_segment = {
  x: 0,
  y: 0,
  weight: 4,
  degrees: 0,
  length: 20,
};

function draw_line_segment(seg) {
  // fill(segment.color);
  stroke(seg.color.red, seg.color.green, seg.color.blue);
  strokeWeight(seg.weight);
  angleRad = toRadians(seg.degrees);
  endx = seg.x + seg.length*Math.cos(angleRad);
  endy = seg.y + seg.length*Math.sin(angleRad),
  line(seg.x, seg.y, endx, endy);
  next = structuredClone(seg);
  next.x = endx;
  next.y = endy;
  return next;
}

function new_line_segment(color) {
  seg = structuredClone(line_segment);
  seg.color = color;
  return seg;
}