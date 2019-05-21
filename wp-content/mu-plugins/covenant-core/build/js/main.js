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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/mu-plugins/covenant-core/src/js/main.js":
/*!************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/main.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./wp-content/mu-plugins/covenant-core/src/js/modules/dom.js");
/* harmony import */ var _modules_attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/attr */ "./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js");
/* harmony import */ var _modules_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/drawer */ "./wp-content/mu-plugins/covenant-core/src/js/modules/drawer.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ "./wp-content/mu-plugins/covenant-core/src/js/modules/menu.js");







// Drawers
var drawers = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["domAll"])('[data-drawer-action]');

Object(_modules_drawer__WEBPACK_IMPORTED_MODULE_3__["setupDrawers"])(drawers);

var menuToggle = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.menu-toggle');
var menu = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('#' + Object(_modules_attr__WEBPACK_IMPORTED_MODULE_2__["getAttr"])('aria-controls', menuToggle));

Object(_modules_menu__WEBPACK_IMPORTED_MODULE_4__["setupMenu"])(menu, menuToggle);

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

/***/ "./wp-content/mu-plugins/covenant-core/src/js/modules/drawer.js":
/*!**********************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/modules/drawer.js ***!
  \**********************************************************************/
/*! exports provided: setupDrawers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupDrawers", function() { return setupDrawers; });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attr */ "./wp-content/mu-plugins/covenant-core/src/js/modules/attr.js");


function findParentDrawer(el) {
  if (el === document.body) {
    return false;
  }

  return el.parentElement.hasAttribute('data-drawer-wrapper') ? el.parentElement : findParentDrawer(el.parentElement);
}

function toggleDrawer(wrapper) {
  return function (e) {
    toggleDrawerAttr(e.target, wrapper);
    setDrawerHeight(wrapper);
    return e;
  };
}

function toggleDrawerAttr(btn, wrapper) {
  var isExpanded = Object(_attr__WEBPACK_IMPORTED_MODULE_0__["attrToBool"])('data-drawer-expanded', wrapper);
  wrapper.setAttribute('data-drawer-expanded', !isExpanded);
  wrapper.classList.toggle('drawer--open');
  btn.setAttribute('aria-expanded', !isExpanded);
  return wrapper;
}

function setDrawerHeight(wrapper) {
  wrapper.style.height = Object(_attr__WEBPACK_IMPORTED_MODULE_0__["attrToBool"])('data-drawer-expanded', wrapper) ? wrapper.querySelector('[data-drawer-full]').offsetHeight + 'px' : wrapper.querySelector('[data-drawer-visible]').offsetHeight + 'px';

  var parentDrawer = findParentDrawer(wrapper);
  if (parentDrawer) {
    setDrawerHeight(parentDrawer);
  }
}

function setupDrawers(drawers) {
  if (drawers) {
    drawers.forEach(function (btn) {
      var wrapper = document.getElementById(btn.getAttribute('aria-controls'));
      if (wrapper) {
        setDrawerHeight(wrapper);
        btn.addEventListener('click', toggleDrawer(wrapper));
      }
    });
  }
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

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/main.scss":
/*!****************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/main.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvc2F2ZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiZHJhd2VycyIsImRvbUFsbCIsInNldHVwRHJhd2VycyIsIm1lbnVUb2dnbGUiLCJkb20iLCJtZW51IiwiZ2V0QXR0ciIsInNldHVwTWVudSIsInNldEF0dHIiLCJhdHRyIiwidmFsIiwiZWwiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJmbGlwQXR0ciIsInRvZ2dsZUF0dHIiLCJhdHRyVG9Cb29sIiwiaXNFbG1Ob2RlIiwibm9kZVR5cGUiLCJzZWxlY3RvciIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiZG9jdW1lbnQiLCJlcnJvciIsImVsbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiZmluZFBhcmVudERyYXdlciIsImJvZHkiLCJwYXJlbnRFbGVtZW50IiwiaGFzQXR0cmlidXRlIiwidG9nZ2xlRHJhd2VyIiwid3JhcHBlciIsImUiLCJ0b2dnbGVEcmF3ZXJBdHRyIiwidGFyZ2V0Iiwic2V0RHJhd2VySGVpZ2h0IiwiYnRuIiwiaXNFeHBhbmRlZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInN0eWxlIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicGFyZW50RHJhd2VyIiwiZm9yRWFjaCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndyYXBFdmVudCIsImZuIiwiYXJncyIsImV2ZW50T24iLCJldmVudCIsImNiIiwid2hlblBhc3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidG9nZ2xlTWVudSIsIm1lbnVPcGVuIiwiY3VycmVudFRhcmdldCIsInNhdmVTY3JvbGwiLCJ0b2dnbGVNZW51UG9zaXRpb24iLCJpc1Bhc3QiLCJiYXNlIiwiaXNTYXZpbmciLCJzY3JvbGxQb3MiLCJkb2N1bWVudEVsZW1lbnQiLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsInNjcm9sbFRvIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7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bUJDLFNBQVNQLEtBQUtwRCxZQUFMLENBQWtCLGtCQUFsQixDQUFULENBQW5CO0FBQ0Q7QUFDRixHQVhEO0FBWUQsQzs7Ozs7Ozs7Ozs7QUNiRCx5QyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21haW4uanNcIik7XG4iLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuaW1wb3J0IHsgZG9tLCBkb21BbGwgfSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCB7IGdldEF0dHIgfSBmcm9tICcuL21vZHVsZXMvYXR0cic7XG5pbXBvcnQgeyBzZXR1cERyYXdlcnMgfSBmcm9tICcuL21vZHVsZXMvZHJhd2VyJztcbmltcG9ydCB7IHNldHVwTWVudSB9IGZyb20gJy4vbW9kdWxlcy9tZW51JztcblxuLy8gRHJhd2Vyc1xuY29uc3QgZHJhd2VycyA9IGRvbUFsbCgnW2RhdGEtZHJhd2VyLWFjdGlvbl0nKTtcblxuc2V0dXBEcmF3ZXJzKGRyYXdlcnMpO1xuXG5jb25zdCBtZW51VG9nZ2xlID0gZG9tKCcubWVudS10b2dnbGUnKTtcbmNvbnN0IG1lbnUgPSBkb20oYCMke2dldEF0dHIoJ2FyaWEtY29udHJvbHMnLCBtZW51VG9nZ2xlKX1gKTtcblxuc2V0dXBNZW51KG1lbnUsIG1lbnVUb2dnbGUpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHIoYXR0ciwgdmFsLCBlbCkge1xuICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cihhdHRyLCBlbCkge1xuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xufVxuXG5leHBvcnQgY29uc3QgZmxpcEF0dHIgPSAoYXR0ciwgZWwpID0+XG4gIGdldEF0dHIoYXR0ciwgZWwpID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQXR0ciA9IChhdHRyLCBlbCkgPT4gc2V0QXR0cihhdHRyLCBmbGlwQXR0cihhdHRyLCBlbCksIGVsKTtcblxuZXhwb3J0IGNvbnN0IGF0dHJUb0Jvb2wgPSAoYXR0ciwgZWwpID0+IGVsLmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnO1xuIiwiY29uc3QgaXNFbG1Ob2RlID0gZWwgPT4gZWwgJiYgZWwubm9kZVR5cGUgPT09IDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb20oc2VsZWN0b3IsIHJvb3QpIHtcbiAgY29uc3QgZWwgPVxuICAgIHJvb3QgJiYgaXNFbG1Ob2RlKHJvb3QpXG4gICAgICA/IHJvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHJldHVybiBlbCB8fCB7IGVycm9yOiAnZWxlbWVudCBub3QgZm91bmQnIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21BbGwoc2VsZWN0b3IsIHJvb3QgPSBmYWxzZSkge1xuICBjb25zdCBlbG1zID0gaXNFbG1Ob2RlKHJvb3QpXG4gICAgPyByb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxtcykgfHwgW107XG59XG4iLCJpbXBvcnQgeyBhdHRyVG9Cb29sIH0gZnJvbSAnLi9hdHRyJztcblxuZnVuY3Rpb24gZmluZFBhcmVudERyYXdlcihlbCkge1xuICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZWwucGFyZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZHJhd2VyLXdyYXBwZXInKVxuICAgID8gZWwucGFyZW50RWxlbWVudFxuICAgIDogZmluZFBhcmVudERyYXdlcihlbC5wYXJlbnRFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRHJhd2VyKHdyYXBwZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICB0b2dnbGVEcmF3ZXJBdHRyKGUudGFyZ2V0LCB3cmFwcGVyKTtcbiAgICBzZXREcmF3ZXJIZWlnaHQod3JhcHBlcik7XG4gICAgcmV0dXJuIGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURyYXdlckF0dHIoYnRuLCB3cmFwcGVyKSB7XG4gIGNvbnN0IGlzRXhwYW5kZWQgPSBhdHRyVG9Cb29sKCdkYXRhLWRyYXdlci1leHBhbmRlZCcsIHdyYXBwZXIpO1xuICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1kcmF3ZXItZXhwYW5kZWQnLCAhaXNFeHBhbmRlZCk7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZHJhd2VyLS1vcGVuJyk7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAhaXNFeHBhbmRlZCk7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBzZXREcmF3ZXJIZWlnaHQod3JhcHBlcikge1xuICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IGF0dHJUb0Jvb2woJ2RhdGEtZHJhd2VyLWV4cGFuZGVkJywgd3JhcHBlcilcbiAgICA/IHdyYXBwZXIucXVlcnlTZWxlY3RvcignW2RhdGEtZHJhd2VyLWZ1bGxdJykub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgIDogd3JhcHBlci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kcmF3ZXItdmlzaWJsZV0nKS5vZmZzZXRIZWlnaHQgKyAncHgnO1xuXG4gIGNvbnN0IHBhcmVudERyYXdlciA9IGZpbmRQYXJlbnREcmF3ZXIod3JhcHBlcik7XG4gIGlmIChwYXJlbnREcmF3ZXIpIHtcbiAgICBzZXREcmF3ZXJIZWlnaHQocGFyZW50RHJhd2VyKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBEcmF3ZXJzKGRyYXdlcnMpIHtcbiAgaWYgKGRyYXdlcnMpIHtcbiAgICBkcmF3ZXJzLmZvckVhY2goZnVuY3Rpb24oYnRuKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIGJ0bi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKVxuICAgICAgKTtcbiAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgIHNldERyYXdlckhlaWdodCh3cmFwcGVyKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRHJhd2VyKHdyYXBwZXIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHdyYXBFdmVudCA9IChmbiwgYXJncyA9IFtdKSA9PiAoZSkgPT4ge1xuICBmbiguLi5hcmdzKTtcbiAgcmV0dXJuIGU7XG59O1xuXG5leHBvcnQgY29uc3QgZXZlbnRPbiA9IChldmVudCwgY2IsIGVsKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKTtcbiAgcmV0dXJuIGVsO1xufTtcbiIsImltcG9ydCB7IGV2ZW50T24gfSBmcm9tICcuL2V2ZW50JztcbmltcG9ydCB7IHNldEF0dHIsIGF0dHJUb0Jvb2wgfSBmcm9tICcuL2F0dHInO1xuaW1wb3J0IHsgc2F2ZVNjcm9sbCB9IGZyb20gJy4vc2F2ZVNjcm9sbCc7XG5cbmZ1bmN0aW9uIHdoZW5QYXN0KGVsLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gaGVpZ2h0KSB7XG4gICAgICBmbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oZmFsc2UpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudShtZW51KSB7XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgbWVudU9wZW4gPSBhdHRyVG9Cb29sKCdhcmlhLWV4cGFuZGVkJywgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBzZXRBdHRyKCdhcmlhLWV4cGFuZGVkJywgIW1lbnVPcGVuLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHNldEF0dHIoJ2RhdGEtbWVudS1vcGVuJywgIW1lbnVPcGVuLCBtZW51KTtcbiAgICBzYXZlU2Nyb2xsKG1lbnUpKCFtZW51T3Blbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnVQb3NpdGlvbihlbCkge1xuICByZXR1cm4gZnVuY3Rpb24oaXNQYXN0KSB7XG4gICAgc2V0QXR0cignZGF0YS1oZWFkZXItZml4ZWQnLCBpc1Bhc3QsIGVsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTWVudShtZW51LCBtZW51VG9nZ2xlKSB7XG4gIGV2ZW50T24oJ2NsaWNrJywgdG9nZ2xlTWVudShtZW51KSwgbWVudVRvZ2dsZSk7XG4gIGV2ZW50T24oJ3Njcm9sbCcsIHdoZW5QYXN0KG1lbnUsIHRvZ2dsZU1lbnVQb3NpdGlvbihtZW51KSksIHdpbmRvdyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZVNjcm9sbChiYXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbihpc1NhdmluZykge1xuICAgIGlmIChpc1NhdmluZykge1xuICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBiYXNlLnNldEF0dHJpYnV0ZSgnZGF0YS1zYXZlLXNjcm9sbCcsIHNjcm9sbFBvcyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyBzY3JvbGxQb3MgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KGJhc2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNhdmUtc2Nyb2xsJykpKTtcbiAgICB9XG4gIH07XG59XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=