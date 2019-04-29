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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/sermon.js");
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

/***/ "./wp-content/mu-plugins/covenant-core/src/js/sermon.js":
/*!**************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/sermon.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_sermon_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/sermon.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/sermon.scss");
/* harmony import */ var _scss_sermon_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_sermon_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./wp-content/mu-plugins/covenant-core/src/js/modules/dom.js");
/* harmony import */ var _modules_attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/attr */ "./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./wp-content/mu-plugins/covenant-core/src/js/modules/menu.js");






var menuToggle = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.menu-toggle');
var menu = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('#' + Object(_modules_attr__WEBPACK_IMPORTED_MODULE_2__["getAttr"])('aria-controls', menuToggle));
Object(_modules_menu__WEBPACK_IMPORTED_MODULE_3__["setupMenu"])(menu, menuToggle);

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/sermon.scss":
/*!******************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/sermon.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvc2VybW9uLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL3Nlcm1vbi5zY3NzIl0sIm5hbWVzIjpbInNldEF0dHIiLCJhdHRyIiwidmFsIiwiZWwiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyIiwiZ2V0QXR0cmlidXRlIiwiZmxpcEF0dHIiLCJ0b2dnbGVBdHRyIiwiYXR0clRvQm9vbCIsImlzRWxtTm9kZSIsIm5vZGVUeXBlIiwiZG9tIiwic2VsZWN0b3IiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImRvY3VtZW50IiwiZXJyb3IiLCJkb21BbGwiLCJlbG1zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsIndyYXBFdmVudCIsImZuIiwiYXJncyIsImUiLCJldmVudE9uIiwiZXZlbnQiLCJjYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aGVuUGFzdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpbmRvdyIsInNjcm9sbFkiLCJ0b2dnbGVNZW51IiwibWVudSIsIm1lbnVPcGVuIiwiY3VycmVudFRhcmdldCIsInRvZ2dsZU1lbnVQb3NpdGlvbiIsImlzUGFzdCIsInNldHVwTWVudSIsIm1lbnVUb2dnbGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCQyxHQUF2QixFQUE0QkMsRUFBNUIsRUFBZ0M7QUFDckNBLEtBQUdDLFlBQUgsQ0FBZ0JILElBQWhCLEVBQXNCQyxHQUF0QjtBQUNBLFNBQU9DLEVBQVA7QUFDRDs7QUFFTSxTQUFTRSxPQUFULENBQWlCSixJQUFqQixFQUF1QkUsRUFBdkIsRUFBMkI7QUFDaEMsU0FBT0EsR0FBR0csWUFBSCxDQUFnQkwsSUFBaEIsQ0FBUDtBQUNEOztBQUVNLElBQU1NLFdBQVcsU0FBWEEsUUFBVyxDQUFDTixJQUFELEVBQU9FLEVBQVA7QUFBQSxTQUN0QkUsUUFBUUosSUFBUixFQUFjRSxFQUFkLE1BQXNCLE1BQXRCLEdBQStCLE9BQS9CLEdBQXlDLE1BRG5CO0FBQUEsQ0FBakI7O0FBR0EsSUFBTUssYUFBYSxTQUFiQSxVQUFhLENBQUNQLElBQUQsRUFBT0UsRUFBUDtBQUFBLFNBQWNILFFBQVFDLElBQVIs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LENBQUMsUUFBUixFQUFrQkksU0FBU00sSUFBVCxFQUFlRyxtQkFBbUJILElBQW5CLENBQWYsQ0FBbEIsRUFBNERILE1BQTVEO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDaENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUyxhQUFhL0Isd0RBQUdBLENBQUMsY0FBSixDQUFuQjtBQUNBLElBQU15QixPQUFPekIsd0RBQUdBLE9BQUtQLDZEQUFPQSxDQUFDLGVBQVIsRUFBeUJzQyxVQUF6QixDQUFSLENBQWI7QUFDQUQsK0RBQVNBLENBQUNMLElBQVYsRUFBZ0JNLFVBQWhCLEU7Ozs7Ozs7Ozs7O0FDUkEseUMiLCJmaWxlIjoianMvc2VybW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL3Nlcm1vbi5qc1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyKGF0dHIsIHZhbCwgZWwpIHtcbiAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gIHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHIoYXR0ciwgZWwpIHtcbiAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZsaXBBdHRyID0gKGF0dHIsIGVsKSA9PlxuICBnZXRBdHRyKGF0dHIsIGVsKSA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJztcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUF0dHIgPSAoYXR0ciwgZWwpID0+IHNldEF0dHIoYXR0ciwgZmxpcEF0dHIoYXR0ciwgZWwpLCBlbCk7XG5cbmV4cG9ydCBjb25zdCBhdHRyVG9Cb29sID0gKGF0dHIsIGVsKSA9PiBlbC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJztcbiIsImNvbnN0IGlzRWxtTm9kZSA9IGVsID0+IGVsICYmIGVsLm5vZGVUeXBlID09PSAxO1xuXG5leHBvcnQgZnVuY3Rpb24gZG9tKHNlbGVjdG9yLCByb290KSB7XG4gIGNvbnN0IGVsID1cbiAgICByb290ICYmIGlzRWxtTm9kZShyb290KVxuICAgICAgPyByb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICByZXR1cm4gZWwgfHwgeyBlcnJvcjogJ2VsZW1lbnQgbm90IGZvdW5kJyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tQWxsKHNlbGVjdG9yLCByb290ID0gZmFsc2UpIHtcbiAgY29uc3QgZWxtcyA9IGlzRWxtTm9kZShyb290KVxuICAgID8gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsbXMpIHx8IFtdO1xufVxuIiwiZXhwb3J0IGNvbnN0IHdyYXBFdmVudCA9IChmbiwgYXJncyA9IFtdKSA9PiAoZSkgPT4ge1xuICBmbiguLi5hcmdzKTtcbiAgcmV0dXJuIGU7XG59O1xuXG5leHBvcnQgY29uc3QgZXZlbnRPbiA9IChldmVudCwgY2IsIGVsKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKTtcbiAgcmV0dXJuIGVsO1xufTtcbiIsImltcG9ydCB7IGV2ZW50T24gfSBmcm9tICcuL2V2ZW50JztcbmltcG9ydCB7IHNldEF0dHIsIGF0dHJUb0Jvb2wgfSBmcm9tICcuL2F0dHInO1xuXG5mdW5jdGlvbiB3aGVuUGFzdChlbCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGhlaWdodCkge1xuICAgICAgZm4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKGZhbHNlKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnUobWVudSkge1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IG1lbnVPcGVuID0gYXR0clRvQm9vbCgnYXJpYS1leHBhbmRlZCcsIGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0QXR0cignYXJpYS1leHBhbmRlZCcsICFtZW51T3BlbiwgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBzZXRBdHRyKCdkYXRhLW1lbnUtb3BlbicsICFtZW51T3BlbiwgbWVudSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnVQb3NpdGlvbihlbCkge1xuICByZXR1cm4gZnVuY3Rpb24oaXNQYXN0KSB7XG4gICAgc2V0QXR0cignZGF0YS1oZWFkZXItZml4ZWQnLCBpc1Bhc3QsIGVsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTWVudShtZW51LCBtZW51VG9nZ2xlKSB7XG4gIGV2ZW50T24oJ2NsaWNrJywgdG9nZ2xlTWVudShtZW51KSwgbWVudVRvZ2dsZSk7XG4gIGV2ZW50T24oJ3Njcm9sbCcsIHdoZW5QYXN0KG1lbnUsIHRvZ2dsZU1lbnVQb3NpdGlvbihtZW51KSksIHdpbmRvdyk7XG59XG4iLCJpbXBvcnQgJy4uL3Njc3Mvc2VybW9uLnNjc3MnO1xuXG5pbXBvcnQgeyBkb20gfSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCB7IGdldEF0dHIgfSBmcm9tICcuL21vZHVsZXMvYXR0cic7XG5pbXBvcnQgeyBzZXR1cE1lbnUgfSBmcm9tICcuL21vZHVsZXMvbWVudSc7XG5cbmNvbnN0IG1lbnVUb2dnbGUgPSBkb20oJy5tZW51LXRvZ2dsZScpO1xuY29uc3QgbWVudSA9IGRvbShgIyR7Z2V0QXR0cignYXJpYS1jb250cm9scycsIG1lbnVUb2dnbGUpfWApO1xuc2V0dXBNZW51KG1lbnUsIG1lbnVUb2dnbGUpO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9