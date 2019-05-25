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
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popup */ "./wp-content/mu-plugins/covenant-core/src/js/modules/popup.js");
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/utils */ "./wp-content/mu-plugins/covenant-core/src/js/modules/utils.js");








var menuToggle = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.menu-toggle');
var menu = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('#' + Object(_modules_attr__WEBPACK_IMPORTED_MODULE_2__["getAttr"])('aria-controls', menuToggle));

Object(_modules_menu__WEBPACK_IMPORTED_MODULE_3__["setupMenu"])(menu, menuToggle);

var handleVideo = function handleVideo(video) {
  return function (isClosing) {
    return isClosing ? video.pause() : video.play();
  };
};

var popups = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["domAll"])('[data-popup-action]');
var video = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.cpc-popup__video');
popups.forEach(function (btn) {
  btn.addEventListener('click', Object(_modules_utils__WEBPACK_IMPORTED_MODULE_5__["pipe"])(_modules_popup__WEBPACK_IMPORTED_MODULE_4__["togglePopup"], handleVideo(video)));
});

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
  var vid = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.cta-video');
  var moveVideo = moveY(vid);
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

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/home.scss":
/*!****************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/home.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9zYXZlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL2hvbWUuc2NzcyJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwiZG9tIiwibWVudSIsImdldEF0dHIiLCJzZXR1cE1lbnUiLCJoYW5kbGVWaWRlbyIsImlzQ2xvc2luZyIsInZpZGVvIiwicGF1c2UiLCJwbGF5IiwicG9wdXBzIiwiZG9tQWxsIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwaXBlIiwidG9nZ2xlUG9wdXAiLCJnZXRUb3AiLCJlbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIm1vdmVZIiwiYmFzZSIsInN0YXJ0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJnb2FsIiwidHJhbnNmb3JtIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsInBhcmVudFBvcyIsIm9mZnNldEhlaWdodCIsImNoYW5nZSIsInBlcmNlbnQiLCJpc0FuaW1hdGluZyIsImlzUGFzdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0eWxlIiwiaW5uZXJXaWR0aCIsInZpZCIsIm1vdmVWaWRlbyIsInNldEF0dHIiLCJhdHRyIiwidmFsIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZmxpcEF0dHIiLCJ0b2dnbGVBdHRyIiwiYXR0clRvQm9vbCIsImlzRWxtTm9kZSIsIm5vZGVUeXBlIiwic2VsZWN0b3IiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImRvY3VtZW50IiwiZXJyb3IiLCJlbG1zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsIndyYXBFdmVudCIsImZuIiwiYXJncyIsImUiLCJldmVudE9uIiwiZXZlbnQiLCJjYiIsIndoZW5QYXN0IiwiaGVpZ2h0Iiwic2Nyb2xsWSIsInRvZ2dsZU1lbnUiLCJtZW51T3BlbiIsImN1cnJlbnRUYXJnZXQiLCJzYXZlU2Nyb2xsIiwidG9nZ2xlTWVudVBvc2l0aW9uIiwicG9wdXAiLCJnZXRFbGVtZW50QnlJZCIsImRvY3VtZW50RWxlbWVudCIsInBvc2l0aW9uIiwiYm9keSIsIm1hcmdpblRvcCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNjcm9sbFRvIiwicGFyc2VJbnQiLCJzY3JvbGxQb3MiLCJ3aWR0aCIsImFkZCIsImlzU2F2aW5nIiwiZm5zIiwicmVkdWNlIiwidiIsImYiLCJ4IiwiZWxFeGlzdHMiLCJjbGFzc05hbWUiLCJ0cmFjZSIsImNvbnNvbGUiLCJsb2ciLCJtc2ciLCJub29wIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNB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LFVBQWEsQ0FBQzlCLEVBQUQsRUFBS3dCLElBQUw7QUFBQSxTQUFjeEIsR0FBRzJCLFlBQUgsQ0FBZ0JILElBQWhCLE1BQTBCLE1BQXhDO0FBQUEsQ0FBbkI7O0FBRUEsSUFBTTBELE9BQU8sU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckIsQzs7Ozs7Ozs7Ozs7QUNUUCx5QyIsImZpbGUiOiJqcy9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2hvbWUuanNcIik7XG4iLCJpbXBvcnQgJy4uL3Njc3MvaG9tZS5zY3NzJztcblxuaW1wb3J0IHsgZG9tLCBkb21BbGwgfSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCB7IGdldEF0dHIgfSBmcm9tICcuL21vZHVsZXMvYXR0cic7XG5pbXBvcnQgeyBzZXR1cE1lbnUgfSBmcm9tICcuL21vZHVsZXMvbWVudSc7XG5pbXBvcnQgeyB0b2dnbGVQb3B1cCB9IGZyb20gJy4vbW9kdWxlcy9wb3B1cCc7XG5pbXBvcnQgeyBwaXBlIH0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzJztcblxuY29uc3QgbWVudVRvZ2dsZSA9IGRvbSgnLm1lbnUtdG9nZ2xlJyk7XG5jb25zdCBtZW51ID0gZG9tKGAjJHtnZXRBdHRyKCdhcmlhLWNvbnRyb2xzJywgbWVudVRvZ2dsZSl9YCk7XG5cbnNldHVwTWVudShtZW51LCBtZW51VG9nZ2xlKTtcblxuY29uc3QgaGFuZGxlVmlkZW8gPSB2aWRlbyA9PiBpc0Nsb3NpbmcgPT5cbiAgaXNDbG9zaW5nID8gdmlkZW8ucGF1c2UoKSA6IHZpZGVvLnBsYXkoKTtcblxuY29uc3QgcG9wdXBzID0gZG9tQWxsKCdbZGF0YS1wb3B1cC1hY3Rpb25dJyk7XG5jb25zdCB2aWRlbyA9IGRvbSgnLmNwYy1wb3B1cF9fdmlkZW8nKTtcbnBvcHVwcy5mb3JFYWNoKGZ1bmN0aW9uKGJ0bikge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwaXBlKHRvZ2dsZVBvcHVwLCBoYW5kbGVWaWRlbyh2aWRlbykpKTtcbn0pO1xuXG5mdW5jdGlvbiBnZXRUb3AoZWwpIHtcbiAgY29uc3QgeyB0b3AgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gdG9wO1xufVxuXG5mdW5jdGlvbiBtb3ZlWShlbCkge1xuICBjb25zdCBiYXNlID0ge1xuICAgIHN0YXJ0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgZ29hbDogd2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICB0cmFuc2Zvcm06IDE2MCxcbiAgICBwYXJlbnQ6IGVsLnBhcmVudEVsZW1lbnQsXG4gIH07XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwYXJlbnRQb3MgPSBnZXRUb3AoYmFzZS5wYXJlbnQpICsgYmFzZS5wYXJlbnQub2Zmc2V0SGVpZ2h0IC8gMjtcbiAgICBjb25zdCBjaGFuZ2UgPSAxIC0gKGJhc2Uuc3RhcnQgLSBwYXJlbnRQb3MpIC8gYmFzZS5nb2FsO1xuICAgIGNvbnN0IHBlcmNlbnQgPSBiYXNlLnRyYW5zZm9ybSAqIGNoYW5nZTtcbiAgICBjb25zdCBpc0FuaW1hdGluZyA9IHBhcmVudFBvcyA8PSBiYXNlLnN0YXJ0O1xuICAgIGNvbnN0IGlzUGFzdCA9IHBhcmVudFBvcyA8PSBiYXNlLmdvYWw7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAoaXNQYXN0KSB7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDApYDtcbiAgICAgIH0gZWxzZSBpZiAoaXNBbmltYXRpbmcpIHtcbiAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLSR7cGVyY2VudH1weClgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zZm9ybVkoLSR7YmFzZS50cmFuc2Zvcm19cHgpYDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBiYXNlO1xuICB9O1xufVxuXG5pZiAod2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XG4gIGNvbnN0IHZpZCA9IGRvbSgnLmN0YS12aWRlbycpO1xuICBjb25zdCBtb3ZlVmlkZW8gPSBtb3ZlWSh2aWQpO1xuICBtb3ZlVmlkZW8oKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG1vdmVWaWRlbyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0QXR0cihhdHRyLCB2YWwsIGVsKSB7XG4gIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyKGF0dHIsIGVsKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG59XG5cbmV4cG9ydCBjb25zdCBmbGlwQXR0ciA9IChhdHRyLCBlbCkgPT5cbiAgZ2V0QXR0cihhdHRyLCBlbCkgPT09ICd0cnVlJyA/ICdmYWxzZScgOiAndHJ1ZSc7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVBdHRyID0gKGF0dHIsIGVsKSA9PiBzZXRBdHRyKGF0dHIsIGZsaXBBdHRyKGF0dHIsIGVsKSwgZWwpO1xuXG5leHBvcnQgY29uc3QgYXR0clRvQm9vbCA9IChhdHRyLCBlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZSc7XG4iLCJjb25zdCBpc0VsbU5vZGUgPSBlbCA9PiBlbCAmJiBlbC5ub2RlVHlwZSA9PT0gMTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRvbShzZWxlY3Rvciwgcm9vdCkge1xuICBjb25zdCBlbCA9XG4gICAgcm9vdCAmJiBpc0VsbU5vZGUocm9vdClcbiAgICAgID8gcm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgcmV0dXJuIGVsIHx8IHsgZXJyb3I6ICdlbGVtZW50IG5vdCBmb3VuZCcgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUFsbChzZWxlY3Rvciwgcm9vdCA9IGZhbHNlKSB7XG4gIGNvbnN0IGVsbXMgPSBpc0VsbU5vZGUocm9vdClcbiAgICA/IHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICByZXR1cm4gQXJyYXkuZnJvbShlbG1zKSB8fCBbXTtcbn1cbiIsImV4cG9ydCBjb25zdCB3cmFwRXZlbnQgPSAoZm4sIGFyZ3MgPSBbXSkgPT4gKGUpID0+IHtcbiAgZm4oLi4uYXJncyk7XG4gIHJldHVybiBlO1xufTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50T24gPSAoZXZlbnQsIGNiLCBlbCkgPT4ge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYik7XG4gIHJldHVybiBlbDtcbn07XG4iLCJpbXBvcnQgeyBldmVudE9uIH0gZnJvbSAnLi9ldmVudCc7XG5pbXBvcnQgeyBzZXRBdHRyLCBhdHRyVG9Cb29sIH0gZnJvbSAnLi9hdHRyJztcbmltcG9ydCB7IHNhdmVTY3JvbGwgfSBmcm9tICcuL3NhdmVTY3JvbGwnO1xuXG5mdW5jdGlvbiB3aGVuUGFzdChlbCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGhlaWdodCkge1xuICAgICAgZm4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKGZhbHNlKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnUobWVudSkge1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IG1lbnVPcGVuID0gYXR0clRvQm9vbCgnYXJpYS1leHBhbmRlZCcsIGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0QXR0cignYXJpYS1leHBhbmRlZCcsICFtZW51T3BlbiwgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBzZXRBdHRyKCdkYXRhLW1lbnUtb3BlbicsICFtZW51T3BlbiwgbWVudSk7XG4gICAgc2F2ZVNjcm9sbChtZW51KSghbWVudU9wZW4pO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51UG9zaXRpb24oZWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGlzUGFzdCkge1xuICAgIHNldEF0dHIoJ2RhdGEtaGVhZGVyLWZpeGVkJywgaXNQYXN0LCBlbCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cE1lbnUobWVudSwgbWVudVRvZ2dsZSkge1xuICBldmVudE9uKCdjbGljaycsIHRvZ2dsZU1lbnUobWVudSksIG1lbnVUb2dnbGUpO1xuICBldmVudE9uKCdzY3JvbGwnLCB3aGVuUGFzdChtZW51LCB0b2dnbGVNZW51UG9zaXRpb24obWVudSkpLCB3aW5kb3cpO1xufVxuIiwiaW1wb3J0IHsgYXR0clRvQm9vbCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUG9wdXAoZSkge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKVxuICApO1xuXG4gIGlmIChwb3B1cCkge1xuICAgIGNvbnN0IGlzQ2xvc2luZyA9ICFhdHRyVG9Cb29sKHBvcHVwLCAnZGF0YS1wb3B1cC1oaWRkZW4nKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wdXAtaGlkZGVuJywgaXNDbG9zaW5nKTtcbiAgICBpZiAoaXNDbG9zaW5nKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzYy1wb3B1cF9fb3BlbicpO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KHBvcHVwLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3B1cC1zY3JvbGwnKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3B1cC1zY3JvbGwnLCBzY3JvbGxQb3MpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJy0nICsgc2Nyb2xsUG9zICsgJ3B4JztcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc2MtcG9wdXBfX29wZW4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQ2xvc2luZztcbiAgfVxuXG4gIHJldHVybiBlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVTY3JvbGwoYmFzZSkge1xuICByZXR1cm4gZnVuY3Rpb24oaXNTYXZpbmcpIHtcbiAgICBpZiAoaXNTYXZpbmcpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgYmFzZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2F2ZS1zY3JvbGwnLCBzY3JvbGxQb3MpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJy0nICsgc2Nyb2xsUG9zICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblRvcCA9ICdhdXRvJztcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChiYXNlLmdldEF0dHJpYnV0ZSgnZGF0YS1zYXZlLXNjcm9sbCcpKSk7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IHBpcGUgPSAoLi4uZm5zKSA9PiB4ID0+IGZucy5yZWR1Y2UoKHYsIGYpID0+IGYodiksIHgpO1xuXG5leHBvcnQgY29uc3QgZWxFeGlzdHMgPSBjbGFzc05hbWUgPT5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgdHJhY2UgPSBtc2cgPT4gdmFsID0+IGNvbnNvbGUubG9nKG1zZywgdmFsKSB8fCB2YWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG5leHBvcnQgY29uc3QgYXR0clRvQm9vbCA9IChlbCwgYXR0cikgPT4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZSc7XG5cbmV4cG9ydCBjb25zdCBub29wID0gKCkgPT4ge307XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=