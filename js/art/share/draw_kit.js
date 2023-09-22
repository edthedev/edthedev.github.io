

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

var line_segment = {
  x: 0,
  y: 0,
  weight: 4,
  degrees: 0,
  length: 20,
  color: color(0,0,0)
};

function draw_line_segment(segment) {
  fill(segment.color);
  stroke(segment.color);
  strokeWeight(segment.weight);
  angleRad = toRadians(segment.degrees);
  endx = segment.x + segment.length*Math.cos(angleRad);
  endy = segment.y + segment.length*Math.sin(angleRad),
  line(segment.x, segment.y, endx, endy);
  next = structuredClone(segment);
  next.x = endx;
  next.y = endy;
  return next;
}

function new_line_segment() {
  return structuredClone(line_segment);
}