module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2luZGV4LmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.css\n");

/***/ }),

/***/ "./node_modules/@ionic/core/css/core.css":
/*!***********************************************!*\
  !*** ./node_modules/@ionic/core/css/core.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvY29yZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/css/core.css\n");

/***/ }),

/***/ "./node_modules/@ionic/core/css/display.css":
/*!**************************************************!*\
  !*** ./node_modules/@ionic/core/css/display.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvZGlzcGxheS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/css/display.css\n");

/***/ }),

/***/ "./node_modules/@ionic/core/css/flex-utils.css":
/*!*****************************************************!*\
  !*** ./node_modules/@ionic/core/css/flex-utils.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvZmxleC11dGlscy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/css/flex-utils.css\n");

/***/ }),

/***/ "./node_modules/@ionic/core/css/float-elements.css":
/*!*********************************************************!*\
  !*** ./node_modules/@ionic/core/css/float-elements.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvZmxvYXQtZWxlbWVudHMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/css/float-elements.css\n");

/***/ }),

/***/ "./node_modules/@ionic/core/css/normalize.css":
/*!****************************************************!*\
  !*** ./node_modules/@ionic/core/css/normalize.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3Mvbm9ybWFsaXplLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/css/normalize.css\n");

/***/ }),

/***/ "./node_modules/@ionic/core/css/padding.css":
/*!**************************************************!*\
  !*** ./node_modules/@ionic/core/css/padding.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvcGFkZGluZy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/css/padding.css\n");

/***/ }),

/***/ "./node_modules/@ionic/core/css/structure.css":
/*!****************************************************!*\
  !*** ./node_modules/@ionic/core/css/structure.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3Mvc3RydWN0dXJlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/css/structure.css\n");

/***/ }),

/***/ "./node_modules/@ionic/core/css/text-alignment.css":
/*!*********************************************************!*\
  !*** ./node_modules/@ionic/core/css/text-alignment.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/css/text-alignment.css\n");

/***/ }),

/***/ "./node_modules/@ionic/core/css/text-transformation.css":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/css/text-transformation.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/css/text-transformation.css\n");

/***/ }),

/***/ "./node_modules/@ionic/core/css/typography.css":
/*!*****************************************************!*\
  !*** ./node_modules/@ionic/core/css/typography.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvdHlwb2dyYXBoeS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/css/typography.css\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ionic_core_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/core/loader */ \"@ionic/core/loader\");\n/* harmony import */ var _ionic_core_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ionic_core_css_core_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/core/css/core.css */ \"./node_modules/@ionic/core/css/core.css\");\n/* harmony import */ var _ionic_core_css_core_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_core_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ionic_core_css_normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/core/css/normalize.css */ \"./node_modules/@ionic/core/css/normalize.css\");\n/* harmony import */ var _ionic_core_css_normalize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_normalize_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ionic_core_css_structure_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/core/css/structure.css */ \"./node_modules/@ionic/core/css/structure.css\");\n/* harmony import */ var _ionic_core_css_structure_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_structure_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ionic_core_css_typography_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/core/css/typography.css */ \"./node_modules/@ionic/core/css/typography.css\");\n/* harmony import */ var _ionic_core_css_typography_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_typography_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ionic_core_css_padding_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/core/css/padding.css */ \"./node_modules/@ionic/core/css/padding.css\");\n/* harmony import */ var _ionic_core_css_padding_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_padding_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ionic_core_css_float_elements_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/core/css/float-elements.css */ \"./node_modules/@ionic/core/css/float-elements.css\");\n/* harmony import */ var _ionic_core_css_float_elements_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_float_elements_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ionic_core_css_text_alignment_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/core/css/text-alignment.css */ \"./node_modules/@ionic/core/css/text-alignment.css\");\n/* harmony import */ var _ionic_core_css_text_alignment_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_text_alignment_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _ionic_core_css_text_transformation_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/core/css/text-transformation.css */ \"./node_modules/@ionic/core/css/text-transformation.css\");\n/* harmony import */ var _ionic_core_css_text_transformation_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_text_transformation_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _ionic_core_css_flex_utils_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/core/css/flex-utils.css */ \"./node_modules/@ionic/core/css/flex-utils.css\");\n/* harmony import */ var _ionic_core_css_flex_utils_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_flex_utils_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _ionic_core_css_display_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/core/css/display.css */ \"./node_modules/@ionic/core/css/display.css\");\n/* harmony import */ var _ionic_core_css_display_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_display_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);\n\n\nvar _jsxFileName = \"/Users/Joa/Desktop/React/NextJs/pensative/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* Core CSS required for Ionic components to work properly */\n\n\n/* Basic CSS for apps built with Ionic */\n\n\n\n\n/* Optional CSS utils that can be commented out */\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  console.log(\"NO UseEffect\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    Object(_ionic_core_loader__WEBPACK_IMPORTED_MODULE_2__[\"defineCustomElements\"])(window); // customElements.get('test-page') || customElements.define('test-page', Test);\n\n    console.log(\"_app UseEffect\"); // if ('serviceWorker' in navigator) {\n    // \twindow.addEventListener('load', function () {\n    // \t  navigator.serviceWorker\n    // \t\t.register('sw.js')\n    // \t\t.then(function (info) {\n    // \t\t  // console.info('Registered service-worker', info);\n    // \t\t})\n    // \t\t.catch(function (error) {\n    // \t\t  console.info('Failed to register service-worker', error);\n    // \t\t});\n    // \t});\n    //   }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        httpEquiv: \"X-UA-Compatible\",\n        content: \"IE=edge\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Pensative\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"google-site-verification\",\n        content: \"3XoSVdS7QLQWutddbE1sJ60XT3mFR-WXrP80V4AharU\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"keywords\",\n        content: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"mobile-web-app-capable\",\n        content: \"yes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"apple-mobile-web-app-capable\",\n        content: \"yes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"apple-mobile-web-app-status-bar-style\",\n        content: \"black-translucent\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"manifest\",\n        href: \"/manifest.json\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-icon\",\n        href: \"/apple-icon-180.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-2048-2732.jpg\",\n        media: \"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-2732-2048.jpg\",\n        media: \"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1668-2388.jpg\",\n        media: \"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-2388-1668.jpg\",\n        media: \"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1536-2048.jpg\",\n        media: \"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-2048-1536.jpg\",\n        media: \"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1668-2224.jpg\",\n        media: \"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-2224-1668.jpg\",\n        media: \"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1620-2160.jpg\",\n        media: \"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-2160-1620.jpg\",\n        media: \"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1284-2778.jpg\",\n        media: \"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-2778-1284.jpg\",\n        media: \"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1170-2532.jpg\",\n        media: \"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-2532-1170.jpg\",\n        media: \"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1125-2436.jpg\",\n        media: \"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-2436-1125.jpg\",\n        media: \"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1242-2688.jpg\",\n        media: \"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-2688-1242.jpg\",\n        media: \"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-828-1792.jpg\",\n        media: \"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1792-828.jpg\",\n        media: \"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 170,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1242-2208.jpg\",\n        media: \"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-2208-1242.jpg\",\n        media: \"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 180,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-750-1334.jpg\",\n        media: \"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 185,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1334-750.jpg\",\n        media: \"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 190,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-640-1136.jpg\",\n        media: \"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 195,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-startup-image\",\n        href: \"/apple-splash-1136-640.jpg\",\n        media: \"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 200,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ion-app\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 214,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 207,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImlvbkRlZmluZUN1c3RvbUVsZW1lbnRzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNmQyxtRkFBdUIsQ0FBQ0MsTUFBRCxDQUF2QixDQURlLENBR2Y7O0FBRUFKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBTGUsQ0FPZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQW5CUSxDQUFUO0FBc0JBLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsaURBQUQ7QUFBQSw4QkFDQztBQUFNLGlCQUFTLEVBQUMsaUJBQWhCO0FBQWtDLGVBQU8sRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpELGVBS0M7QUFBTSxZQUFJLEVBQUMsMEJBQVg7QUFBc0MsZUFBTyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRCxlQU1DO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORCxlQU9DO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFB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QTtBQUFBO0FBQUEsY0F2SUQsZUE0SUM7QUFDQyxXQUFHLEVBQUMsMkJBREw7QUFFQyxZQUFJLEVBQUMsNEJBRk47QUFHQyxhQUFLLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUlELGVBaUpDO0FBQ0MsV0FBRyxFQUFDLDJCQURMO0FBRUMsWUFBSSxFQUFDLDRCQUZOO0FBR0MsYUFBSyxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpKRCxlQXNKQztBQUNDLFdBQUcsRUFBQywyQkFETDtBQUVDLFlBQUksRUFBQyw0QkFGTjtBQUdDLGFBQUssRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0SkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUE4SkM7QUFBQSw2QkFPQyxxRUFBQyxTQUFELG9CQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUpEO0FBQUEsa0JBREQ7QUEwS0E7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50cyBhcyBpb25EZWZpbmVDdXN0b21FbGVtZW50cyB9IGZyb20gXCJAaW9uaWMvY29yZS9sb2FkZXJcIjtcblxuLyogQ29yZSBDU1MgcmVxdWlyZWQgZm9yIElvbmljIGNvbXBvbmVudHMgdG8gd29yayBwcm9wZXJseSAqL1xuaW1wb3J0IFwiQGlvbmljL2NvcmUvY3NzL2NvcmUuY3NzXCI7XG5cbi8qIEJhc2ljIENTUyBmb3IgYXBwcyBidWlsdCB3aXRoIElvbmljICovXG5pbXBvcnQgXCJAaW9uaWMvY29yZS9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiQGlvbmljL2NvcmUvY3NzL3N0cnVjdHVyZS5jc3NcIjtcbmltcG9ydCBcIkBpb25pYy9jb3JlL2Nzcy90eXBvZ3JhcGh5LmNzc1wiO1xuXG4vKiBPcHRpb25hbCBDU1MgdXRpbHMgdGhhdCBjYW4gYmUgY29tbWVudGVkIG91dCAqL1xuaW1wb3J0IFwiQGlvbmljL2NvcmUvY3NzL3BhZGRpbmcuY3NzXCI7XG5pbXBvcnQgXCJAaW9uaWMvY29yZS9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5pbXBvcnQgXCJAaW9uaWMvY29yZS9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzXCI7XG5pbXBvcnQgXCJAaW9uaWMvY29yZS9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3NcIjtcbmltcG9ydCBcIkBpb25pYy9jb3JlL2Nzcy9mbGV4LXV0aWxzLmNzc1wiO1xuaW1wb3J0IFwiQGlvbmljL2NvcmUvY3NzL2Rpc3BsYXkuY3NzXCI7XG5pbXBvcnQgXCIuLi9pbmRleC5jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBUZXN0IGZyb20gJy4uL3NjcmVlbnMvVGVzdCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXHRjb25zb2xlLmxvZyhcIk5PIFVzZUVmZmVjdFwiKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aW9uRGVmaW5lQ3VzdG9tRWxlbWVudHMod2luZG93KTtcblxuXHRcdC8vIGN1c3RvbUVsZW1lbnRzLmdldCgndGVzdC1wYWdlJykgfHwgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0ZXN0LXBhZ2UnLCBUZXN0KTtcblxuXHRcdGNvbnNvbGUubG9nKFwiX2FwcCBVc2VFZmZlY3RcIilcblxuXHRcdC8vIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG5cdFx0Ly8gXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdCAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcblx0XHQvLyBcdFx0LnJlZ2lzdGVyKCdzdy5qcycpXG5cdFx0Ly8gXHRcdC50aGVuKGZ1bmN0aW9uIChpbmZvKSB7XG5cdFx0Ly8gXHRcdCAgLy8gY29uc29sZS5pbmZvKCdSZWdpc3RlcmVkIHNlcnZpY2Utd29ya2VyJywgaW5mbyk7XG5cdFx0Ly8gXHRcdH0pXG5cdFx0Ly8gXHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHQvLyBcdFx0ICBjb25zb2xlLmluZm8oJ0ZhaWxlZCB0byByZWdpc3RlciBzZXJ2aWNlLXdvcmtlcicsIGVycm9yKTtcblx0XHQvLyBcdFx0fSk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyAgIH1cblx0fSk7XG5cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuXG5cdFx0XHRcdHsvKiBTRU8gICovfVxuXHRcdFx0XHQ8dGl0bGU+UGVuc2F0aXZlPC90aXRsZT5cblx0XHRcdFx0PG1ldGEgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9XCIzWG9TVmRTN1FMUVd1dGRkYkUxc0o2MFhUM21GUi1XWHJQODBWNEFoYXJVXCIgLz5cblx0XHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJcIiAvPlxuXG5cdFx0XHRcdHsvKiAgUFdBICAqL31cblx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWluaW11bS1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB2aWV3cG9ydC1maXQ9Y292ZXIsIHVzZXItc2NhbGFibGU9bm9cIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuXHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlXCJcblx0XHRcdFx0XHRjb250ZW50PVwiYmxhY2stdHJhbnNsdWNlbnRcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XG5cblx0XHRcdFx0ey8qIElDT05TICovfVxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL2FwcGxlLWljb24tMTgwLnBuZ1wiIC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtMjA0OC0yNzMyLmpwZ1wiXG5cdFx0XHRcdFx0bWVkaWE9XCIoZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogMTM2NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdHJlbD1cImFwcGxlLXRvdWNoLXN0YXJ0dXAtaW1hZ2VcIlxuXHRcdFx0XHRcdGhyZWY9XCIvYXBwbGUtc3BsYXNoLTI3MzItMjA0OC5qcGdcIlxuXHRcdFx0XHRcdG1lZGlhPVwiKGRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDEzNjZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtMTY2OC0yMzg4LmpwZ1wiXG5cdFx0XHRcdFx0bWVkaWE9XCIoZGV2aWNlLXdpZHRoOiA4MzRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiAxMTk0cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtMjM4OC0xNjY4LmpwZ1wiXG5cdFx0XHRcdFx0bWVkaWE9XCIoZGV2aWNlLXdpZHRoOiA4MzRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiAxMTk0cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdHJlbD1cImFwcGxlLXRvdWNoLXN0YXJ0dXAtaW1hZ2VcIlxuXHRcdFx0XHRcdGhyZWY9XCIvYXBwbGUtc3BsYXNoLTE1MzYtMjA0OC5qcGdcIlxuXHRcdFx0XHRcdG1lZGlhPVwiKGRldmljZS13aWR0aDogNzY4cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogMTAyNHB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdHJlbD1cImFwcGxlLXRvdWNoLXN0YXJ0dXAtaW1hZ2VcIlxuXHRcdFx0XHRcdGhyZWY9XCIvYXBwbGUtc3BsYXNoLTIwNDgtMTUzNi5qcGdcIlxuXHRcdFx0XHRcdG1lZGlhPVwiKGRldmljZS13aWR0aDogNzY4cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogMTAyNHB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRyZWw9XCJhcHBsZS10b3VjaC1zdGFydHVwLWltYWdlXCJcblx0XHRcdFx0XHRocmVmPVwiL2FwcGxlLXNwbGFzaC0xNjY4LTIyMjQuanBnXCJcblx0XHRcdFx0XHRtZWRpYT1cIihkZXZpY2Utd2lkdGg6IDgzNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDExMTJweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRyZWw9XCJhcHBsZS10b3VjaC1zdGFydHVwLWltYWdlXCJcblx0XHRcdFx0XHRocmVmPVwiL2FwcGxlLXNwbGFzaC0yMjI0LTE2NjguanBnXCJcblx0XHRcdFx0XHRtZWRpYT1cIihkZXZpY2Utd2lkdGg6IDgzNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDExMTJweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtMTYyMC0yMTYwLmpwZ1wiXG5cdFx0XHRcdFx0bWVkaWE9XCIoZGV2aWNlLXdpZHRoOiA4MTBweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiAxMDgwcHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtMjE2MC0xNjIwLmpwZ1wiXG5cdFx0XHRcdFx0bWVkaWE9XCIoZGV2aWNlLXdpZHRoOiA4MTBweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiAxMDgwcHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdHJlbD1cImFwcGxlLXRvdWNoLXN0YXJ0dXAtaW1hZ2VcIlxuXHRcdFx0XHRcdGhyZWY9XCIvYXBwbGUtc3BsYXNoLTEyODQtMjc3OC5qcGdcIlxuXHRcdFx0XHRcdG1lZGlhPVwiKGRldmljZS13aWR0aDogNDI4cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogOTI2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtMjc3OC0xMjg0LmpwZ1wiXG5cdFx0XHRcdFx0bWVkaWE9XCIoZGV2aWNlLXdpZHRoOiA0MjhweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA5MjZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtMTE3MC0yNTMyLmpwZ1wiXG5cdFx0XHRcdFx0bWVkaWE9XCIoZGV2aWNlLXdpZHRoOiAzOTBweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA4NDRweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRyZWw9XCJhcHBsZS10b3VjaC1zdGFydHVwLWltYWdlXCJcblx0XHRcdFx0XHRocmVmPVwiL2FwcGxlLXNwbGFzaC0yNTMyLTExNzAuanBnXCJcblx0XHRcdFx0XHRtZWRpYT1cIihkZXZpY2Utd2lkdGg6IDM5MHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDg0NHB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRyZWw9XCJhcHBsZS10b3VjaC1zdGFydHVwLWltYWdlXCJcblx0XHRcdFx0XHRocmVmPVwiL2FwcGxlLXNwbGFzaC0xMTI1LTI0MzYuanBnXCJcblx0XHRcdFx0XHRtZWRpYT1cIihkZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDgxMnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdHJlbD1cImFwcGxlLXRvdWNoLXN0YXJ0dXAtaW1hZ2VcIlxuXHRcdFx0XHRcdGhyZWY9XCIvYXBwbGUtc3BsYXNoLTI0MzYtMTEyNS5qcGdcIlxuXHRcdFx0XHRcdG1lZGlhPVwiKGRldmljZS13aWR0aDogMzc1cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogODEycHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdHJlbD1cImFwcGxlLXRvdWNoLXN0YXJ0dXAtaW1hZ2VcIlxuXHRcdFx0XHRcdGhyZWY9XCIvYXBwbGUtc3BsYXNoLTEyNDItMjY4OC5qcGdcIlxuXHRcdFx0XHRcdG1lZGlhPVwiKGRldmljZS13aWR0aDogNDE0cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtMjY4OC0xMjQyLmpwZ1wiXG5cdFx0XHRcdFx0bWVkaWE9XCIoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtODI4LTE3OTIuanBnXCJcblx0XHRcdFx0XHRtZWRpYT1cIihkZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdHJlbD1cImFwcGxlLXRvdWNoLXN0YXJ0dXAtaW1hZ2VcIlxuXHRcdFx0XHRcdGhyZWY9XCIvYXBwbGUtc3BsYXNoLTE3OTItODI4LmpwZ1wiXG5cdFx0XHRcdFx0bWVkaWE9XCIoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtMTI0Mi0yMjA4LmpwZ1wiXG5cdFx0XHRcdFx0bWVkaWE9XCIoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA3MzZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRyZWw9XCJhcHBsZS10b3VjaC1zdGFydHVwLWltYWdlXCJcblx0XHRcdFx0XHRocmVmPVwiL2FwcGxlLXNwbGFzaC0yMjA4LTEyNDIuanBnXCJcblx0XHRcdFx0XHRtZWRpYT1cIihkZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDczNnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRyZWw9XCJhcHBsZS10b3VjaC1zdGFydHVwLWltYWdlXCJcblx0XHRcdFx0XHRocmVmPVwiL2FwcGxlLXNwbGFzaC03NTAtMTMzNC5qcGdcIlxuXHRcdFx0XHRcdG1lZGlhPVwiKGRldmljZS13aWR0aDogMzc1cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogNjY3cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtMTMzNC03NTAuanBnXCJcblx0XHRcdFx0XHRtZWRpYT1cIihkZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDY2N3B4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRyZWw9XCJhcHBsZS10b3VjaC1zdGFydHVwLWltYWdlXCJcblx0XHRcdFx0XHRocmVmPVwiL2FwcGxlLXNwbGFzaC02NDAtMTEzNi5qcGdcIlxuXHRcdFx0XHRcdG1lZGlhPVwiKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0cmVsPVwiYXBwbGUtdG91Y2gtc3RhcnR1cC1pbWFnZVwiXG5cdFx0XHRcdFx0aHJlZj1cIi9hcHBsZS1zcGxhc2gtMTEzNi02NDAuanBnXCJcblx0XHRcdFx0XHRtZWRpYT1cIihkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PGlvbi1hcHA+XG5cblxuXHRcdFx0XHR7LyogPGlvbi1yb3V0ZXIgdXNlLWhhc2g9e2ZhbHNlfT5cblx0XHRcdFx0XHQ8aW9uLXJvdXRlIHVybD1cIi90ZXN0XCIgY29tcG9uZW50PVwidGVzdC1wYWdlXCIgLz5cblx0XHRcdFx0PC9pb24tcm91dGVyPiAqL31cblxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHQ8L2lvbi1hcHA+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@ionic/core/loader":
/*!*************************************!*\
  !*** external "@ionic/core/loader" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ionic/core/loader\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAaW9uaWMvY29yZS9sb2FkZXJcIj85ZTY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBpb25pYy9jb3JlL2xvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBpb25pYy9jb3JlL2xvYWRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ionic/core/loader\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });