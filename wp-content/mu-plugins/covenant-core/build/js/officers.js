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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/officers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/mu-plugins/covenant-core/src/images/spinner.png":
/*!********************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/images/spinner.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/spinner.png";

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
    return isClosing;
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

/***/ "./wp-content/mu-plugins/covenant-core/src/js/officers.js":
/*!****************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/officers.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_officers_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/officers.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/officers.scss");
/* harmony import */ var _scss_officers_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_officers_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_spinner_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/spinner.png */ "./wp-content/mu-plugins/covenant-core/src/images/spinner.png");
/* harmony import */ var _images_spinner_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_spinner_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom */ "./wp-content/mu-plugins/covenant-core/src/js/modules/dom.js");
/* harmony import */ var _modules_attr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/attr */ "./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ "./wp-content/mu-plugins/covenant-core/src/js/modules/menu.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popup */ "./wp-content/mu-plugins/covenant-core/src/js/modules/popup.js");








var menuToggle = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_2__["dom"])('.menu-toggle');
var menu = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_2__["dom"])('#' + Object(_modules_attr__WEBPACK_IMPORTED_MODULE_3__["getAttr"])('aria-controls', menuToggle));
Object(_modules_menu__WEBPACK_IMPORTED_MODULE_4__["setupMenu"])(menu, menuToggle);

function updateTab(e) {
  var tabContainer = document.getElementById(Object(_modules_attr__WEBPACK_IMPORTED_MODULE_3__["getAttr"])('aria-controls', e.currentTarget));

  Object(_modules_attr__WEBPACK_IMPORTED_MODULE_3__["setAttr"])('data-active-tab', Object(_modules_attr__WEBPACK_IMPORTED_MODULE_3__["getAttr"])('id', e.currentTarget), tabContainer);
}

var tabs = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_2__["domAll"])('[role="tab"]');
tabs.forEach(function (tab) {
  return tab.addEventListener('click', updateTab);
});

var popups = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_2__["domAll"])('[data-popup-action]');
popups.forEach(function (btn) {
  btn.addEventListener('click', _modules_popup__WEBPACK_IMPORTED_MODULE_5__["togglePopup"]);
});

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/officers.scss":
/*!********************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/officers.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2ltYWdlcy9zcGlubmVyLnBuZyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9hdHRyLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL3NhdmVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL29mZmljZXJzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL29mZmljZXJzLnNjc3MiXSwibmFtZXMiOlsic2V0QXR0ciIsImF0dHIiLCJ2YWwiLCJlbCIsInNldEF0dHJpYnV0ZSIsImdldEF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJmbGlwQXR0ciIsInRvZ2dsZUF0dHIiLCJhdHRyVG9Cb29sIiwiaXNFbG1Ob2RlIiwibm9kZVR5cGUiLCJkb20iLCJzZWxlY3RvciIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiZG9jdW1lbnQiLCJlcnJvciIsImRvbUFsbCIsImVsbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwid3JhcEV2ZW50IiwiZm4iLCJhcmdzIiwiZSIsImV2ZW50T24iLCJldmVudCIsImNiIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndoZW5QYXN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwid2luZG93Iiwic2Nyb2xsWSIsInRvZ2dsZU1lbnUiLCJtZW51IiwibWVudU9wZW4iLCJjdXJyZW50VGFyZ2V0Iiwic2F2ZVNjcm9sbCIsInRvZ2dsZU1lbnVQb3NpdGlvbiIsImlzUGFzdCIsInNldHVwTWVudSIsIm1lbnVUb2dnbGUiLCJ0b2dnbGVQb3B1cCIsInBvcHVwIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc0Nsb3NpbmciLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInBvc2l0aW9uIiwiYm9keSIsIm1hcmdpblRvcCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNjcm9sbFRvIiwicGFyc2VJbnQiLCJzY3JvbGxQb3MiLCJ3aWR0aCIsImFkZCIsImJhc2UiLCJpc1NhdmluZyIsInBpcGUiLCJmbnMiLCJyZWR1Y2UiLCJ2IiwiZiIsIngiLCJlbEV4aXN0cyIsImNsYXNzTmFtZSIsInRyYWNlIiwiY29uc29sZSIsImxvZyIsIm1zZyIsIm5vb3AiLCJ1cGRhdGVUYWIiLCJ0YWJDb250YWluZXIiLCJ0YWJzIiwiZm9yRWFjaCIsInRhYiIsInBvcHVwcyIsImJ0biJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QUFULEVBQWM7QUFDM0JBLE1BQUlwRCxnQkFBSixDQUFxQixPQUFyQixFQUE4QmUsMERBQTlCO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7OztBQ3hCQSx5QyIsImZpbGUiOiJqcy9vZmZpY2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9vZmZpY2Vycy5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9zcGlubmVyLnBuZ1wiOyIsImV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyKGF0dHIsIHZhbCwgZWwpIHtcbiAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gIHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHIoYXR0ciwgZWwpIHtcbiAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZsaXBBdHRyID0gKGF0dHIsIGVsKSA9PlxuICBnZXRBdHRyKGF0dHIsIGVsKSA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJztcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUF0dHIgPSAoYXR0ciwgZWwpID0+IHNldEF0dHIoYXR0ciwgZmxpcEF0dHIoYXR0ciwgZWwpLCBlbCk7XG5cbmV4cG9ydCBjb25zdCBhdHRyVG9Cb29sID0gKGF0dHIsIGVsKSA9PiBlbC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJztcbiIsImNvbnN0IGlzRWxtTm9kZSA9IGVsID0+IGVsICYmIGVsLm5vZGVUeXBlID09PSAxO1xuXG5leHBvcnQgZnVuY3Rpb24gZG9tKHNlbGVjdG9yLCByb290KSB7XG4gIGNvbnN0IGVsID1cbiAgICByb290ICYmIGlzRWxtTm9kZShyb290KVxuICAgICAgPyByb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICByZXR1cm4gZWwgfHwgeyBlcnJvcjogJ2VsZW1lbnQgbm90IGZvdW5kJyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tQWxsKHNlbGVjdG9yLCByb290ID0gZmFsc2UpIHtcbiAgY29uc3QgZWxtcyA9IGlzRWxtTm9kZShyb290KVxuICAgID8gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsbXMpIHx8IFtdO1xufVxuIiwiZXhwb3J0IGNvbnN0IHdyYXBFdmVudCA9IChmbiwgYXJncyA9IFtdKSA9PiAoZSkgPT4ge1xuICBmbiguLi5hcmdzKTtcbiAgcmV0dXJuIGU7XG59O1xuXG5leHBvcnQgY29uc3QgZXZlbnRPbiA9IChldmVudCwgY2IsIGVsKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKTtcbiAgcmV0dXJuIGVsO1xufTtcbiIsImltcG9ydCB7IGV2ZW50T24gfSBmcm9tICcuL2V2ZW50JztcbmltcG9ydCB7IHNldEF0dHIsIGF0dHJUb0Jvb2wgfSBmcm9tICcuL2F0dHInO1xuaW1wb3J0IHsgc2F2ZVNjcm9sbCB9IGZyb20gJy4vc2F2ZVNjcm9sbCc7XG5cbmZ1bmN0aW9uIHdoZW5QYXN0KGVsLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gaGVpZ2h0KSB7XG4gICAgICBmbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oZmFsc2UpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudShtZW51KSB7XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgbWVudU9wZW4gPSBhdHRyVG9Cb29sKCdhcmlhLWV4cGFuZGVkJywgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBzZXRBdHRyKCdhcmlhLWV4cGFuZGVkJywgIW1lbnVPcGVuLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHNldEF0dHIoJ2RhdGEtbWVudS1vcGVuJywgIW1lbnVPcGVuLCBtZW51KTtcbiAgICBzYXZlU2Nyb2xsKG1lbnUpKCFtZW51T3Blbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnVQb3NpdGlvbihlbCkge1xuICByZXR1cm4gZnVuY3Rpb24oaXNQYXN0KSB7XG4gICAgc2V0QXR0cignZGF0YS1oZWFkZXItZml4ZWQnLCBpc1Bhc3QsIGVsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTWVudShtZW51LCBtZW51VG9nZ2xlKSB7XG4gIGV2ZW50T24oJ2NsaWNrJywgdG9nZ2xlTWVudShtZW51KSwgbWVudVRvZ2dsZSk7XG4gIGV2ZW50T24oJ3Njcm9sbCcsIHdoZW5QYXN0KG1lbnUsIHRvZ2dsZU1lbnVQb3NpdGlvbihtZW51KSksIHdpbmRvdyk7XG59XG4iLCJpbXBvcnQgeyBhdHRyVG9Cb29sIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQb3B1cChlKSB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpXG4gICk7XG5cbiAgaWYgKHBvcHVwKSB7XG4gICAgY29uc3QgaXNDbG9zaW5nID0gIWF0dHJUb0Jvb2wocG9wdXAsICdkYXRhLXBvcHVwLWhpZGRlbicpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3B1cC1oaWRkZW4nLCBpc0Nsb3NpbmcpO1xuICAgIGlmIChpc0Nsb3NpbmcpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5Ub3AgPSAnYXV0byc7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NjLXBvcHVwX19vcGVuJyk7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQocG9wdXAuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcHVwLXNjcm9sbCcpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgcG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHVwLXNjcm9sbCcsIHNjcm9sbFBvcyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyBzY3JvbGxQb3MgKyAncHgnO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzYy1wb3B1cF9fb3BlbicpO1xuICAgIH1cbiAgICByZXR1cm4gaXNDbG9zaW5nO1xuICB9XG5cbiAgcmV0dXJuIGU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZVNjcm9sbChiYXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbihpc1NhdmluZykge1xuICAgIGlmIChpc1NhdmluZykge1xuICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBiYXNlLnNldEF0dHJpYnV0ZSgnZGF0YS1zYXZlLXNjcm9sbCcsIHNjcm9sbFBvcyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyBzY3JvbGxQb3MgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KGJhc2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNhdmUtc2Nyb2xsJykpKTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgcGlwZSA9ICguLi5mbnMpID0+IHggPT4gZm5zLnJlZHVjZSgodiwgZikgPT4gZih2KSwgeCk7XG5cbmV4cG9ydCBjb25zdCBlbEV4aXN0cyA9IGNsYXNzTmFtZSA9PlxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbmV4cG9ydCBjb25zdCB0cmFjZSA9IG1zZyA9PiB2YWwgPT4gY29uc29sZS5sb2cobXNnLCB2YWwpIHx8IHZhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbmV4cG9ydCBjb25zdCBhdHRyVG9Cb29sID0gKGVsLCBhdHRyKSA9PiBlbC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJztcblxuZXhwb3J0IGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbiIsImltcG9ydCAnLi4vc2Nzcy9vZmZpY2Vycy5zY3NzJztcbmltcG9ydCAnLi4vaW1hZ2VzL3NwaW5uZXIucG5nJztcblxuaW1wb3J0IHsgZG9tLCBkb21BbGwgfSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCB7IGdldEF0dHIsIHNldEF0dHIgfSBmcm9tICcuL21vZHVsZXMvYXR0cic7XG5pbXBvcnQgeyBzZXR1cE1lbnUgfSBmcm9tICcuL21vZHVsZXMvbWVudSc7XG5pbXBvcnQgeyB0b2dnbGVQb3B1cCB9IGZyb20gJy4vbW9kdWxlcy9wb3B1cCc7XG5cbmNvbnN0IG1lbnVUb2dnbGUgPSBkb20oJy5tZW51LXRvZ2dsZScpO1xuY29uc3QgbWVudSA9IGRvbShgIyR7Z2V0QXR0cignYXJpYS1jb250cm9scycsIG1lbnVUb2dnbGUpfWApO1xuc2V0dXBNZW51KG1lbnUsIG1lbnVUb2dnbGUpO1xuXG5mdW5jdGlvbiB1cGRhdGVUYWIoZSkge1xuICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBnZXRBdHRyKCdhcmlhLWNvbnRyb2xzJywgZS5jdXJyZW50VGFyZ2V0KVxuICApO1xuXG4gIHNldEF0dHIoJ2RhdGEtYWN0aXZlLXRhYicsIGdldEF0dHIoJ2lkJywgZS5jdXJyZW50VGFyZ2V0KSwgdGFiQ29udGFpbmVyKTtcbn1cblxuY29uc3QgdGFicyA9IGRvbUFsbCgnW3JvbGU9XCJ0YWJcIl0nKTtcbnRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlVGFiKSk7XG5cbmNvbnN0IHBvcHVwcyA9IGRvbUFsbCgnW2RhdGEtcG9wdXAtYWN0aW9uXScpO1xucG9wdXBzLmZvckVhY2goZnVuY3Rpb24oYnRuKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVBvcHVwKTtcbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9