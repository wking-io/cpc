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
  var _video = Object(_modules_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])('.cta-video');
  var moveVideo = moveY(_video);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvbW9kdWxlcy9zYXZlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9qcy9tb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL2hvbWUuc2NzcyJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwiZG9tIiwibWVudSIsImdldEF0dHIiLCJzZXR1cE1lbnUiLCJoYW5kbGVWaWRlbyIsImlzQ2xvc2luZyIsInZpZGVvIiwicGF1c2UiLCJwbGF5IiwicG9wdXBzIiwiZG9tQWxsIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwaXBlIiwidG9nZ2xlUG9wdXAiLCJnZXRUb3AiLCJlbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIm1vdmVZIiwiYmFzZSIsInN0YXJ0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJnb2FsIiwidHJhbnNmb3JtIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsInBhcmVudFBvcyIsIm9mZnNldEhlaWdodCIsImNoYW5nZSIsInBlcmNlbnQiLCJpc0FuaW1hdGluZyIsImlzUGFzdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0eWxlIiwiaW5uZXJXaWR0aCIsIm1vdmVWaWRlbyIsInNldEF0dHIiLCJhdHRyIiwidmFsIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZmxpcEF0dHIiLCJ0b2dnbGVBdHRyIiwiYXR0clRvQm9vbCIsImlzRWxtTm9kZSIsIm5vZGVUeXBlIiwic2VsZWN0b3IiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImRvY3VtZW50IiwiZXJyb3IiLCJlbG1zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsIndyYXBFdmVudCIsImZuIiwiYXJncyIsImUiLCJldmVudE9uIiwiZXZlbnQiLCJjYiIsIndoZW5QYXN0IiwiaGVpZ2h0Iiwic2Nyb2xsWSIsInRvZ2dsZU1lbnUiLCJtZW51T3BlbiIsImN1cnJlbnRUYXJnZXQiLCJzYXZlU2Nyb2xsIiwidG9nZ2xlTWVudVBvc2l0aW9uIiwicG9wdXAiLCJnZXRFbGVtZW50QnlJZCIsImRvY3VtZW50RWxlbWVudCIsInBvc2l0aW9uIiwiYm9keSIsIm1hcmdpblRvcCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNjcm9sbFRvIiwicGFyc2VJbnQiLCJzY3JvbGxQb3MiLCJ3aWR0aCIsImFkZCIsImlzU2F2aW5nIiwiZm5zIiwicmVkdWNlIiwidiIsImYiLCJ4IiwiZWxFeGlzdHMiLCJjbGFzc05hbWUiLCJ0cmFjZSIsImNvbnNvbGUiLCJsb2ciLCJtc2ciLCJub29wIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QUFDN0IsRUFBRCxFQUFLdUIsSUFBTDtBQUFBLFNBQWN2QixHQUFHMEIsWUFBSCxDQUFnQkgsSUFBaEIsTUFBMEIsTUFBeEM7QUFBQSxDQUFuQjs7QUFFQSxJQUFNMEQsT0FBTyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQixDOzs7Ozs7Ozs7OztBQ1RQLHlDIiwiZmlsZSI6ImpzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvaG9tZS5qc1wiKTtcbiIsImltcG9ydCAnLi4vc2Nzcy9ob21lLnNjc3MnO1xuXG5pbXBvcnQgeyBkb20sIGRvbUFsbCB9IGZyb20gJy4vbW9kdWxlcy9kb20nO1xuaW1wb3J0IHsgZ2V0QXR0ciB9IGZyb20gJy4vbW9kdWxlcy9hdHRyJztcbmltcG9ydCB7IHNldHVwTWVudSB9IGZyb20gJy4vbW9kdWxlcy9tZW51JztcbmltcG9ydCB7IHRvZ2dsZVBvcHVwIH0gZnJvbSAnLi9tb2R1bGVzL3BvcHVwJztcbmltcG9ydCB7IHBpcGUgfSBmcm9tICcuL21vZHVsZXMvdXRpbHMnO1xuXG5jb25zdCBtZW51VG9nZ2xlID0gZG9tKCcubWVudS10b2dnbGUnKTtcbmNvbnN0IG1lbnUgPSBkb20oYCMke2dldEF0dHIoJ2FyaWEtY29udHJvbHMnLCBtZW51VG9nZ2xlKX1gKTtcblxuc2V0dXBNZW51KG1lbnUsIG1lbnVUb2dnbGUpO1xuXG5jb25zdCBoYW5kbGVWaWRlbyA9IHZpZGVvID0+IGlzQ2xvc2luZyA9PlxuICBpc0Nsb3NpbmcgPyB2aWRlby5wYXVzZSgpIDogdmlkZW8ucGxheSgpO1xuXG5jb25zdCBwb3B1cHMgPSBkb21BbGwoJ1tkYXRhLXBvcHVwLWFjdGlvbl0nKTtcbmNvbnN0IHZpZGVvID0gZG9tKCcuY3BjLXBvcHVwX192aWRlbycpO1xucG9wdXBzLmZvckVhY2goZnVuY3Rpb24oYnRuKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBpcGUodG9nZ2xlUG9wdXAsIGhhbmRsZVZpZGVvKHZpZGVvKSkpO1xufSk7XG5cbmZ1bmN0aW9uIGdldFRvcChlbCkge1xuICBjb25zdCB7IHRvcCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB0b3A7XG59XG5cbmZ1bmN0aW9uIG1vdmVZKGVsKSB7XG4gIGNvbnN0IGJhc2UgPSB7XG4gICAgc3RhcnQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICBnb2FsOiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyLFxuICAgIHRyYW5zZm9ybTogMTYwLFxuICAgIHBhcmVudDogZWwucGFyZW50RWxlbWVudCxcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHBhcmVudFBvcyA9IGdldFRvcChiYXNlLnBhcmVudCkgKyBiYXNlLnBhcmVudC5vZmZzZXRIZWlnaHQgLyAyO1xuICAgIGNvbnN0IGNoYW5nZSA9IDEgLSAoYmFzZS5zdGFydCAtIHBhcmVudFBvcykgLyBiYXNlLmdvYWw7XG4gICAgY29uc3QgcGVyY2VudCA9IGJhc2UudHJhbnNmb3JtICogY2hhbmdlO1xuICAgIGNvbnN0IGlzQW5pbWF0aW5nID0gcGFyZW50UG9zIDw9IGJhc2Uuc3RhcnQ7XG4gICAgY29uc3QgaXNQYXN0ID0gcGFyZW50UG9zIDw9IGJhc2UuZ29hbDtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChpc1Bhc3QpIHtcbiAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoMClgO1xuICAgICAgfSBlbHNlIGlmIChpc0FuaW1hdGluZykge1xuICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtJHtwZXJjZW50fXB4KWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNmb3JtWSgtJHtiYXNlLnRyYW5zZm9ybX1weClgO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJhc2U7XG4gIH07XG59XG5cbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpIHtcbiAgY29uc3QgdmlkZW8gPSBkb20oJy5jdGEtdmlkZW8nKTtcbiAgY29uc3QgbW92ZVZpZGVvID0gbW92ZVkodmlkZW8pO1xuICBtb3ZlVmlkZW8oKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG1vdmVWaWRlbyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0QXR0cihhdHRyLCB2YWwsIGVsKSB7XG4gIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyKGF0dHIsIGVsKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG59XG5cbmV4cG9ydCBjb25zdCBmbGlwQXR0ciA9IChhdHRyLCBlbCkgPT5cbiAgZ2V0QXR0cihhdHRyLCBlbCkgPT09ICd0cnVlJyA/ICdmYWxzZScgOiAndHJ1ZSc7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVBdHRyID0gKGF0dHIsIGVsKSA9PiBzZXRBdHRyKGF0dHIsIGZsaXBBdHRyKGF0dHIsIGVsKSwgZWwpO1xuXG5leHBvcnQgY29uc3QgYXR0clRvQm9vbCA9IChhdHRyLCBlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZSc7XG4iLCJjb25zdCBpc0VsbU5vZGUgPSBlbCA9PiBlbCAmJiBlbC5ub2RlVHlwZSA9PT0gMTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRvbShzZWxlY3Rvciwgcm9vdCkge1xuICBjb25zdCBlbCA9XG4gICAgcm9vdCAmJiBpc0VsbU5vZGUocm9vdClcbiAgICAgID8gcm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgcmV0dXJuIGVsIHx8IHsgZXJyb3I6ICdlbGVtZW50IG5vdCBmb3VuZCcgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUFsbChzZWxlY3Rvciwgcm9vdCA9IGZhbHNlKSB7XG4gIGNvbnN0IGVsbXMgPSBpc0VsbU5vZGUocm9vdClcbiAgICA/IHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICByZXR1cm4gQXJyYXkuZnJvbShlbG1zKSB8fCBbXTtcbn1cbiIsImV4cG9ydCBjb25zdCB3cmFwRXZlbnQgPSAoZm4sIGFyZ3MgPSBbXSkgPT4gKGUpID0+IHtcbiAgZm4oLi4uYXJncyk7XG4gIHJldHVybiBlO1xufTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50T24gPSAoZXZlbnQsIGNiLCBlbCkgPT4ge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYik7XG4gIHJldHVybiBlbDtcbn07XG4iLCJpbXBvcnQgeyBldmVudE9uIH0gZnJvbSAnLi9ldmVudCc7XG5pbXBvcnQgeyBzZXRBdHRyLCBhdHRyVG9Cb29sIH0gZnJvbSAnLi9hdHRyJztcbmltcG9ydCB7IHNhdmVTY3JvbGwgfSBmcm9tICcuL3NhdmVTY3JvbGwnO1xuXG5mdW5jdGlvbiB3aGVuUGFzdChlbCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGhlaWdodCkge1xuICAgICAgZm4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKGZhbHNlKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnUobWVudSkge1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IG1lbnVPcGVuID0gYXR0clRvQm9vbCgnYXJpYS1leHBhbmRlZCcsIGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0QXR0cignYXJpYS1leHBhbmRlZCcsICFtZW51T3BlbiwgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBzZXRBdHRyKCdkYXRhLW1lbnUtb3BlbicsICFtZW51T3BlbiwgbWVudSk7XG4gICAgc2F2ZVNjcm9sbChtZW51KSghbWVudU9wZW4pO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51UG9zaXRpb24oZWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGlzUGFzdCkge1xuICAgIHNldEF0dHIoJ2RhdGEtaGVhZGVyLWZpeGVkJywgaXNQYXN0LCBlbCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cE1lbnUobWVudSwgbWVudVRvZ2dsZSkge1xuICBldmVudE9uKCdjbGljaycsIHRvZ2dsZU1lbnUobWVudSksIG1lbnVUb2dnbGUpO1xuICBldmVudE9uKCdzY3JvbGwnLCB3aGVuUGFzdChtZW51LCB0b2dnbGVNZW51UG9zaXRpb24obWVudSkpLCB3aW5kb3cpO1xufVxuIiwiaW1wb3J0IHsgYXR0clRvQm9vbCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUG9wdXAoZSkge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKVxuICApO1xuXG4gIGlmIChwb3B1cCkge1xuICAgIGNvbnN0IGlzQ2xvc2luZyA9ICFhdHRyVG9Cb29sKHBvcHVwLCAnZGF0YS1wb3B1cC1oaWRkZW4nKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wdXAtaGlkZGVuJywgaXNDbG9zaW5nKTtcbiAgICBpZiAoaXNDbG9zaW5nKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzYy1wb3B1cF9fb3BlbicpO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KHBvcHVwLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3B1cC1zY3JvbGwnKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3B1cC1zY3JvbGwnLCBzY3JvbGxQb3MpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJy0nICsgc2Nyb2xsUG9zICsgJ3B4JztcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc2MtcG9wdXBfX29wZW4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQ2xvc2luZztcbiAgfVxuXG4gIHJldHVybiBlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVTY3JvbGwoYmFzZSkge1xuICByZXR1cm4gZnVuY3Rpb24oaXNTYXZpbmcpIHtcbiAgICBpZiAoaXNTYXZpbmcpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgYmFzZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2F2ZS1zY3JvbGwnLCBzY3JvbGxQb3MpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gJy0nICsgc2Nyb2xsUG9zICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblRvcCA9ICdhdXRvJztcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChiYXNlLmdldEF0dHJpYnV0ZSgnZGF0YS1zYXZlLXNjcm9sbCcpKSk7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IHBpcGUgPSAoLi4uZm5zKSA9PiB4ID0+IGZucy5yZWR1Y2UoKHYsIGYpID0+IGYodiksIHgpO1xuXG5leHBvcnQgY29uc3QgZWxFeGlzdHMgPSBjbGFzc05hbWUgPT5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgdHJhY2UgPSBtc2cgPT4gdmFsID0+IGNvbnNvbGUubG9nKG1zZywgdmFsKSB8fCB2YWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG5leHBvcnQgY29uc3QgYXR0clRvQm9vbCA9IChlbCwgYXR0cikgPT4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZSc7XG5cbmV4cG9ydCBjb25zdCBub29wID0gKCkgPT4ge307XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=