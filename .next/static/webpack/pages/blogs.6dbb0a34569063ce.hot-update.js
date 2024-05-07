"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogs",{

/***/ "./pages/blogs/page/[slug].js":
/*!************************************!*\
  !*** ./pages/blogs/page/[slug].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Pagination */ \"./layouts/components/Pagination.js\");\n/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/config.json */ \"./config/config.json\");\n/* harmony import */ var _layouts_Baseof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @layouts/Baseof */ \"./layouts/Baseof.js\");\n/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/utils/textConverter */ \"./lib/utils/textConverter.js\");\n/* harmony import */ var _partials_Posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @partials/Posts */ \"./layouts/partials/Posts.js\");\n\n\n\n\n\n\nconst { blog_folder  } = _config_config_json__WEBPACK_IMPORTED_MODULE_2__.settings;\n// blog pagination\nconst BlogPagination = (param)=>{\n    let { postIndex , posts , currentPage , pagination  } = param;\n    const indexOfLastPost = currentPage * pagination;\n    const indexOfFirstPost = indexOfLastPost - pagination;\n    const totalPages = Math.ceil(posts.length / pagination);\n    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);\n    const { frontmatter , content  } = postIndex;\n    const { title  } = frontmatter;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Baseof__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: title,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"section\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: [\n                            (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__.markdownify)(title, \"h1\", \"h1 text-center font-normal text-[56px]\"),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partials_Posts__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                posts: currentPosts\n                            }, void 0, false, {\n                                fileName: \"/home/feeco/Documents/io/pages/blogs/page/[slug].js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                section: blog_folder,\n                                totalPages: totalPages,\n                                currentPage: currentPage\n                            }, void 0, false, {\n                                fileName: \"/home/feeco/Documents/io/pages/blogs/page/[slug].js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/feeco/Documents/io/pages/blogs/page/[slug].js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/feeco/Documents/io/pages/blogs/page/[slug].js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/feeco/Documents/io/pages/blogs/page/[slug].js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Baseof__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: title,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"section\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: [\n                            (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__.markdownify)(title, \"h1\", \"h1 text-center font-normal text-[56px]\"),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partials_Posts__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                posts: currentPosts\n                            }, void 0, false, {\n                                fileName: \"/home/feeco/Documents/io/pages/blogs/page/[slug].js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                section: blog_folder,\n                                totalPages: totalPages,\n                                currentPage: currentPage\n                            }, void 0, false, {\n                                fileName: \"/home/feeco/Documents/io/pages/blogs/page/[slug].js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/feeco/Documents/io/pages/blogs/page/[slug].js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/feeco/Documents/io/pages/blogs/page/[slug].js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/feeco/Documents/io/pages/blogs/page/[slug].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = BlogPagination;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPagination);\nvar _c;\n$RefreshReg$(_c, \"BlogPagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncy9wYWdlL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQWdEO0FBQ1A7QUFDTjtBQUdvQjtBQUNuQjtBQUNwQyxNQUFNLEVBQUVLLFlBQVcsRUFBRSxHQUFHSix5REFBZTtBQUV2QyxrQkFBa0I7QUFDbEIsTUFBTU0saUJBQWlCLFNBQW1EO1FBQWxELEVBQUVDLFVBQVMsRUFBRUMsTUFBSyxFQUFFQyxZQUFXLEVBQUVDLFdBQVUsRUFBRTtJQUNuRSxNQUFNQyxrQkFBa0JGLGNBQWNDO0lBQ3RDLE1BQU1FLG1CQUFtQkQsa0JBQWtCRDtJQUMzQyxNQUFNRyxhQUFhQyxLQUFLQyxJQUFJLENBQUNQLE1BQU1RLE1BQU0sR0FBR047SUFDNUMsTUFBTU8sZUFBZVQsTUFBTVUsS0FBSyxDQUFDTixrQkFBa0JEO0lBQ25ELE1BQU0sRUFBRVEsWUFBVyxFQUFFQyxRQUFPLEVBQUUsR0FBR2I7SUFDakMsTUFBTSxFQUFFYyxNQUFLLEVBQUUsR0FBR0Y7SUFFbEIscUJBQ0U7OzBCQUNFLDhEQUFDbEIsdURBQUlBO2dCQUFDb0IsT0FBT0E7MEJBQ1gsNEVBQUNDO29CQUFRQyxXQUFVOzhCQUNqQiw0RUFBQ0M7d0JBQUlELFdBQVU7OzRCQUNackIscUVBQVdBLENBQUNtQixPQUFPLE1BQU07MENBQzFCLDhEQUFDbEIsdURBQUtBO2dDQUFDSyxPQUFPUzs7Ozs7OzBDQUNkLDhEQUFDbEIsOERBQVVBO2dDQUNUdUIsU0FBU2xCO2dDQUNUUyxZQUFZQTtnQ0FDWkosYUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3JCLDhEQUFDUix1REFBSUE7Z0JBQUNvQixPQUFPQTswQkFDWCw0RUFBQ0M7b0JBQVFDLFdBQVU7OEJBQ2pCLDRFQUFDQzt3QkFBSUQsV0FBVTs7NEJBQ1pyQixxRUFBV0EsQ0FBQ21CLE9BQU8sTUFBTTswQ0FDMUIsOERBQUNsQix1REFBS0E7Z0NBQUNLLE9BQU9TOzs7Ozs7MENBQ2QsOERBQUNsQiw4REFBVUE7Z0NBQ1R1QixTQUFTbEI7Z0NBQ1RTLFlBQVlBO2dDQUNaSixhQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzNCO0tBdENNSDs7QUF3Q04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvcGFnZS9bc2x1Z10uanM/MTMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiQGNvbXBvbmVudHMvUGFnaW5hdGlvblwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiQGNvbmZpZy9jb25maWcuanNvblwiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIkBsYXlvdXRzL0Jhc2VvZlwiO1xuaW1wb3J0IHsgZ2V0TGlzdFBhZ2UsIGdldFNpbmdsZVBhZ2UgfSBmcm9tIFwiQGxpYi9jb250ZW50UGFyc2VyXCI7XG5pbXBvcnQgeyBwYXJzZU1EWCB9IGZyb20gXCJAbGliL3V0aWxzL21keFBhcnNlclwiO1xuaW1wb3J0IHsgbWFya2Rvd25pZnkgfSBmcm9tIFwiQGxpYi91dGlscy90ZXh0Q29udmVydGVyXCI7XG5pbXBvcnQgUG9zdHMgZnJvbSBcIkBwYXJ0aWFscy9Qb3N0c1wiO1xuY29uc3QgeyBibG9nX2ZvbGRlciB9ID0gY29uZmlnLnNldHRpbmdzO1xuXG4vLyBibG9nIHBhZ2luYXRpb25cbmNvbnN0IEJsb2dQYWdpbmF0aW9uID0gKHsgcG9zdEluZGV4LCBwb3N0cywgY3VycmVudFBhZ2UsIHBhZ2luYXRpb24gfSkgPT4ge1xuICBjb25zdCBpbmRleE9mTGFzdFBvc3QgPSBjdXJyZW50UGFnZSAqIHBhZ2luYXRpb247XG4gIGNvbnN0IGluZGV4T2ZGaXJzdFBvc3QgPSBpbmRleE9mTGFzdFBvc3QgLSBwYWdpbmF0aW9uO1xuICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHBvc3RzLmxlbmd0aCAvIHBhZ2luYXRpb24pO1xuICBjb25zdCBjdXJyZW50UG9zdHMgPSBwb3N0cy5zbGljZShpbmRleE9mRmlyc3RQb3N0LCBpbmRleE9mTGFzdFBvc3QpO1xuICBjb25zdCB7IGZyb250bWF0dGVyLCBjb250ZW50IH0gPSBwb3N0SW5kZXg7XG4gIGNvbnN0IHsgdGl0bGUgfSA9IGZyb250bWF0dGVyO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCYXNlIHRpdGxlPXt0aXRsZX0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge21hcmtkb3duaWZ5KHRpdGxlLCBcImgxXCIsIFwiaDEgdGV4dC1jZW50ZXIgZm9udC1ub3JtYWwgdGV4dC1bNTZweF1cIil9XG4gICAgICAgICAgICA8UG9zdHMgcG9zdHM9e2N1cnJlbnRQb3N0c30gLz5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgIHNlY3Rpb249e2Jsb2dfZm9sZGVyfVxuICAgICAgICAgICAgICB0b3RhbFBhZ2VzPXt0b3RhbFBhZ2VzfVxuICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0Jhc2U+XG4gICAgICA8QmFzZSB0aXRsZT17dGl0bGV9PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIHttYXJrZG93bmlmeSh0aXRsZSwgXCJoMVwiLCBcImgxIHRleHQtY2VudGVyIGZvbnQtbm9ybWFsIHRleHQtWzU2cHhdXCIpfVxuICAgICAgICAgICAgPFBvc3RzIHBvc3RzPXtjdXJyZW50UG9zdHN9IC8+XG4gICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICBzZWN0aW9uPXtibG9nX2ZvbGRlcn1cbiAgICAgICAgICAgICAgdG90YWxQYWdlcz17dG90YWxQYWdlc31cbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9CYXNlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1BhZ2luYXRpb247XG5cbi8vIGdldCBibG9nIHBhZ2luYXRpb24gc2x1Z1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gKCkgPT4ge1xuICBjb25zdCBnZXRBbGxTbHVnID0gZ2V0U2luZ2xlUGFnZShgY29udGVudC8ke2Jsb2dfZm9sZGVyfWApO1xuICBjb25zdCBhbGxTbHVnID0gZ2V0QWxsU2x1Zy5tYXAoKGl0ZW0pID0+IGl0ZW0uc2x1Zyk7XG4gIGNvbnN0IHsgcGFnaW5hdGlvbiB9ID0gY29uZmlnLnNldHRpbmdzO1xuICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGFsbFNsdWcubGVuZ3RoIC8gcGFnaW5hdGlvbik7XG4gIGxldCBwYXRocyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XG4gICAgcGF0aHMucHVzaCh7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogKGkgKyAxKS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuLy8gZ2V0IGJsb2cgcGFnaW5hdGlvbiBjb250ZW50XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBjdXJyZW50UGFnZSA9IHBhcnNlSW50KChwYXJhbXMgJiYgcGFyYW1zLnNsdWcpIHx8IDEpO1xuICBjb25zdCB7IHBhZ2luYXRpb24gfSA9IGNvbmZpZy5zZXR0aW5ncztcbiAgY29uc3QgcG9zdHMgPSBnZXRTaW5nbGVQYWdlKGBjb250ZW50LyR7YmxvZ19mb2xkZXJ9YCkuc29ydChcbiAgICAocG9zdDEsIHBvc3QyKSA9PlxuICAgICAgbmV3IERhdGUocG9zdDIuZnJvbnRtYXR0ZXIuZGF0ZSkgLSBuZXcgRGF0ZShwb3N0MS5mcm9udG1hdHRlci5kYXRlKVxuICApO1xuICBjb25zdCBwb3N0SW5kZXggPSBhd2FpdCBnZXRMaXN0UGFnZShgY29udGVudC8ke2Jsb2dfZm9sZGVyfS9faW5kZXgubWRgKTtcbiAgY29uc3QgbWR4Q29udGVudCA9IGF3YWl0IHBhcnNlTURYKHBvc3RJbmRleC5jb250ZW50KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uLFxuICAgICAgcG9zdHM6IHBvc3RzLFxuICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgICAgcG9zdEluZGV4OiBwb3N0SW5kZXgsXG4gICAgICBtZHhDb250ZW50OiBtZHhDb250ZW50LFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJjb25maWciLCJCYXNlIiwibWFya2Rvd25pZnkiLCJQb3N0cyIsImJsb2dfZm9sZGVyIiwic2V0dGluZ3MiLCJCbG9nUGFnaW5hdGlvbiIsInBvc3RJbmRleCIsInBvc3RzIiwiY3VycmVudFBhZ2UiLCJwYWdpbmF0aW9uIiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImN1cnJlbnRQb3N0cyIsInNsaWNlIiwiZnJvbnRtYXR0ZXIiLCJjb250ZW50IiwidGl0bGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blogs/page/[slug].js\n"));

/***/ })

});