(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[34],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_avatar, ion_badge, ion_thumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ion_avatar\", function() { return Avatar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ion_badge\", function() { return Badge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ion_thumbnail\", function() { return Thumbnail; });\n/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ \"./node_modules/@ionic/core/dist/esm-es5/index-e806d1f6.js\");\n/* harmony import */ var _ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-9d5c8ee3.js */ \"./node_modules/@ionic/core/dist/esm-es5/ionic-global-9d5c8ee3.js\");\n/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ \"./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js\");\nvar avatarIosCss=\":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}\";var avatarMdCss=\":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}\";var Avatar=function(){function t(t){Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this,t)}t.prototype.render=function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],{class:Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__[\"b\"])(this)},Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"slot\",null))};return t}();Avatar.style={ios:avatarIosCss,md:avatarMdCss};var badgeIosCss=\":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px}\";var badgeMdCss=\":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}\";var Badge=function(){function t(t){Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this,t)}t.prototype.render=function(){var t;var a=Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__[\"b\"])(this);return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],{class:Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__[\"c\"])(this.color,(t={},t[a]=true,t))},Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"slot\",null))};return t}();Badge.style={ios:badgeIosCss,md:badgeMdCss};var thumbnailCss=\":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}\";var Thumbnail=function(){function t(t){Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this,t)}t.prototype.render=function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],{class:Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__[\"b\"])(this)},Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"slot\",null))};return t}();Thumbnail.style=thumbnailCss;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS9pb24tYXZhdGFyXzMuZW50cnkuanM/Y2YxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvTCx3QkFBd0IsbUNBQW1DLGNBQWMsa0NBQWtDLG1DQUFtQyxXQUFXLFlBQVksb0JBQW9CLGlCQUFpQixnQkFBZ0IsTUFBTSxvQkFBb0IsV0FBVyxZQUFZLEVBQUUsdUJBQXVCLG1DQUFtQyxjQUFjLGtDQUFrQyxtQ0FBbUMsV0FBVyxZQUFZLG9CQUFvQixpQkFBaUIsZ0JBQWdCLE1BQU0sb0JBQW9CLFdBQVcsWUFBWSxFQUFFLHNCQUFzQixjQUFjLDREQUFnQixTQUFTLDhCQUE4QixPQUFPLDREQUFDLENBQUMsb0RBQUksRUFBRSxNQUFNLG1FQUFVLE9BQU8sQ0FBQyw0REFBQyxnQkFBZ0IsU0FBUyxHQUFHLGNBQWMsaUNBQWlDLHVCQUF1QiwrQ0FBK0MsZ0RBQWdELGtCQUFrQixrQkFBa0IscUJBQXFCLG9CQUFvQixrQ0FBa0MsbUNBQW1DLGtDQUFrQyxpQ0FBaUMsK0JBQStCLHFDQUFxQyxxQkFBcUIsZUFBZSw2QkFBNkIsbUJBQW1CLDRDQUE0QyxlQUFlLGlCQUFpQixjQUFjLGtCQUFrQixtQkFBbUIsZ0JBQWdCLHdCQUF3QiwrRkFBK0YsTUFBTSxtQkFBbUIsb0JBQW9CLDJDQUEyQywwQ0FBMEMsdUNBQXVDLHVDQUF1QyxrQkFBa0IsaUNBQWlDLGdDQUFnQyxjQUFjLGFBQWEsTUFBTSxtQkFBbUIsRUFBRSxzQkFBc0IsK0NBQStDLGdEQUFnRCxrQkFBa0Isa0JBQWtCLHFCQUFxQixvQkFBb0Isa0NBQWtDLG1DQUFtQyxrQ0FBa0MsaUNBQWlDLCtCQUErQixxQ0FBcUMscUJBQXFCLGVBQWUsNkJBQTZCLG1CQUFtQiw0Q0FBNEMsZUFBZSxpQkFBaUIsY0FBYyxrQkFBa0IsbUJBQW1CLGdCQUFnQix3QkFBd0IsK0ZBQStGLE1BQU0sbUJBQW1CLG9CQUFvQiwyQ0FBMkMsMENBQTBDLHVDQUF1Qyx1Q0FBdUMsa0JBQWtCLGlDQUFpQyxnQ0FBZ0MsY0FBYyxhQUFhLE1BQU0sa0JBQWtCLGtCQUFrQixxQkFBcUIsb0JBQW9CLGtCQUFrQixFQUFFLHFCQUFxQixjQUFjLDREQUFnQixTQUFTLDhCQUE4QixNQUFNLE1BQU0sbUVBQVUsT0FBTyxPQUFPLDREQUFDLENBQUMsb0RBQUksRUFBRSxNQUFNLDREQUFrQixpQkFBaUIsZUFBZSxDQUFDLDREQUFDLGdCQUFnQixTQUFTLEdBQUcsYUFBYSwrQkFBK0Isd0JBQXdCLFlBQVksa0JBQWtCLG1DQUFtQyxjQUFjLGtCQUFrQixtQkFBbUIsa0NBQWtDLG1DQUFtQyxXQUFXLFlBQVksb0JBQW9CLGlCQUFpQixnQkFBZ0IsRUFBRSx5QkFBeUIsY0FBYyw0REFBZ0IsU0FBUyw4QkFBOEIsT0FBTyw0REFBQyxDQUFDLG9EQUFJLEVBQUUsTUFBTSxtRUFBVSxPQUFPLENBQUMsNERBQUMsZ0JBQWdCLFNBQVMsR0FBRyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvaW9uLWF2YXRhcl8zLmVudHJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e3IgYXMgcmVnaXN0ZXJJbnN0YW5jZSxoLEggYXMgSG9zdH1mcm9tXCIuL2luZGV4LWU4MDZkMWY2LmpzXCI7aW1wb3J0e2IgYXMgZ2V0SW9uTW9kZX1mcm9tXCIuL2lvbmljLWdsb2JhbC05ZDVjOGVlMy5qc1wiO2ltcG9ydHtjIGFzIGNyZWF0ZUNvbG9yQ2xhc3Nlc31mcm9tXCIuL3RoZW1lLWZmM2ZjNTJmLmpzXCI7dmFyIGF2YXRhcklvc0Nzcz1cIjpob3N0e2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTpibG9ja306OnNsb3R0ZWQoaW9uLWltZyksOjpzbG90dGVkKGltZyl7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy1vLW9iamVjdC1maXQ6Y292ZXI7b2JqZWN0LWZpdDpjb3ZlcjtvdmVyZmxvdzpoaWRkZW59Omhvc3R7LS1ib3JkZXItcmFkaXVzOjUwJTt3aWR0aDo0OHB4O2hlaWdodDo0OHB4fVwiO3ZhciBhdmF0YXJNZENzcz1cIjpob3N0e2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTpibG9ja306OnNsb3R0ZWQoaW9uLWltZyksOjpzbG90dGVkKGltZyl7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy1vLW9iamVjdC1maXQ6Y292ZXI7b2JqZWN0LWZpdDpjb3ZlcjtvdmVyZmxvdzpoaWRkZW59Omhvc3R7LS1ib3JkZXItcmFkaXVzOjUwJTt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fVwiO3ZhciBBdmF0YXI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JlZ2lzdGVySW5zdGFuY2UodGhpcyx0KX10LnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXtyZXR1cm4gaChIb3N0LHtjbGFzczpnZXRJb25Nb2RlKHRoaXMpfSxoKFwic2xvdFwiLG51bGwpKX07cmV0dXJuIHR9KCk7QXZhdGFyLnN0eWxlPXtpb3M6YXZhdGFySW9zQ3NzLG1kOmF2YXRhck1kQ3NzfTt2YXIgYmFkZ2VJb3NDc3M9XCI6aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpOy0tcGFkZGluZy10b3A6M3B4Oy0tcGFkZGluZy1lbmQ6OHB4Oy0tcGFkZGluZy1ib3R0b206M3B4Oy0tcGFkZGluZy1zdGFydDo4cHg7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWluLXdpZHRoOjEwcHg7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtmb250LXNpemU6MTNweDtmb250LXdlaWdodDpib2xkO2xpbmUtaGVpZ2h0OjE7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO2NvbnRhaW46Y29udGVudDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1Ac3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX06aG9zdCguaW9uLWNvbG9yKXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KDplbXB0eSl7ZGlzcGxheTpub25lfTpob3N0e2JvcmRlci1yYWRpdXM6MTBweH1cIjt2YXIgYmFkZ2VNZENzcz1cIjpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZik7LS1wYWRkaW5nLXRvcDozcHg7LS1wYWRkaW5nLWVuZDo4cHg7LS1wYWRkaW5nLWJvdHRvbTozcHg7LS1wYWRkaW5nLXN0YXJ0OjhweDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtkaXNwbGF5OmlubGluZS1ibG9jazttaW4td2lkdGg6MTBweDtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OmJvbGQ7bGluZS1oZWlnaHQ6MTt0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXA7Y29udGFpbjpjb250ZW50O3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfUBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSBvciAobWFyZ2luLWlubGluZS1zdGFydDogMCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Omhvc3R7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fTpob3N0KC5pb24tY29sb3Ipe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoOmVtcHR5KXtkaXNwbGF5Om5vbmV9Omhvc3R7LS1wYWRkaW5nLXRvcDozcHg7LS1wYWRkaW5nLWVuZDo0cHg7LS1wYWRkaW5nLWJvdHRvbTo0cHg7LS1wYWRkaW5nLXN0YXJ0OjRweDtib3JkZXItcmFkaXVzOjRweH1cIjt2YXIgQmFkZ2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JlZ2lzdGVySW5zdGFuY2UodGhpcyx0KX10LnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXt2YXIgdDt2YXIgYT1nZXRJb25Nb2RlKHRoaXMpO3JldHVybiBoKEhvc3Qse2NsYXNzOmNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yLCh0PXt9LHRbYV09dHJ1ZSx0KSl9LGgoXCJzbG90XCIsbnVsbCkpfTtyZXR1cm4gdH0oKTtCYWRnZS5zdHlsZT17aW9zOmJhZGdlSW9zQ3NzLG1kOmJhZGdlTWRDc3N9O3ZhciB0aHVtYm5haWxDc3M9XCI6aG9zdHstLXNpemU6NDhweDstLWJvcmRlci1yYWRpdXM6MDtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2Rpc3BsYXk6YmxvY2s7d2lkdGg6dmFyKC0tc2l6ZSk7aGVpZ2h0OnZhcigtLXNpemUpfTo6c2xvdHRlZChpb24taW1nKSw6OnNsb3R0ZWQoaW1nKXtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LW8tb2JqZWN0LWZpdDpjb3ZlcjtvYmplY3QtZml0OmNvdmVyO292ZXJmbG93OmhpZGRlbn1cIjt2YXIgVGh1bWJuYWlsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZWdpc3Rlckluc3RhbmNlKHRoaXMsdCl9dC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7cmV0dXJuIGgoSG9zdCx7Y2xhc3M6Z2V0SW9uTW9kZSh0aGlzKX0saChcInNsb3RcIixudWxsKSl9O3JldHVybiB0fSgpO1RodW1ibmFpbC5zdHlsZT10aHVtYm5haWxDc3M7ZXhwb3J0e0F2YXRhciBhcyBpb25fYXZhdGFyLEJhZGdlIGFzIGlvbl9iYWRnZSxUaHVtYm5haWwgYXMgaW9uX3RodW1ibmFpbH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3.entry.js\n");

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return createColorClasses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return getClassMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return hostContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"o\", function() { return openURL; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar hostContext=function(r,t){return t.closest(r)!==null};var createColorClasses=function(r,t){var e;return typeof r===\"string\"&&r.length>0?Object.assign((e={\"ion-color\":true},e[\"ion-color-\"+r]=true,e),t):t};var getClassList=function(r){if(r!==undefined){var t=Array.isArray(r)?r:r.split(\" \");return t.filter((function(r){return r!=null})).map((function(r){return r.trim()})).filter((function(r){return r!==\"\"}))}return[]};var getClassMap=function(r){var t={};getClassList(r).forEach((function(r){return t[r]=true}));return t};var SCHEME=/^[a-z][a-z0-9+\\-.]*:/;var openURL=function(r,t,e,n){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0,void 0,void 0,(function(){var o;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this,(function(a){if(r!=null&&r[0]!==\"#\"&&!SCHEME.test(r)){o=document.querySelector(\"ion-router\");if(o){if(t!=null){t.preventDefault()}return[2,o.push(r,e,n)]}}return[2,false]}))}))};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS1mZjNmYzUyZi5qcz9mZWNhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5Qyw4QkFBOEIsNEJBQTRCLHFDQUFxQyxNQUFNLHlEQUF5RCxpQkFBaUIsaUNBQWlDLDZCQUE2QixrQkFBa0Isc0NBQXNDLDZCQUE2QixlQUFlLG9CQUFvQixnQkFBZ0IsdUJBQXVCLGNBQWMsR0FBRyxVQUFVLDRCQUE0QixTQUFTLHFDQUFxQyxpQkFBaUIsR0FBRyxVQUFVLGtDQUFrQyw4QkFBOEIsT0FBTyx1REFBUyxrQ0FBa0MsTUFBTSxPQUFPLHlEQUFXLG1CQUFtQix5Q0FBeUMsdUNBQXVDLE1BQU0sWUFBWSxtQkFBbUIseUJBQXlCLGdCQUFnQixHQUFHIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS1mZjNmYzUyZi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydHtfX2F3YWl0ZXIsX19nZW5lcmF0b3J9ZnJvbVwidHNsaWJcIjt2YXIgaG9zdENvbnRleHQ9ZnVuY3Rpb24ocix0KXtyZXR1cm4gdC5jbG9zZXN0KHIpIT09bnVsbH07dmFyIGNyZWF0ZUNvbG9yQ2xhc3Nlcz1mdW5jdGlvbihyLHQpe3ZhciBlO3JldHVybiB0eXBlb2Ygcj09PVwic3RyaW5nXCImJnIubGVuZ3RoPjA/T2JqZWN0LmFzc2lnbigoZT17XCJpb24tY29sb3JcIjp0cnVlfSxlW1wiaW9uLWNvbG9yLVwiK3JdPXRydWUsZSksdCk6dH07dmFyIGdldENsYXNzTGlzdD1mdW5jdGlvbihyKXtpZihyIT09dW5kZWZpbmVkKXt2YXIgdD1BcnJheS5pc0FycmF5KHIpP3I6ci5zcGxpdChcIiBcIik7cmV0dXJuIHQuZmlsdGVyKChmdW5jdGlvbihyKXtyZXR1cm4gciE9bnVsbH0pKS5tYXAoKGZ1bmN0aW9uKHIpe3JldHVybiByLnRyaW0oKX0pKS5maWx0ZXIoKGZ1bmN0aW9uKHIpe3JldHVybiByIT09XCJcIn0pKX1yZXR1cm5bXX07dmFyIGdldENsYXNzTWFwPWZ1bmN0aW9uKHIpe3ZhciB0PXt9O2dldENsYXNzTGlzdChyKS5mb3JFYWNoKChmdW5jdGlvbihyKXtyZXR1cm4gdFtyXT10cnVlfSkpO3JldHVybiB0fTt2YXIgU0NIRU1FPS9eW2Etel1bYS16MC05K1xcLS5dKjovO3ZhciBvcGVuVVJMPWZ1bmN0aW9uKHIsdCxlLG4pe3JldHVybiBfX2F3YWl0ZXIodm9pZCAwLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIG87cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKGEpe2lmKHIhPW51bGwmJnJbMF0hPT1cIiNcIiYmIVNDSEVNRS50ZXN0KHIpKXtvPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpb24tcm91dGVyXCIpO2lmKG8pe2lmKHQhPW51bGwpe3QucHJldmVudERlZmF1bHQoKX1yZXR1cm5bMixvLnB1c2gocixlLG4pXX19cmV0dXJuWzIsZmFsc2VdfSkpfSkpfTtleHBvcnR7Y3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsZ2V0Q2xhc3NNYXAgYXMgZyxob3N0Q29udGV4dCBhcyBoLG9wZW5VUkwgYXMgb307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js\n");

/***/ })

}]);