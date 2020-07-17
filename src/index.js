const mapFile = window._map_filename;

if (mapFile) {
  import("./setup-maps").then((lib) => {
    lib.setupMaps(mapFile);
  });
}
