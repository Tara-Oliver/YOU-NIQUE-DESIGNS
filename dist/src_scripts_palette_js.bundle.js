"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkYouniqueDesigns"] = self["webpackChunkYouniqueDesigns"] || []).push([["src_scripts_palette_js"],{

/***/ "./src/scripts/palette.js":
/*!********************************!*\
  !*** ./src/scripts/palette.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changes: function() { return /* binding */ changes; },\n/* harmony export */   init: function() { return /* binding */ init; }\n/* harmony export */ });\nconst container = window.appContainer;\n//add palette to page\nconst palette = document.createElement(\"div\");\n\npalette.setAttribute(\"class\", \"palette box-borders\");\n// palette.innerText = \"Pick a color\" + \"&rarr;\";\nconst span = document.createElement(\"span\");\n\nconst textNode = document.createTextNode(\"Pick a color \");\nspan.appendChild(textNode);\n\n// const arrowNode = document.createTextNode(\" \" + \"\\u2192\"); // Unicode character code for the right arrow\n// span.appendChild(arrowNode);\n\n// document.body.appendChild(span);\n\npalette.appendChild(span);\n\ncontainer.appendChild(palette);\n\n//color picker\nconst colorPicker = document.createElement(\"input\");\ncolorPicker.setAttribute(\"type\", \"color\");\ncolorPicker.setAttribute(\"class\", \"colorPicker\");\ncolorPicker.setAttribute(\"value\", \"#ffffff\");\n\npalette.append(colorPicker);\n\n//div to store colors picked by user\nconst pickedColors = document.createElement(\"div\");\npickedColors.setAttribute(\"class\", \"pickedColors\");\npalette.append(pickedColors);\n\nlet currentColor;\ncolorPicker.onchange = function () {\n\tcurrentColor = colorPicker.value;\n\tlet i = 0;\n\tlet previousColor = document.createElement(\"div\");\n\n\tpreviousColor.setAttribute(\"class\", \"prevColor\");\n\tpreviousColor.style.backgroundColor = currentColor;\n\tfor (let i = 0; i < 16; i++) {\n\t\tpickedColors.appendChild(previousColor);\n\t}\n};\n\npickedColors.onclick = function (event) {\n\tcurrentColor = event.target.style.backgroundColor;\n};\n\nconst paths = document.querySelectorAll(\"path\");\nlet changes = [];\nlet orgColor = \"#ffffff\";\n\npaths.forEach((path) => {\n\tpath.onclick = function (event) {\n\t\torgColor = event.target.style.fill;\n\n\t\tconst action = {\n\t\t\telement: event.target,\n\t\t\tpreviousColor: orgColor,\n\t\t};\n\n\t\t// console.log(changes);\n\t\tevent.target.style.fill = currentColor;\n\t\tchanges.push(action);\n\t};\n});\n\nfunction init(container, changes) {\n\t// Use the container element for sidebar initialization\n\t// ...\n}\n\n\n//# sourceURL=webpack://YouniqueDesigns/./src/scripts/palette.js?");

/***/ })

}]);