/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/sermons.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js":
/*!********************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js ***!
  \********************************************************************/
/*! exports provided: setAttr, getAttr, flipAttr, toggleAttr, attrToBool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttr", function() { return setAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttr", function() { return getAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipAttr", function() { return flipAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAttr", function() { return toggleAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrToBool", function() { return attrToBool; });
function setAttr(attr, val, el) {
  el.setAttribute(attr, val);
  return el;
}

function getAttr(attr, el) {
  return el.getAttribute(attr);
}

var flipAttr = function flipAttr(attr, el) {
  return getAttr(attr, el) === 'true' ? 'false' : 'true';
};

var toggleAttr = function toggleAttr(attr, el) {
  return setAttr(attr, flipAttr(attr, el), el);
};

var attrToBool = function attrToBool(attr, el) {
  return el.getAttribute(attr) === 'true';
};

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/js/modules/dom.js":
/*!*******************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/modules/dom.js ***!
  \*******************************************************************/
/*! exports provided: dom, domAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domAll", function() { return domAll; });
var isElmNode = function isElmNode(el) {
  return el && el.nodeType === 1;
};

function dom(selector, root) {
  var el = root && isElmNode(root) ? root.querySelector(selector) : document.querySelector(selector);
  return el || { error: 'element not found' };
}

function domAll(selector) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var elms = isElmNode(root) ? root.querySelectorAll(selector) : document.querySelectorAll(selector);
  return Array.from(elms) || [];
}

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/js/modules/event.js":
/*!*********************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/modules/event.js ***!
  \*********************************************************************/
/*! exports provided: wrapEvent, eventOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapEvent", function() { return wrapEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOn", function() { return eventOn; });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var wrapEvent = function wrapEvent(fn) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return function (e) {
    fn.apply(undefined, _toConsumableArray(args));
    return e;
  };
};

var eventOn = function eventOn(event, cb, el) {
  el.addEventListener(event, cb);
  return el;
};

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/js/modules/menu.js":
/*!********************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/modules/menu.js ***!
  \********************************************************************/
/*! exports provided: setupMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupMenu", function() { return setupMenu; });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./wp-content/mu-plugins/covenant-core/src/js/modules/event.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attr */ "./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js");



function whenPast(el, fn) {
  return function () {
    var _el$getBoundingClient = el.getBoundingClientRect(),
        height = _el$getBoundingClient.height;

    if (window.scrollY > height) {
      fn(true);
    } else {
      fn(false);
    }
  };
}

function toggleMenu(menu) {
  return function (e) {
    var menuOpen = Object(_attr__WEBPACK_IMPORTED_MODULE_1__["attrToBool"])('aria-expanded', e.currentTarget);
    Object(_attr__WEBPACK_IMPORTED_MODULE_1__["setAttr"])('aria-expanded', !menuOpen, e.currentTarget);
    Object(_attr__WEBPACK_IMPORTED_MODULE_1__["setAttr"])('data-menu-open', !menuOpen, menu);
  };
}

function toggleMenuPosition(el) {
  return function (isPast) {
    Object(_attr__WEBPACK_IMPORTED_MODULE_1__["setAttr"])('data-header-fixed', isPast, el);
  };
}

function setupMenu(menu, menuToggle) {
  Object(_event__WEBPACK_IMPORTED_MODULE_0__["eventOn"])('click', toggleMenu(menu), menuToggle);
  Object(_event__WEBPACK_IMPORTED_MODULE_0__["eventOn"])('scroll', whenPast(menu, toggleMenuPosition(menu)), window);
}

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/js/sermons.js":
/*!***************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/sermons.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_sermons_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/sermons.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/sermons.scss");
/* harmony import */ var _scss_sermons_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_sermons_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./wp-content/mu-plugins/covenant-core/src/js/modules/dom.js");
/* harmony import */ var _modules_attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/attr */ "./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./wp-content/mu-plugins/covenant-core/src/js/modules/menu.js");






var menuToggle = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.menu-toggle');
var menu = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('#' + Object(_modules_attr__WEBPACK_IMPORTED_MODULE_2__["getAttr"])('aria-controls', menuToggle));
Object(_modules_menu__WEBPACK_IMPORTED_MODULE_3__["setupMenu"])(menu, menuToggle);

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/sermons.scss":
/*!*******************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/sermons.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvc2VybW9ucy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvc2Nzcy9zZXJtb25zLnNjc3MiXSwibmFtZXMiOlsic2V0QXR0ciIsImF0dHIiLCJ2YWwiLCJlbCIsInNldEF0dHJpYnV0ZSIsImdldEF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJmbGlwQXR0ciIsInRvZ2dsZUF0dHIiLCJhdHRyVG9Cb29sIiwiaXNFbG1Ob2RlIiwibm9kZVR5cGUiLCJkb20iLCJzZWxlY3RvciIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiZG9jdW1lbnQiLCJlcnJvciIsImRvbUFsbCIsImVsbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwid3JhcEV2ZW50IiwiZm4iLCJhcmdzIiwiZSIsImV2ZW50T24iLCJldmVudCIsImNiIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndoZW5QYXN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwid2luZG93Iiwic2Nyb2xsWSIsInRvZ2dsZU1lbnUiLCJtZW51IiwibWVudU9wZW4iLCJjdXJyZW50VGFyZ2V0IiwidG9nZ2xlTWVudVBvc2l0aW9uIiwiaXNQYXN0Iiwic2V0dXBNZW51IiwibWVudVRvZ2dsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLEdBQXZCLEVBQTRCQyxFQUE1QixFQUFnQztBQUNyQ0EsS0FBR0MsWUFBSCxDQUFnQkgsSUFBaEIsRUFBc0JDLEdBQXRCO0FBQ0EsU0FBT0MsRUFBUDtBQUNEOztBQUVNLFNBQVNFLE9BQVQsQ0FBaUJKLElBQWpCLEVBQXVCRSxFQUF2QixFQUEyQjtBQUNoQyxTQUFPQSxHQUFHRyxZQUFILENBQWdCTCxJQUFoQixDQUFQO0FBQ0Q7O0FBRU0sSUFBTU0sV0FBVyxTQUFYQSxRQUFXLENBQUNOLElBQUQsRUFBT0UsRUFBUDtBQUFBLFNBQ3RCRSxRQUFRSixJQUFSLEVBQWNFLEVBQWQsTUFBc0IsTUFBdEIsR0FBK0IsT0FBL0IsR0FBeUMsTUFEbkI7QUFBQSxDQUFqQjs7QUFHQSxJQUFNSyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ1AsSUFBRCxFQUFPRSxFQUFQO0FBQUEsU0FBY0gsUUFBUUMsSUFB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T0EsQ0FBQyxRQUFSLEVBQWtCSSxTQUFTTSxJQUFULEVBQWVHLG1CQUFtQkgsSUFBbkIsQ0FBZixDQUFsQixFQUE0REgsTUFBNUQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNoQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1TLGFBQWEvQix3REFBR0EsQ0FBQyxjQUFKLENBQW5CO0FBQ0EsSUFBTXlCLE9BQU96Qix3REFBR0EsT0FBS1AsNkRBQU9BLENBQUMsZUFBUixFQUF5QnNDLFVBQXpCLENBQVIsQ0FBYjtBQUNBRCwrREFBU0EsQ0FBQ0wsSUFBVixFQUFnQk0sVUFBaEIsRTs7Ozs7Ozs7Ozs7QUNSQSx5QyIsImZpbGUiOiJqcy9zZXJtb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL3Nlcm1vbnMuanNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0QXR0cihhdHRyLCB2YWwsIGVsKSB7XG4gIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyKGF0dHIsIGVsKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG59XG5cbmV4cG9ydCBjb25zdCBmbGlwQXR0ciA9IChhdHRyLCBlbCkgPT5cbiAgZ2V0QXR0cihhdHRyLCBlbCkgPT09ICd0cnVlJyA/ICdmYWxzZScgOiAndHJ1ZSc7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVBdHRyID0gKGF0dHIsIGVsKSA9PiBzZXRBdHRyKGF0dHIsIGZsaXBBdHRyKGF0dHIsIGVsKSwgZWwpO1xuXG5leHBvcnQgY29uc3QgYXR0clRvQm9vbCA9IChhdHRyLCBlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZSc7XG4iLCJjb25zdCBpc0VsbU5vZGUgPSBlbCA9PiBlbCAmJiBlbC5ub2RlVHlwZSA9PT0gMTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRvbShzZWxlY3Rvciwgcm9vdCkge1xuICBjb25zdCBlbCA9XG4gICAgcm9vdCAmJiBpc0VsbU5vZGUocm9vdClcbiAgICAgID8gcm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgcmV0dXJuIGVsIHx8IHsgZXJyb3I6ICdlbGVtZW50IG5vdCBmb3VuZCcgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUFsbChzZWxlY3Rvciwgcm9vdCA9IGZhbHNlKSB7XG4gIGNvbnN0IGVsbXMgPSBpc0VsbU5vZGUocm9vdClcbiAgICA/IHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICByZXR1cm4gQXJyYXkuZnJvbShlbG1zKSB8fCBbXTtcbn1cbiIsImV4cG9ydCBjb25zdCB3cmFwRXZlbnQgPSAoZm4sIGFyZ3MgPSBbXSkgPT4gKGUpID0+IHtcbiAgZm4oLi4uYXJncyk7XG4gIHJldHVybiBlO1xufTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50T24gPSAoZXZlbnQsIGNiLCBlbCkgPT4ge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYik7XG4gIHJldHVybiBlbDtcbn07XG4iLCJpbXBvcnQgeyBldmVudE9uIH0gZnJvbSAnLi9ldmVudCc7XG5pbXBvcnQgeyBzZXRBdHRyLCBhdHRyVG9Cb29sIH0gZnJvbSAnLi9hdHRyJztcblxuZnVuY3Rpb24gd2hlblBhc3QoZWwsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBoZWlnaHQpIHtcbiAgICAgIGZuKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbihmYWxzZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51KG1lbnUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBtZW51T3BlbiA9IGF0dHJUb0Jvb2woJ2FyaWEtZXhwYW5kZWQnLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHNldEF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAhbWVudU9wZW4sIGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0QXR0cignZGF0YS1tZW51LW9wZW4nLCAhbWVudU9wZW4sIG1lbnUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51UG9zaXRpb24oZWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGlzUGFzdCkge1xuICAgIHNldEF0dHIoJ2RhdGEtaGVhZGVyLWZpeGVkJywgaXNQYXN0LCBlbCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cE1lbnUobWVudSwgbWVudVRvZ2dsZSkge1xuICBldmVudE9uKCdjbGljaycsIHRvZ2dsZU1lbnUobWVudSksIG1lbnVUb2dnbGUpO1xuICBldmVudE9uKCdzY3JvbGwnLCB3aGVuUGFzdChtZW51LCB0b2dnbGVNZW51UG9zaXRpb24obWVudSkpLCB3aW5kb3cpO1xufVxuIiwiaW1wb3J0ICcuLi9zY3NzL3Nlcm1vbnMuc2Nzcyc7XG5cbmltcG9ydCB7IGRvbSB9IGZyb20gJy4vbW9kdWxlcy9kb20nO1xuaW1wb3J0IHsgZ2V0QXR0ciB9IGZyb20gJy4vbW9kdWxlcy9hdHRyJztcbmltcG9ydCB7IHNldHVwTWVudSB9IGZyb20gJy4vbW9kdWxlcy9tZW51JztcblxuY29uc3QgbWVudVRvZ2dsZSA9IGRvbSgnLm1lbnUtdG9nZ2xlJyk7XG5jb25zdCBtZW51ID0gZG9tKGAjJHtnZXRBdHRyKCdhcmlhLWNvbnRyb2xzJywgbWVudVRvZ2dsZSl9YCk7XG5zZXR1cE1lbnUobWVudSwgbWVudVRvZ2dsZSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=