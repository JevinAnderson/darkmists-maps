export function setupMaps(filename) {
  console.log("setupMaps filename", filename);

  $.getJSON(`/${filename}`, setupControls);
}

function setupControls(map) {
  console.log("setupControls map", map);
  window._map = map;

  $("body").append(`<div id="map-render-point"></div>`);
  const node = document.getElementById("map-render-point");
  if (node) {
    import("./components/map/index").then((lib) => {
      lib.renderMap(node);
    });
  }
}

export default setupMaps;
