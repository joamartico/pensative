(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[47],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js ***!
  \****************************************************************/
/*! exports provided: ion_img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ion_img\", function() { return Img; });\n/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ \"./node_modules/@ionic/core/dist/esm-es5/index-e806d1f6.js\");\n/* harmony import */ var _ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-9d5c8ee3.js */ \"./node_modules/@ionic/core/dist/esm-es5/ionic-global-9d5c8ee3.js\");\nvar imgCss=\":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}\";var Img=function(){function t(t){var e=this;Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this,t);this.ionImgWillLoad=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"e\"])(this,\"ionImgWillLoad\",7);this.ionImgDidLoad=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"e\"])(this,\"ionImgDidLoad\",7);this.ionError=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"e\"])(this,\"ionError\",7);this.onLoad=function(){e.ionImgDidLoad.emit()};this.onError=function(){e.ionError.emit()}}t.prototype.srcChanged=function(){this.addIO()};t.prototype.componentDidLoad=function(){this.addIO()};t.prototype.addIO=function(){var t=this;if(this.src===undefined){return}if(typeof window!==\"undefined\"&&\"IntersectionObserver\"in window&&\"IntersectionObserverEntry\"in window&&\"isIntersecting\"in window.IntersectionObserverEntry.prototype){this.removeIO();this.io=new IntersectionObserver((function(e){if(e[0].isIntersecting){t.load();t.removeIO()}}));this.io.observe(this.el)}else{setTimeout((function(){return t.load()}),200)}};t.prototype.load=function(){this.loadError=this.onError;this.loadSrc=this.src;this.ionImgWillLoad.emit()};t.prototype.removeIO=function(){if(this.io){this.io.disconnect();this.io=undefined}};t.prototype.render=function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],{class:Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__[\"b\"])(this)},Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"img\",{decoding:\"async\",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:\"image\"}))};Object.defineProperty(t.prototype,\"el\",{get:function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"i\"])(this)},enumerable:false,configurable:true});Object.defineProperty(t,\"watchers\",{get:function(){return{src:[\"srcChanged\"]}},enumerable:false,configurable:true});return t}();Img.style=imgCss;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS9pb24taW1nLmVudHJ5LmpzPzk1ODgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEosa0JBQWtCLGNBQWMsc0JBQXNCLG1CQUFtQixJQUFJLGNBQWMsV0FBVyxZQUFZLHNCQUFzQixtQkFBbUIsMkJBQTJCLHdCQUF3QixFQUFFLG1CQUFtQixjQUFjLFdBQVcsNERBQWdCLFNBQVMsb0JBQW9CLDREQUFXLDBCQUEwQixtQkFBbUIsNERBQVcseUJBQXlCLGNBQWMsNERBQVcsb0JBQW9CLHVCQUF1Qix3QkFBd0Isd0JBQXdCLG1CQUFtQixrQ0FBa0MsY0FBYyx3Q0FBd0MsY0FBYyw2QkFBNkIsV0FBVyx5QkFBeUIsT0FBTyxzS0FBc0ssZ0JBQWdCLDhDQUE4Qyx3QkFBd0IsU0FBUyxjQUFjLEdBQUcseUJBQXlCLEtBQUssdUJBQXVCLGdCQUFnQixTQUFTLDRCQUE0Qiw0QkFBNEIsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsWUFBWSxxQkFBcUIsb0JBQW9CLDhCQUE4QixPQUFPLDREQUFDLENBQUMsb0RBQUksRUFBRSxNQUFNLG1FQUFVLE9BQU8sQ0FBQyw0REFBQyxRQUFRLHNHQUFzRyxJQUFJLHdDQUF3QyxlQUFlLE9BQU8sNERBQVUsT0FBTyxvQ0FBb0MsRUFBRSxvQ0FBb0MsZUFBZSxPQUFPLG9CQUFvQixvQ0FBb0MsRUFBRSxTQUFTLEdBQUciLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1pbWcuZW50cnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7ciBhcyByZWdpc3Rlckluc3RhbmNlLGUgYXMgY3JlYXRlRXZlbnQsaCxIIGFzIEhvc3QsaSBhcyBnZXRFbGVtZW50fWZyb21cIi4vaW5kZXgtZTgwNmQxZjYuanNcIjtpbXBvcnR7YiBhcyBnZXRJb25Nb2RlfWZyb21cIi4vaW9uaWMtZ2xvYmFsLTlkNWM4ZWUzLmpzXCI7dmFyIGltZ0Nzcz1cIjpob3N0e2Rpc3BsYXk6YmxvY2s7LW8tb2JqZWN0LWZpdDpjb250YWluO29iamVjdC1maXQ6Y29udGFpbn1pbWd7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy1vLW9iamVjdC1maXQ6aW5oZXJpdDtvYmplY3QtZml0OmluaGVyaXQ7LW8tb2JqZWN0LXBvc2l0aW9uOmluaGVyaXQ7b2JqZWN0LXBvc2l0aW9uOmluaGVyaXR9XCI7dmFyIEltZz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dmFyIGU9dGhpcztyZWdpc3Rlckluc3RhbmNlKHRoaXMsdCk7dGhpcy5pb25JbWdXaWxsTG9hZD1jcmVhdGVFdmVudCh0aGlzLFwiaW9uSW1nV2lsbExvYWRcIiw3KTt0aGlzLmlvbkltZ0RpZExvYWQ9Y3JlYXRlRXZlbnQodGhpcyxcImlvbkltZ0RpZExvYWRcIiw3KTt0aGlzLmlvbkVycm9yPWNyZWF0ZUV2ZW50KHRoaXMsXCJpb25FcnJvclwiLDcpO3RoaXMub25Mb2FkPWZ1bmN0aW9uKCl7ZS5pb25JbWdEaWRMb2FkLmVtaXQoKX07dGhpcy5vbkVycm9yPWZ1bmN0aW9uKCl7ZS5pb25FcnJvci5lbWl0KCl9fXQucHJvdG90eXBlLnNyY0NoYW5nZWQ9ZnVuY3Rpb24oKXt0aGlzLmFkZElPKCl9O3QucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQ9ZnVuY3Rpb24oKXt0aGlzLmFkZElPKCl9O3QucHJvdG90eXBlLmFkZElPPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztpZih0aGlzLnNyYz09PXVuZGVmaW5lZCl7cmV0dXJufWlmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiJiZcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3cmJlwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVwiaW4gd2luZG93JiZcImlzSW50ZXJzZWN0aW5nXCJpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUpe3RoaXMucmVtb3ZlSU8oKTt0aGlzLmlvPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZnVuY3Rpb24oZSl7aWYoZVswXS5pc0ludGVyc2VjdGluZyl7dC5sb2FkKCk7dC5yZW1vdmVJTygpfX0pKTt0aGlzLmlvLm9ic2VydmUodGhpcy5lbCl9ZWxzZXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe3JldHVybiB0LmxvYWQoKX0pLDIwMCl9fTt0LnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKCl7dGhpcy5sb2FkRXJyb3I9dGhpcy5vbkVycm9yO3RoaXMubG9hZFNyYz10aGlzLnNyYzt0aGlzLmlvbkltZ1dpbGxMb2FkLmVtaXQoKX07dC5wcm90b3R5cGUucmVtb3ZlSU89ZnVuY3Rpb24oKXtpZih0aGlzLmlvKXt0aGlzLmlvLmRpc2Nvbm5lY3QoKTt0aGlzLmlvPXVuZGVmaW5lZH19O3QucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3JldHVybiBoKEhvc3Qse2NsYXNzOmdldElvbk1vZGUodGhpcyl9LGgoXCJpbWdcIix7ZGVjb2Rpbmc6XCJhc3luY1wiLHNyYzp0aGlzLmxvYWRTcmMsYWx0OnRoaXMuYWx0LG9uTG9hZDp0aGlzLm9uTG9hZCxvbkVycm9yOnRoaXMubG9hZEVycm9yLHBhcnQ6XCJpbWFnZVwifSkpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJlbFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZ2V0RWxlbWVudCh0aGlzKX0sZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwid2F0Y2hlcnNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJue3NyYzpbXCJzcmNDaGFuZ2VkXCJdfX0sZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZX0pO3JldHVybiB0fSgpO0ltZy5zdHlsZT1pbWdDc3M7ZXhwb3J0e0ltZyBhcyBpb25faW1nfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js\n");

/***/ })

}]);