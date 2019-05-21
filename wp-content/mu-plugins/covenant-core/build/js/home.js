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
    transform: 45,
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
        el.style.transform = 'translateY(-' + percent + '%)';
      } else {
        el.style.transform = 'transformY(-' + base.transform + '%)';
      }
    });

    return base;
  };
}

var video = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.cta-video');
var moveVideo = moveY(video);
moveVideo();
window.addEventListener('scroll', moveVideo);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9zYXZlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL2hvbWUuc2NzcyJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwiZG9tIiwibWVudSIsImdldEF0dHIiLCJzZXR1cE1lbnUiLCJnZXRUb3AiLCJlbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIm1vdmVZIiwiYmFzZSIsInN0YXJ0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJnb2FsIiwidHJhbnNmb3JtIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsInBhcmVudFBvcyIsIm9mZnNldEhlaWdodCIsImNoYW5nZSIsInBlcmNlbnQiLCJpc0FuaW1hdGluZyIsImlzUGFzdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0eWxlIiwidmlkZW8iLCJtb3ZlVmlkZW8iLCJhZGRFdmVudExpc3RlbmVyIiwic2V0QXR0ciIsImF0dHIiLCJ2YWwiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJmbGlwQXR0ciIsInRvZ2dsZUF0dHIiLCJhdHRyVG9Cb29sIiwiaXNFbG1Ob2RlIiwibm9kZVR5cGUiLCJzZWxlY3RvciIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiZG9jdW1lbnQiLCJlcnJvciIsImRvbUFsbCIsImVsbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwid3JhcEV2ZW50IiwiZm4iLCJhcmdzIiwiZSIsImV2ZW50T24iLCJldmVudCIsImNiIiwid2hlblBhc3QiLCJoZWlnaHQiLCJzY3JvbGxZIiwidG9nZ2xlTWVudSIsIm1lbnVPcGVuIiwiY3VycmVudFRhcmdldCIsInNhdmVTY3JvbGwiLCJ0b2dnbGVNZW51UG9zaXRpb24iLCJpc1NhdmluZyIsInNjcm9sbFBvcyIsImRvY3VtZW50RWxlbWVudCIsInBvc2l0aW9uIiwiYm9keSIsIm1hcmdpblRvcCIsInNjcm9sbFRvIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxh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eEIsUUFBSUEsUUFBSixFQUFjO0FBQ1osVUFBTUMsWUFBWXJELE9BQU84QyxPQUF6QjtBQUNBaEQsV0FBS3NCLFlBQUwsQ0FBa0Isa0JBQWxCLEVBQXNDaUMsU0FBdEM7QUFDQXZCLGVBQVN3QixlQUFULENBQXlCekMsS0FBekIsQ0FBK0IwQyxRQUEvQixHQUEwQyxPQUExQztBQUNBekIsZUFBUzBCLElBQVQsQ0FBYzNDLEtBQWQsQ0FBb0I0QyxTQUFwQixHQUFnQyxNQUFNSixTQUFOLEdBQWtCLElBQWxEO0FBQ0QsS0FMRCxNQUtPO0FBQ0x2QixlQUFTd0IsZUFBVCxDQUF5QnpDLEtBQXpCLENBQStCMEMsUUFBL0IsR0FBMEMsUUFBMUM7QUFDQXpCLGVBQVMwQixJQUFULENBQWMzQyxLQUFkLENBQW9CNEMsU0FBcEIsR0FBZ0MsTUFBaEM7QUFDQXpELGFBQU8wRCxRQUFQLENBQWdCLENBQWhCLEVBQW1CQyxTQUFTN0QsS0FBS3VCLFlBQUwsQ0FBa0Isa0JBQWxCLENBQVQsQ0FBbkI7QUFDRDtBQUNGLEdBWEQ7QUFZRCxDOzs7Ozs7Ozs7OztBQ2JELHlDIiwiZmlsZSI6ImpzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvaG9tZS5qc1wiKTtcbiIsImltcG9ydCAnLi4vc2Nzcy9ob21lLnNjc3MnO1xuXG5pbXBvcnQgeyBkb20gfSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCB7IGdldEF0dHIgfSBmcm9tICcuL21vZHVsZXMvYXR0cic7XG5pbXBvcnQgeyBzZXR1cE1lbnUgfSBmcm9tICcuL21vZHVsZXMvbWVudSc7XG5cbmNvbnN0IG1lbnVUb2dnbGUgPSBkb20oJy5tZW51LXRvZ2dsZScpO1xuY29uc3QgbWVudSA9IGRvbShgIyR7Z2V0QXR0cignYXJpYS1jb250cm9scycsIG1lbnVUb2dnbGUpfWApO1xuXG5zZXR1cE1lbnUobWVudSwgbWVudVRvZ2dsZSk7XG5cbmZ1bmN0aW9uIGdldFRvcChlbCkge1xuICBjb25zdCB7IHRvcCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB0b3A7XG59XG5cbmZ1bmN0aW9uIG1vdmVZKGVsKSB7XG4gIGNvbnN0IGJhc2UgPSB7XG4gICAgc3RhcnQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICBnb2FsOiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyLFxuICAgIHRyYW5zZm9ybTogNDUsXG4gICAgcGFyZW50OiBlbC5wYXJlbnRFbGVtZW50LFxuICB9O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcGFyZW50UG9zID0gZ2V0VG9wKGJhc2UucGFyZW50KSArIGJhc2UucGFyZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgY29uc3QgY2hhbmdlID0gMSAtIChiYXNlLnN0YXJ0IC0gcGFyZW50UG9zKSAvIGJhc2UuZ29hbDtcbiAgICBjb25zdCBwZXJjZW50ID0gYmFzZS50cmFuc2Zvcm0gKiBjaGFuZ2U7XG4gICAgY29uc3QgaXNBbmltYXRpbmcgPSBwYXJlbnRQb3MgPD0gYmFzZS5zdGFydDtcbiAgICBjb25zdCBpc1Bhc3QgPSBwYXJlbnRQb3MgPD0gYmFzZS5nb2FsO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKGlzUGFzdCkge1xuICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgwKWA7XG4gICAgICB9IGVsc2UgaWYgKGlzQW5pbWF0aW5nKSB7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke3BlcmNlbnR9JSlgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zZm9ybVkoLSR7YmFzZS50cmFuc2Zvcm19JSlgO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJhc2U7XG4gIH07XG59XG5cbmNvbnN0IHZpZGVvID0gZG9tKCcuY3RhLXZpZGVvJyk7XG5jb25zdCBtb3ZlVmlkZW8gPSBtb3ZlWSh2aWRlbyk7XG5tb3ZlVmlkZW8oKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBtb3ZlVmlkZW8pO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHIoYXR0ciwgdmFsLCBlbCkge1xuICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cihhdHRyLCBlbCkge1xuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xufVxuXG5leHBvcnQgY29uc3QgZmxpcEF0dHIgPSAoYXR0ciwgZWwpID0+XG4gIGdldEF0dHIoYXR0ciwgZWwpID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQXR0ciA9IChhdHRyLCBlbCkgPT4gc2V0QXR0cihhdHRyLCBmbGlwQXR0cihhdHRyLCBlbCksIGVsKTtcblxuZXhwb3J0IGNvbnN0IGF0dHJUb0Jvb2wgPSAoYXR0ciwgZWwpID0+IGVsLmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnO1xuIiwiY29uc3QgaXNFbG1Ob2RlID0gZWwgPT4gZWwgJiYgZWwubm9kZVR5cGUgPT09IDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb20oc2VsZWN0b3IsIHJvb3QpIHtcbiAgY29uc3QgZWwgPVxuICAgIHJvb3QgJiYgaXNFbG1Ob2RlKHJvb3QpXG4gICAgICA/IHJvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHJldHVybiBlbCB8fCB7IGVycm9yOiAnZWxlbWVudCBub3QgZm91bmQnIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21BbGwoc2VsZWN0b3IsIHJvb3QgPSBmYWxzZSkge1xuICBjb25zdCBlbG1zID0gaXNFbG1Ob2RlKHJvb3QpXG4gICAgPyByb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxtcykgfHwgW107XG59XG4iLCJleHBvcnQgY29uc3Qgd3JhcEV2ZW50ID0gKGZuLCBhcmdzID0gW10pID0+IChlKSA9PiB7XG4gIGZuKC4uLmFyZ3MpO1xuICByZXR1cm4gZTtcbn07XG5cbmV4cG9ydCBjb25zdCBldmVudE9uID0gKGV2ZW50LCBjYiwgZWwpID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xuICByZXR1cm4gZWw7XG59O1xuIiwiaW1wb3J0IHsgZXZlbnRPbiB9IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IHsgc2V0QXR0ciwgYXR0clRvQm9vbCB9IGZyb20gJy4vYXR0cic7XG5pbXBvcnQgeyBzYXZlU2Nyb2xsIH0gZnJvbSAnLi9zYXZlU2Nyb2xsJztcblxuZnVuY3Rpb24gd2hlblBhc3QoZWwsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBoZWlnaHQpIHtcbiAgICAgIGZuKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbihmYWxzZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51KG1lbnUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBtZW51T3BlbiA9IGF0dHJUb0Jvb2woJ2FyaWEtZXhwYW5kZWQnLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHNldEF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAhbWVudU9wZW4sIGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0QXR0cignZGF0YS1tZW51LW9wZW4nLCAhbWVudU9wZW4sIG1lbnUpO1xuICAgIHNhdmVTY3JvbGwobWVudSkoIW1lbnVPcGVuKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudVBvc2l0aW9uKGVsKSB7XG4gIHJldHVybiBmdW5jdGlvbihpc1Bhc3QpIHtcbiAgICBzZXRBdHRyKCdkYXRhLWhlYWRlci1maXhlZCcsIGlzUGFzdCwgZWwpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBNZW51KG1lbnUsIG1lbnVUb2dnbGUpIHtcbiAgZXZlbnRPbignY2xpY2snLCB0b2dnbGVNZW51KG1lbnUpLCBtZW51VG9nZ2xlKTtcbiAgZXZlbnRPbignc2Nyb2xsJywgd2hlblBhc3QobWVudSwgdG9nZ2xlTWVudVBvc2l0aW9uKG1lbnUpKSwgd2luZG93KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzYXZlU2Nyb2xsKGJhc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGlzU2F2aW5nKSB7XG4gICAgaWYgKGlzU2F2aW5nKSB7XG4gICAgICBjb25zdCBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGJhc2Uuc2V0QXR0cmlidXRlKCdkYXRhLXNhdmUtc2Nyb2xsJywgc2Nyb2xsUG9zKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblRvcCA9ICctJyArIHNjcm9sbFBvcyArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5Ub3AgPSAnYXV0byc7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQoYmFzZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2F2ZS1zY3JvbGwnKSkpO1xuICAgIH1cbiAgfTtcbn1cbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==