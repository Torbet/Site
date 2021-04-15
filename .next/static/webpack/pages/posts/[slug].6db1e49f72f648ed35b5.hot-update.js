webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].jsx":
/*!********************************!*\
  !*** ./pages/posts/[slug].jsx ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_postlayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/postlayout */ \"./layouts/postlayout.jsx\");\n/* harmony import */ var _components_codeblock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/codeblock */ \"./components/codeblock.jsx\");\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/image */ \"./components/image.jsx\");\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/index */ \"./api/index.js\");\n\nvar _jsxFileName = \"/Users/guy/Development/Web/Site/pages/posts/[slug].jsx\";\n\n\n\n\n\n\nfunction Post(props) {\n  var input = '# This is a header\\n\\nAnd this is a paragraph';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_postlayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: props.title,\n      date: Object(_api_index__WEBPACK_IMPORTED_MODULE_5__[\"formatDate\"])(props.date),\n      description: props.description,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        children: props.content,\n        renderers: {\n          code: _components_codeblock__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\n\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzeD8yNTRjIl0sIm5hbWVzIjpbIlBvc3QiLCJwcm9wcyIsImlucHV0IiwidGl0bGUiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsImNvZGUiLCJDb2RlQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUVqQixNQUFNQyxLQUFLLEdBQUcsK0NBQWQ7QUFFQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDJEQUFEO0FBQVksV0FBSyxFQUFFRCxLQUFLLENBQUNFLEtBQXpCO0FBQWdDLFVBQUksRUFBRUMsNkRBQVUsQ0FBQ0gsS0FBSyxDQUFDSSxJQUFQLENBQWhEO0FBQThELGlCQUFXLEVBQUVKLEtBQUssQ0FBQ0ssV0FBakY7QUFBQSw2QkFDSSxxRUFBQyxxREFBRDtBQUFlLGdCQUFRLEVBQUVMLEtBQUssQ0FBQ00sT0FBL0I7QUFBd0MsaUJBQVMsRUFBRTtBQUFDQyxjQUFJLEVBQUVDLDZEQUFTQTtBQUFoQjtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztLQVhRVCxJOztBQTZCTUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5cbmltcG9ydCBQb3N0TGF5b3V0IGZyb20gJy4uLy4uL2xheW91dHMvcG9zdGxheW91dCdcblxuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb2RlYmxvY2tcIjtcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ltYWdlJ1xuXG5pbXBvcnQgeyBmb3JtYXREYXRlLCBnZXRQb3N0QnlTbHVnLCBnZXRQb3N0cyB9IGZyb20gJy4uLy4uL2FwaS9pbmRleCdcblxuZnVuY3Rpb24gUG9zdChwcm9wcykge1xuXG4gICAgY29uc3QgaW5wdXQgPSAnIyBUaGlzIGlzIGEgaGVhZGVyXFxuXFxuQW5kIHRoaXMgaXMgYSBwYXJhZ3JhcGgnXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxQb3N0TGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGF0ZT17Zm9ybWF0RGF0ZShwcm9wcy5kYXRlKX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBjaGlsZHJlbj17cHJvcHMuY29udGVudH0gcmVuZGVyZXJzPXt7Y29kZTogQ29kZUJsb2NrfX0gLz5cbiAgICAgICAgICAgIDwvUG9zdExheW91dD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiBhd2FpdCBnZXRQb3N0QnlTbHVnKGNvbnRleHQucGFyYW1zLnNsdWcpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcbiAgICBsZXQgcGF0aHMgPSBhd2FpdCBnZXRQb3N0cygpXG4gICAgcGF0aHMgPSBwYXRocy5tYXAocG9zdCA9PiAoe1xuICAgICAgICBwYXJhbXM6IHsgc2x1Zzpwb3N0LnNsdWcgfVxuICAgIH0pKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRoczogcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].jsx\n");

/***/ })

})