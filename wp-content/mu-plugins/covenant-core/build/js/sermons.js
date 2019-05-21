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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9zYXZlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9zZXJtb25zLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL3Nlcm1vbnMuc2NzcyJdLCJuYW1lcyI6WyJzZXRBdHRyIiwiYXR0ciIsInZhbCIsImVsIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0ciIsImdldEF0dHJpYnV0ZSIsImZsaXBBdHRyIiwidG9nZ2xlQXR0ciIsImF0dHJUb0Jvb2wiLCJpc0VsbU5vZGUiLCJub2RlVHlwZSIsImRvbSIsInNlbGVjdG9yIiwicm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJkb2N1bWVudCIsImVycm9yIiwiZG9tQWxsIiwiZWxtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJ3cmFwRXZlbnQiLCJmbiIsImFyZ3MiLCJlIiwiZXZlbnRPbiIsImV2ZW50IiwiY2IiLCJhZGRFdmVudExpc3RlbmVyIiwid2hlblBhc3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidG9nZ2xlTWVudSIsIm1lbnUiLCJtZW51T3BlbiIsImN1cnJlbnRUYXJnZXQiLCJzYXZlU2Nyb2xsIiwidG9nZ2xlTWVudVBvc2l0aW9uIiwiaXNQYXN0Iiwic2V0dXBNZW51IiwibWVudVRvZ2dsZSIsImJhc2UiLCJpc1NhdmluZyIsInNjcm9sbFBvcyIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJib2R5IiwibWFyZ2luVG9wIiwic2Nyb2xsVG8iLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLEdBQXZCLEVBQTRCQyxFQUE1QixFQUFnQztBQUNyQ0EsS0FBR0MsWUFBSCxDQUFnQkgsSUFBaEIsRUFBc0JDLEdBQXRCO0FBQ0EsU0FBT0MsRUFBUDtBQUNEOztBQUVNLFNBQVNFLE9BQVQsQ0FBaUJKLElBQWpCLEVBQXVCRSxFQUF2QixFQUEyQjtBQUNoQyxTQUFPQSxHQUFHRyxZQUFILENBQWdCTCxJQUFoQixDQUFQO0FBQ0Q7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QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTXNDLGFBQWFoQyx3REFBR0EsQ0FBQyxjQUFKLENBQW5CO0FBQ0EsSUFBTXlCLE9BQU96Qix3REFBR0EsT0FBS1AsNkRBQU9BLENBQUMsZUFBUixFQUF5QnVDLFVBQXpCLENBQVIsQ0FBYjtBQUNBRCwrREFBU0EsQ0FBQ04sSUFBVixFQUFnQk8sVUFBaEIsRTs7Ozs7Ozs7Ozs7QUNSQSx5QyIsImZpbGUiOiJqcy9zZXJtb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL3Nlcm1vbnMuanNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0QXR0cihhdHRyLCB2YWwsIGVsKSB7XG4gIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyKGF0dHIsIGVsKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG59XG5cbmV4cG9ydCBjb25zdCBmbGlwQXR0ciA9IChhdHRyLCBlbCkgPT5cbiAgZ2V0QXR0cihhdHRyLCBlbCkgPT09ICd0cnVlJyA/ICdmYWxzZScgOiAndHJ1ZSc7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVBdHRyID0gKGF0dHIsIGVsKSA9PiBzZXRBdHRyKGF0dHIsIGZsaXBBdHRyKGF0dHIsIGVsKSwgZWwpO1xuXG5leHBvcnQgY29uc3QgYXR0clRvQm9vbCA9IChhdHRyLCBlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZSc7XG4iLCJjb25zdCBpc0VsbU5vZGUgPSBlbCA9PiBlbCAmJiBlbC5ub2RlVHlwZSA9PT0gMTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRvbShzZWxlY3Rvciwgcm9vdCkge1xuICBjb25zdCBlbCA9XG4gICAgcm9vdCAmJiBpc0VsbU5vZGUocm9vdClcbiAgICAgID8gcm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgcmV0dXJuIGVsIHx8IHsgZXJyb3I6ICdlbGVtZW50IG5vdCBmb3VuZCcgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUFsbChzZWxlY3Rvciwgcm9vdCA9IGZhbHNlKSB7XG4gIGNvbnN0IGVsbXMgPSBpc0VsbU5vZGUocm9vdClcbiAgICA/IHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICByZXR1cm4gQXJyYXkuZnJvbShlbG1zKSB8fCBbXTtcbn1cbiIsImV4cG9ydCBjb25zdCB3cmFwRXZlbnQgPSAoZm4sIGFyZ3MgPSBbXSkgPT4gKGUpID0+IHtcbiAgZm4oLi4uYXJncyk7XG4gIHJldHVybiBlO1xufTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50T24gPSAoZXZlbnQsIGNiLCBlbCkgPT4ge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYik7XG4gIHJldHVybiBlbDtcbn07XG4iLCJpbXBvcnQgeyBldmVudE9uIH0gZnJvbSAnLi9ldmVudCc7XG5pbXBvcnQgeyBzZXRBdHRyLCBhdHRyVG9Cb29sIH0gZnJvbSAnLi9hdHRyJztcbmltcG9ydCB7IHNhdmVTY3JvbGwgfSBmcm9tICcuL3NhdmVTY3JvbGwnO1xuXG5mdW5jdGlvbiB3aGVuUGFzdChlbCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGhlaWdodCkge1xuICAgICAgZm4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKGZhbHNlKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnUobWVudSkge1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IG1lbnVPcGVuID0gYXR0clRvQm9vbCgnYXJpYS1leHBhbmRlZCcsIGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0QXR0cignYXJpYS1leHBhbmRlZCcsICFtZW51T3BlbiwgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBzZXRBdHRyKCdkYXRhLW1lbnUtb3BlbicsICFtZW51T3BlbiwgbWVudSk7XG4gICAgc2F2ZVNjcm9sbChtZW51KSghbWVudU9wZW4pO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51UG9zaXRpb24oZWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGlzUGFzdCkge1xuICAgIHNldEF0dHIoJ2RhdGEtaGVhZGVyLWZpeGVkJywgaXNQYXN0LCBlbCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cE1lbnUobWVudSwgbWVudVRvZ2dsZSkge1xuICBldmVudE9uKCdjbGljaycsIHRvZ2dsZU1lbnUobWVudSksIG1lbnVUb2dnbGUpO1xuICBldmVudE9uKCdzY3JvbGwnLCB3aGVuUGFzdChtZW51LCB0b2dnbGVNZW51UG9zaXRpb24obWVudSkpLCB3aW5kb3cpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVTY3JvbGwoYmFzZSkge1xuICByZXR1cm4gZnVuY3Rpb24oaXNTYXZpbmcpIHtcbiAgICBpZiAoaXNTYXZpbmcpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgYmFzZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2F2ZS1zY3JvbGwnLCBzY3JvbGxQb3MpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJy0nICsgc2Nyb2xsUG9zICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblRvcCA9ICdhdXRvJztcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChiYXNlLmdldEF0dHJpYnV0ZSgnZGF0YS1zYXZlLXNjcm9sbCcpKSk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0ICcuLi9zY3NzL3Nlcm1vbnMuc2Nzcyc7XG5cbmltcG9ydCB7IGRvbSB9IGZyb20gJy4vbW9kdWxlcy9kb20nO1xuaW1wb3J0IHsgZ2V0QXR0ciB9IGZyb20gJy4vbW9kdWxlcy9hdHRyJztcbmltcG9ydCB7IHNldHVwTWVudSB9IGZyb20gJy4vbW9kdWxlcy9tZW51JztcblxuY29uc3QgbWVudVRvZ2dsZSA9IGRvbSgnLm1lbnUtdG9nZ2xlJyk7XG5jb25zdCBtZW51ID0gZG9tKGAjJHtnZXRBdHRyKCdhcmlhLWNvbnRyb2xzJywgbWVudVRvZ2dsZSl9YCk7XG5zZXR1cE1lbnUobWVudSwgbWVudVRvZ2dsZSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=