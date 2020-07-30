(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/setup-maps.js":
/*!***************************!*\
  !*** ./src/setup-maps.js ***!
  \***************************/
/*! exports provided: setupMaps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupMaps\", function() { return setupMaps; });\nfunction setupMaps(filename) {\n  console.log(\"setupMaps filename\", filename);\n  $.getJSON(\"/\".concat(filename), setupControls);\n}\n\nfunction setupControls(map) {\n  console.log(\"setupControls map\", map);\n  var node = document.getElementById(\"map-controls\");\n\n  if (node) {\n    Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./components/map/index */ \"./src/components/map/index.js\")).then(function (lib) {\n      lib.renderMap(node, map);\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setupMaps);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2V0dXAtbWFwcy5qcz8zYjU3Il0sIm5hbWVzIjpbInNldHVwTWFwcyIsImZpbGVuYW1lIiwiY29uc29sZSIsImxvZyIsIiQiLCJnZXRKU09OIiwic2V0dXBDb250cm9scyIsIm1hcCIsIm5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGhlbiIsImxpYiIsInJlbmRlck1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLFNBQVNBLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCO0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0YsUUFBbEM7QUFFQUcsR0FBQyxDQUFDQyxPQUFGLFlBQWNKLFFBQWQsR0FBMEJLLGFBQTFCO0FBQ0Q7O0FBRUQsU0FBU0EsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEI7QUFDMUJMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDSSxHQUFqQztBQUVBLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQWI7O0FBQ0EsTUFBSUYsSUFBSixFQUFVO0FBQ1IseUxBQWlDRyxJQUFqQyxDQUFzQyxVQUFDQyxHQUFELEVBQVM7QUFDN0NBLFNBQUcsQ0FBQ0MsU0FBSixDQUFjTCxJQUFkLEVBQW9CRCxHQUFwQjtBQUNELEtBRkQ7QUFHRDtBQUNGOztBQUVjUCx3RUFBZiIsImZpbGUiOiIuL3NyYy9zZXR1cC1tYXBzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNldHVwTWFwcyhmaWxlbmFtZSkge1xuICBjb25zb2xlLmxvZyhcInNldHVwTWFwcyBmaWxlbmFtZVwiLCBmaWxlbmFtZSk7XG5cbiAgJC5nZXRKU09OKGAvJHtmaWxlbmFtZX1gLCBzZXR1cENvbnRyb2xzKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBDb250cm9scyhtYXApIHtcbiAgY29uc29sZS5sb2coXCJzZXR1cENvbnRyb2xzIG1hcFwiLCBtYXApO1xuXG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcC1jb250cm9sc1wiKTtcbiAgaWYgKG5vZGUpIHtcbiAgICBpbXBvcnQoXCIuL2NvbXBvbmVudHMvbWFwL2luZGV4XCIpLnRoZW4oKGxpYikgPT4ge1xuICAgICAgbGliLnJlbmRlck1hcChub2RlLCBtYXApO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwTWFwcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/setup-maps.js\n");

/***/ })

}]);