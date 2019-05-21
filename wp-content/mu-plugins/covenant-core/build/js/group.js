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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/group.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/mu-plugins/covenant-core/src/js/group.js":
/*!*************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/group.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_group_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/group.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/group.scss");
/* harmony import */ var _scss_group_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_group_scss__WEBPACK_IMPORTED_MODULE_0__);
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

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/group.scss":
/*!*****************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/group.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2dyb3VwLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvc2F2ZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvc2Nzcy9ncm91cC5zY3NzIl0sIm5hbWVzIjpbIm1lbnVUb2dnbGUiLCJkb20iLCJtZW51IiwiZ2V0QXR0ciIsInNldHVwTWVudSIsInNldEF0dHIiLCJhdHRyIiwidmFsIiwiZWwiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJmbGlwQXR0ciIsInRvZ2dsZUF0dHIiLCJhdHRyVG9Cb29sIiwiaXNFbG1Ob2RlIiwibm9kZVR5cGUiLCJzZWxlY3RvciIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiZG9jdW1lbnQiLCJlcnJvciIsImRvbUFsbCIsImVsbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwid3JhcEV2ZW50IiwiZm4iLCJhcmdzIiwiZSIsImV2ZW50T24iLCJldmVudCIsImNiIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndoZW5QYXN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwid2luZG93Iiwic2Nyb2xsWSIsInRvZ2dsZU1lbnUiLCJtZW51T3BlbiIsImN1cnJlbnRUYXJnZXQiLCJzYXZlU2Nyb2xsIiwidG9nZ2xlTWVudVBvc2l0aW9uIiwiaXNQYXN0IiwiYmFzZSIsImlzU2F2aW5nIiwic2Nyb2xsUG9zIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsImJvZHkiLCJtYXJnaW5Ub3AiLCJzY3JvbGxUbyIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYUMsd0RBQUdBLENBQUMsY0FBSixDQUFuQjtBQUNBLElBQU1DLE9BQU9ELHdEQUFHQSxPQUFLRSw2REFBT0EsQ0FBQyxlQUFSLEVBQXlCSCxVQUF6QixDQUFSLENBQWI7QUFDQUksK0RBQVNBLENBQUNGLElBQVYsRUFBZ0JGLFVBQWhCLEU7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVNLLE9B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eUJDLEtBQXpCLENBQStCQyxRQUEvQixHQUEwQyxRQUExQztBQUNBL0IsZUFBU2dDLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkcsU0FBcEIsR0FBZ0MsTUFBaEM7QUFDQWYsYUFBT2dCLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJDLFNBQVNULEtBQUtuQyxZQUFMLENBQWtCLGtCQUFsQixDQUFULENBQW5CO0FBQ0Q7QUFDRixHQVhEO0FBWUQsQzs7Ozs7Ozs7Ozs7QUNiRCx5QyIsImZpbGUiOiJqcy9ncm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9ncm91cC5qc1wiKTtcbiIsImltcG9ydCAnLi4vc2Nzcy9ncm91cC5zY3NzJztcblxuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi9tb2R1bGVzL2RvbSc7XG5pbXBvcnQgeyBnZXRBdHRyIH0gZnJvbSAnLi9tb2R1bGVzL2F0dHInO1xuaW1wb3J0IHsgc2V0dXBNZW51IH0gZnJvbSAnLi9tb2R1bGVzL21lbnUnO1xuXG5jb25zdCBtZW51VG9nZ2xlID0gZG9tKCcubWVudS10b2dnbGUnKTtcbmNvbnN0IG1lbnUgPSBkb20oYCMke2dldEF0dHIoJ2FyaWEtY29udHJvbHMnLCBtZW51VG9nZ2xlKX1gKTtcbnNldHVwTWVudShtZW51LCBtZW51VG9nZ2xlKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyKGF0dHIsIHZhbCwgZWwpIHtcbiAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gIHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHIoYXR0ciwgZWwpIHtcbiAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZsaXBBdHRyID0gKGF0dHIsIGVsKSA9PlxuICBnZXRBdHRyKGF0dHIsIGVsKSA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJztcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUF0dHIgPSAoYXR0ciwgZWwpID0+IHNldEF0dHIoYXR0ciwgZmxpcEF0dHIoYXR0ciwgZWwpLCBlbCk7XG5cbmV4cG9ydCBjb25zdCBhdHRyVG9Cb29sID0gKGF0dHIsIGVsKSA9PiBlbC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJztcbiIsImNvbnN0IGlzRWxtTm9kZSA9IGVsID0+IGVsICYmIGVsLm5vZGVUeXBlID09PSAxO1xuXG5leHBvcnQgZnVuY3Rpb24gZG9tKHNlbGVjdG9yLCByb290KSB7XG4gIGNvbnN0IGVsID1cbiAgICByb290ICYmIGlzRWxtTm9kZShyb290KVxuICAgICAgPyByb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICByZXR1cm4gZWwgfHwgeyBlcnJvcjogJ2VsZW1lbnQgbm90IGZvdW5kJyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tQWxsKHNlbGVjdG9yLCByb290ID0gZmFsc2UpIHtcbiAgY29uc3QgZWxtcyA9IGlzRWxtTm9kZShyb290KVxuICAgID8gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsbXMpIHx8IFtdO1xufVxuIiwiZXhwb3J0IGNvbnN0IHdyYXBFdmVudCA9IChmbiwgYXJncyA9IFtdKSA9PiAoZSkgPT4ge1xuICBmbiguLi5hcmdzKTtcbiAgcmV0dXJuIGU7XG59O1xuXG5leHBvcnQgY29uc3QgZXZlbnRPbiA9IChldmVudCwgY2IsIGVsKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKTtcbiAgcmV0dXJuIGVsO1xufTtcbiIsImltcG9ydCB7IGV2ZW50T24gfSBmcm9tICcuL2V2ZW50JztcbmltcG9ydCB7IHNldEF0dHIsIGF0dHJUb0Jvb2wgfSBmcm9tICcuL2F0dHInO1xuaW1wb3J0IHsgc2F2ZVNjcm9sbCB9IGZyb20gJy4vc2F2ZVNjcm9sbCc7XG5cbmZ1bmN0aW9uIHdoZW5QYXN0KGVsLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gaGVpZ2h0KSB7XG4gICAgICBmbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oZmFsc2UpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudShtZW51KSB7XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgbWVudU9wZW4gPSBhdHRyVG9Cb29sKCdhcmlhLWV4cGFuZGVkJywgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBzZXRBdHRyKCdhcmlhLWV4cGFuZGVkJywgIW1lbnVPcGVuLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHNldEF0dHIoJ2RhdGEtbWVudS1vcGVuJywgIW1lbnVPcGVuLCBtZW51KTtcbiAgICBzYXZlU2Nyb2xsKG1lbnUpKCFtZW51T3Blbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnVQb3NpdGlvbihlbCkge1xuICByZXR1cm4gZnVuY3Rpb24oaXNQYXN0KSB7XG4gICAgc2V0QXR0cignZGF0YS1oZWFkZXItZml4ZWQnLCBpc1Bhc3QsIGVsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTWVudShtZW51LCBtZW51VG9nZ2xlKSB7XG4gIGV2ZW50T24oJ2NsaWNrJywgdG9nZ2xlTWVudShtZW51KSwgbWVudVRvZ2dsZSk7XG4gIGV2ZW50T24oJ3Njcm9sbCcsIHdoZW5QYXN0KG1lbnUsIHRvZ2dsZU1lbnVQb3NpdGlvbihtZW51KSksIHdpbmRvdyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZVNjcm9sbChiYXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbihpc1NhdmluZykge1xuICAgIGlmIChpc1NhdmluZykge1xuICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBiYXNlLnNldEF0dHJpYnV0ZSgnZGF0YS1zYXZlLXNjcm9sbCcsIHNjcm9sbFBvcyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyBzY3JvbGxQb3MgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KGJhc2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNhdmUtc2Nyb2xsJykpKTtcbiAgICB9XG4gIH07XG59XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=