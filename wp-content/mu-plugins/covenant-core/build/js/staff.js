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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/staff.js");
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
/* harmony import */ var _saveScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveScroll */ "./wp-content/mu-plugins/covenant-core/src/js/modules/saveScroll.js");




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
    Object(_saveScroll__WEBPACK_IMPORTED_MODULE_2__["saveScroll"])(menu)(!menuOpen);
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

/***/ "./wp-content/mu-plugins/covenant-core/src/js/modules/saveScroll.js":
/*!**************************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/modules/saveScroll.js ***!
  \**************************************************************************/
/*! exports provided: saveScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveScroll", function() { return saveScroll; });
function saveScroll(base) {
  return function (isSaving) {
    if (isSaving) {
      var scrollPos = window.scrollY;
      base.setAttribute('data-save-scroll', scrollPos);
      document.documentElement.style.position = 'fixed';
      document.body.style.marginTop = '-' + scrollPos + 'px';
    } else {
      document.documentElement.style.position = 'static';
      document.body.style.marginTop = 'auto';
      window.scrollTo(0, parseInt(base.getAttribute('data-save-scroll')));
    }
  };
}

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/js/staff.js":
/*!*************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/staff.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_staff_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/staff.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/staff.scss");
/* harmony import */ var _scss_staff_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_staff_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./wp-content/mu-plugins/covenant-core/src/js/modules/dom.js");
/* harmony import */ var _modules_attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/attr */ "./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./wp-content/mu-plugins/covenant-core/src/js/modules/menu.js");






var menuToggle = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.menu-toggle');
var menu = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('#' + Object(_modules_attr__WEBPACK_IMPORTED_MODULE_2__["getAttr"])('aria-controls', menuToggle));
Object(_modules_menu__WEBPACK_IMPORTED_MODULE_3__["setupMenu"])(menu, menuToggle);

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/staff.scss":
/*!*****************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/staff.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9zYXZlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9zdGFmZi5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvc2Nzcy9zdGFmZi5zY3NzIl0sIm5hbWVzIjpbInNldEF0dHIiLCJhdHRyIiwidmFsIiwiZWwiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyIiwiZ2V0QXR0cmlidXRlIiwiZmxpcEF0dHIiLCJ0b2dnbGVBdHRyIiwiYXR0clRvQm9vbCIsImlzRWxtTm9kZSIsIm5vZGVUeXBlIiwiZG9tIiwic2VsZWN0b3IiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImRvY3VtZW50IiwiZXJyb3IiLCJkb21BbGwiLCJlbG1zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsIndyYXBFdmVudCIsImZuIiwiYXJncyIsImUiLCJldmVudE9uIiwiZXZlbnQiLCJjYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aGVuUGFzdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpbmRvdyIsInNjcm9sbFkiLCJ0b2dnbGVNZW51IiwibWVudSIsIm1lbnVPcGVuIiwiY3VycmVudFRhcmdldCIsInNhdmVTY3JvbGwiLCJ0b2dnbGVNZW51UG9zaXRpb24iLCJpc1Bhc3QiLCJzZXR1cE1lbnUiLCJtZW51VG9nZ2xlIiwiYmFzZSIsImlzU2F2aW5nIiwic2Nyb2xsUG9zIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsImJvZHkiLCJtYXJnaW5Ub3AiLCJzY3JvbGxUbyIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxTQUFTQSxPQUFULENBQWlCQyxJQUFqQixFQUF1QkMsR0FBdkIsRUFBNEJDLEVBQTVCLEVBQWdDO0FBQ3JDQSxLQUFHQyxZQUFILENBQWdCSCxJQUFoQixFQUFzQkMsR0FBdEI7QUFDQSxTQUFPQyxFQUFQO0FBQ0Q7O0FBRU0sU0FBU0UsT0FBVCxDQUFpQkosSUFBakIsRUFBdUJFLEVBQXZCLEVBQTJCO0FBQ2hDLFNBQU9BLEdBQUdHLFlBQUgsQ0FBZ0JMLElBQWhCLENBQVA7QUFDRDs7QUFF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O0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNc0MsYUFBYWhDLHdEQUFHQSxDQUFDLGNBQUosQ0FBbkI7QUFDQSxJQUFNeUIsT0FBT3pCLHdEQUFHQSxPQUFLUCw2REFBT0EsQ0FBQyxlQUFSLEVBQXlCdUMsVUFBekIsQ0FBUixDQUFiO0FBQ0FELCtEQUFTQSxDQUFDTixJQUFWLEVBQWdCTyxVQUFoQixFOzs7Ozs7Ozs7OztBQ1JBLHlDIiwiZmlsZSI6ImpzL3N0YWZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL3N0YWZmLmpzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHIoYXR0ciwgdmFsLCBlbCkge1xuICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cihhdHRyLCBlbCkge1xuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xufVxuXG5leHBvcnQgY29uc3QgZmxpcEF0dHIgPSAoYXR0ciwgZWwpID0+XG4gIGdldEF0dHIoYXR0ciwgZWwpID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQXR0ciA9IChhdHRyLCBlbCkgPT4gc2V0QXR0cihhdHRyLCBmbGlwQXR0cihhdHRyLCBlbCksIGVsKTtcblxuZXhwb3J0IGNvbnN0IGF0dHJUb0Jvb2wgPSAoYXR0ciwgZWwpID0+IGVsLmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnO1xuIiwiY29uc3QgaXNFbG1Ob2RlID0gZWwgPT4gZWwgJiYgZWwubm9kZVR5cGUgPT09IDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb20oc2VsZWN0b3IsIHJvb3QpIHtcbiAgY29uc3QgZWwgPVxuICAgIHJvb3QgJiYgaXNFbG1Ob2RlKHJvb3QpXG4gICAgICA/IHJvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHJldHVybiBlbCB8fCB7IGVycm9yOiAnZWxlbWVudCBub3QgZm91bmQnIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21BbGwoc2VsZWN0b3IsIHJvb3QgPSBmYWxzZSkge1xuICBjb25zdCBlbG1zID0gaXNFbG1Ob2RlKHJvb3QpXG4gICAgPyByb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxtcykgfHwgW107XG59XG4iLCJleHBvcnQgY29uc3Qgd3JhcEV2ZW50ID0gKGZuLCBhcmdzID0gW10pID0+IChlKSA9PiB7XG4gIGZuKC4uLmFyZ3MpO1xuICByZXR1cm4gZTtcbn07XG5cbmV4cG9ydCBjb25zdCBldmVudE9uID0gKGV2ZW50LCBjYiwgZWwpID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xuICByZXR1cm4gZWw7XG59O1xuIiwiaW1wb3J0IHsgZXZlbnRPbiB9IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IHsgc2V0QXR0ciwgYXR0clRvQm9vbCB9IGZyb20gJy4vYXR0cic7XG5pbXBvcnQgeyBzYXZlU2Nyb2xsIH0gZnJvbSAnLi9zYXZlU2Nyb2xsJztcblxuZnVuY3Rpb24gd2hlblBhc3QoZWwsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBoZWlnaHQpIHtcbiAgICAgIGZuKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbihmYWxzZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51KG1lbnUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBtZW51T3BlbiA9IGF0dHJUb0Jvb2woJ2FyaWEtZXhwYW5kZWQnLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHNldEF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAhbWVudU9wZW4sIGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0QXR0cignZGF0YS1tZW51LW9wZW4nLCAhbWVudU9wZW4sIG1lbnUpO1xuICAgIHNhdmVTY3JvbGwobWVudSkoIW1lbnVPcGVuKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudVBvc2l0aW9uKGVsKSB7XG4gIHJldHVybiBmdW5jdGlvbihpc1Bhc3QpIHtcbiAgICBzZXRBdHRyKCdkYXRhLWhlYWRlci1maXhlZCcsIGlzUGFzdCwgZWwpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBNZW51KG1lbnUsIG1lbnVUb2dnbGUpIHtcbiAgZXZlbnRPbignY2xpY2snLCB0b2dnbGVNZW51KG1lbnUpLCBtZW51VG9nZ2xlKTtcbiAgZXZlbnRPbignc2Nyb2xsJywgd2hlblBhc3QobWVudSwgdG9nZ2xlTWVudVBvc2l0aW9uKG1lbnUpKSwgd2luZG93KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzYXZlU2Nyb2xsKGJhc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGlzU2F2aW5nKSB7XG4gICAgaWYgKGlzU2F2aW5nKSB7XG4gICAgICBjb25zdCBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGJhc2Uuc2V0QXR0cmlidXRlKCdkYXRhLXNhdmUtc2Nyb2xsJywgc2Nyb2xsUG9zKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblRvcCA9ICctJyArIHNjcm9sbFBvcyArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5Ub3AgPSAnYXV0byc7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQoYmFzZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2F2ZS1zY3JvbGwnKSkpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCAnLi4vc2Nzcy9zdGFmZi5zY3NzJztcblxuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi9tb2R1bGVzL2RvbSc7XG5pbXBvcnQgeyBnZXRBdHRyIH0gZnJvbSAnLi9tb2R1bGVzL2F0dHInO1xuaW1wb3J0IHsgc2V0dXBNZW51IH0gZnJvbSAnLi9tb2R1bGVzL21lbnUnO1xuXG5jb25zdCBtZW51VG9nZ2xlID0gZG9tKCcubWVudS10b2dnbGUnKTtcbmNvbnN0IG1lbnUgPSBkb20oYCMke2dldEF0dHIoJ2FyaWEtY29udHJvbHMnLCBtZW51VG9nZ2xlKX1gKTtcbnNldHVwTWVudShtZW51LCBtZW51VG9nZ2xlKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==