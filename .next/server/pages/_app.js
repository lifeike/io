/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/config.json */ \"./config/config.json\");\n/* harmony import */ var _config_theme_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/theme.json */ \"./config/theme.json\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-gtm-module */ \"react-gtm-module\");\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var styles_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_style_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_7__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    // default theme setup\n    // import google font css\n    const pf = _config_theme_json__WEBPACK_IMPORTED_MODULE_2__.fonts.font_family.primary;\n    const sf = _config_theme_json__WEBPACK_IMPORTED_MODULE_2__.fonts.font_family.secondary;\n    const [fontcss, setFontcss] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetch(`https://fonts.googleapis.com/css2?family=${pf}${sf ? \"&family=\" + sf : \"\"}&display=swap`).then((res)=>res.text().then((css)=>setFontcss(css)));\n    }, [\n        pf,\n        sf\n    ]);\n    // google tag manager (gtm)\n    const tagManagerArgs = {\n        gtmId: _config_config_json__WEBPACK_IMPORTED_MODULE_1__.params.tag_manager_id\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setTimeout(()=>{\n             false && 0;\n        }, 5000);\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"true\"\n                    }, void 0, false, {\n                        fileName: \"/home/feeco/Documents/io/pages/_app.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                        dangerouslySetInnerHTML: {\n                            __html: `${fontcss}`\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/feeco/Documents/io/pages/_app.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, maximum-scale=5\"\n                    }, void 0, false, {\n                        fileName: \"/home/feeco/Documents/io/pages/_app.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/feeco/Documents/io/pages/_app.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.Toaster, {\n                position: \"top-center\"\n            }, void 0, false, {\n                fileName: \"/home/feeco/Documents/io/pages/_app.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/feeco/Documents/io/pages/_app.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDRjtBQUNWO0FBQ2U7QUFDRjtBQUNmO0FBQ3NCO0FBRWpELE1BQU1RLE1BQU0sQ0FBQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUFLO0lBQ3hDLHNCQUFzQjtJQUV0Qix5QkFBeUI7SUFDekIsTUFBTUMsS0FBS1YseUVBQStCO0lBQzFDLE1BQU1jLEtBQUtkLDJFQUFpQztJQUM1QyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQTtJQUN0Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkZ0IsTUFDRSxDQUFDLHlDQUF5QyxFQUFFUixHQUFHLEVBQzdDSSxLQUFLLGFBQWFBLEtBQUssRUFBRSxDQUMxQixhQUFhLENBQUMsRUFDZkssSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksR0FBR0YsSUFBSSxDQUFDLENBQUNHLE1BQVFMLFdBQVdLO0lBQ3RELEdBQUc7UUFBQ1o7UUFBSUk7S0FBRztJQUVYLDJCQUEyQjtJQUMzQixNQUFNUyxpQkFBaUI7UUFDckJDLE9BQU96QixzRUFBNEI7SUFDckM7SUFDQUcsZ0RBQVNBLENBQUMsSUFBTTtRQUNkeUIsV0FBVyxJQUFNO1lBNUJyQixNQThCb0MsSUFDNUJ2QixDQUFxQ21CO1FBQ3pDLEdBQUc7SUFDSCx1REFBdUQ7SUFDekQsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDdEIsa0RBQUlBOztrQ0FFSCw4REFBQzRCO3dCQUNDQyxLQUFJO3dCQUNKQyxNQUFLO3dCQUNMQyxhQUFZOzs7Ozs7a0NBRWQsOERBQUNDO3dCQUNDQyx5QkFBeUI7NEJBQ3ZCQyxRQUFRLENBQUMsRUFBRW5CLFFBQVEsQ0FBQzt3QkFDdEI7Ozs7OztrQ0FHRiw4REFBQ29CO3dCQUNDQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNqQyxvREFBT0E7Z0JBQUNrQyxVQUFTOzs7Ozs7MEJBQ2xCLDhEQUFDL0I7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ3NwcmluZy1saWdodC1uZXh0anMvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiQGNvbmZpZy9jb25maWcuanNvblwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAY29uZmlnL3RoZW1lLmpzb25cIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUYWdNYW5hZ2VyIGZyb20gXCJyZWFjdC1ndG0tbW9kdWxlXCI7XG5pbXBvcnQgXCJzdHlsZXMvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgVG9hc3RlciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgLy8gZGVmYXVsdCB0aGVtZSBzZXR1cFxuXG4gIC8vIGltcG9ydCBnb29nbGUgZm9udCBjc3NcbiAgY29uc3QgcGYgPSB0aGVtZS5mb250cy5mb250X2ZhbWlseS5wcmltYXJ5O1xuICBjb25zdCBzZiA9IHRoZW1lLmZvbnRzLmZvbnRfZmFtaWx5LnNlY29uZGFyeTtcbiAgY29uc3QgW2ZvbnRjc3MsIHNldEZvbnRjc3NdID0gdXNlU3RhdGUoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PSR7cGZ9JHtcbiAgICAgICAgc2YgPyBcIiZmYW1pbHk9XCIgKyBzZiA6IFwiXCJcbiAgICAgIH0mZGlzcGxheT1zd2FwYFxuICAgICkudGhlbigocmVzKSA9PiByZXMudGV4dCgpLnRoZW4oKGNzcykgPT4gc2V0Rm9udGNzcyhjc3MpKSk7XG4gIH0sIFtwZiwgc2ZdKTtcblxuICAvLyBnb29nbGUgdGFnIG1hbmFnZXIgKGd0bSlcbiAgY29uc3QgdGFnTWFuYWdlckFyZ3MgPSB7XG4gICAgZ3RtSWQ6IGNvbmZpZy5wYXJhbXMudGFnX21hbmFnZXJfaWQsXG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgY29uZmlnLnBhcmFtcy50YWdfbWFuYWdlcl9pZCAmJlxuICAgICAgICBUYWdNYW5hZ2VyLmluaXRpYWxpemUodGFnTWFuYWdlckFyZ3MpO1xuICAgIH0sIDUwMDApO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICB7LyogZ29vZ2xlIGZvbnQgY3NzICovfVxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cInRydWVcIlxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGVcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBgJHtmb250Y3NzfWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgey8qIHJlc3BvbnNpdmUgbWV0YSAqL31cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT01XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxUb2FzdGVyIHBvc2l0aW9uPVwidG9wLWNlbnRlclwiIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiY29uZmlnIiwidGhlbWUiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWdNYW5hZ2VyIiwiVG9hc3RlciIsInRvYXN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicGYiLCJmb250cyIsImZvbnRfZmFtaWx5IiwicHJpbWFyeSIsInNmIiwic2Vjb25kYXJ5IiwiZm9udGNzcyIsInNldEZvbnRjc3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiY3NzIiwidGFnTWFuYWdlckFyZ3MiLCJndG1JZCIsInBhcmFtcyIsInRhZ19tYW5hZ2VyX2lkIiwic2V0VGltZW91dCIsImluaXRpYWxpemUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3NzT3JpZ2luIiwic3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-gtm-module":
/*!***********************************!*\
  !*** external "react-gtm-module" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-gtm-module");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"site":{"title":"Pulse Piont","base_url":"/","favicon":"/images/favicon.png","logo":"/images/logo.png","logo_width":"200","logo_height":"48","logo_text":"Pulse Point"},"settings":{"pagination":4,"summary_length":200,"blog_folder":"blogs"},"nav_button":{"enable":true,"label":"Get Started","link":"/contact"},"params":{"contact_form_action":"","tag_manager_id":"","footer_content":"Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.","copyright":"Designed and Developed By [Themefisher](https://themefisher.com/)"},"metadata":{"meta_author":"Themefisher","meta_image":"","meta_description":"A SAAS template for nextjs"}}');

/***/ }),

/***/ "./config/theme.json":
/*!***************************!*\
  !*** ./config/theme.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"colors":{"default":{"theme_color":{"primary":"#0aa8a7","body":"#fff","border":"#e9e9e9","theme_light":"#edf6f5"},"text_color":{"default":"#777","dark":"#222"}}},"fonts":{"font_family":{"primary":"Lato:wght@300;400;700","primary_type":"sans-serif"},"font_size":{"base":"16","scale":"1.250"}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();