const lines = {};

function getKey(x, y) {
  const xN = parseInt(x, 10) || 0;
  const yN = parseInt(y, 10) || 0;
  const first = Math.min(xN, yN);
  const second = Math.max(xN, yN);

  return `${first}-${second}`;
}

export function getLine(x, y) {
  return lines[getKey(x, y)];
}

export function addLine(x, y) {
  const key = getKey(x, y);

  if (lines[key]) return;

  const $x = $(`#${x}`);
  const $y = $(`#${y}`);

  if (!$x.length || !$y.length) return;

  $("body").append(
    `<svg class="map-svg" id="svg-${key}"><line class="map-line" id="line-${key}" stroke-width="2px" stroke="orange" x1="0" y1="0" x2="100" y2="100"/></svg>`
  );

  const svg = document.getElementById(`svg-${key}`);
  const $line = $(`#line-${key}`);

  lines[key] = { $x, $y, svg, $line };

  updateLine(lines[key]);
}

export function removeLine(v1, v2) {
  const key = getKey(v1, v2);
  const line = lines[key];

  if (!line) return;

  document.body.removeChild(line.svg);
  delete lines[key];
}

function updateLine({ $x, $y, svg, $line }) {
  var x1 = $x.offset().left + $x.width() / 2;
  var y1 = $x.offset().top + $x.height() / 2;
  var x2 = $y.offset().left + $y.width() / 2;
  var y2 = $y.offset().top + $y.height() / 2;

  svg.setAttribute("height", $("body").height());
  svg.setAttribute(
    "width",
    $(".map-container").width() + $(".map-container").offset().left + 500
  );
  $line.attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
}

function updateLines() {
  Object.keys(lines).forEach((key) => {
    updateLine(lines[key]);
  });
}

$(window).resize(updateLines);
