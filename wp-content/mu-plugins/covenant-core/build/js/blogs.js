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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/blogs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/mu-plugins/covenant-core/src/js/blogs.js":
/*!*************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/blogs.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_blogs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/blogs.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/blogs.scss");
/* harmony import */ var _scss_blogs_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_blogs_scss__WEBPACK_IMPORTED_MODULE_0__);
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

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/blogs.scss":
/*!*****************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/blogs.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2Jsb2dzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL3Njc3MvYmxvZ3Muc2NzcyJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwiZG9tIiwibWVudSIsImdldEF0dHIiLCJzZXR1cE1lbnUiLCJzZXRBdHRyIiwiYXR0ciIsInZhbCIsImVsIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZmxpcEF0dHIiLCJ0b2dnbGVBdHRyIiwiYXR0clRvQm9vbCIsImlzRWxtTm9kZSIsIm5vZGVUeXBlIiwic2VsZWN0b3IiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImRvY3VtZW50IiwiZXJyb3IiLCJkb21BbGwiLCJlbG1zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsIndyYXBFdmVudCIsImZuIiwiYXJncyIsImUiLCJldmVudE9uIiwiZXZlbnQiLCJjYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aGVuUGFzdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpbmRvdyIsInNjcm9sbFkiLCJ0b2dnbGVNZW51IiwibWVudU9wZW4iLCJjdXJyZW50VGFyZ2V0IiwidG9nZ2xlTWVudVBvc2l0aW9uIiwiaXNQYXN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYUMsd0RBQUdBLENBQUMsY0FBSixDQUFuQjtBQUNBLElBQU1DLE9BQU9ELHdEQUFHQSxPQUFLRSw2REFBT0EsQ0FBQyxlQUFSLEVBQXlCSCxVQUF6QixDQUFSLENBQWI7QUFDQUksK0RBQVNBLENBQUNGLElBQVYsRUFBZ0JGLFVBQWhCLEU7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVNLLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCQyxHQUF2QixFQUE0QkMsRUFBNUIsRUFBZ0M7QUFDckNBLEtBQUdDLFlBQUgsQ0FBZ0JILElBQWhCLEVBQXNCQyxHQUF0QjtBQUNBLFNBQU9DLEVBQVA7QUFDRDs7QUFFTSxTQUFTTCxPQUFULENBQWlCRyxJQUFqQixFQUF1QkUsRUFBdkIsRUFBMkI7QUFDaEMsU0FBT0EsR0FBR0UsWUFBSCxDQUFnQkosSUFBaEIsQ0FB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TyxVQUFTbUMsTUFBVCxFQUFpQjtBQUN0QnRDLHlEQUFPQSxDQUFDLG1CQUFSLEVBQTZCc0MsTUFBN0IsRUFBcUNuQyxFQUFyQztBQUNELEdBRkQ7QUFHRDs7QUFFTSxTQUFTSixTQUFULENBQW1CRixJQUFuQixFQUF5QkYsVUFBekIsRUFBcUM7QUFDMUM4Qix3REFBT0EsQ0FBQyxPQUFSLEVBQWlCUyxXQUFXckMsSUFBWCxDQUFqQixFQUFtQ0YsVUFBbkM7QUFDQThCLHdEQUFPQSxDQUFDLFFBQVIsRUFBa0JJLFNBQVNoQyxJQUFULEVBQWV3QyxtQkFBbUJ4QyxJQUFuQixDQUFmLENBQWxCLEVBQTREbUMsTUFBNUQ7QUFDRCxDOzs7Ozs7Ozs7OztBQ2hDRCx5QyIsImZpbGUiOiJqcy9ibG9ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9ibG9ncy5qc1wiKTtcbiIsImltcG9ydCAnLi4vc2Nzcy9ibG9ncy5zY3NzJztcblxuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi9tb2R1bGVzL2RvbSc7XG5pbXBvcnQgeyBnZXRBdHRyIH0gZnJvbSAnLi9tb2R1bGVzL2F0dHInO1xuaW1wb3J0IHsgc2V0dXBNZW51IH0gZnJvbSAnLi9tb2R1bGVzL21lbnUnO1xuXG5jb25zdCBtZW51VG9nZ2xlID0gZG9tKCcubWVudS10b2dnbGUnKTtcbmNvbnN0IG1lbnUgPSBkb20oYCMke2dldEF0dHIoJ2FyaWEtY29udHJvbHMnLCBtZW51VG9nZ2xlKX1gKTtcbnNldHVwTWVudShtZW51LCBtZW51VG9nZ2xlKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyKGF0dHIsIHZhbCwgZWwpIHtcbiAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gIHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHIoYXR0ciwgZWwpIHtcbiAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZsaXBBdHRyID0gKGF0dHIsIGVsKSA9PlxuICBnZXRBdHRyKGF0dHIsIGVsKSA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJztcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUF0dHIgPSAoYXR0ciwgZWwpID0+IHNldEF0dHIoYXR0ciwgZmxpcEF0dHIoYXR0ciwgZWwpLCBlbCk7XG5cbmV4cG9ydCBjb25zdCBhdHRyVG9Cb29sID0gKGF0dHIsIGVsKSA9PiBlbC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJztcbiIsImNvbnN0IGlzRWxtTm9kZSA9IGVsID0+IGVsICYmIGVsLm5vZGVUeXBlID09PSAxO1xuXG5leHBvcnQgZnVuY3Rpb24gZG9tKHNlbGVjdG9yLCByb290KSB7XG4gIGNvbnN0IGVsID1cbiAgICByb290ICYmIGlzRWxtTm9kZShyb290KVxuICAgICAgPyByb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICByZXR1cm4gZWwgfHwgeyBlcnJvcjogJ2VsZW1lbnQgbm90IGZvdW5kJyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tQWxsKHNlbGVjdG9yLCByb290ID0gZmFsc2UpIHtcbiAgY29uc3QgZWxtcyA9IGlzRWxtTm9kZShyb290KVxuICAgID8gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsbXMpIHx8IFtdO1xufVxuIiwiZXhwb3J0IGNvbnN0IHdyYXBFdmVudCA9IChmbiwgYXJncyA9IFtdKSA9PiAoZSkgPT4ge1xuICBmbiguLi5hcmdzKTtcbiAgcmV0dXJuIGU7XG59O1xuXG5leHBvcnQgY29uc3QgZXZlbnRPbiA9IChldmVudCwgY2IsIGVsKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKTtcbiAgcmV0dXJuIGVsO1xufTtcbiIsImltcG9ydCB7IGV2ZW50T24gfSBmcm9tICcuL2V2ZW50JztcbmltcG9ydCB7IHNldEF0dHIsIGF0dHJUb0Jvb2wgfSBmcm9tICcuL2F0dHInO1xuXG5mdW5jdGlvbiB3aGVuUGFzdChlbCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGhlaWdodCkge1xuICAgICAgZm4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKGZhbHNlKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnUobWVudSkge1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IG1lbnVPcGVuID0gYXR0clRvQm9vbCgnYXJpYS1leHBhbmRlZCcsIGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0QXR0cignYXJpYS1leHBhbmRlZCcsICFtZW51T3BlbiwgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBzZXRBdHRyKCdkYXRhLW1lbnUtb3BlbicsICFtZW51T3BlbiwgbWVudSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnVQb3NpdGlvbihlbCkge1xuICByZXR1cm4gZnVuY3Rpb24oaXNQYXN0KSB7XG4gICAgc2V0QXR0cignZGF0YS1oZWFkZXItZml4ZWQnLCBpc1Bhc3QsIGVsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTWVudShtZW51LCBtZW51VG9nZ2xlKSB7XG4gIGV2ZW50T24oJ2NsaWNrJywgdG9nZ2xlTWVudShtZW51KSwgbWVudVRvZ2dsZSk7XG4gIGV2ZW50T24oJ3Njcm9sbCcsIHdoZW5QYXN0KG1lbnUsIHRvZ2dsZU1lbnVQb3NpdGlvbihtZW51KSksIHdpbmRvdyk7XG59XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=