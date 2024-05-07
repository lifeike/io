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

/***/ "./layouts/partials/Posts.js":
/*!***********************************!*\
  !*** ./layouts/partials/Posts.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/config.json */ \"./config/config.json\");\n/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/utils/textConverter */ \"./lib/utils/textConverter.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Posts = (param)=>{\n    let { posts  } = param;\n    const { blog_folder , summary_length  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"section row pb-0\",\n        children: posts.map((item, i)=>{\n            var _posts__content;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-12 pb-12 lg:pb-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-12 md:col-6\",\n                            children: posts[i].frontmatter.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                className: \"h-auto w-full rounded-lg\",\n                                src: posts[i].frontmatter.image,\n                                alt: posts[i].frontmatter.title,\n                                width: 540,\n                                height: 227,\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                                lineNumber: 16,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-12 md:col-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"h3 mb-2 mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/\".concat(blog_folder, \"/\").concat(posts[0].slug),\n                                        className: \"block hover:text-primary\",\n                                        children: posts[0].frontmatter.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-text\",\n                                    children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__.plainify)((_posts__content = posts[0].content) === null || _posts__content === void 0 ? void 0 : _posts__content.slice(0, Number(summary_length)), \"div\")\n                                }, void 0, false, {\n                                    fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    className: \"btn btn-primary mt-4\",\n                                    href: \"/\".concat(blog_folder, \"/\").concat(posts[0].slug),\n                                    rel: \"\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                            lineNumber: 26,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                lineNumber: 12,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXRzL3BhcnRpYWxzL1Bvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ1c7QUFDckI7QUFDRjtBQUU3QixNQUFNSSxRQUFRLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDdEIsTUFBTSxFQUFFQyxZQUFXLEVBQUVDLGVBQWMsRUFBRSxHQUFHUCx5REFBZTtJQUN2RCxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDWkwsTUFBTU0sR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQU07Z0JBMkJWUjtZQTFCWixxQkFDRSw4REFBQ0k7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1pMLEtBQUssQ0FBQ1EsRUFBRSxDQUFDQyxXQUFXLENBQUNDLEtBQUssa0JBQ3pCLDhEQUFDYixtREFBS0E7Z0NBQ0pRLFdBQVU7Z0NBQ1ZNLEtBQUtYLEtBQUssQ0FBQ1EsRUFBRSxDQUFDQyxXQUFXLENBQUNDLEtBQUs7Z0NBQy9CRSxLQUFLWixLQUFLLENBQUNRLEVBQUUsQ0FBQ0MsV0FBVyxDQUFDSSxLQUFLO2dDQUMvQkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUkMsVUFBVSxJQUFJOzs7Ozs7Ozs7OztzQ0FJcEIsOERBQUNaOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1k7b0NBQUdaLFdBQVU7OENBQ1osNEVBQUNQLGtEQUFJQTt3Q0FDSG9CLE1BQU0sSUFBbUJsQixPQUFmQyxhQUFZLEtBQWlCLE9BQWRELEtBQUssQ0FBQyxFQUFFLENBQUNtQixJQUFJO3dDQUN0Q2QsV0FBVTtrREFFVEwsS0FBSyxDQUFDLEVBQUUsQ0FBQ1MsV0FBVyxDQUFDSSxLQUFLOzs7Ozs7Ozs7Ozs4Q0FHL0IsOERBQUNPO29DQUFFZixXQUFVOzhDQUNWVCxrRUFBUUEsQ0FDUEksQ0FBQUEsa0JBQUFBLEtBQUssQ0FBQyxFQUFFLENBQUNxQixPQUFPLGNBQWhCckIsNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFrQnNCLE1BQU0sR0FBR0MsT0FBT3JCLGtCQUNsQzs7Ozs7OzhDQUdKLDhEQUFDSixrREFBSUE7b0NBQ0hPLFdBQVU7b0NBQ1ZhLE1BQU0sSUFBbUJsQixPQUFmQyxhQUFZLEtBQWlCLE9BQWRELEtBQUssQ0FBQyxFQUFFLENBQUNtQixJQUFJO29DQUN0Q0ssS0FBSTs4Q0FDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFPWDs7Ozs7O0FBZ0NOO0tBOUVNekI7QUFnRk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9wYXJ0aWFscy9Qb3N0cy5qcz9hMGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSBcIkBjb25maWcvY29uZmlnLmpzb25cIjtcbmltcG9ydCB7IHBsYWluaWZ5IH0gZnJvbSBcIkBsaWIvdXRpbHMvdGV4dENvbnZlcnRlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFBvc3RzID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCB7IGJsb2dfZm9sZGVyLCBzdW1tYXJ5X2xlbmd0aCB9ID0gY29uZmlnLnNldHRpbmdzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiByb3cgcGItMFwiPlxuICAgICAge3Bvc3RzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHBiLTEyIGxnOnBiLTI0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbWQ6Y29sLTZcIj5cbiAgICAgICAgICAgICAgICB7cG9zdHNbaV0uZnJvbnRtYXR0ZXIuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtYXV0byB3LWZ1bGwgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdHNbaV0uZnJvbnRtYXR0ZXIuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdHNbaV0uZnJvbnRtYXR0ZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1NDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjI3fVxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1kOmNvbC02XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgzIG1iLTIgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2Jsb2dfZm9sZGVyfS8ke3Bvc3RzWzBdLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaG92ZXI6dGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzWzBdLmZyb250bWF0dGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICB7cGxhaW5pZnkoXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzWzBdLmNvbnRlbnQ/LnNsaWNlKDAsIE51bWJlcihzdW1tYXJ5X2xlbmd0aCkpLFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTRcIlxuICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2Jsb2dfZm9sZGVyfS8ke3Bvc3RzWzBdLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgIHJlbD1cIlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICB7Lyoge3Bvc3RzLnNsaWNlKDEpLm1hcCgocG9zdCwgaSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YGtleS0ke2l9YH0gY2xhc3NOYW1lPVwiY29sLTEyIG1iLTggc206Y29sLTYgbGc6Y29sLTRcIj5cbiAgICAgICAgICB7cG9zdC5mcm9udG1hdHRlci5pbWFnZSAmJiAoXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5mcm9udG1hdHRlci5pbWFnZX1cbiAgICAgICAgICAgICAgYWx0PXtwb3N0LmZyb250bWF0dGVyLnRpdGxlfVxuICAgICAgICAgICAgICB3aWR0aD17aSA9PT0gMCA/IFwiOTI1XCIgOiBcIjQ0NVwifVxuICAgICAgICAgICAgICBoZWlnaHQ9e2kgPT09IDAgPyBcIjQ3NVwiIDogXCIyMzBcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDMgbWItMiBtdC00XCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXtgLyR7YmxvZ19mb2xkZXJ9LyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGhvdmVyOnRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwb3N0LmZyb250bWF0dGVyLnRpdGxlfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC10ZXh0XCI+e3Bvc3QuZnJvbnRtYXR0ZXIuZGVzY308L3A+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtdC00XCJcbiAgICAgICAgICAgIGhyZWY9e2AvJHtibG9nX2ZvbGRlcn0vJHtwb3N0LnNsdWd9YH1cbiAgICAgICAgICAgIHJlbD1cIlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVhZCBNb3JlXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfSAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xuIl0sIm5hbWVzIjpbImNvbmZpZyIsInBsYWluaWZ5IiwiSW1hZ2UiLCJMaW5rIiwiUG9zdHMiLCJwb3N0cyIsImJsb2dfZm9sZGVyIiwic3VtbWFyeV9sZW5ndGgiLCJzZXR0aW5ncyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpIiwiZnJvbnRtYXR0ZXIiLCJpbWFnZSIsInNyYyIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSIsImgyIiwiaHJlZiIsInNsdWciLCJwIiwiY29udGVudCIsInNsaWNlIiwiTnVtYmVyIiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layouts/partials/Posts.js\n"));

/***/ })

});