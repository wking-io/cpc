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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/groups.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/mu-plugins/covenant-core/src/js/groups.js":
/*!**************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/groups.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_groups_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/groups.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/groups.scss");
/* harmony import */ var _scss_groups_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_groups_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./wp-content/mu-plugins/covenant-core/src/js/modules/dom.js");
/* harmony import */ var _modules_attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/attr */ "./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./wp-content/mu-plugins/covenant-core/src/js/modules/menu.js");






var menuToggle = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.menu-toggle');
var menu = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('#' + Object(_modules_attr__WEBPACK_IMPORTED_MODULE_2__["getAttr"])('aria-controls', menuToggle));
Object(_modules_menu__WEBPACK_IMPORTED_MODULE_3__["setupMenu"])(menu, menuToggle);

/***/ }),

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

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/groups.scss":
/*!******************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/groups.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2dyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9hdHRyLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL2dyb3Vwcy5zY3NzIl0sIm5hbWVzIjpbIm1lbnVUb2dnbGUiLCJkb20iLCJtZW51IiwiZ2V0QXR0ciIsInNldHVwTWVudSIsInNldEF0dHIiLCJhdHRyIiwidmFsIiwiZWwiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJmbGlwQXR0ciIsInRvZ2dsZUF0dHIiLCJhdHRyVG9Cb29sIiwiaXNFbG1Ob2RlIiwibm9kZVR5cGUiLCJzZWxlY3RvciIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiZG9jdW1lbnQiLCJlcnJvciIsImRvbUFsbCIsImVsbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwid3JhcEV2ZW50IiwiZm4iLCJhcmdzIiwiZSIsImV2ZW50T24iLCJldmVudCIsImNiIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndoZW5QYXN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwid2luZG93Iiwic2Nyb2xsWSIsInRvZ2dsZU1lbnUiLCJtZW51T3BlbiIsImN1cnJlbnRUYXJnZXQiLCJ0b2dnbGVNZW51UG9zaXRpb24iLCJpc1Bhc3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhQyx3REFBR0EsQ0FBQyxjQUFKLENBQW5CO0FBQ0EsSUFBTUMsT0FBT0Qsd0RBQUdBLE9BQUtFLDZEQUFPQSxDQUFDLGVBQVIsRUFBeUJILFVBQXpCLENBQVIsQ0FBYjtBQUNBSSwrREFBU0EsQ0FBQ0YsSUFBVixFQUFnQkYsVUFBaEIsRTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0ssT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLEdBQXZCLEVBQTRCQyxFQUE1QixFQUFnQztBQUNyQ0EsS0FBR0MsWUFBSCxDQUFnQkgsSUFBaEIsRUFBc0JDLEdBQXRCO0FBQ0EsU0FBT0MsRUFBUDtBQUNEOztBQUVNLFNBQVNMLE9BQVQsQ0FBaUJHLElBQWpCLEVBQXVCRSxFQUF2QixFQUEyQjtBQUNoQyxTQUFPQSxHQUFHRSxZQUFILENBQWdCSixJQUFoQixD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QUFPLFVBQVNtQyxNQUFULEVBQWlCO0FBQ3RCdEMseURBQU9BLENBQUMsbUJBQVIsRUFBNkJzQyxNQUE3QixFQUFxQ25DLEVBQXJDO0FBQ0QsR0FGRDtBQUdEOztBQUVNLFNBQVNKLFNBQVQsQ0FBbUJGLElBQW5CLEVBQXlCRixVQUF6QixFQUFxQztBQUMxQzhCLHdEQUFPQSxDQUFDLE9BQVIsRUFBaUJTLFdBQVdyQyxJQUFYLENBQWpCLEVBQW1DRixVQUFuQztBQUNBOEIsd0RBQU9BLENBQUMsUUFBUixFQUFrQkksU0FBU2hDLElBQVQsRUFBZXdDLG1CQUFtQnhDLElBQW5CLENBQWYsQ0FBbEIsRUFBNERtQyxNQUE1RDtBQUNELEM7Ozs7Ozs7Ozs7O0FDaENELHlDIiwiZmlsZSI6ImpzL2dyb3Vwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9ncm91cHMuanNcIik7XG4iLCJpbXBvcnQgJy4uL3Njc3MvZ3JvdXBzLnNjc3MnO1xuXG5pbXBvcnQgeyBkb20gfSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCB7IGdldEF0dHIgfSBmcm9tICcuL21vZHVsZXMvYXR0cic7XG5pbXBvcnQgeyBzZXR1cE1lbnUgfSBmcm9tICcuL21vZHVsZXMvbWVudSc7XG5cbmNvbnN0IG1lbnVUb2dnbGUgPSBkb20oJy5tZW51LXRvZ2dsZScpO1xuY29uc3QgbWVudSA9IGRvbShgIyR7Z2V0QXR0cignYXJpYS1jb250cm9scycsIG1lbnVUb2dnbGUpfWApO1xuc2V0dXBNZW51KG1lbnUsIG1lbnVUb2dnbGUpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHIoYXR0ciwgdmFsLCBlbCkge1xuICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cihhdHRyLCBlbCkge1xuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xufVxuXG5leHBvcnQgY29uc3QgZmxpcEF0dHIgPSAoYXR0ciwgZWwpID0+XG4gIGdldEF0dHIoYXR0ciwgZWwpID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQXR0ciA9IChhdHRyLCBlbCkgPT4gc2V0QXR0cihhdHRyLCBmbGlwQXR0cihhdHRyLCBlbCksIGVsKTtcblxuZXhwb3J0IGNvbnN0IGF0dHJUb0Jvb2wgPSAoYXR0ciwgZWwpID0+IGVsLmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnO1xuIiwiY29uc3QgaXNFbG1Ob2RlID0gZWwgPT4gZWwgJiYgZWwubm9kZVR5cGUgPT09IDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb20oc2VsZWN0b3IsIHJvb3QpIHtcbiAgY29uc3QgZWwgPVxuICAgIHJvb3QgJiYgaXNFbG1Ob2RlKHJvb3QpXG4gICAgICA/IHJvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHJldHVybiBlbCB8fCB7IGVycm9yOiAnZWxlbWVudCBub3QgZm91bmQnIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21BbGwoc2VsZWN0b3IsIHJvb3QgPSBmYWxzZSkge1xuICBjb25zdCBlbG1zID0gaXNFbG1Ob2RlKHJvb3QpXG4gICAgPyByb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxtcykgfHwgW107XG59XG4iLCJleHBvcnQgY29uc3Qgd3JhcEV2ZW50ID0gKGZuLCBhcmdzID0gW10pID0+IChlKSA9PiB7XG4gIGZuKC4uLmFyZ3MpO1xuICByZXR1cm4gZTtcbn07XG5cbmV4cG9ydCBjb25zdCBldmVudE9uID0gKGV2ZW50LCBjYiwgZWwpID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xuICByZXR1cm4gZWw7XG59O1xuIiwiaW1wb3J0IHsgZXZlbnRPbiB9IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IHsgc2V0QXR0ciwgYXR0clRvQm9vbCB9IGZyb20gJy4vYXR0cic7XG5cbmZ1bmN0aW9uIHdoZW5QYXN0KGVsLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gaGVpZ2h0KSB7XG4gICAgICBmbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oZmFsc2UpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudShtZW51KSB7XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgbWVudU9wZW4gPSBhdHRyVG9Cb29sKCdhcmlhLWV4cGFuZGVkJywgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBzZXRBdHRyKCdhcmlhLWV4cGFuZGVkJywgIW1lbnVPcGVuLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHNldEF0dHIoJ2RhdGEtbWVudS1vcGVuJywgIW1lbnVPcGVuLCBtZW51KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudVBvc2l0aW9uKGVsKSB7XG4gIHJldHVybiBmdW5jdGlvbihpc1Bhc3QpIHtcbiAgICBzZXRBdHRyKCdkYXRhLWhlYWRlci1maXhlZCcsIGlzUGFzdCwgZWwpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBNZW51KG1lbnUsIG1lbnVUb2dnbGUpIHtcbiAgZXZlbnRPbignY2xpY2snLCB0b2dnbGVNZW51KG1lbnUpLCBtZW51VG9nZ2xlKTtcbiAgZXZlbnRPbignc2Nyb2xsJywgd2hlblBhc3QobWVudSwgdG9nZ2xlTWVudVBvc2l0aW9uKG1lbnUpKSwgd2luZG93KTtcbn1cbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==