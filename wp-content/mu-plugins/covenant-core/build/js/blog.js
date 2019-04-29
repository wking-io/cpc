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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/mu-plugins/covenant-core/src/js/blog.js":
/*!************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/blog.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_blog_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/blog.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/blog.scss");
/* harmony import */ var _scss_blog_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_blog_scss__WEBPACK_IMPORTED_MODULE_0__);
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

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/blog.scss":
/*!****************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/blog.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2Jsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvc2Nzcy9ibG9nLnNjc3MiXSwibmFtZXMiOlsibWVudVRvZ2dsZSIsImRvbSIsIm1lbnUiLCJnZXRBdHRyIiwic2V0dXBNZW51Iiwic2V0QXR0ciIsImF0dHIiLCJ2YWwiLCJlbCIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImZsaXBBdHRyIiwidG9nZ2xlQXR0ciIsImF0dHJUb0Jvb2wiLCJpc0VsbU5vZGUiLCJub2RlVHlwZSIsInNlbGVjdG9yIiwicm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJkb2N1bWVudCIsImVycm9yIiwiZG9tQWxsIiwiZWxtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJ3cmFwRXZlbnQiLCJmbiIsImFyZ3MiLCJlIiwiZXZlbnRPbiIsImV2ZW50IiwiY2IiLCJhZGRFdmVudExpc3RlbmVyIiwid2hlblBhc3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidG9nZ2xlTWVudSIsIm1lbnVPcGVuIiwiY3VycmVudFRhcmdldCIsInRvZ2dsZU1lbnVQb3NpdGlvbiIsImlzUGFzdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWFDLHdEQUFHQSxDQUFDLGNBQUosQ0FBbkI7QUFDQSxJQUFNQyxPQUFPRCx3REFBR0EsT0FBS0UsNkRBQU9BLENBQUMsZUFBUixFQUF5QkgsVUFBekIsQ0FBUixDQUFiO0FBQ0FJLCtEQUFTQSxDQUFDRixJQUFWLEVBQWdCRixVQUFoQixFOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxTQUFTSyxPQUFULENBQWlCQyxJQUFqQixFQUF1QkMsR0FBdkIsRUFBNEJDLEVBQTVCLEVBQWdDO0FBQ3JDQSxLQUFHQyxZQUFILENBQWdCSCxJQUFoQixFQUFzQkMsR0FBdEI7QUFDQSxTQUFPQyxFQUFQO0FBQ0Q7O0FBRU0sU0FBU0wsT0FBVCxDQUFpQkcsSUFBakIsRUFBdUJFLEVBQXZCLEVBQTJCO0FBQ2hDLFNBQU9BLEdBQUdFLFlBQUgsQ0FBZ0JKLElBQWhCLENBQVA7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VUFBU21DLE1BQVQsRUFBaUI7QUFDdEJ0Qyx5REFBT0EsQ0FBQyxtQkFBUixFQUE2QnNDLE1BQTdCLEVBQXFDbkMsRUFBckM7QUFDRCxHQUZEO0FBR0Q7O0FBRU0sU0FBU0osU0FBVCxDQUFtQkYsSUFBbkIsRUFBeUJGLFVBQXpCLEVBQXFDO0FBQzFDOEIsd0RBQU9BLENBQUMsT0FBUixFQUFpQlMsV0FBV3JDLElBQVgsQ0FBakIsRUFBbUNGLFVBQW5DO0FBQ0E4Qix3REFBT0EsQ0FBQyxRQUFSLEVBQWtCSSxTQUFTaEMsSUFBVCxFQUFld0MsbUJBQW1CeEMsSUFBbkIsQ0FBZixDQUFsQixFQUE0RG1DLE1BQTVEO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNoQ0QseUMiLCJmaWxlIjoianMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9ibG9nLmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9zY3NzL2Jsb2cuc2Nzcyc7XG5cbmltcG9ydCB7IGRvbSB9IGZyb20gJy4vbW9kdWxlcy9kb20nO1xuaW1wb3J0IHsgZ2V0QXR0ciB9IGZyb20gJy4vbW9kdWxlcy9hdHRyJztcbmltcG9ydCB7IHNldHVwTWVudSB9IGZyb20gJy4vbW9kdWxlcy9tZW51JztcblxuY29uc3QgbWVudVRvZ2dsZSA9IGRvbSgnLm1lbnUtdG9nZ2xlJyk7XG5jb25zdCBtZW51ID0gZG9tKGAjJHtnZXRBdHRyKCdhcmlhLWNvbnRyb2xzJywgbWVudVRvZ2dsZSl9YCk7XG5zZXR1cE1lbnUobWVudSwgbWVudVRvZ2dsZSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0QXR0cihhdHRyLCB2YWwsIGVsKSB7XG4gIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyKGF0dHIsIGVsKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG59XG5cbmV4cG9ydCBjb25zdCBmbGlwQXR0ciA9IChhdHRyLCBlbCkgPT5cbiAgZ2V0QXR0cihhdHRyLCBlbCkgPT09ICd0cnVlJyA/ICdmYWxzZScgOiAndHJ1ZSc7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVBdHRyID0gKGF0dHIsIGVsKSA9PiBzZXRBdHRyKGF0dHIsIGZsaXBBdHRyKGF0dHIsIGVsKSwgZWwpO1xuXG5leHBvcnQgY29uc3QgYXR0clRvQm9vbCA9IChhdHRyLCBlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZSc7XG4iLCJjb25zdCBpc0VsbU5vZGUgPSBlbCA9PiBlbCAmJiBlbC5ub2RlVHlwZSA9PT0gMTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRvbShzZWxlY3Rvciwgcm9vdCkge1xuICBjb25zdCBlbCA9XG4gICAgcm9vdCAmJiBpc0VsbU5vZGUocm9vdClcbiAgICAgID8gcm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgcmV0dXJuIGVsIHx8IHsgZXJyb3I6ICdlbGVtZW50IG5vdCBmb3VuZCcgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUFsbChzZWxlY3Rvciwgcm9vdCA9IGZhbHNlKSB7XG4gIGNvbnN0IGVsbXMgPSBpc0VsbU5vZGUocm9vdClcbiAgICA/IHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICByZXR1cm4gQXJyYXkuZnJvbShlbG1zKSB8fCBbXTtcbn1cbiIsImV4cG9ydCBjb25zdCB3cmFwRXZlbnQgPSAoZm4sIGFyZ3MgPSBbXSkgPT4gKGUpID0+IHtcbiAgZm4oLi4uYXJncyk7XG4gIHJldHVybiBlO1xufTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50T24gPSAoZXZlbnQsIGNiLCBlbCkgPT4ge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYik7XG4gIHJldHVybiBlbDtcbn07XG4iLCJpbXBvcnQgeyBldmVudE9uIH0gZnJvbSAnLi9ldmVudCc7XG5pbXBvcnQgeyBzZXRBdHRyLCBhdHRyVG9Cb29sIH0gZnJvbSAnLi9hdHRyJztcblxuZnVuY3Rpb24gd2hlblBhc3QoZWwsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBoZWlnaHQpIHtcbiAgICAgIGZuKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbihmYWxzZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51KG1lbnUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBtZW51T3BlbiA9IGF0dHJUb0Jvb2woJ2FyaWEtZXhwYW5kZWQnLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHNldEF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAhbWVudU9wZW4sIGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0QXR0cignZGF0YS1tZW51LW9wZW4nLCAhbWVudU9wZW4sIG1lbnUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51UG9zaXRpb24oZWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGlzUGFzdCkge1xuICAgIHNldEF0dHIoJ2RhdGEtaGVhZGVyLWZpeGVkJywgaXNQYXN0LCBlbCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cE1lbnUobWVudSwgbWVudVRvZ2dsZSkge1xuICBldmVudE9uKCdjbGljaycsIHRvZ2dsZU1lbnUobWVudSksIG1lbnVUb2dnbGUpO1xuICBldmVudE9uKCdzY3JvbGwnLCB3aGVuUGFzdChtZW51LCB0b2dnbGVNZW51UG9zaXRpb24obWVudSkpLCB3aW5kb3cpO1xufVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9