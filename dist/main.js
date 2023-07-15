/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("function initializeApp() {\n  const container = document.createElement(\"div\");\n  window.appContainer = container;\n  container.setAttribute(\"class\", \"container\");\n  document.body.appendChild(container);\n\n  // Import the dependencies and call the init functions\n  __webpack_require__.e(/*! import() */ \"src_scripts_header_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/header.js */ \"./src/scripts/header.js\")).then(headerModule => {\n    headerModule.init();\n  }).catch(error => {\n    console.error(\"Error importing header module:\", error);\n  });\n  __webpack_require__.e(/*! import() */ \"src_scripts_sidebar_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/sidebar.js */ \"./src/scripts/sidebar.js\")).then(sidebarModule => {\n    sidebarModule.init(container);\n    const {\n      pumpBtn,\n      flatBtn,\n      snkrBtn\n    } = sidebarModule;\n    // Access and use the exported buttons as needed\n  }).catch(error => {\n    console.error(\"Error importing sidebar module:\", error);\n  });\n  __webpack_require__.e(/*! import() */ \"src_scripts_design_area_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/design_area.js */ \"./src/scripts/design_area.js\")).then(designModule => {\n    designModule.init(container);\n    const {\n      oopsBtn\n    } = designModule;\n  }).catch(error => {\n    console.error(\"Error importing design module:\", error);\n  });\n  __webpack_require__.e(/*! import() */ \"src_scripts_palette_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/palette.js */ \"./src/scripts/palette.js\")).then(paletteModule => {\n    paletteModule.init(container);\n    const {\n      changes\n    } = paletteModule;\n  }).catch(error => {\n    console.error(\"Error importing palette module:\", error);\n  });\n}\ndocument.addEventListener(\"DOMContentLoaded\", initializeApp);\n// import * as sidebarModule from \"./scripts/sidebar.js\";\n// import * as headerModule from \"./scripts/header.js\";\n\n// import(\"./scripts/header\").then((header) => {\n// \t// Use the imported module for the header\n// \theader.init();\n// });\n\n// import(\"./scripts/sidebar\").then((sidebar) => {\n// \t// Use the imported module for the sidebar\n// \tsidebar.init();\n// });\n\n// import(\"./scripts/design_area\").then((design) => {\n// \t// Use the imported module for the design\n// \tdesign.init();\n// });\n\n// document.addEventListener(\"DOMContentLoaded\", function () {\n// \t// npm run watch to start server\n\n// \tconst body = document.body;\n// \tconst container = document.createElement(\"div\");\n// \twindow.appContainer = container;\n// \tcontainer.setAttribute(\"class\", \"container\");\n// \tbody.appendChild(container);\n\n// \timport * as sidebarModule from \"./scripts/sidebar.js\";\n// \timport * as headerModule from \"./scripts/header.js\";\n\n// \tsidebarModule.init(container);\n// \theaderModule.init();\n///////////////////////////////////////////////////////////////////////////\n////////////////////////// HEADER SECTION /////////////////////////////////\n///////////////////////////////////////////////////////////////////////////\n\n// //create header div for the top of page with class of header\n// const header = document.createElement(\"div\");\n// header.setAttribute(\"class\", \"header box-borders\");\n\n// //add wave bkgrd image to header div\n// header.style.backgroundImage = \"url('assets/images/waves.svg')\";\n// container.appendChild(header);\n\n// //create YD logo image with class of yd-logo\n// const ydLogo = document.createElement(\"img\");\n// ydLogo.setAttribute(\"class\", \"yd-logo\");\n// ydLogo.setAttribute(\"alt\", \"younique design logo\");\n// ydLogo.src = \"assets/images/bitmap.png\";\n\n// // add YD logo to the header div\n// header.appendChild(ydLogo);\n\n// // create headerBtm div for the bottom of the header with class of header-btm\n// const headerBtm = document.createElement(\"div\");\n// headerBtm.setAttribute(\"class\", \"header-btm\");\n\n// //create contactLinksDiv(LEFT) and playBtmDiv(RIGHT) and add to the header btm div\n// const contactLinksDiv = document.createElement(\"div\");\n// const playBtnDiv = document.createElement(\"div\");\n// headerBtm.append(contactLinksDiv, playBtnDiv);\n\n// //create link for gitHub page\n// const gitlink = document.createElement(\"a\"); // create the link\n// gitlink.setAttribute(\n// \t\"href\",\n// \t\"https://github.com/tarao1185/YOU-NIQUE-DESIGNS.git\"\n// );\n\n// //create gitHub logo image with class of logo\n// const github_logo = document.createElement(\"img\");\n// github_logo.src = \"assets/images/Github_logo.png\";\n// gitlink.setAttribute(\"class\", \"logo\");\n// gitlink.setAttribute(\"alt\", \"gitHub logo\");\n\n// //add the gitHub logo image to the gitHub link\n// gitlink.append(github_logo);\n\n// //create link for LinkedIn page\n// const linkedin_link = document.createElement(\"a\");\n// linkedin_link.setAttribute(\"href\", \"https://www.linkedin.com/in/tara-oliver\");\n\n// //create LinkedIn logo image with class of logo\n// const linkedin_logo = document.createElement(\"img\");\n// linkedin_logo.src = \"assets/images/linkedin_logo.png\";\n// linkedin_link.setAttribute(\"class\", \"logo\");\n// linkedin_link.setAttribute(\"alt\", \"LinkedIn logo\");\n\n// //add the LinkedIn logo image to the LinkedIn link\n// linkedin_link.append(linkedin_logo);\n\n// // add LinkedIn and gitHub logos to the contactLinks div(left side of header btm)\n// contactLinksDiv.append(gitlink, linkedin_link);\n\n// //create how to play button with classes btn and playbtn\n// const howToPlayBtn = document.createElement(\"button\");\n// howToPlayBtn.setAttribute(\"class\", \"btn playbtn\");\n// howToPlayBtn.innerText = \"How to Play\";\n\n// // add play button to the playbtn div(right side of header btm)\n// playBtnDiv.appendChild(howToPlayBtn);\n\n// //add header  btm div to the header\n// header.append(headerBtm);\n\n///////////////////////////////////////////////////////////////////////////\n////////////////////////// SIDEBAR SECTION /////////////////////////////////\n///////////////////////////////////////////////////////////////////////////\n\n//add left sidebar to page\n// const left_sidebar = document.createElement(\"div\");\n// left_sidebar.innerText = \"Choose a style\";\n// left_sidebar.setAttribute(\"class\", \"left_side box-borders\");\n// container.appendChild(left_sidebar);\n\n// const img_container = document.createElement(\"div\");\n// img_container.setAttribute(\"class\", \"imgcontainer\");\n\n// // //define pump image, create div, add div to sidebar\n// const pumpImg = document.createElement(\"img\");\n// pumpImg.src = \"assets/images/clean_tstrap.svg\";\n// pumpImg.setAttribute(\"alt\", \"sketch of T-strap kitten heel pump\");\n\n// const pumpBtn = document.createElement(\"button\");\n// pumpBtn.setAttribute(\"id\", \"pumpBtn\");\n// pumpBtn.setAttribute(\"class\", \"btn\");\n// pumpBtn.innerText = \"Design Pump\";\n\n// const flatImg = document.createElement(\"img\");\n// flatImg.src = \"assets/images/clean_flatform.svg\";\n// flatImg.setAttribute(\"alt\", \"sketch of single band flatform sandal\");\n\n// const flatBtn = document.createElement(\"button\");\n// flatBtn.setAttribute(\"id\", \"flatBtn\");\n// flatBtn.setAttribute(\"class\", \"btn\");\n// flatBtn.innerText = \"Design Sandal\";\n\n// const sneakerImg = document.createElement(\"img\");\n// sneakerImg.src = \"assets/images/sneaker.svg\";\n// sneakerImg.setAttribute(\"alt\", \"sketch of low profile lace up sneaker\");\n\n// const snkrBtn = document.createElement(\"button\");\n// snkrBtn.setAttribute(\"id\", \"snkrBtn\");\n// snkrBtn.setAttribute(\"class\", \"btn\");\n// snkrBtn.innerText = \"Design Sneaker\";\n\n// img_container.append(pumpImg, pumpBtn, flatImg, flatBtn, sneakerImg, snkrBtn);\n// left_sidebar.append(img_container);\n\n//DESIGN AREA SECTION//\n\n//add design area to page\n\n// import { pumpBtn, flatBtn, snkrBtn } from \"./sidebar\";\n// const design_area = document.createElement(\"div\");\n// design_area.setAttribute(\"class\", \"design box-borders\");\n\n// const design_title = document.createElement(\"div\");\n// design_title.innerText = \"Design away\";\n// design_title.setAttribute = (\"id\", \"design_title\");\n\n// design_area.appendChild(design_title);\n// container.appendChild(design_area);\n\n// const oopsBtn = document.createElement(\"button\");\n// oopsBtn.innerText = \"Oops!\";\n// oopsBtn.setAttribute(\"id\", \"oopsBtn\");\n// oopsBtn.setAttribute(\"class\", \"btn oopsbtn\");\n// design_title.appendChild(oopsBtn);\n\n// oopsBtn.onclick = function () {\n// \tchanges[changes.length - 1].element.style.fill =\n// \t\tchanges[changes.length - 1].previousColor;\n// \tchanges.pop();\n// };\n\n// const largePump = document.querySelector(\"#Layer_1\");\n// const largeFlat = document.querySelector(\"#Layer_2\");\n// const largeSnkr = document.querySelector(\"#Layer_3\");\n\n// design_area.append(largePump, largeSnkr, largeFlat);\n\n// document.getElementById(\"pumpBtn\").addEventListener(\"click\", displayImage);\n// document.getElementById(\"flatBtn\").addEventListener(\"click\", displayImage);\n// document.getElementById(\"snkrBtn\").addEventListener(\"click\", displayImage);\n\n// function displayImage(ev) {\n// \tif (ev.currentTarget.id == \"pumpBtn\") {\n// \t\tdocument.querySelector(\"#Layer_2\").style.display = \"none\";\n// \t\tdocument.querySelector(\"#Layer_3\").style.display = \"none\";\n// \t\tdocument.querySelector(\"#Layer_1\").style.display = \"inline-block\";\n// \t} else if (ev.currentTarget.id == \"flatBtn\") {\n// \t\tdocument.querySelector(\"#Layer_2\").style.display = \"inline-block\";\n// \t\tdocument.querySelector(\"#Layer_1\").style.display = \"none\";\n// \t\tdocument.querySelector(\"#Layer_3\").style.display = \"none\";\n// \t} else {\n// \t\tdocument.querySelector(\"#Layer_2\").style.display = \"none\";\n// \t\tdocument.querySelector(\"#Layer_1\").style.display = \"none\";\n// \t\tdocument.querySelector(\"#Layer_3\").style.display = \"inline-block\";\n// \t}\n// }\n\n//PALETTE SECTION//\n\n// //add palette to page\n// const palette = document.createElement(\"div\");\n\n// palette.setAttribute(\"class\", \"palette box-borders\");\n// // palette.innerText = \"Pick a color\" + \"&rarr;\";\n// const span = document.createElement(\"span\");\n\n// const textNode = document.createTextNode(\"Pick a color \");\n// span.appendChild(textNode);\n\n// // const arrowNode = document.createTextNode(\" \" + \"\\u2192\"); // Unicode character code for the right arrow\n// // span.appendChild(arrowNode);\n\n// // document.body.appendChild(span);\n\n// palette.appendChild(span);\n\n// container.appendChild(palette);\n\n// //color picker\n// const colorPicker = document.createElement(\"input\");\n// colorPicker.setAttribute(\"type\", \"color\");\n// colorPicker.setAttribute(\"class\", \"colorPicker\");\n// colorPicker.setAttribute(\"value\", \"#ffffff\");\n\n// palette.append(colorPicker);\n\n// //div to store colors picked by user\n// const pickedColors = document.createElement(\"div\");\n// pickedColors.setAttribute(\"class\", \"pickedColors\");\n// palette.append(pickedColors);\n\n// let currentColor;\n// colorPicker.onchange = function () {\n// \tcurrentColor = colorPicker.value;\n// \tlet i = 0;\n// \tlet previousColor = document.createElement(\"div\");\n\n// \tpreviousColor.setAttribute(\"class\", \"prevColor\");\n// \tpreviousColor.style.backgroundColor = currentColor;\n// \tfor (let i = 0; i < 16; i++) {\n// \t\tpickedColors.appendChild(previousColor);\n// \t}\n// };\n\n// pickedColors.onclick = function (event) {\n// \tcurrentColor = event.target.style.backgroundColor;\n// };\n\n// const paths = document.querySelectorAll(\"path\");\n// let changes = [];\n// let orgColor = \"#ffffff\";\n\n// paths.forEach((path) => {\n// \tpath.onclick = function (event) {\n// \t\torgColor = event.target.style.fill;\n\n// \t\tconst action = {\n// \t\t\telement: event.target,\n// \t\t\tpreviousColor: orgColor,\n// \t\t};\n\n// \t\tconsole.log(changes);\n// \t\tevent.target.style.fill = currentColor;\n// \t\tchanges.push(action);\n// \t};\n// });\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Zb3VuaXF1ZURlc2lnbnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR3aW5kb3cuYXBwQ29udGFpbmVyID0gY29udGFpbmVyO1xuXHRjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuXHQvLyBJbXBvcnQgdGhlIGRlcGVuZGVuY2llcyBhbmQgY2FsbCB0aGUgaW5pdCBmdW5jdGlvbnNcblx0aW1wb3J0KFwiLi9zY3JpcHRzL2hlYWRlci5qc1wiKVxuXHRcdC50aGVuKChoZWFkZXJNb2R1bGUpID0+IHtcblx0XHRcdGhlYWRlck1vZHVsZS5pbml0KCk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgaW1wb3J0aW5nIGhlYWRlciBtb2R1bGU6XCIsIGVycm9yKTtcblx0XHR9KTtcblxuXHRpbXBvcnQoXCIuL3NjcmlwdHMvc2lkZWJhci5qc1wiKVxuXHRcdC50aGVuKChzaWRlYmFyTW9kdWxlKSA9PiB7XG5cdFx0XHRzaWRlYmFyTW9kdWxlLmluaXQoY29udGFpbmVyKTtcblx0XHRcdGNvbnN0IHsgcHVtcEJ0biwgZmxhdEJ0biwgc25rckJ0biB9ID0gc2lkZWJhck1vZHVsZTtcblx0XHRcdC8vIEFjY2VzcyBhbmQgdXNlIHRoZSBleHBvcnRlZCBidXR0b25zIGFzIG5lZWRlZFxuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGltcG9ydGluZyBzaWRlYmFyIG1vZHVsZTpcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXG5cdGltcG9ydChcIi4vc2NyaXB0cy9kZXNpZ25fYXJlYS5qc1wiKVxuXHRcdC50aGVuKChkZXNpZ25Nb2R1bGUpID0+IHtcblx0XHRcdGRlc2lnbk1vZHVsZS5pbml0KGNvbnRhaW5lcik7XG5cdFx0XHRjb25zdCB7IG9vcHNCdG4gfSA9IGRlc2lnbk1vZHVsZTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbXBvcnRpbmcgZGVzaWduIG1vZHVsZTpcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXG5cdGltcG9ydChcIi4vc2NyaXB0cy9wYWxldHRlLmpzXCIpXG5cdFx0LnRoZW4oKHBhbGV0dGVNb2R1bGUpID0+IHtcblx0XHRcdHBhbGV0dGVNb2R1bGUuaW5pdChjb250YWluZXIpO1xuXHRcdFx0Y29uc3QgeyBjaGFuZ2VzIH0gPSBwYWxldHRlTW9kdWxlO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGltcG9ydGluZyBwYWxldHRlIG1vZHVsZTpcIiwgZXJyb3IpO1xuXHRcdH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplQXBwKTtcbi8vIGltcG9ydCAqIGFzIHNpZGViYXJNb2R1bGUgZnJvbSBcIi4vc2NyaXB0cy9zaWRlYmFyLmpzXCI7XG4vLyBpbXBvcnQgKiBhcyBoZWFkZXJNb2R1bGUgZnJvbSBcIi4vc2NyaXB0cy9oZWFkZXIuanNcIjtcblxuLy8gaW1wb3J0KFwiLi9zY3JpcHRzL2hlYWRlclwiKS50aGVuKChoZWFkZXIpID0+IHtcbi8vIFx0Ly8gVXNlIHRoZSBpbXBvcnRlZCBtb2R1bGUgZm9yIHRoZSBoZWFkZXJcbi8vIFx0aGVhZGVyLmluaXQoKTtcbi8vIH0pO1xuXG4vLyBpbXBvcnQoXCIuL3NjcmlwdHMvc2lkZWJhclwiKS50aGVuKChzaWRlYmFyKSA9PiB7XG4vLyBcdC8vIFVzZSB0aGUgaW1wb3J0ZWQgbW9kdWxlIGZvciB0aGUgc2lkZWJhclxuLy8gXHRzaWRlYmFyLmluaXQoKTtcbi8vIH0pO1xuXG4vLyBpbXBvcnQoXCIuL3NjcmlwdHMvZGVzaWduX2FyZWFcIikudGhlbigoZGVzaWduKSA9PiB7XG4vLyBcdC8vIFVzZSB0aGUgaW1wb3J0ZWQgbW9kdWxlIGZvciB0aGUgZGVzaWduXG4vLyBcdGRlc2lnbi5pbml0KCk7XG4vLyB9KTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuLy8gXHQvLyBucG0gcnVuIHdhdGNoIHRvIHN0YXJ0IHNlcnZlclxuXG4vLyBcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuLy8gXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gXHR3aW5kb3cuYXBwQ29udGFpbmVyID0gY29udGFpbmVyO1xuLy8gXHRjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG4vLyBcdGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuLy8gXHRpbXBvcnQgKiBhcyBzaWRlYmFyTW9kdWxlIGZyb20gXCIuL3NjcmlwdHMvc2lkZWJhci5qc1wiO1xuLy8gXHRpbXBvcnQgKiBhcyBoZWFkZXJNb2R1bGUgZnJvbSBcIi4vc2NyaXB0cy9oZWFkZXIuanNcIjtcblxuLy8gXHRzaWRlYmFyTW9kdWxlLmluaXQoY29udGFpbmVyKTtcbi8vIFx0aGVhZGVyTW9kdWxlLmluaXQoKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gSEVBREVSIFNFQ1RJT04gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gLy9jcmVhdGUgaGVhZGVyIGRpdiBmb3IgdGhlIHRvcCBvZiBwYWdlIHdpdGggY2xhc3Mgb2YgaGVhZGVyXG4vLyBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gaGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGVyIGJveC1ib3JkZXJzXCIpO1xuXG4vLyAvL2FkZCB3YXZlIGJrZ3JkIGltYWdlIHRvIGhlYWRlciBkaXZcbi8vIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnYXNzZXRzL2ltYWdlcy93YXZlcy5zdmcnKVwiO1xuLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbi8vIC8vY3JlYXRlIFlEIGxvZ28gaW1hZ2Ugd2l0aCBjbGFzcyBvZiB5ZC1sb2dvXG4vLyBjb25zdCB5ZExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuLy8geWRMb2dvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwieWQtbG9nb1wiKTtcbi8vIHlkTG9nby5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJ5b3VuaXF1ZSBkZXNpZ24gbG9nb1wiKTtcbi8vIHlkTG9nby5zcmMgPSBcImFzc2V0cy9pbWFnZXMvYml0bWFwLnBuZ1wiO1xuXG4vLyAvLyBhZGQgWUQgbG9nbyB0byB0aGUgaGVhZGVyIGRpdlxuLy8gaGVhZGVyLmFwcGVuZENoaWxkKHlkTG9nbyk7XG5cbi8vIC8vIGNyZWF0ZSBoZWFkZXJCdG0gZGl2IGZvciB0aGUgYm90dG9tIG9mIHRoZSBoZWFkZXIgd2l0aCBjbGFzcyBvZiBoZWFkZXItYnRtXG4vLyBjb25zdCBoZWFkZXJCdG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gaGVhZGVyQnRtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGVyLWJ0bVwiKTtcblxuLy8gLy9jcmVhdGUgY29udGFjdExpbmtzRGl2KExFRlQpIGFuZCBwbGF5QnRtRGl2KFJJR0hUKSBhbmQgYWRkIHRvIHRoZSBoZWFkZXIgYnRtIGRpdlxuLy8gY29uc3QgY29udGFjdExpbmtzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vIGNvbnN0IHBsYXlCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gaGVhZGVyQnRtLmFwcGVuZChjb250YWN0TGlua3NEaXYsIHBsYXlCdG5EaXYpO1xuXG4vLyAvL2NyZWF0ZSBsaW5rIGZvciBnaXRIdWIgcGFnZVxuLy8gY29uc3QgZ2l0bGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpOyAvLyBjcmVhdGUgdGhlIGxpbmtcbi8vIGdpdGxpbmsuc2V0QXR0cmlidXRlKFxuLy8gXHRcImhyZWZcIixcbi8vIFx0XCJodHRwczovL2dpdGh1Yi5jb20vdGFyYW8xMTg1L1lPVS1OSVFVRS1ERVNJR05TLmdpdFwiXG4vLyApO1xuXG4vLyAvL2NyZWF0ZSBnaXRIdWIgbG9nbyBpbWFnZSB3aXRoIGNsYXNzIG9mIGxvZ29cbi8vIGNvbnN0IGdpdGh1Yl9sb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbi8vIGdpdGh1Yl9sb2dvLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9HaXRodWJfbG9nby5wbmdcIjtcbi8vIGdpdGxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvXCIpO1xuLy8gZ2l0bGluay5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJnaXRIdWIgbG9nb1wiKTtcblxuLy8gLy9hZGQgdGhlIGdpdEh1YiBsb2dvIGltYWdlIHRvIHRoZSBnaXRIdWIgbGlua1xuLy8gZ2l0bGluay5hcHBlbmQoZ2l0aHViX2xvZ28pO1xuXG4vLyAvL2NyZWF0ZSBsaW5rIGZvciBMaW5rZWRJbiBwYWdlXG4vLyBjb25zdCBsaW5rZWRpbl9saW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4vLyBsaW5rZWRpbl9saW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGFyYS1vbGl2ZXJcIik7XG5cbi8vIC8vY3JlYXRlIExpbmtlZEluIGxvZ28gaW1hZ2Ugd2l0aCBjbGFzcyBvZiBsb2dvXG4vLyBjb25zdCBsaW5rZWRpbl9sb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbi8vIGxpbmtlZGluX2xvZ28uc3JjID0gXCJhc3NldHMvaW1hZ2VzL2xpbmtlZGluX2xvZ28ucG5nXCI7XG4vLyBsaW5rZWRpbl9saW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9nb1wiKTtcbi8vIGxpbmtlZGluX2xpbmsuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiTGlua2VkSW4gbG9nb1wiKTtcblxuLy8gLy9hZGQgdGhlIExpbmtlZEluIGxvZ28gaW1hZ2UgdG8gdGhlIExpbmtlZEluIGxpbmtcbi8vIGxpbmtlZGluX2xpbmsuYXBwZW5kKGxpbmtlZGluX2xvZ28pO1xuXG4vLyAvLyBhZGQgTGlua2VkSW4gYW5kIGdpdEh1YiBsb2dvcyB0byB0aGUgY29udGFjdExpbmtzIGRpdihsZWZ0IHNpZGUgb2YgaGVhZGVyIGJ0bSlcbi8vIGNvbnRhY3RMaW5rc0Rpdi5hcHBlbmQoZ2l0bGluaywgbGlua2VkaW5fbGluayk7XG5cbi8vIC8vY3JlYXRlIGhvdyB0byBwbGF5IGJ1dHRvbiB3aXRoIGNsYXNzZXMgYnRuIGFuZCBwbGF5YnRuXG4vLyBjb25zdCBob3dUb1BsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gaG93VG9QbGF5QnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIHBsYXlidG5cIik7XG4vLyBob3dUb1BsYXlCdG4uaW5uZXJUZXh0ID0gXCJIb3cgdG8gUGxheVwiO1xuXG4vLyAvLyBhZGQgcGxheSBidXR0b24gdG8gdGhlIHBsYXlidG4gZGl2KHJpZ2h0IHNpZGUgb2YgaGVhZGVyIGJ0bSlcbi8vIHBsYXlCdG5EaXYuYXBwZW5kQ2hpbGQoaG93VG9QbGF5QnRuKTtcblxuLy8gLy9hZGQgaGVhZGVyICBidG0gZGl2IHRvIHRoZSBoZWFkZXJcbi8vIGhlYWRlci5hcHBlbmQoaGVhZGVyQnRtKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBTSURFQkFSIFNFQ1RJT04gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy9hZGQgbGVmdCBzaWRlYmFyIHRvIHBhZ2Vcbi8vIGNvbnN0IGxlZnRfc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyBsZWZ0X3NpZGViYXIuaW5uZXJUZXh0ID0gXCJDaG9vc2UgYSBzdHlsZVwiO1xuLy8gbGVmdF9zaWRlYmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGVmdF9zaWRlIGJveC1ib3JkZXJzXCIpO1xuLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRfc2lkZWJhcik7XG5cbi8vIGNvbnN0IGltZ19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gaW1nX2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltZ2NvbnRhaW5lclwiKTtcblxuLy8gLy8gLy9kZWZpbmUgcHVtcCBpbWFnZSwgY3JlYXRlIGRpdiwgYWRkIGRpdiB0byBzaWRlYmFyXG4vLyBjb25zdCBwdW1wSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbi8vIHB1bXBJbWcuc3JjID0gXCJhc3NldHMvaW1hZ2VzL2NsZWFuX3RzdHJhcC5zdmdcIjtcbi8vIHB1bXBJbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwic2tldGNoIG9mIFQtc3RyYXAga2l0dGVuIGhlZWwgcHVtcFwiKTtcblxuLy8gY29uc3QgcHVtcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyBwdW1wQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHVtcEJ0blwiKTtcbi8vIHB1bXBCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG5cIik7XG4vLyBwdW1wQnRuLmlubmVyVGV4dCA9IFwiRGVzaWduIFB1bXBcIjtcblxuLy8gY29uc3QgZmxhdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4vLyBmbGF0SW1nLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9jbGVhbl9mbGF0Zm9ybS5zdmdcIjtcbi8vIGZsYXRJbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwic2tldGNoIG9mIHNpbmdsZSBiYW5kIGZsYXRmb3JtIHNhbmRhbFwiKTtcblxuLy8gY29uc3QgZmxhdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyBmbGF0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmxhdEJ0blwiKTtcbi8vIGZsYXRCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG5cIik7XG4vLyBmbGF0QnRuLmlubmVyVGV4dCA9IFwiRGVzaWduIFNhbmRhbFwiO1xuXG4vLyBjb25zdCBzbmVha2VySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbi8vIHNuZWFrZXJJbWcuc3JjID0gXCJhc3NldHMvaW1hZ2VzL3NuZWFrZXIuc3ZnXCI7XG4vLyBzbmVha2VySW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInNrZXRjaCBvZiBsb3cgcHJvZmlsZSBsYWNlIHVwIHNuZWFrZXJcIik7XG5cbi8vIGNvbnN0IHNua3JCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gc25rckJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNua3JCdG5cIik7XG4vLyBzbmtyQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuXCIpO1xuLy8gc25rckJ0bi5pbm5lclRleHQgPSBcIkRlc2lnbiBTbmVha2VyXCI7XG5cbi8vIGltZ19jb250YWluZXIuYXBwZW5kKHB1bXBJbWcsIHB1bXBCdG4sIGZsYXRJbWcsIGZsYXRCdG4sIHNuZWFrZXJJbWcsIHNua3JCdG4pO1xuLy8gbGVmdF9zaWRlYmFyLmFwcGVuZChpbWdfY29udGFpbmVyKTtcblxuLy9ERVNJR04gQVJFQSBTRUNUSU9OLy9cblxuLy9hZGQgZGVzaWduIGFyZWEgdG8gcGFnZVxuXG4vLyBpbXBvcnQgeyBwdW1wQnRuLCBmbGF0QnRuLCBzbmtyQnRuIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xuLy8gY29uc3QgZGVzaWduX2FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gZGVzaWduX2FyZWEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNpZ24gYm94LWJvcmRlcnNcIik7XG5cbi8vIGNvbnN0IGRlc2lnbl90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyBkZXNpZ25fdGl0bGUuaW5uZXJUZXh0ID0gXCJEZXNpZ24gYXdheVwiO1xuLy8gZGVzaWduX3RpdGxlLnNldEF0dHJpYnV0ZSA9IChcImlkXCIsIFwiZGVzaWduX3RpdGxlXCIpO1xuXG4vLyBkZXNpZ25fYXJlYS5hcHBlbmRDaGlsZChkZXNpZ25fdGl0bGUpO1xuLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2lnbl9hcmVhKTtcblxuLy8gY29uc3Qgb29wc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyBvb3BzQnRuLmlubmVyVGV4dCA9IFwiT29wcyFcIjtcbi8vIG9vcHNCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvb3BzQnRuXCIpO1xuLy8gb29wc0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBvb3BzYnRuXCIpO1xuLy8gZGVzaWduX3RpdGxlLmFwcGVuZENoaWxkKG9vcHNCdG4pO1xuXG4vLyBvb3BzQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4vLyBcdGNoYW5nZXNbY2hhbmdlcy5sZW5ndGggLSAxXS5lbGVtZW50LnN0eWxlLmZpbGwgPVxuLy8gXHRcdGNoYW5nZXNbY2hhbmdlcy5sZW5ndGggLSAxXS5wcmV2aW91c0NvbG9yO1xuLy8gXHRjaGFuZ2VzLnBvcCgpO1xuLy8gfTtcblxuLy8gY29uc3QgbGFyZ2VQdW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8xXCIpO1xuLy8gY29uc3QgbGFyZ2VGbGF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8yXCIpO1xuLy8gY29uc3QgbGFyZ2VTbmtyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8zXCIpO1xuXG4vLyBkZXNpZ25fYXJlYS5hcHBlbmQobGFyZ2VQdW1wLCBsYXJnZVNua3IsIGxhcmdlRmxhdCk7XG5cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHVtcEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUltYWdlKTtcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxhdEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUltYWdlKTtcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25rckJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUltYWdlKTtcblxuLy8gZnVuY3Rpb24gZGlzcGxheUltYWdlKGV2KSB7XG4vLyBcdGlmIChldi5jdXJyZW50VGFyZ2V0LmlkID09IFwicHVtcEJ0blwiKSB7XG4vLyBcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8yXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vIFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0xheWVyXzNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTGF5ZXJfMVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbi8vIFx0fSBlbHNlIGlmIChldi5jdXJyZW50VGFyZ2V0LmlkID09IFwiZmxhdEJ0blwiKSB7XG4vLyBcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8yXCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuLy8gXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTGF5ZXJfMVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyBcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8zXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0xheWVyXzJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTGF5ZXJfMVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyBcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8zXCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuLy8gXHR9XG4vLyB9XG5cbi8vUEFMRVRURSBTRUNUSU9OLy9cblxuLy8gLy9hZGQgcGFsZXR0ZSB0byBwYWdlXG4vLyBjb25zdCBwYWxldHRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gcGFsZXR0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhbGV0dGUgYm94LWJvcmRlcnNcIik7XG4vLyAvLyBwYWxldHRlLmlubmVyVGV4dCA9IFwiUGljayBhIGNvbG9yXCIgKyBcIiZyYXJyO1wiO1xuLy8gY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4vLyBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUGljayBhIGNvbG9yIFwiKTtcbi8vIHNwYW4uYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuXG4vLyAvLyBjb25zdCBhcnJvd05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiBcIiArIFwiXFx1MjE5MlwiKTsgLy8gVW5pY29kZSBjaGFyYWN0ZXIgY29kZSBmb3IgdGhlIHJpZ2h0IGFycm93XG4vLyAvLyBzcGFuLmFwcGVuZENoaWxkKGFycm93Tm9kZSk7XG5cbi8vIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbi8vIHBhbGV0dGUuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbi8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWxldHRlKTtcblxuLy8gLy9jb2xvciBwaWNrZXJcbi8vIGNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gY29sb3JQaWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNvbG9yXCIpO1xuLy8gY29sb3JQaWNrZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2xvclBpY2tlclwiKTtcbi8vIGNvbG9yUGlja2VyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiI2ZmZmZmZlwiKTtcblxuLy8gcGFsZXR0ZS5hcHBlbmQoY29sb3JQaWNrZXIpO1xuXG4vLyAvL2RpdiB0byBzdG9yZSBjb2xvcnMgcGlja2VkIGJ5IHVzZXJcbi8vIGNvbnN0IHBpY2tlZENvbG9ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyBwaWNrZWRDb2xvcnMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwaWNrZWRDb2xvcnNcIik7XG4vLyBwYWxldHRlLmFwcGVuZChwaWNrZWRDb2xvcnMpO1xuXG4vLyBsZXQgY3VycmVudENvbG9yO1xuLy8gY29sb3JQaWNrZXIub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4vLyBcdGN1cnJlbnRDb2xvciA9IGNvbG9yUGlja2VyLnZhbHVlO1xuLy8gXHRsZXQgaSA9IDA7XG4vLyBcdGxldCBwcmV2aW91c0NvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gXHRwcmV2aW91c0NvbG9yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJldkNvbG9yXCIpO1xuLy8gXHRwcmV2aW91c0NvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGN1cnJlbnRDb2xvcjtcbi8vIFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4vLyBcdFx0cGlja2VkQ29sb3JzLmFwcGVuZENoaWxkKHByZXZpb3VzQ29sb3IpO1xuLy8gXHR9XG4vLyB9O1xuXG4vLyBwaWNrZWRDb2xvcnMub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuLy8gXHRjdXJyZW50Q29sb3IgPSBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuLy8gfTtcblxuLy8gY29uc3QgcGF0aHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicGF0aFwiKTtcbi8vIGxldCBjaGFuZ2VzID0gW107XG4vLyBsZXQgb3JnQ29sb3IgPSBcIiNmZmZmZmZcIjtcblxuLy8gcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuLy8gXHRwYXRoLm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vIFx0XHRvcmdDb2xvciA9IGV2ZW50LnRhcmdldC5zdHlsZS5maWxsO1xuXG4vLyBcdFx0Y29uc3QgYWN0aW9uID0ge1xuLy8gXHRcdFx0ZWxlbWVudDogZXZlbnQudGFyZ2V0LFxuLy8gXHRcdFx0cHJldmlvdXNDb2xvcjogb3JnQ29sb3IsXG4vLyBcdFx0fTtcblxuLy8gXHRcdGNvbnNvbGUubG9nKGNoYW5nZXMpO1xuLy8gXHRcdGV2ZW50LnRhcmdldC5zdHlsZS5maWxsID0gY3VycmVudENvbG9yO1xuLy8gXHRcdGNoYW5nZXMucHVzaChhY3Rpb24pO1xuLy8gXHR9O1xuLy8gfSk7XG4vLyB9KTtcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2luZG93IiwiYXBwQ29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwidGhlbiIsImhlYWRlck1vZHVsZSIsImluaXQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInNpZGViYXJNb2R1bGUiLCJwdW1wQnRuIiwiZmxhdEJ0biIsInNua3JCdG4iLCJkZXNpZ25Nb2R1bGUiLCJvb3BzQnRuIiwicGFsZXR0ZU1vZHVsZSIsImNoYW5nZXMiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Zb3VuaXF1ZURlc2lnbnMvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "YouniqueDesigns:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkYouniqueDesigns"] = self["webpackChunkYouniqueDesigns"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;