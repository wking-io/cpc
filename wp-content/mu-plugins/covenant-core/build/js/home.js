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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/mu-plugins/covenant-core/src/js/home.js":
/*!************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/home.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/home.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/home.scss");
/* harmony import */ var _scss_home_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_home_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./wp-content/mu-plugins/covenant-core/src/js/modules/dom.js");
/* harmony import */ var _modules_attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/attr */ "./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./wp-content/mu-plugins/covenant-core/src/js/modules/menu.js");






var menuToggle = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.menu-toggle');
var menu = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('#' + Object(_modules_attr__WEBPACK_IMPORTED_MODULE_2__["getAttr"])('aria-controls', menuToggle));

Object(_modules_menu__WEBPACK_IMPORTED_MODULE_3__["setupMenu"])(menu, menuToggle);

function getTop(el) {
  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top;

  return top;
}

function moveY(el) {
  var base = {
    start: window.innerHeight,
    goal: window.innerHeight / 2,
    transform: 160,
    parent: el.parentElement
  };
  return function () {
    var parentPos = getTop(base.parent) + base.parent.offsetHeight / 2;
    var change = 1 - (base.start - parentPos) / base.goal;
    var percent = base.transform * change;
    var isAnimating = parentPos <= base.start;
    var isPast = parentPos <= base.goal;
    window.requestAnimationFrame(function () {
      if (isPast) {
        el.style.transform = 'translateY(0)';
      } else if (isAnimating) {
        el.style.transform = 'translateY(-' + percent + 'px)';
      } else {
        el.style.transform = 'transformY(-' + base.transform + 'px)';
      }
    });

    return base;
  };
}

if (window.innerWidth >= 768) {
  var video = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.cta-video');
  var moveVideo = moveY(video);
  moveVideo();
  window.addEventListener('scroll', moveVideo);
}

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

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/home.scss":
/*!****************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/home.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9zYXZlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL2hvbWUuc2NzcyJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwiZG9tIiwibWVudSIsImdldEF0dHIiLCJzZXR1cE1lbnUiLCJnZXRUb3AiLCJlbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIm1vdmVZIiwiYmFzZSIsInN0YXJ0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJnb2FsIiwidHJhbnNmb3JtIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsInBhcmVudFBvcyIsIm9mZnNldEhlaWdodCIsImNoYW5nZSIsInBlcmNlbnQiLCJpc0FuaW1hdGluZyIsImlzUGFzdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0eWxlIiwiaW5uZXJXaWR0aCIsInZpZGVvIiwibW92ZVZpZGVvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEF0dHIiLCJhdHRyIiwidmFsIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZmxpcEF0dHIiLCJ0b2dnbGVBdHRyIiwiYXR0clRvQm9vbCIsImlzRWxtTm9kZSIsIm5vZGVUeXBlIiwic2VsZWN0b3IiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImRvY3VtZW50IiwiZXJyb3IiLCJkb21BbGwiLCJlbG1zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsIndyYXBFdmVudCIsImZuIiwiYXJncyIsImUiLCJldmVudE9uIiwiZXZlbnQiLCJjYiIsIndoZW5QYXN0IiwiaGVpZ2h0Iiwic2Nyb2xsWSIsInRvZ2dsZU1lbnUiLCJtZW51T3BlbiIsImN1cnJlbnRUYXJnZXQiLCJzYXZlU2Nyb2xsIiwidG9nZ2xlTWVudVBvc2l0aW9uIiwiaXNTYXZpbmciLCJzY3JvbGxQb3MiLCJkb2N1bWVudEVsZW1lbnQiLCJwb3NpdGlvbiIsImJvZHkiLCJtYXJnaW5Ub3AiLCJzY3JvbGxUbyIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7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RCxVQUFULENBQW9CckQsSUFBcEIsRUFBMEI7QUFDL0IsU0FBTyxVQUFTdUQsUUFBVCxFQUFtQjtBQUN4QixRQUFJQSxRQUFKLEVBQWM7QUFDWixVQUFNQyxZQUFZdEQsT0FBTytDLE9BQXpCO0FBQ0FqRCxXQUFLdUIsWUFBTCxDQUFrQixrQkFBbEIsRUFBc0NpQyxTQUF0QztBQUNBdkIsZUFBU3dCLGVBQVQsQ0FBeUIxQyxLQUF6QixDQUErQjJDLFFBQS9CLEdBQTBDLE9BQTFDO0FBQ0F6QixlQUFTMEIsSUFBVCxDQUFjNUMsS0FBZCxDQUFvQjZDLFNBQXBCLEdBQWdDLE1BQU1KLFNBQU4sR0FBa0IsSUFBbEQ7QUFDRCxLQUxELE1BS087QUFDTHZCLGVBQVN3QixlQUFULENBQXlCMUMsS0FBekIsQ0FBK0IyQyxRQUEvQixHQUEwQyxRQUExQztBQUNBekIsZUFBUzBCLElBQVQsQ0FBYzVDLEtBQWQsQ0FBb0I2QyxTQUFwQixHQUFnQyxNQUFoQztBQUNBMUQsYUFBTzJELFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJDLFNBQVM5RCxLQUFLd0IsWUFBTCxDQUFrQixrQkFBbEIsQ0FBVCxDQUFuQjtBQUNEO0FBQ0YsR0FYRDtBQVlELEM7Ozs7Ozs7Ozs7O0FDYkQseUMiLCJmaWxlIjoianMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9ob21lLmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9zY3NzL2hvbWUuc2Nzcyc7XG5cbmltcG9ydCB7IGRvbSB9IGZyb20gJy4vbW9kdWxlcy9kb20nO1xuaW1wb3J0IHsgZ2V0QXR0ciB9IGZyb20gJy4vbW9kdWxlcy9hdHRyJztcbmltcG9ydCB7IHNldHVwTWVudSB9IGZyb20gJy4vbW9kdWxlcy9tZW51JztcblxuY29uc3QgbWVudVRvZ2dsZSA9IGRvbSgnLm1lbnUtdG9nZ2xlJyk7XG5jb25zdCBtZW51ID0gZG9tKGAjJHtnZXRBdHRyKCdhcmlhLWNvbnRyb2xzJywgbWVudVRvZ2dsZSl9YCk7XG5cbnNldHVwTWVudShtZW51LCBtZW51VG9nZ2xlKTtcblxuZnVuY3Rpb24gZ2V0VG9wKGVsKSB7XG4gIGNvbnN0IHsgdG9wIH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHRvcDtcbn1cblxuZnVuY3Rpb24gbW92ZVkoZWwpIHtcbiAgY29uc3QgYmFzZSA9IHtcbiAgICBzdGFydDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIGdvYWw6IHdpbmRvdy5pbm5lckhlaWdodCAvIDIsXG4gICAgdHJhbnNmb3JtOiAxNjAsXG4gICAgcGFyZW50OiBlbC5wYXJlbnRFbGVtZW50LFxuICB9O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcGFyZW50UG9zID0gZ2V0VG9wKGJhc2UucGFyZW50KSArIGJhc2UucGFyZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgY29uc3QgY2hhbmdlID0gMSAtIChiYXNlLnN0YXJ0IC0gcGFyZW50UG9zKSAvIGJhc2UuZ29hbDtcbiAgICBjb25zdCBwZXJjZW50ID0gYmFzZS50cmFuc2Zvcm0gKiBjaGFuZ2U7XG4gICAgY29uc3QgaXNBbmltYXRpbmcgPSBwYXJlbnRQb3MgPD0gYmFzZS5zdGFydDtcbiAgICBjb25zdCBpc1Bhc3QgPSBwYXJlbnRQb3MgPD0gYmFzZS5nb2FsO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKGlzUGFzdCkge1xuICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgwKWA7XG4gICAgICB9IGVsc2UgaWYgKGlzQW5pbWF0aW5nKSB7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke3BlcmNlbnR9cHgpYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2Zvcm1ZKC0ke2Jhc2UudHJhbnNmb3JtfXB4KWA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYmFzZTtcbiAgfTtcbn1cblxuaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCkge1xuICBjb25zdCB2aWRlbyA9IGRvbSgnLmN0YS12aWRlbycpO1xuICBjb25zdCBtb3ZlVmlkZW8gPSBtb3ZlWSh2aWRlbyk7XG4gIG1vdmVWaWRlbygpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbW92ZVZpZGVvKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyKGF0dHIsIHZhbCwgZWwpIHtcbiAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gIHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHIoYXR0ciwgZWwpIHtcbiAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZsaXBBdHRyID0gKGF0dHIsIGVsKSA9PlxuICBnZXRBdHRyKGF0dHIsIGVsKSA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJztcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUF0dHIgPSAoYXR0ciwgZWwpID0+IHNldEF0dHIoYXR0ciwgZmxpcEF0dHIoYXR0ciwgZWwpLCBlbCk7XG5cbmV4cG9ydCBjb25zdCBhdHRyVG9Cb29sID0gKGF0dHIsIGVsKSA9PiBlbC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJztcbiIsImNvbnN0IGlzRWxtTm9kZSA9IGVsID0+IGVsICYmIGVsLm5vZGVUeXBlID09PSAxO1xuXG5leHBvcnQgZnVuY3Rpb24gZG9tKHNlbGVjdG9yLCByb290KSB7XG4gIGNvbnN0IGVsID1cbiAgICByb290ICYmIGlzRWxtTm9kZShyb290KVxuICAgICAgPyByb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICByZXR1cm4gZWwgfHwgeyBlcnJvcjogJ2VsZW1lbnQgbm90IGZvdW5kJyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tQWxsKHNlbGVjdG9yLCByb290ID0gZmFsc2UpIHtcbiAgY29uc3QgZWxtcyA9IGlzRWxtTm9kZShyb290KVxuICAgID8gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsbXMpIHx8IFtdO1xufVxuIiwiZXhwb3J0IGNvbnN0IHdyYXBFdmVudCA9IChmbiwgYXJncyA9IFtdKSA9PiAoZSkgPT4ge1xuICBmbiguLi5hcmdzKTtcbiAgcmV0dXJuIGU7XG59O1xuXG5leHBvcnQgY29uc3QgZXZlbnRPbiA9IChldmVudCwgY2IsIGVsKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKTtcbiAgcmV0dXJuIGVsO1xufTtcbiIsImltcG9ydCB7IGV2ZW50T24gfSBmcm9tICcuL2V2ZW50JztcbmltcG9ydCB7IHNldEF0dHIsIGF0dHJUb0Jvb2wgfSBmcm9tICcuL2F0dHInO1xuaW1wb3J0IHsgc2F2ZVNjcm9sbCB9IGZyb20gJy4vc2F2ZVNjcm9sbCc7XG5cbmZ1bmN0aW9uIHdoZW5QYXN0KGVsLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gaGVpZ2h0KSB7XG4gICAgICBmbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oZmFsc2UpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudShtZW51KSB7XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgbWVudU9wZW4gPSBhdHRyVG9Cb29sKCdhcmlhLWV4cGFuZGVkJywgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBzZXRBdHRyKCdhcmlhLWV4cGFuZGVkJywgIW1lbnVPcGVuLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHNldEF0dHIoJ2RhdGEtbWVudS1vcGVuJywgIW1lbnVPcGVuLCBtZW51KTtcbiAgICBzYXZlU2Nyb2xsKG1lbnUpKCFtZW51T3Blbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnVQb3NpdGlvbihlbCkge1xuICByZXR1cm4gZnVuY3Rpb24oaXNQYXN0KSB7XG4gICAgc2V0QXR0cignZGF0YS1oZWFkZXItZml4ZWQnLCBpc1Bhc3QsIGVsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTWVudShtZW51LCBtZW51VG9nZ2xlKSB7XG4gIGV2ZW50T24oJ2NsaWNrJywgdG9nZ2xlTWVudShtZW51KSwgbWVudVRvZ2dsZSk7XG4gIGV2ZW50T24oJ3Njcm9sbCcsIHdoZW5QYXN0KG1lbnUsIHRvZ2dsZU1lbnVQb3NpdGlvbihtZW51KSksIHdpbmRvdyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZVNjcm9sbChiYXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbihpc1NhdmluZykge1xuICAgIGlmIChpc1NhdmluZykge1xuICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBiYXNlLnNldEF0dHJpYnV0ZSgnZGF0YS1zYXZlLXNjcm9sbCcsIHNjcm9sbFBvcyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyBzY3JvbGxQb3MgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KGJhc2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNhdmUtc2Nyb2xsJykpKTtcbiAgICB9XG4gIH07XG59XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=