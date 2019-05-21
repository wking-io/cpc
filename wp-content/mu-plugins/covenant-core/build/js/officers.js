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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2ltYWdlcy9zcGlubmVyLnBuZyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9hdHRyLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL3NhdmVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL29mZmljZXJzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL29mZmljZXJzLnNjc3MiXSwibmFtZXMiOlsic2V0QXR0ciIsImF0dHIiLCJ2YWwiLCJlbCIsInNldEF0dHJpYnV0ZSIsImdldEF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJmbGlwQXR0ciIsInRvZ2dsZUF0dHIiLCJhdHRyVG9Cb29sIiwiaXNFbG1Ob2RlIiwibm9kZVR5cGUiLCJkb20iLCJzZWxlY3RvciIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiZG9jdW1lbnQiLCJlcnJvciIsImRvbUFsbCIsImVsbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwid3JhcEV2ZW50IiwiZm4iLCJhcmdzIiwiZSIsImV2ZW50T24iLCJldmVudCIsImNiIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndoZW5QYXN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwid2luZG93Iiwic2Nyb2xsWSIsInRvZ2dsZU1lbnUiLCJtZW51IiwibWVudU9wZW4iLCJjdXJyZW50VGFyZ2V0Iiwic2F2ZVNjcm9sbCIsInRvZ2dsZU1lbnVQb3NpdGlvbiIsImlzUGFzdCIsInNldHVwTWVudSIsIm1lbnVUb2dnbGUiLCJ0b2dnbGVQb3B1cCIsInBvcHVwIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc0Nsb3NpbmciLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInBvc2l0aW9uIiwiYm9keSIsIm1hcmdpblRvcCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNjcm9sbFRvIiwicGFyc2VJbnQiLCJzY3JvbGxQb3MiLCJ3aWR0aCIsImFkZCIsImJhc2UiLCJpc1NhdmluZyIsInBpcGUiLCJmbnMiLCJyZWR1Y2UiLCJ2IiwiZiIsIngiLCJlbEV4aXN0cyIsImNsYXNzTmFtZSIsInRyYWNlIiwiY29uc29sZSIsImxvZyIsIm1zZyIsIm5vb3AiLCJ1cGRhdGVUYWIiLCJ0YWJDb250YWluZXIiLCJ0YWJzIiwiZm9yRWFjaCIsInRhYiIsInBvcHVwcyIsImJ0biJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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TUFBSXBELGdCQUFKLENBQXFCLE9BQXJCLEVBQThCZSwwREFBOUI7QUFDRCxDQUZELEU7Ozs7Ozs7Ozs7O0FDeEJBLHlDIiwiZmlsZSI6ImpzL29mZmljZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL29mZmljZXJzLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3NwaW5uZXIucG5nXCI7IiwiZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHIoYXR0ciwgdmFsLCBlbCkge1xuICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cihhdHRyLCBlbCkge1xuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xufVxuXG5leHBvcnQgY29uc3QgZmxpcEF0dHIgPSAoYXR0ciwgZWwpID0+XG4gIGdldEF0dHIoYXR0ciwgZWwpID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQXR0ciA9IChhdHRyLCBlbCkgPT4gc2V0QXR0cihhdHRyLCBmbGlwQXR0cihhdHRyLCBlbCksIGVsKTtcblxuZXhwb3J0IGNvbnN0IGF0dHJUb0Jvb2wgPSAoYXR0ciwgZWwpID0+IGVsLmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnO1xuIiwiY29uc3QgaXNFbG1Ob2RlID0gZWwgPT4gZWwgJiYgZWwubm9kZVR5cGUgPT09IDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb20oc2VsZWN0b3IsIHJvb3QpIHtcbiAgY29uc3QgZWwgPVxuICAgIHJvb3QgJiYgaXNFbG1Ob2RlKHJvb3QpXG4gICAgICA/IHJvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHJldHVybiBlbCB8fCB7IGVycm9yOiAnZWxlbWVudCBub3QgZm91bmQnIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21BbGwoc2VsZWN0b3IsIHJvb3QgPSBmYWxzZSkge1xuICBjb25zdCBlbG1zID0gaXNFbG1Ob2RlKHJvb3QpXG4gICAgPyByb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxtcykgfHwgW107XG59XG4iLCJleHBvcnQgY29uc3Qgd3JhcEV2ZW50ID0gKGZuLCBhcmdzID0gW10pID0+IChlKSA9PiB7XG4gIGZuKC4uLmFyZ3MpO1xuICByZXR1cm4gZTtcbn07XG5cbmV4cG9ydCBjb25zdCBldmVudE9uID0gKGV2ZW50LCBjYiwgZWwpID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xuICByZXR1cm4gZWw7XG59O1xuIiwiaW1wb3J0IHsgZXZlbnRPbiB9IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IHsgc2V0QXR0ciwgYXR0clRvQm9vbCB9IGZyb20gJy4vYXR0cic7XG5pbXBvcnQgeyBzYXZlU2Nyb2xsIH0gZnJvbSAnLi9zYXZlU2Nyb2xsJztcblxuZnVuY3Rpb24gd2hlblBhc3QoZWwsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBoZWlnaHQpIHtcbiAgICAgIGZuKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbihmYWxzZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51KG1lbnUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBtZW51T3BlbiA9IGF0dHJUb0Jvb2woJ2FyaWEtZXhwYW5kZWQnLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHNldEF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAhbWVudU9wZW4sIGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0QXR0cignZGF0YS1tZW51LW9wZW4nLCAhbWVudU9wZW4sIG1lbnUpO1xuICAgIHNhdmVTY3JvbGwobWVudSkoIW1lbnVPcGVuKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudVBvc2l0aW9uKGVsKSB7XG4gIHJldHVybiBmdW5jdGlvbihpc1Bhc3QpIHtcbiAgICBzZXRBdHRyKCdkYXRhLWhlYWRlci1maXhlZCcsIGlzUGFzdCwgZWwpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBNZW51KG1lbnUsIG1lbnVUb2dnbGUpIHtcbiAgZXZlbnRPbignY2xpY2snLCB0b2dnbGVNZW51KG1lbnUpLCBtZW51VG9nZ2xlKTtcbiAgZXZlbnRPbignc2Nyb2xsJywgd2hlblBhc3QobWVudSwgdG9nZ2xlTWVudVBvc2l0aW9uKG1lbnUpKSwgd2luZG93KTtcbn1cbiIsImltcG9ydCB7IGF0dHJUb0Jvb2wgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVBvcHVwKGUpIHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJylcbiAgKTtcblxuICBpZiAocG9wdXApIHtcbiAgICBjb25zdCBpc0Nsb3NpbmcgPSAhYXR0clRvQm9vbChwb3B1cCwgJ2RhdGEtcG9wdXAtaGlkZGVuJyk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHVwLWhpZGRlbicsIGlzQ2xvc2luZyk7XG4gICAgaWYgKGlzQ2xvc2luZykge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblRvcCA9ICdhdXRvJztcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2MtcG9wdXBfX29wZW4nKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChwb3B1cC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wdXAtc2Nyb2xsJykpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wdXAtc2Nyb2xsJywgc2Nyb2xsUG9zKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblRvcCA9ICctJyArIHNjcm9sbFBvcyArICdweCc7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3NjLXBvcHVwX19vcGVuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZVNjcm9sbChiYXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbihpc1NhdmluZykge1xuICAgIGlmIChpc1NhdmluZykge1xuICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBiYXNlLnNldEF0dHJpYnV0ZSgnZGF0YS1zYXZlLXNjcm9sbCcsIHNjcm9sbFBvcyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyBzY3JvbGxQb3MgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KGJhc2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNhdmUtc2Nyb2xsJykpKTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgcGlwZSA9ICguLi5mbnMpID0+IHggPT4gZm5zLnJlZHVjZSgodiwgZikgPT4gZih2KSwgeCk7XG5cbmV4cG9ydCBjb25zdCBlbEV4aXN0cyA9IGNsYXNzTmFtZSA9PlxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbmV4cG9ydCBjb25zdCB0cmFjZSA9IG1zZyA9PiB2YWwgPT4gY29uc29sZS5sb2cobXNnLCB2YWwpIHx8IHZhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbmV4cG9ydCBjb25zdCBhdHRyVG9Cb29sID0gKGVsLCBhdHRyKSA9PiBlbC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJztcblxuZXhwb3J0IGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbiIsImltcG9ydCAnLi4vc2Nzcy9vZmZpY2Vycy5zY3NzJztcbmltcG9ydCAnLi4vaW1hZ2VzL3NwaW5uZXIucG5nJztcblxuaW1wb3J0IHsgZG9tLCBkb21BbGwgfSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCB7IGdldEF0dHIsIHNldEF0dHIgfSBmcm9tICcuL21vZHVsZXMvYXR0cic7XG5pbXBvcnQgeyBzZXR1cE1lbnUgfSBmcm9tICcuL21vZHVsZXMvbWVudSc7XG5pbXBvcnQgeyB0b2dnbGVQb3B1cCB9IGZyb20gJy4vbW9kdWxlcy9wb3B1cCc7XG5cbmNvbnN0IG1lbnVUb2dnbGUgPSBkb20oJy5tZW51LXRvZ2dsZScpO1xuY29uc3QgbWVudSA9IGRvbShgIyR7Z2V0QXR0cignYXJpYS1jb250cm9scycsIG1lbnVUb2dnbGUpfWApO1xuc2V0dXBNZW51KG1lbnUsIG1lbnVUb2dnbGUpO1xuXG5mdW5jdGlvbiB1cGRhdGVUYWIoZSkge1xuICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBnZXRBdHRyKCdhcmlhLWNvbnRyb2xzJywgZS5jdXJyZW50VGFyZ2V0KVxuICApO1xuXG4gIHNldEF0dHIoJ2RhdGEtYWN0aXZlLXRhYicsIGdldEF0dHIoJ2lkJywgZS5jdXJyZW50VGFyZ2V0KSwgdGFiQ29udGFpbmVyKTtcbn1cblxuY29uc3QgdGFicyA9IGRvbUFsbCgnW3JvbGU9XCJ0YWJcIl0nKTtcbnRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlVGFiKSk7XG5cbmNvbnN0IHBvcHVwcyA9IGRvbUFsbCgnW2RhdGEtcG9wdXAtYWN0aW9uXScpO1xucG9wdXBzLmZvckVhY2goZnVuY3Rpb24oYnRuKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVBvcHVwKTtcbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9