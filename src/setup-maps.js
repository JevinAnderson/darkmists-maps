export function setupMaps(filename) {
  console.log("setupMaps filename", filename);

  $.getJSON(`/${filename}`, setupControls);
}

function setupControls(map) {
  console.log("setupControls map", map);

  const node = document.getElementById("map-controls");
  if (node) {
    import("./components/map/index").then((lib) => {
      lib.renderMap(node, map);
    });
  }
}

export default setupMaps;
