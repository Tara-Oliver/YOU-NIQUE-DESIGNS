/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
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

eval("function initializeApp() {\n\tconst container = document.createElement(\"div\");\n\twindow.appContainer = container;\n\tcontainer.setAttribute(\"class\", \"container\");\n\tdocument.body.appendChild(container);\n\n\t// Import the dependencies and call the init functions\n\t__webpack_require__.e(/*! import() */ \"src_scripts_header_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/header.js */ \"./src/scripts/header.js\"))\n\t\t.then((headerModule) => {\n\t\t\theaderModule.init();\n\t\t})\n\t\t.catch((error) => {\n\t\t\tconsole.error(\"Error importing header module:\", error);\n\t\t});\n\n\t__webpack_require__.e(/*! import() */ \"src_scripts_sidebar_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/sidebar.js */ \"./src/scripts/sidebar.js\"))\n\t\t.then((sidebarModule) => {\n\t\t\tsidebarModule.init(container);\n\t\t\tconst { pumpBtn, flatBtn, snkrBtn } = sidebarModule;\n\t\t\t// Access and use the exported buttons as needed\n\t\t})\n\t\t.catch((error) => {\n\t\t\tconsole.error(\"Error importing sidebar module:\", error);\n\t\t});\n\n\t__webpack_require__.e(/*! import() */ \"src_scripts_design_area_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/design_area.js */ \"./src/scripts/design_area.js\"))\n\t\t.then((designModule) => {\n\t\t\tdesignModule.init(container);\n\t\t\tconst { oopsBtn } = designModule;\n\t\t})\n\t\t.catch((error) => {\n\t\t\tconsole.error(\"Error importing design module:\", error);\n\t\t});\n\n\t__webpack_require__.e(/*! import() */ \"src_scripts_palette_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/palette.js */ \"./src/scripts/palette.js\"))\n\t\t.then((paletteModule) => {\n\t\t\tpaletteModule.init(container);\n\t\t\tconst { changes } = paletteModule;\n\t\t})\n\t\t.catch((error) => {\n\t\t\tconsole.error(\"Error importing palette module:\", error);\n\t\t});\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", initializeApp);\n// import * as sidebarModule from \"./scripts/sidebar.js\";\n// import * as headerModule from \"./scripts/header.js\";\n\n// import(\"./scripts/header\").then((header) => {\n// \t// Use the imported module for the header\n// \theader.init();\n// });\n\n// import(\"./scripts/sidebar\").then((sidebar) => {\n// \t// Use the imported module for the sidebar\n// \tsidebar.init();\n// });\n\n// import(\"./scripts/design_area\").then((design) => {\n// \t// Use the imported module for the design\n// \tdesign.init();\n// });\n\n// document.addEventListener(\"DOMContentLoaded\", function () {\n// \t// npm run watch to start server\n\n// \tconst body = document.body;\n// \tconst container = document.createElement(\"div\");\n// \twindow.appContainer = container;\n// \tcontainer.setAttribute(\"class\", \"container\");\n// \tbody.appendChild(container);\n\n// \timport * as sidebarModule from \"./scripts/sidebar.js\";\n// \timport * as headerModule from \"./scripts/header.js\";\n\n// \tsidebarModule.init(container);\n// \theaderModule.init();\n///////////////////////////////////////////////////////////////////////////\n////////////////////////// HEADER SECTION /////////////////////////////////\n///////////////////////////////////////////////////////////////////////////\n\n// //create header div for the top of page with class of header\n// const header = document.createElement(\"div\");\n// header.setAttribute(\"class\", \"header box-borders\");\n\n// //add wave bkgrd image to header div\n// header.style.backgroundImage = \"url('assets/images/waves.svg')\";\n// container.appendChild(header);\n\n// //create YD logo image with class of yd-logo\n// const ydLogo = document.createElement(\"img\");\n// ydLogo.setAttribute(\"class\", \"yd-logo\");\n// ydLogo.setAttribute(\"alt\", \"younique design logo\");\n// ydLogo.src = \"assets/images/bitmap.png\";\n\n// // add YD logo to the header div\n// header.appendChild(ydLogo);\n\n// // create headerBtm div for the bottom of the header with class of header-btm\n// const headerBtm = document.createElement(\"div\");\n// headerBtm.setAttribute(\"class\", \"header-btm\");\n\n// //create contactLinksDiv(LEFT) and playBtmDiv(RIGHT) and add to the header btm div\n// const contactLinksDiv = document.createElement(\"div\");\n// const playBtnDiv = document.createElement(\"div\");\n// headerBtm.append(contactLinksDiv, playBtnDiv);\n\n// //create link for gitHub page\n// const gitlink = document.createElement(\"a\"); // create the link\n// gitlink.setAttribute(\n// \t\"href\",\n// \t\"https://github.com/tarao1185/YOU-NIQUE-DESIGNS.git\"\n// );\n\n// //create gitHub logo image with class of logo\n// const github_logo = document.createElement(\"img\");\n// github_logo.src = \"assets/images/Github_logo.png\";\n// gitlink.setAttribute(\"class\", \"logo\");\n// gitlink.setAttribute(\"alt\", \"gitHub logo\");\n\n// //add the gitHub logo image to the gitHub link\n// gitlink.append(github_logo);\n\n// //create link for LinkedIn page\n// const linkedin_link = document.createElement(\"a\");\n// linkedin_link.setAttribute(\"href\", \"https://www.linkedin.com/in/tara-oliver\");\n\n// //create LinkedIn logo image with class of logo\n// const linkedin_logo = document.createElement(\"img\");\n// linkedin_logo.src = \"assets/images/linkedin_logo.png\";\n// linkedin_link.setAttribute(\"class\", \"logo\");\n// linkedin_link.setAttribute(\"alt\", \"LinkedIn logo\");\n\n// //add the LinkedIn logo image to the LinkedIn link\n// linkedin_link.append(linkedin_logo);\n\n// // add LinkedIn and gitHub logos to the contactLinks div(left side of header btm)\n// contactLinksDiv.append(gitlink, linkedin_link);\n\n// //create how to play button with classes btn and playbtn\n// const howToPlayBtn = document.createElement(\"button\");\n// howToPlayBtn.setAttribute(\"class\", \"btn playbtn\");\n// howToPlayBtn.innerText = \"How to Play\";\n\n// // add play button to the playbtn div(right side of header btm)\n// playBtnDiv.appendChild(howToPlayBtn);\n\n// //add header  btm div to the header\n// header.append(headerBtm);\n\n///////////////////////////////////////////////////////////////////////////\n////////////////////////// SIDEBAR SECTION /////////////////////////////////\n///////////////////////////////////////////////////////////////////////////\n\n//add left sidebar to page\n// const left_sidebar = document.createElement(\"div\");\n// left_sidebar.innerText = \"Choose a style\";\n// left_sidebar.setAttribute(\"class\", \"left_side box-borders\");\n// container.appendChild(left_sidebar);\n\n// const img_container = document.createElement(\"div\");\n// img_container.setAttribute(\"class\", \"imgcontainer\");\n\n// // //define pump image, create div, add div to sidebar\n// const pumpImg = document.createElement(\"img\");\n// pumpImg.src = \"assets/images/clean_tstrap.svg\";\n// pumpImg.setAttribute(\"alt\", \"sketch of T-strap kitten heel pump\");\n\n// const pumpBtn = document.createElement(\"button\");\n// pumpBtn.setAttribute(\"id\", \"pumpBtn\");\n// pumpBtn.setAttribute(\"class\", \"btn\");\n// pumpBtn.innerText = \"Design Pump\";\n\n// const flatImg = document.createElement(\"img\");\n// flatImg.src = \"assets/images/clean_flatform.svg\";\n// flatImg.setAttribute(\"alt\", \"sketch of single band flatform sandal\");\n\n// const flatBtn = document.createElement(\"button\");\n// flatBtn.setAttribute(\"id\", \"flatBtn\");\n// flatBtn.setAttribute(\"class\", \"btn\");\n// flatBtn.innerText = \"Design Sandal\";\n\n// const sneakerImg = document.createElement(\"img\");\n// sneakerImg.src = \"assets/images/sneaker.svg\";\n// sneakerImg.setAttribute(\"alt\", \"sketch of low profile lace up sneaker\");\n\n// const snkrBtn = document.createElement(\"button\");\n// snkrBtn.setAttribute(\"id\", \"snkrBtn\");\n// snkrBtn.setAttribute(\"class\", \"btn\");\n// snkrBtn.innerText = \"Design Sneaker\";\n\n// img_container.append(pumpImg, pumpBtn, flatImg, flatBtn, sneakerImg, snkrBtn);\n// left_sidebar.append(img_container);\n\n//DESIGN AREA SECTION//\n\n//add design area to page\n\n// import { pumpBtn, flatBtn, snkrBtn } from \"./sidebar\";\n// const design_area = document.createElement(\"div\");\n// design_area.setAttribute(\"class\", \"design box-borders\");\n\n// const design_title = document.createElement(\"div\");\n// design_title.innerText = \"Design away\";\n// design_title.setAttribute = (\"id\", \"design_title\");\n\n// design_area.appendChild(design_title);\n// container.appendChild(design_area);\n\n// const oopsBtn = document.createElement(\"button\");\n// oopsBtn.innerText = \"Oops!\";\n// oopsBtn.setAttribute(\"id\", \"oopsBtn\");\n// oopsBtn.setAttribute(\"class\", \"btn oopsbtn\");\n// design_title.appendChild(oopsBtn);\n\n// oopsBtn.onclick = function () {\n// \tchanges[changes.length - 1].element.style.fill =\n// \t\tchanges[changes.length - 1].previousColor;\n// \tchanges.pop();\n// };\n\n// const largePump = document.querySelector(\"#Layer_1\");\n// const largeFlat = document.querySelector(\"#Layer_2\");\n// const largeSnkr = document.querySelector(\"#Layer_3\");\n\n// design_area.append(largePump, largeSnkr, largeFlat);\n\n// document.getElementById(\"pumpBtn\").addEventListener(\"click\", displayImage);\n// document.getElementById(\"flatBtn\").addEventListener(\"click\", displayImage);\n// document.getElementById(\"snkrBtn\").addEventListener(\"click\", displayImage);\n\n// function displayImage(ev) {\n// \tif (ev.currentTarget.id == \"pumpBtn\") {\n// \t\tdocument.querySelector(\"#Layer_2\").style.display = \"none\";\n// \t\tdocument.querySelector(\"#Layer_3\").style.display = \"none\";\n// \t\tdocument.querySelector(\"#Layer_1\").style.display = \"inline-block\";\n// \t} else if (ev.currentTarget.id == \"flatBtn\") {\n// \t\tdocument.querySelector(\"#Layer_2\").style.display = \"inline-block\";\n// \t\tdocument.querySelector(\"#Layer_1\").style.display = \"none\";\n// \t\tdocument.querySelector(\"#Layer_3\").style.display = \"none\";\n// \t} else {\n// \t\tdocument.querySelector(\"#Layer_2\").style.display = \"none\";\n// \t\tdocument.querySelector(\"#Layer_1\").style.display = \"none\";\n// \t\tdocument.querySelector(\"#Layer_3\").style.display = \"inline-block\";\n// \t}\n// }\n\n//PALETTE SECTION//\n\n// //add palette to page\n// const palette = document.createElement(\"div\");\n\n// palette.setAttribute(\"class\", \"palette box-borders\");\n// // palette.innerText = \"Pick a color\" + \"&rarr;\";\n// const span = document.createElement(\"span\");\n\n// const textNode = document.createTextNode(\"Pick a color \");\n// span.appendChild(textNode);\n\n// // const arrowNode = document.createTextNode(\" \" + \"\\u2192\"); // Unicode character code for the right arrow\n// // span.appendChild(arrowNode);\n\n// // document.body.appendChild(span);\n\n// palette.appendChild(span);\n\n// container.appendChild(palette);\n\n// //color picker\n// const colorPicker = document.createElement(\"input\");\n// colorPicker.setAttribute(\"type\", \"color\");\n// colorPicker.setAttribute(\"class\", \"colorPicker\");\n// colorPicker.setAttribute(\"value\", \"#ffffff\");\n\n// palette.append(colorPicker);\n\n// //div to store colors picked by user\n// const pickedColors = document.createElement(\"div\");\n// pickedColors.setAttribute(\"class\", \"pickedColors\");\n// palette.append(pickedColors);\n\n// let currentColor;\n// colorPicker.onchange = function () {\n// \tcurrentColor = colorPicker.value;\n// \tlet i = 0;\n// \tlet previousColor = document.createElement(\"div\");\n\n// \tpreviousColor.setAttribute(\"class\", \"prevColor\");\n// \tpreviousColor.style.backgroundColor = currentColor;\n// \tfor (let i = 0; i < 16; i++) {\n// \t\tpickedColors.appendChild(previousColor);\n// \t}\n// };\n\n// pickedColors.onclick = function (event) {\n// \tcurrentColor = event.target.style.backgroundColor;\n// };\n\n// const paths = document.querySelectorAll(\"path\");\n// let changes = [];\n// let orgColor = \"#ffffff\";\n\n// paths.forEach((path) => {\n// \tpath.onclick = function (event) {\n// \t\torgColor = event.target.style.fill;\n\n// \t\tconst action = {\n// \t\t\telement: event.target,\n// \t\t\tpreviousColor: orgColor,\n// \t\t};\n\n// \t\tconsole.log(changes);\n// \t\tevent.target.style.fill = currentColor;\n// \t\tchanges.push(action);\n// \t};\n// });\n// });\n\n\n//# sourceURL=webpack://YouniqueDesigns/./src/index.js?");

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
/******/ 			return "" + chunkId + ".bundle.js";
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;