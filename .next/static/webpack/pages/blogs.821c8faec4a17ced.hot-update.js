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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/config.json */ \"./config/config.json\");\n/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/utils/textConverter */ \"./lib/utils/textConverter.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Posts = (param)=>{\n    let { posts  } = param;\n    const { blog_folder , summary_length  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"section row pb-0\",\n        children: posts.map((item, i)=>{\n            var _posts_i_content;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-12 pb-12 lg:pb-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-12 md:col-6\",\n                            children: posts[i].frontmatter.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                className: \"h-auto w-full rounded-lg\",\n                                src: posts[i].frontmatter.image,\n                                alt: posts[i].frontmatter.title,\n                                width: 540,\n                                height: 227,\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                                lineNumber: 16,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-12 md:col-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"h3 mb-2 mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/\".concat(blog_folder, \"/\").concat(posts[0].slug),\n                                        className: \"block hover:text-primary\",\n                                        children: posts[i].frontmatter.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-text\",\n                                    children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__.plainify)((_posts_i_content = posts[i].content) === null || _posts_i_content === void 0 ? void 0 : _posts_i_content.slice(0, Number(summary_length)), \"div\")\n                                }, void 0, false, {\n                                    fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    className: \"btn btn-primary mt-4\",\n                                    href: \"/\".concat(blog_folder, \"/\").concat(posts[0].slug),\n                                    rel: \"\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                            lineNumber: 26,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n                lineNumber: 12,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/home/feeco/Documents/io/layouts/partials/Posts.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXRzL3BhcnRpYWxzL1Bvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ1c7QUFDckI7QUFDRjtBQUU3QixNQUFNSSxRQUFRLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDdEIsTUFBTSxFQUFFQyxZQUFXLEVBQUVDLGVBQWMsRUFBRSxHQUFHUCx5REFBZTtJQUN2RCxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDWkwsTUFBTU0sR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQU07Z0JBMkJWUjtZQTFCWixxQkFDRSw4REFBQ0k7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1pMLEtBQUssQ0FBQ1EsRUFBRSxDQUFDQyxXQUFXLENBQUNDLEtBQUssa0JBQ3pCLDhEQUFDYixtREFBS0E7Z0NBQ0pRLFdBQVU7Z0NBQ1ZNLEtBQUtYLEtBQUssQ0FBQ1EsRUFBRSxDQUFDQyxXQUFXLENBQUNDLEtBQUs7Z0NBQy9CRSxLQUFLWixLQUFLLENBQUNRLEVBQUUsQ0FBQ0MsV0FBVyxDQUFDSSxLQUFLO2dDQUMvQkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUkMsVUFBVSxJQUFJOzs7Ozs7Ozs7OztzQ0FJcEIsOERBQUNaOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1k7b0NBQUdaLFdBQVU7OENBQ1osNEVBQUNQLGtEQUFJQTt3Q0FDSG9CLE1BQU0sSUFBbUJsQixPQUFmQyxhQUFZLEtBQWlCLE9BQWRELEtBQUssQ0FBQyxFQUFFLENBQUNtQixJQUFJO3dDQUN0Q2QsV0FBVTtrREFFVEwsS0FBSyxDQUFDUSxFQUFFLENBQUNDLFdBQVcsQ0FBQ0ksS0FBSzs7Ozs7Ozs7Ozs7OENBRy9CLDhEQUFDTztvQ0FBRWYsV0FBVTs4Q0FDVlQsa0VBQVFBLENBQ1BJLENBQUFBLG1CQUFBQSxLQUFLLENBQUNRLEVBQUUsQ0FBQ2EsT0FBTyxjQUFoQnJCLDhCQUFBQSxLQUFBQSxJQUFBQSxpQkFBa0JzQixNQUFNLEdBQUdDLE9BQU9yQixrQkFDbEM7Ozs7Ozs4Q0FHSiw4REFBQ0osa0RBQUlBO29DQUNITyxXQUFVO29DQUNWYSxNQUFNLElBQW1CbEIsT0FBZkMsYUFBWSxLQUFpQixPQUFkRCxLQUFLLENBQUMsRUFBRSxDQUFDbUIsSUFBSTtvQ0FDdENLLEtBQUk7OENBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBT1g7Ozs7OztBQWdDTjtLQTlFTXpCO0FBZ0ZOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dHMvcGFydGlhbHMvUG9zdHMuanM/YTBiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gXCJAY29uZmlnL2NvbmZpZy5qc29uXCI7XG5pbXBvcnQgeyBwbGFpbmlmeSB9IGZyb20gXCJAbGliL3V0aWxzL3RleHRDb252ZXJ0ZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBQb3N0cyA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc3QgeyBibG9nX2ZvbGRlciwgc3VtbWFyeV9sZW5ndGggfSA9IGNvbmZpZy5zZXR0aW5ncztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcm93IHBiLTBcIj5cbiAgICAgIHtwb3N0cy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwYi0xMiBsZzpwYi0yNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1kOmNvbC02XCI+XG4gICAgICAgICAgICAgICAge3Bvc3RzW2ldLmZyb250bWF0dGVyLmltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWF1dG8gdy1mdWxsIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3RzW2ldLmZyb250bWF0dGVyLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bvc3RzW2ldLmZyb250bWF0dGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTQwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIyN31cbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtZDpjb2wtNlwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMyBtYi0yIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtibG9nX2ZvbGRlcn0vJHtwb3N0c1swXS5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGhvdmVyOnRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0c1tpXS5mcm9udG1hdHRlci50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAge3BsYWluaWZ5KFxuICAgICAgICAgICAgICAgICAgICBwb3N0c1tpXS5jb250ZW50Py5zbGljZSgwLCBOdW1iZXIoc3VtbWFyeV9sZW5ndGgpKSxcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtdC00XCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtibG9nX2ZvbGRlcn0vJHtwb3N0c1swXS5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICByZWw9XCJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgey8qIHtwb3N0cy5zbGljZSgxKS5tYXAoKHBvc3QsIGkpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2BrZXktJHtpfWB9IGNsYXNzTmFtZT1cImNvbC0xMiBtYi04IHNtOmNvbC02IGxnOmNvbC00XCI+XG4gICAgICAgICAge3Bvc3QuZnJvbnRtYXR0ZXIuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICBzcmM9e3Bvc3QuZnJvbnRtYXR0ZXIuaW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD17cG9zdC5mcm9udG1hdHRlci50aXRsZX1cbiAgICAgICAgICAgICAgd2lkdGg9e2kgPT09IDAgPyBcIjkyNVwiIDogXCI0NDVcIn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtpID09PSAwID8gXCI0NzVcIiA6IFwiMjMwXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgzIG1iLTIgbXQtNFwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17YC8ke2Jsb2dfZm9sZGVyfS8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBob3Zlcjp0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cG9zdC5mcm9udG1hdHRlci50aXRsZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdGV4dFwiPntwb3N0LmZyb250bWF0dGVyLmRlc2N9PC9wPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXQtNFwiXG4gICAgICAgICAgICBocmVmPXtgLyR7YmxvZ19mb2xkZXJ9LyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICByZWw9XCJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX0gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJuYW1lcyI6WyJjb25maWciLCJwbGFpbmlmeSIsIkltYWdlIiwiTGluayIsIlBvc3RzIiwicG9zdHMiLCJibG9nX2ZvbGRlciIsInN1bW1hcnlfbGVuZ3RoIiwic2V0dGluZ3MiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaSIsImZyb250bWF0dGVyIiwiaW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJpb3JpdHkiLCJoMiIsImhyZWYiLCJzbHVnIiwicCIsImNvbnRlbnQiLCJzbGljZSIsIk51bWJlciIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layouts/partials/Posts.js\n"));

/***/ })

});