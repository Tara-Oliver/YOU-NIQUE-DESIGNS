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

eval("function initializeApp() {\n  const container = document.createElement(\"div\");\n  window.appContainer = container;\n  container.setAttribute(\"class\", \"container\");\n  document.body.appendChild(container);\n\n  // Import the dependencies and call the init functions\n  __webpack_require__.e(/*! import() */ \"src_scripts_header_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/header.js */ \"./src/scripts/header.js\")).then(headerModule => {\n    headerModule.init();\n  }).catch(error => {\n    console.error(\"Error importing header module:\", error);\n  });\n  __webpack_require__.e(/*! import() */ \"src_scripts_sidebar_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/sidebar.js */ \"./src/scripts/sidebar.js\")).then(sidebarModule => {\n    sidebarModule.init(container);\n    const {\n      pumpBtn,\n      flatBtn,\n      snkrBtn\n    } = sidebarModule;\n    // Access and use the exported buttons as needed\n  }).catch(error => {\n    console.error(\"Error importing sidebar module:\", error);\n  });\n  __webpack_require__.e(/*! import() */ \"src_scripts_design_area_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/design_area.js */ \"./src/scripts/design_area.js\")).then(designModule => {\n    designModule.init(container);\n    const {\n      oopsBtn\n    } = designModule;\n  }).catch(error => {\n    console.error(\"Error importing design module:\", error);\n  });\n  __webpack_require__.e(/*! import() */ \"src_scripts_palette_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/palette.js */ \"./src/scripts/palette.js\")).then(paletteModule => {\n    paletteModule.init(container);\n    const {\n      changes\n    } = paletteModule;\n  }).catch(error => {\n    console.error(\"Error importing palette module:\", error);\n  });\n}\ndocument.addEventListener(\"DOMContentLoaded\", initializeApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsYUFBYUEsQ0FBQSxFQUFHO0VBQ3hCLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DQyxNQUFNLENBQUNDLFlBQVksR0FBR0osU0FBUztFQUMvQkEsU0FBUyxDQUFDSyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztFQUM1Q0osUUFBUSxDQUFDSyxJQUFJLENBQUNDLFdBQVcsQ0FBQ1AsU0FBUyxDQUFDOztFQUVwQztFQUNBLHdLQUE2QixDQUMzQlEsSUFBSSxDQUFFQyxZQUFZLElBQUs7SUFDdkJBLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLENBQUM7RUFDcEIsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBRUMsS0FBSyxJQUFLO0lBQ2pCQyxPQUFPLENBQUNELEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRUEsS0FBSyxDQUFDO0VBQ3ZELENBQUMsQ0FBQztFQUVILDJLQUE4QixDQUM1QkosSUFBSSxDQUFFTSxhQUFhLElBQUs7SUFDeEJBLGFBQWEsQ0FBQ0osSUFBSSxDQUFDVixTQUFTLENBQUM7SUFDN0IsTUFBTTtNQUFFZSxPQUFPO01BQUVDLE9BQU87TUFBRUM7SUFBUSxDQUFDLEdBQUdILGFBQWE7SUFDbkQ7RUFDRCxDQUFDLENBQUMsQ0FDREgsS0FBSyxDQUFFQyxLQUFLLElBQUs7SUFDakJDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGlDQUFpQyxFQUFFQSxLQUFLLENBQUM7RUFDeEQsQ0FBQyxDQUFDO0VBRUgsdUxBQWtDLENBQ2hDSixJQUFJLENBQUVVLFlBQVksSUFBSztJQUN2QkEsWUFBWSxDQUFDUixJQUFJLENBQUNWLFNBQVMsQ0FBQztJQUM1QixNQUFNO01BQUVtQjtJQUFRLENBQUMsR0FBR0QsWUFBWTtFQUNqQyxDQUFDLENBQUMsQ0FDRFAsS0FBSyxDQUFFQyxLQUFLLElBQUs7SUFDakJDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGdDQUFnQyxFQUFFQSxLQUFLLENBQUM7RUFDdkQsQ0FBQyxDQUFDO0VBRUgsMktBQThCLENBQzVCSixJQUFJLENBQUVZLGFBQWEsSUFBSztJQUN4QkEsYUFBYSxDQUFDVixJQUFJLENBQUNWLFNBQVMsQ0FBQztJQUM3QixNQUFNO01BQUVxQjtJQUFRLENBQUMsR0FBR0QsYUFBYTtFQUNsQyxDQUFDLENBQUMsQ0FDRFQsS0FBSyxDQUFFQyxLQUFLLElBQUs7SUFDakJDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGlDQUFpQyxFQUFFQSxLQUFLLENBQUM7RUFDeEQsQ0FBQyxDQUFDO0FBQ0o7QUFFQVgsUUFBUSxDQUFDcUIsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUV2QixhQUFhLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Zb3VuaXF1ZURlc2lnbnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR3aW5kb3cuYXBwQ29udGFpbmVyID0gY29udGFpbmVyO1xuXHRjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuXHQvLyBJbXBvcnQgdGhlIGRlcGVuZGVuY2llcyBhbmQgY2FsbCB0aGUgaW5pdCBmdW5jdGlvbnNcblx0aW1wb3J0KFwiLi9zY3JpcHRzL2hlYWRlci5qc1wiKVxuXHRcdC50aGVuKChoZWFkZXJNb2R1bGUpID0+IHtcblx0XHRcdGhlYWRlck1vZHVsZS5pbml0KCk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgaW1wb3J0aW5nIGhlYWRlciBtb2R1bGU6XCIsIGVycm9yKTtcblx0XHR9KTtcblxuXHRpbXBvcnQoXCIuL3NjcmlwdHMvc2lkZWJhci5qc1wiKVxuXHRcdC50aGVuKChzaWRlYmFyTW9kdWxlKSA9PiB7XG5cdFx0XHRzaWRlYmFyTW9kdWxlLmluaXQoY29udGFpbmVyKTtcblx0XHRcdGNvbnN0IHsgcHVtcEJ0biwgZmxhdEJ0biwgc25rckJ0biB9ID0gc2lkZWJhck1vZHVsZTtcblx0XHRcdC8vIEFjY2VzcyBhbmQgdXNlIHRoZSBleHBvcnRlZCBidXR0b25zIGFzIG5lZWRlZFxuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGltcG9ydGluZyBzaWRlYmFyIG1vZHVsZTpcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXG5cdGltcG9ydChcIi4vc2NyaXB0cy9kZXNpZ25fYXJlYS5qc1wiKVxuXHRcdC50aGVuKChkZXNpZ25Nb2R1bGUpID0+IHtcblx0XHRcdGRlc2lnbk1vZHVsZS5pbml0KGNvbnRhaW5lcik7XG5cdFx0XHRjb25zdCB7IG9vcHNCdG4gfSA9IGRlc2lnbk1vZHVsZTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbXBvcnRpbmcgZGVzaWduIG1vZHVsZTpcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXG5cdGltcG9ydChcIi4vc2NyaXB0cy9wYWxldHRlLmpzXCIpXG5cdFx0LnRoZW4oKHBhbGV0dGVNb2R1bGUpID0+IHtcblx0XHRcdHBhbGV0dGVNb2R1bGUuaW5pdChjb250YWluZXIpO1xuXHRcdFx0Y29uc3QgeyBjaGFuZ2VzIH0gPSBwYWxldHRlTW9kdWxlO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGltcG9ydGluZyBwYWxldHRlIG1vZHVsZTpcIiwgZXJyb3IpO1xuXHRcdH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplQXBwKTtcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2luZG93IiwiYXBwQ29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwidGhlbiIsImhlYWRlck1vZHVsZSIsImluaXQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInNpZGViYXJNb2R1bGUiLCJwdW1wQnRuIiwiZmxhdEJ0biIsInNua3JCdG4iLCJkZXNpZ25Nb2R1bGUiLCJvb3BzQnRuIiwicGFsZXR0ZU1vZHVsZSIsImNoYW5nZXMiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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