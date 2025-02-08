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

eval("function initializeApp() {\n  const container = document.createElement(\"div\");\n  window.appContainer = container;\n  container.setAttribute(\"class\", \"container\");\n  document.body.appendChild(container);\n  const contentWrapper = document.createElement(\"div\");\n  contentWrapper.setAttribute(\"class\", \"contentWrapper\");\n  container.appendChild(contentWrapper);\n  window.contentWrapper = contentWrapper;\n  // Import the dependencies and call the init functions\n  __webpack_require__.e(/*! import() */ \"src_scripts_header_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/header.js */ \"./src/scripts/header.js\")).then(headerModule => {\n    headerModule.init(contentWrapper);\n    const howToPlayBtn = document.querySelector(\"#modalBtn\");\n    // console.log(howToPlayBtn);\n    if (howToPlayBtn) {\n      howToPlayBtn.addEventListener(\"click\", () => {\n        console.log(\"How to Play button clicked!\");\n        modal.style.display = \"block\";\n        contentWrapper.style.filter = \"blur(8px)\";\n      });\n    } else {\n      console.error(\"Button #modalBtn not found in the DOM\");\n    }\n  }).catch(error => {\n    console.error(\"Error importing header module:\", error);\n  });\n  __webpack_require__.e(/*! import() */ \"src_scripts_sidebar_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/sidebar.js */ \"./src/scripts/sidebar.js\")).then(sidebarModule => {\n    sidebarModule.init(contentWrapper);\n    const {\n      pumpBtn,\n      flatBtn,\n      snkrBtn\n    } = sidebarModule;\n    // Access and use the exported buttons as needed\n  }).catch(error => {\n    console.error(\"Error importing sidebar module:\", error);\n  });\n  __webpack_require__.e(/*! import() */ \"src_scripts_design_area_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/design_area.js */ \"./src/scripts/design_area.js\")).then(designModule => {\n    designModule.init(contentWrapper);\n    const {\n      oopsBtn\n    } = designModule;\n  }).catch(error => {\n    console.error(\"Error importing design module:\", error);\n  });\n  __webpack_require__.e(/*! import() */ \"src_scripts_palette_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./scripts/palette.js */ \"./src/scripts/palette.js\")).then(paletteModule => {\n    paletteModule.init(contentWrapper);\n    const {\n      changes\n    } = paletteModule;\n  }).catch(error => {\n    console.error(\"Error importing palette module:\", error);\n  });\n  const modal = document.createElement(\"div\");\n  modal.setAttribute(\"class\", \"modal\");\n  const modal_content = document.createElement(\"div\");\n  modal_content.setAttribute(\"class\", \"modal_content\");\n  const instruct_txt = document.createElement(\"p\");\n  instruct_txt.innerHTML = \"Show off your design skills by making a one of a kind creation!<br><br>Decide on a sketch to design from the left sidebar and click the button below when you're ready to begin. The choosen sketch will then show up in the main design area.<br><br>Click the color square next to 'Pick a color!' in the bottom section to open the color picker. Once you find the correct shade, it will automatically be added to your color palette when you press enter or click the left button on your mouse.<br><br>Click on any part of the sketch to add your most recent chosen color to that part of the shoe.<br><br>If you make a mistake, click the 'Oops!' button to undo your most recent change.<br><br>If you want to re-use previously color from your palette, just click on the color swatch provided.<br><br> ENJOY!\";\n  const closebtn = document.createElement(\"span\");\n  closebtn.innerText = \"X\";\n  closebtn.setAttribute(\"class\", \"close\");\n  closebtn.onclick = function () {\n    modal.style.display = \"none\";\n    contentWrapper.style.filter = \"none\";\n  };\n  modal_content.append(closebtn, instruct_txt);\n  modal.append(modal_content);\n  document.body.append(modal);\n  window.onclick = function (event) {\n    if (event.target == modal) {\n      modal.style.display = \"none\";\n    }\n  };\n}\ndocument.addEventListener(\"DOMContentLoaded\", initializeApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc5QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbkQ2QixhQUFhLENBQUMxQixZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztFQUVwRCxNQUFNMkIsWUFBWSxHQUFHL0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ2hEOEIsWUFBWSxDQUFDQyxTQUFTLEdBQ3JCLGd5QkFBZ3lCO0VBRWp5QixNQUFNQyxRQUFRLEdBQUdqQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDL0NnQyxRQUFRLENBQUNDLFNBQVMsR0FBRyxHQUFHO0VBQ3hCRCxRQUFRLENBQUM3QixZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztFQUN2QzZCLFFBQVEsQ0FBQ0UsT0FBTyxHQUFHLFlBQVk7SUFDOUJuQixLQUFLLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDNUJYLGNBQWMsQ0FBQ1UsS0FBSyxDQUFDRSxNQUFNLEdBQUcsTUFBTTtFQUNyQyxDQUFDO0VBRURXLGFBQWEsQ0FBQ00sTUFBTSxDQUFDSCxRQUFRLEVBQUVGLFlBQVksQ0FBQztFQUM1Q2YsS0FBSyxDQUFDb0IsTUFBTSxDQUFDTixhQUFhLENBQUM7RUFDM0I5QixRQUFRLENBQUNLLElBQUksQ0FBQytCLE1BQU0sQ0FBQ3BCLEtBQUssQ0FBQztFQUUzQmQsTUFBTSxDQUFDaUMsT0FBTyxHQUFHLFVBQVVFLEtBQUssRUFBRTtJQUNqQyxJQUFJQSxLQUFLLENBQUNDLE1BQU0sSUFBSXRCLEtBQUssRUFBRTtNQUMxQkEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQzdCO0VBQ0QsQ0FBQztBQUNGO0FBRUFsQixRQUFRLENBQUNhLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFZixhQUFhLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Zb3VuaXF1ZURlc2lnbnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR3aW5kb3cuYXBwQ29udGFpbmVyID0gY29udGFpbmVyO1xuXHRjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblx0Y29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb250ZW50V3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRlbnRXcmFwcGVyXCIpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudFdyYXBwZXIpO1xuXHR3aW5kb3cuY29udGVudFdyYXBwZXIgPSBjb250ZW50V3JhcHBlcjtcblx0Ly8gSW1wb3J0IHRoZSBkZXBlbmRlbmNpZXMgYW5kIGNhbGwgdGhlIGluaXQgZnVuY3Rpb25zXG5cdGltcG9ydChcIi4vc2NyaXB0cy9oZWFkZXIuanNcIilcblx0XHQudGhlbigoaGVhZGVyTW9kdWxlKSA9PiB7XG5cdFx0XHRoZWFkZXJNb2R1bGUuaW5pdChjb250ZW50V3JhcHBlcik7XG5cdFx0XHRjb25zdCBob3dUb1BsYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsQnRuXCIpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coaG93VG9QbGF5QnRuKTtcblx0XHRcdGlmIChob3dUb1BsYXlCdG4pIHtcblx0XHRcdFx0aG93VG9QbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJIb3cgdG8gUGxheSBidXR0b24gY2xpY2tlZCFcIik7XG5cdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0XHRjb250ZW50V3JhcHBlci5zdHlsZS5maWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJCdXR0b24gI21vZGFsQnRuIG5vdCBmb3VuZCBpbiB0aGUgRE9NXCIpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGltcG9ydGluZyBoZWFkZXIgbW9kdWxlOlwiLCBlcnJvcik7XG5cdFx0fSk7XG5cblx0aW1wb3J0KFwiLi9zY3JpcHRzL3NpZGViYXIuanNcIilcblx0XHQudGhlbigoc2lkZWJhck1vZHVsZSkgPT4ge1xuXHRcdFx0c2lkZWJhck1vZHVsZS5pbml0KGNvbnRlbnRXcmFwcGVyKTtcblx0XHRcdGNvbnN0IHsgcHVtcEJ0biwgZmxhdEJ0biwgc25rckJ0biB9ID0gc2lkZWJhck1vZHVsZTtcblx0XHRcdC8vIEFjY2VzcyBhbmQgdXNlIHRoZSBleHBvcnRlZCBidXR0b25zIGFzIG5lZWRlZFxuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGltcG9ydGluZyBzaWRlYmFyIG1vZHVsZTpcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXG5cdGltcG9ydChcIi4vc2NyaXB0cy9kZXNpZ25fYXJlYS5qc1wiKVxuXHRcdC50aGVuKChkZXNpZ25Nb2R1bGUpID0+IHtcblx0XHRcdGRlc2lnbk1vZHVsZS5pbml0KGNvbnRlbnRXcmFwcGVyKTtcblx0XHRcdGNvbnN0IHsgb29wc0J0biB9ID0gZGVzaWduTW9kdWxlO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGltcG9ydGluZyBkZXNpZ24gbW9kdWxlOlwiLCBlcnJvcik7XG5cdFx0fSk7XG5cblx0aW1wb3J0KFwiLi9zY3JpcHRzL3BhbGV0dGUuanNcIilcblx0XHQudGhlbigocGFsZXR0ZU1vZHVsZSkgPT4ge1xuXHRcdFx0cGFsZXR0ZU1vZHVsZS5pbml0KGNvbnRlbnRXcmFwcGVyKTtcblx0XHRcdGNvbnN0IHsgY2hhbmdlcyB9ID0gcGFsZXR0ZU1vZHVsZTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbXBvcnRpbmcgcGFsZXR0ZSBtb2R1bGU6XCIsIGVycm9yKTtcblx0XHR9KTtcblxuXHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1vZGFsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWxcIik7XG5cblx0Y29uc3QgbW9kYWxfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1vZGFsX2NvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbF9jb250ZW50XCIpO1xuXG5cdGNvbnN0IGluc3RydWN0X3R4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRpbnN0cnVjdF90eHQuaW5uZXJIVE1MID1cblx0XHRcIlNob3cgb2ZmIHlvdXIgZGVzaWduIHNraWxscyBieSBtYWtpbmcgYSBvbmUgb2YgYSBraW5kIGNyZWF0aW9uITxicj48YnI+RGVjaWRlIG9uIGEgc2tldGNoIHRvIGRlc2lnbiBmcm9tIHRoZSBsZWZ0IHNpZGViYXIgYW5kIGNsaWNrIHRoZSBidXR0b24gYmVsb3cgd2hlbiB5b3UncmUgcmVhZHkgdG8gYmVnaW4uIFRoZSBjaG9vc2VuIHNrZXRjaCB3aWxsIHRoZW4gc2hvdyB1cCBpbiB0aGUgbWFpbiBkZXNpZ24gYXJlYS48YnI+PGJyPkNsaWNrIHRoZSBjb2xvciBzcXVhcmUgbmV4dCB0byAnUGljayBhIGNvbG9yIScgaW4gdGhlIGJvdHRvbSBzZWN0aW9uIHRvIG9wZW4gdGhlIGNvbG9yIHBpY2tlci4gT25jZSB5b3UgZmluZCB0aGUgY29ycmVjdCBzaGFkZSwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGFkZGVkIHRvIHlvdXIgY29sb3IgcGFsZXR0ZSB3aGVuIHlvdSBwcmVzcyBlbnRlciBvciBjbGljayB0aGUgbGVmdCBidXR0b24gb24geW91ciBtb3VzZS48YnI+PGJyPkNsaWNrIG9uIGFueSBwYXJ0IG9mIHRoZSBza2V0Y2ggdG8gYWRkIHlvdXIgbW9zdCByZWNlbnQgY2hvc2VuIGNvbG9yIHRvIHRoYXQgcGFydCBvZiB0aGUgc2hvZS48YnI+PGJyPklmIHlvdSBtYWtlIGEgbWlzdGFrZSwgY2xpY2sgdGhlICdPb3BzIScgYnV0dG9uIHRvIHVuZG8geW91ciBtb3N0IHJlY2VudCBjaGFuZ2UuPGJyPjxicj5JZiB5b3Ugd2FudCB0byByZS11c2UgcHJldmlvdXNseSBjb2xvciBmcm9tIHlvdXIgcGFsZXR0ZSwganVzdCBjbGljayBvbiB0aGUgY29sb3Igc3dhdGNoIHByb3ZpZGVkLjxicj48YnI+IEVOSk9ZIVwiO1xuXG5cdGNvbnN0IGNsb3NlYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGNsb3NlYnRuLmlubmVyVGV4dCA9IFwiWFwiO1xuXHRjbG9zZWJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlXCIpO1xuXHRjbG9zZWJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRjb250ZW50V3JhcHBlci5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcblx0fTtcblxuXHRtb2RhbF9jb250ZW50LmFwcGVuZChjbG9zZWJ0biwgaW5zdHJ1Y3RfdHh0KTtcblx0bW9kYWwuYXBwZW5kKG1vZGFsX2NvbnRlbnQpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbCk7XG5cblx0d2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG5cdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fVxuXHR9O1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplQXBwKTtcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2luZG93IiwiYXBwQ29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY29udGVudFdyYXBwZXIiLCJ0aGVuIiwiaGVhZGVyTW9kdWxlIiwiaW5pdCIsImhvd1RvUGxheUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsIm1vZGFsIiwic3R5bGUiLCJkaXNwbGF5IiwiZmlsdGVyIiwiZXJyb3IiLCJjYXRjaCIsInNpZGViYXJNb2R1bGUiLCJwdW1wQnRuIiwiZmxhdEJ0biIsInNua3JCdG4iLCJkZXNpZ25Nb2R1bGUiLCJvb3BzQnRuIiwicGFsZXR0ZU1vZHVsZSIsImNoYW5nZXMiLCJtb2RhbF9jb250ZW50IiwiaW5zdHJ1Y3RfdHh0IiwiaW5uZXJIVE1MIiwiY2xvc2VidG4iLCJpbm5lclRleHQiLCJvbmNsaWNrIiwiYXBwZW5kIiwiZXZlbnQiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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