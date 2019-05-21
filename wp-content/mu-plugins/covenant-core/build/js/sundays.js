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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/sundays.js");
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

/***/ "./wp-content/mu-plugins/covenant-core/src/js/modules/popup.js":
/*!*********************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/modules/popup.js ***!
  \*********************************************************************/
/*! exports provided: togglePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePopup", function() { return togglePopup; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./wp-content/mu-plugins/covenant-core/src/js/modules/utils.js");


function togglePopup(e) {
  var popup = document.getElementById(e.currentTarget.getAttribute('aria-controls'));

  if (popup) {
    var isClosing = !Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attrToBool"])(popup, 'data-popup-hidden');
    popup.setAttribute('data-popup-hidden', isClosing);
    if (isClosing) {
      document.documentElement.style.position = 'static';
      document.body.style.marginTop = 'auto';
      document.body.classList.remove('sc-popup__open');
      window.scrollTo(0, parseInt(popup.getAttribute('data-popup-scroll')));
    } else {
      var scrollPos = window.scrollY;
      popup.setAttribute('data-popup-scroll', scrollPos);
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.width = '100%';
      document.body.style.marginTop = '-' + scrollPos + 'px';
      document.body.classList.add('sc-popup__open');
    }
  }

  return e;
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

/***/ "./wp-content/mu-plugins/covenant-core/src/js/modules/utils.js":
/*!*********************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/modules/utils.js ***!
  \*********************************************************************/
/*! exports provided: pipe, elExists, trace, attrToBool, noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elExists", function() { return elExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrToBool", function() { return attrToBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
var pipe = function pipe() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
};

var elExists = function elExists(className) {
  return document.querySelector(className) ? true : false;
};

var trace = function trace(msg) {
  return function (val) {
    return console.log(msg, val) || val;
  };
}; // eslint-disable-line no-console

var attrToBool = function attrToBool(el, attr) {
  return el.getAttribute(attr) === 'true';
};

var noop = function noop() {};

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/js/sundays.js":
/*!***************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/sundays.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_sundays_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/sundays.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/sundays.scss");
/* harmony import */ var _scss_sundays_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_sundays_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./wp-content/mu-plugins/covenant-core/src/js/modules/dom.js");
/* harmony import */ var _modules_attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/attr */ "./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./wp-content/mu-plugins/covenant-core/src/js/modules/menu.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popup */ "./wp-content/mu-plugins/covenant-core/src/js/modules/popup.js");







var menuToggle = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.menu-toggle');
var menu = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('#' + Object(_modules_attr__WEBPACK_IMPORTED_MODULE_2__["getAttr"])('aria-controls', menuToggle));
Object(_modules_menu__WEBPACK_IMPORTED_MODULE_3__["setupMenu"])(menu, menuToggle);

var popups = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["domAll"])('[data-popup-action]');
popups.forEach(function (btn) {
  btn.addEventListener('click', _modules_popup__WEBPACK_IMPORTED_MODULE_4__["togglePopup"]);
});

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/sundays.scss":
/*!*******************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/sundays.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9zYXZlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9zdW5kYXlzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL3N1bmRheXMuc2NzcyJdLCJuYW1lcyI6WyJzZXRBdHRyIiwiYXR0ciIsInZhbCIsImVsIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0ciIsImdldEF0dHJpYnV0ZSIsImZsaXBBdHRyIiwidG9nZ2xlQXR0ciIsImF0dHJUb0Jvb2wiLCJpc0VsbU5vZGUiLCJub2RlVHlwZSIsImRvbSIsInNlbGVjdG9yIiwicm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJkb2N1bWVudCIsImVycm9yIiwiZG9tQWxsIiwiZWxtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJ3cmFwRXZlbnQiLCJmbiIsImFyZ3MiLCJlIiwiZXZlbnRPbiIsImV2ZW50IiwiY2IiLCJhZGRFdmVudExpc3RlbmVyIiwid2hlblBhc3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidG9nZ2xlTWVudSIsIm1lbnUiLCJtZW51T3BlbiIsImN1cnJlbnRUYXJnZXQiLCJzYXZlU2Nyb2xsIiwidG9nZ2xlTWVudVBvc2l0aW9uIiwiaXNQYXN0Iiwic2V0dXBNZW51IiwibWVudVRvZ2dsZSIsInRvZ2dsZVBvcHVwIiwicG9wdXAiLCJnZXRFbGVtZW50QnlJZCIsImlzQ2xvc2luZyIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJib2R5IiwibWFyZ2luVG9wIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2Nyb2xsVG8iLCJwYXJzZUludCIsInNjcm9sbFBvcyIsIndpZHRoIiwiYWRkIiwiYmFzZSIsImlzU2F2aW5nIiwicGlwZSIsImZucyIsInJlZHVjZSIsInYiLCJmIiwieCIsImVsRXhpc3RzIiwiY2xhc3NOYW1lIiwidHJhY2UiLCJjb25zb2xlIiwibG9nIiwibXNnIiwibm9vcCIsInBvcHVwcyIsImZvckVhY2giLCJidG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFB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aEIsTUFBMEIsTUFBeEM7QUFBQSxDQUFuQjs7QUFFQSxJQUFNMEUsT0FBTyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQixDOzs7Ozs7Ozs7Ozs7QUNUUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU0vQixhQUFhaEMsd0RBQUdBLENBQUMsY0FBSixDQUFuQjtBQUNBLElBQU15QixPQUFPekIsd0RBQUdBLE9BQUtQLDZEQUFPQSxDQUFDLGVBQVIsRUFBeUJ1QyxVQUF6QixDQUFSLENBQWI7QUFDQUQsK0RBQVNBLENBQUNOLElBQVYsRUFBZ0JPLFVBQWhCOztBQUVBLElBQU1nQyxTQUFTMUQsMkRBQU1BLENBQUMscUJBQVAsQ0FBZjtBQUNBMEQsT0FBT0MsT0FBUCxDQUFlLFVBQVNDLEdBQVQsRUFBYztBQUMzQkEsTUFBSWhELGdCQUFKLENBQXFCLE9BQXJCLEVBQThCZSwwREFBOUI7QUFDRCxDQUZELEU7Ozs7Ozs7Ozs7O0FDWkEseUMiLCJmaWxlIjoianMvc3VuZGF5cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9zdW5kYXlzLmpzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHIoYXR0ciwgdmFsLCBlbCkge1xuICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cihhdHRyLCBlbCkge1xuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xufVxuXG5leHBvcnQgY29uc3QgZmxpcEF0dHIgPSAoYXR0ciwgZWwpID0+XG4gIGdldEF0dHIoYXR0ciwgZWwpID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQXR0ciA9IChhdHRyLCBlbCkgPT4gc2V0QXR0cihhdHRyLCBmbGlwQXR0cihhdHRyLCBlbCksIGVsKTtcblxuZXhwb3J0IGNvbnN0IGF0dHJUb0Jvb2wgPSAoYXR0ciwgZWwpID0+IGVsLmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnO1xuIiwiY29uc3QgaXNFbG1Ob2RlID0gZWwgPT4gZWwgJiYgZWwubm9kZVR5cGUgPT09IDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb20oc2VsZWN0b3IsIHJvb3QpIHtcbiAgY29uc3QgZWwgPVxuICAgIHJvb3QgJiYgaXNFbG1Ob2RlKHJvb3QpXG4gICAgICA/IHJvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHJldHVybiBlbCB8fCB7IGVycm9yOiAnZWxlbWVudCBub3QgZm91bmQnIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21BbGwoc2VsZWN0b3IsIHJvb3QgPSBmYWxzZSkge1xuICBjb25zdCBlbG1zID0gaXNFbG1Ob2RlKHJvb3QpXG4gICAgPyByb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxtcykgfHwgW107XG59XG4iLCJleHBvcnQgY29uc3Qgd3JhcEV2ZW50ID0gKGZuLCBhcmdzID0gW10pID0+IChlKSA9PiB7XG4gIGZuKC4uLmFyZ3MpO1xuICByZXR1cm4gZTtcbn07XG5cbmV4cG9ydCBjb25zdCBldmVudE9uID0gKGV2ZW50LCBjYiwgZWwpID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xuICByZXR1cm4gZWw7XG59O1xuIiwiaW1wb3J0IHsgZXZlbnRPbiB9IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IHsgc2V0QXR0ciwgYXR0clRvQm9vbCB9IGZyb20gJy4vYXR0cic7XG5pbXBvcnQgeyBzYXZlU2Nyb2xsIH0gZnJvbSAnLi9zYXZlU2Nyb2xsJztcblxuZnVuY3Rpb24gd2hlblBhc3QoZWwsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBoZWlnaHQpIHtcbiAgICAgIGZuKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbihmYWxzZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51KG1lbnUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBtZW51T3BlbiA9IGF0dHJUb0Jvb2woJ2FyaWEtZXhwYW5kZWQnLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHNldEF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAhbWVudU9wZW4sIGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0QXR0cignZGF0YS1tZW51LW9wZW4nLCAhbWVudU9wZW4sIG1lbnUpO1xuICAgIHNhdmVTY3JvbGwobWVudSkoIW1lbnVPcGVuKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudVBvc2l0aW9uKGVsKSB7XG4gIHJldHVybiBmdW5jdGlvbihpc1Bhc3QpIHtcbiAgICBzZXRBdHRyKCdkYXRhLWhlYWRlci1maXhlZCcsIGlzUGFzdCwgZWwpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBNZW51KG1lbnUsIG1lbnVUb2dnbGUpIHtcbiAgZXZlbnRPbignY2xpY2snLCB0b2dnbGVNZW51KG1lbnUpLCBtZW51VG9nZ2xlKTtcbiAgZXZlbnRPbignc2Nyb2xsJywgd2hlblBhc3QobWVudSwgdG9nZ2xlTWVudVBvc2l0aW9uKG1lbnUpKSwgd2luZG93KTtcbn1cbiIsImltcG9ydCB7IGF0dHJUb0Jvb2wgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVBvcHVwKGUpIHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJylcbiAgKTtcblxuICBpZiAocG9wdXApIHtcbiAgICBjb25zdCBpc0Nsb3NpbmcgPSAhYXR0clRvQm9vbChwb3B1cCwgJ2RhdGEtcG9wdXAtaGlkZGVuJyk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHVwLWhpZGRlbicsIGlzQ2xvc2luZyk7XG4gICAgaWYgKGlzQ2xvc2luZykge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblRvcCA9ICdhdXRvJztcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2MtcG9wdXBfX29wZW4nKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChwb3B1cC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wdXAtc2Nyb2xsJykpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wdXAtc2Nyb2xsJywgc2Nyb2xsUG9zKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblRvcCA9ICctJyArIHNjcm9sbFBvcyArICdweCc7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3NjLXBvcHVwX19vcGVuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZVNjcm9sbChiYXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbihpc1NhdmluZykge1xuICAgIGlmIChpc1NhdmluZykge1xuICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBiYXNlLnNldEF0dHJpYnV0ZSgnZGF0YS1zYXZlLXNjcm9sbCcsIHNjcm9sbFBvcyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyBzY3JvbGxQb3MgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KGJhc2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNhdmUtc2Nyb2xsJykpKTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgcGlwZSA9ICguLi5mbnMpID0+IHggPT4gZm5zLnJlZHVjZSgodiwgZikgPT4gZih2KSwgeCk7XG5cbmV4cG9ydCBjb25zdCBlbEV4aXN0cyA9IGNsYXNzTmFtZSA9PlxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbmV4cG9ydCBjb25zdCB0cmFjZSA9IG1zZyA9PiB2YWwgPT4gY29uc29sZS5sb2cobXNnLCB2YWwpIHx8IHZhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbmV4cG9ydCBjb25zdCBhdHRyVG9Cb29sID0gKGVsLCBhdHRyKSA9PiBlbC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJztcblxuZXhwb3J0IGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbiIsImltcG9ydCAnLi4vc2Nzcy9zdW5kYXlzLnNjc3MnO1xuXG5pbXBvcnQgeyBkb20sIGRvbUFsbCB9IGZyb20gJy4vbW9kdWxlcy9kb20nO1xuaW1wb3J0IHsgZ2V0QXR0ciB9IGZyb20gJy4vbW9kdWxlcy9hdHRyJztcbmltcG9ydCB7IHNldHVwTWVudSB9IGZyb20gJy4vbW9kdWxlcy9tZW51JztcbmltcG9ydCB7IHRvZ2dsZVBvcHVwIH0gZnJvbSAnLi9tb2R1bGVzL3BvcHVwJztcblxuY29uc3QgbWVudVRvZ2dsZSA9IGRvbSgnLm1lbnUtdG9nZ2xlJyk7XG5jb25zdCBtZW51ID0gZG9tKGAjJHtnZXRBdHRyKCdhcmlhLWNvbnRyb2xzJywgbWVudVRvZ2dsZSl9YCk7XG5zZXR1cE1lbnUobWVudSwgbWVudVRvZ2dsZSk7XG5cbmNvbnN0IHBvcHVwcyA9IGRvbUFsbCgnW2RhdGEtcG9wdXAtYWN0aW9uXScpO1xucG9wdXBzLmZvckVhY2goZnVuY3Rpb24oYnRuKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVBvcHVwKTtcbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9