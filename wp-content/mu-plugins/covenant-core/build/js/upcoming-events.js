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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/upcoming-events.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/mu-plugins/covenant-core/src/js/blocks/upcoming-events.js":
/*!******************************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/blocks/upcoming-events.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect;


registerBlockType('cpc/upcoming-events', {
  title: 'Upcoming Events',
  icon: 'calendar',
  category: 'common',

  edit: withSelect(function (select) {
    return {
      posts: select('core').getEntityRecords('postType', 'post')
    };
  })(function (_ref) {
    var posts = _ref.posts,
        className = _ref.className;

    if (!posts) {
      return 'Loading...';
    }

    if (posts && posts.length === 0) {
      return 'No posts';
    }

    var post = posts[0];

    return wp.element.createElement(
      'a',
      { className: className, href: post.link },
      post.title.rendered
    );
  }),
  save: function save() {
    return wp.element.createElement(
      'div',
      null,
      'No one cares.'
    );
  }
});

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/js/upcoming-events.js":
/*!***********************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/upcoming-events.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_upcoming_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/upcoming-events */ "./wp-content/mu-plugins/covenant-core/src/js/blocks/upcoming-events.js");
/* harmony import */ var _blocks_upcoming_events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_upcoming_events__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2Jsb2Nrcy91cGNvbWluZy1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL3VwY29taW5nLWV2ZW50cy5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwid2l0aFNlbGVjdCIsImRhdGEiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImVkaXQiLCJwb3N0cyIsInNlbGVjdCIsImdldEVudGl0eVJlY29yZHMiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJwb3N0IiwibGluayIsInJlbmRlcmVkIiwic2F2ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztJQ25FUUEsaUIsR0FBc0JDLEdBQUdDLE0sQ0FBekJGLGlCO0lBQ0FHLFUsR0FBZUYsR0FBR0csSSxDQUFsQkQsVTs7O0FBRVJILGtCQUFrQixxQkFBbEIsRUFBeUM7QUFDdkNLLFNBQU8saUJBRGdDO0FBRXZDQyxRQUFNLFVBRmlDO0FBR3ZDQyxZQUFVLFFBSDZCOztBQUt2Q0MsUUFBTUwsV0FBVyxrQkFBVTtBQUN6QixXQUFPO0FBQ0xNLGFBQU9DLE9BQU8sTUFBUCxFQUFlQyxnQkFBZixDQUFnQyxVQUFoQyxFQUE0QyxNQUE1QztBQURGLEtBQVA7QUFHRCxHQUpLLEVBSUgsZ0JBQTBCO0FBQUEsUUFBdkJGLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLFFBQWhCRyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQzNCLFFBQUksQ0FBQ0gsS0FBTCxFQUFZO0FBQ1YsYUFBTyxZQUFQO0FBQ0Q7O0FBRUQsUUFBSUEsU0FBU0EsTUFBTUksTUFBTixLQUFpQixDQUE5QixFQUFpQztBQUMvQixhQUFPLFVBQVA7QUFDRDs7QUFFRCxRQUFNQyxPQUFPTCxNQUFNLENBQU4sQ0FBYjs7QUFFQSxXQUNFO0FBQUE7QUFBQSxRQUFHLFdBQVdHLFNBQWQsRUFBeUIsTUFBTUUsS0FBS0MsSUFBcEM7QUFDR0QsV0FBS1QsS0FBTCxDQUFXVztBQURkLEtBREY7QUFLRCxHQXBCSyxDQUxpQztBQTBCdkNDLFFBQU0sZ0JBQVc7QUFDZixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNEO0FBNUJzQyxDQUF6QyxFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvdXBjb21pbmctZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL3VwY29taW5nLWV2ZW50cy5qc1wiKTtcbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NwYy91cGNvbWluZy1ldmVudHMnLCB7XG4gIHRpdGxlOiAnVXBjb21pbmcgRXZlbnRzJyxcbiAgaWNvbjogJ2NhbGVuZGFyJyxcbiAgY2F0ZWdvcnk6ICdjb21tb24nLFxuXG4gIGVkaXQ6IHdpdGhTZWxlY3Qoc2VsZWN0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zdHM6IHNlbGVjdCgnY29yZScpLmdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgJ3Bvc3QnKSxcbiAgICB9O1xuICB9KSgoeyBwb3N0cywgY2xhc3NOYW1lIH0pID0+IHtcbiAgICBpZiAoIXBvc3RzKSB7XG4gICAgICByZXR1cm4gJ0xvYWRpbmcuLi4nO1xuICAgIH1cblxuICAgIGlmIChwb3N0cyAmJiBwb3N0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAnTm8gcG9zdHMnO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc3QgPSBwb3N0c1swXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj17cG9zdC5saW5rfT5cbiAgICAgICAge3Bvc3QudGl0bGUucmVuZGVyZWR9XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfSksXG4gIHNhdmU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiA8ZGl2Pk5vIG9uZSBjYXJlcy48L2Rpdj47XG4gIH0sXG59KTtcbiIsImltcG9ydCAnLi9ibG9ja3MvdXBjb21pbmctZXZlbnRzJztcbiJdLCJzb3VyY2VSb290IjoiIn0=