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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/mu-plugins/covenant-core/src/js/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/mu-plugins/covenant-core/src/js/blocks.js":
/*!**************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/blocks.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_block_editors_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/block-editors.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/block-editors.scss");
/* harmony import */ var _scss_block_editors_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_block_editors_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_block_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/block-styles.scss */ "./wp-content/mu-plugins/covenant-core/src/scss/block-styles.scss");
/* harmony import */ var _scss_block_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_block_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/page-header */ "./wp-content/mu-plugins/covenant-core/src/js/blocks/page-header.js");
/* harmony import */ var _blocks_page_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_page_header__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */





/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/js/blocks/page-header.js":
/*!**************************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/js/blocks/page-header.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * BLOCK: cpc-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    InspectorControls = _wp$editor.InspectorControls;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('cpc/page-image-header', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Page Header - Image'), // Block title.
  icon: 'format-image', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__('test')],
  supports: {
    align: ['full']
  },
  attributes: {
    title: {
      source: 'text'
    },
    imageAlt: {
      attribute: 'alt'
    },
    imageUrl: {
      attribute: 'src'
    },
    align: {
      type: 'string',
      default: 'full'
    }
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    var getImageButton = function getImageButton(openEvent) {
      var buttonText = attributes.imageUrl && attributes.imageUrl.length > 0 ? 'Replace Image' : 'Pick Image';
      return wp.element.createElement(
        'div',
        { className: 'flex flex-col pt-6 pb-3' },
        wp.element.createElement(
          'label',
          { className: 'mb-1', htmlFor: 'bg-image' },
          'Background Image'
        ),
        wp.element.createElement(
          Button,
          {
            id: 'bg-image',
            onClick: openEvent,
            className: 'button button-large'
          },
          buttonText
        )
      );
    };

    return wp.element.createElement(
      'div',
      { className: 'page-header relative aspect-3:1 bg-grey ' + className },
      wp.element.createElement(
        InspectorControls,
        null,
        wp.element.createElement(MediaUpload, {
          onSelect: function onSelect(media) {
            setAttributes({ imageAlt: media.alt, imageUrl: media.url });
          },
          type: 'image',
          value: attributes.imageID,
          render: function render(_ref2) {
            var open = _ref2.open;
            return getImageButton(open);
          }
        }),
        wp.element.createElement(TextControl, {
          label: 'Heading',
          id: 'page-header-title',
          onChange: function onChange(content) {
            return setAttributes({ title: content });
          },
          value: attributes.title,
          placeholder: 'Page Heading',
          className: 'pb-3'
        })
      ),
      wp.element.createElement('img', {
        className: 'absolute top-0 left-0 w-full h-full object-cover page-header__img',
        src: attributes.imageUrl,
        alt: attributes.imageAlt
      }),
      wp.element.createElement('div', { className: 'absolute inset-0 page-header__overlay' }),
      wp.element.createElement(
        'h1',
        { className: 'absolute font-sans uppercase pin-center text-center text-white text-4xl font-bold' },
        attributes.title || 'Page Heading'
      )
    );
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  save: function save(_ref3) {
    var attributes = _ref3.attributes,
        className = _ref3.className;

    return wp.element.createElement(
      'div',
      { className: 'page-header relative aspect-3:1 bg-grey ' + className },
      wp.element.createElement('img', {
        className: 'absolute top-0 left-0 w-full h-full object-center page-header__img',
        src: attributes.imageUrl,
        alt: attributes.imageAlt
      }),
      wp.element.createElement(
        'h1',
        { className: 'absolute font-sans uppercase pin-center text-center text-white' },
        attributes.title || 'Page Heading'
      )
    );
  }
});

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/block-editors.scss":
/*!*************************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/block-editors.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./wp-content/mu-plugins/covenant-core/src/scss/block-styles.scss":
/*!************************************************************************!*\
  !*** ./wp-content/mu-plugins/covenant-core/src/scss/block-styles.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvYmxvY2tzL3BhZ2UtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL2Jsb2NrLWVkaXRvcnMuc2NzcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvc2Nzcy9ibG9jay1zdHlsZXMuc2NzcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsImVkaXRvciIsIk1lZGlhVXBsb2FkIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJUZXh0Q29udHJvbCIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJzdXBwb3J0cyIsImFsaWduIiwiYXR0cmlidXRlcyIsInNvdXJjZSIsImltYWdlQWx0IiwiYXR0cmlidXRlIiwiaW1hZ2VVcmwiLCJ0eXBlIiwiZGVmYXVsdCIsImVkaXQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGVzIiwiZ2V0SW1hZ2VCdXR0b24iLCJidXR0b25UZXh0IiwibGVuZ3RoIiwib3BlbkV2ZW50IiwibWVkaWEiLCJhbHQiLCJ1cmwiLCJpbWFnZUlEIiwib3BlbiIsImNvbnRlbnQiLCJzYXZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7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QUFtQkU7QUFDRSxtQkFBVSxtRUFEWjtBQUVFLGFBQUtNLFdBQVdJLFFBRmxCO0FBR0UsYUFBS0osV0FBV0U7QUFIbEIsUUFuQkY7QUF3QkUsd0NBQUssV0FBVSx1Q0FBZixHQXhCRjtBQXlCRTtBQUFBO0FBQUEsVUFBSSxXQUFVLG1GQUFkO0FBQ0dGLG1CQUFXTixLQUFYLElBQW9CO0FBRHZCO0FBekJGLEtBREY7QUErQkQsR0F0RndDOztBQXdGekM7Ozs7Ozs7O0FBUUEwQixRQUFNLHFCQUFvQztBQUFBLFFBQXpCcEIsVUFBeUIsU0FBekJBLFVBQXlCO0FBQUEsUUFBYlEsU0FBYSxTQUFiQSxTQUFhOztBQUN4QyxXQUNFO0FBQUE7QUFBQSxRQUFLLHdEQUFzREEsU0FBM0Q7QUFDRTtBQUNFLG1CQUFVLG9FQURaO0FBRUUsYUFBS1IsV0FBV0ksUUFGbEI7QUFHRSxhQUFLSixXQUFXRTtBQUhsQixRQURGO0FBTUU7QUFBQTtBQUFBLFVBQUksV0FBVSxnRUFBZDtBQUNHRixtQkFBV04sS0FBWCxJQUFvQjtBQUR2QjtBQU5GLEtBREY7QUFZRDtBQTdHd0MsQ0FBM0MsRTs7Ozs7Ozs7Ozs7QUN6QkEseUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoianMvYmxvY2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2Jsb2Nrcy5qc1wiKTtcbiIsIi8qKlxuICogR3V0ZW5iZXJnIEJsb2Nrc1xuICpcbiAqIEFsbCBibG9ja3MgcmVsYXRlZCBKYXZhU2NyaXB0IGZpbGVzIHNob3VsZCBiZSBpbXBvcnRlZCBoZXJlLlxuICogWW91IGNhbiBjcmVhdGUgYSBuZXcgYmxvY2sgZm9sZGVyIGluIHRoaXMgZGlyIGFuZCBpbmNsdWRlIGNvZGVcbiAqIGZvciB0aGF0IGJsb2NrIGhlcmUgYXMgd2VsbC5cbiAqXG4gKiBBbGwgYmxvY2tzIHNob3VsZCBiZSBpbmNsdWRlZCBoZXJlIHNpbmNlIHRoaXMgaXMgdGhlIGZpbGUgdGhhdFxuICogV2VicGFjayBpcyBjb21waWxpbmcgYXMgdGhlIGlucHV0IGZpbGUuXG4gKi9cblxuaW1wb3J0ICcuLi9zY3NzL2Jsb2NrLWVkaXRvcnMuc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3MvYmxvY2stc3R5bGVzLnNjc3MnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9wYWdlLWhlYWRlcic7XG4iLCIvKipcbiAqIEJMT0NLOiBjcGMtYmxvY2tzXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuZWRpdG9yO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBCdXR0b24sIFRleHRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2NwYy9wYWdlLWltYWdlLWhlYWRlcicsIHtcbiAgLy8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG4gIHRpdGxlOiBfXygnUGFnZSBIZWFkZXIgLSBJbWFnZScpLCAvLyBCbG9jayB0aXRsZS5cbiAgaWNvbjogJ2Zvcm1hdC1pbWFnZScsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cbiAgY2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cbiAga2V5d29yZHM6IFtfXygndGVzdCcpXSxcbiAgc3VwcG9ydHM6IHtcbiAgICBhbGlnbjogWydmdWxsJ10sXG4gIH0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICB0aXRsZToge1xuICAgICAgc291cmNlOiAndGV4dCcsXG4gICAgfSxcbiAgICBpbWFnZUFsdDoge1xuICAgICAgYXR0cmlidXRlOiAnYWx0JyxcbiAgICB9LFxuICAgIGltYWdlVXJsOiB7XG4gICAgICBhdHRyaWJ1dGU6ICdzcmMnLFxuICAgIH0sXG4gICAgYWxpZ246IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2Z1bGwnLFxuICAgIH0sXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAgKlxuICAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICAqL1xuICBlZGl0OiBmdW5jdGlvbih7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9KSB7XG4gICAgY29uc3QgZ2V0SW1hZ2VCdXR0b24gPSBvcGVuRXZlbnQgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uVGV4dCA9XG4gICAgICAgIGF0dHJpYnV0ZXMuaW1hZ2VVcmwgJiYgYXR0cmlidXRlcy5pbWFnZVVybC5sZW5ndGggPiAwXG4gICAgICAgICAgPyAnUmVwbGFjZSBJbWFnZSdcbiAgICAgICAgICA6ICdQaWNrIEltYWdlJztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC02IHBiLTNcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMVwiIGh0bWxGb3I9XCJiZy1pbWFnZVwiPlxuICAgICAgICAgICAgQmFja2dyb3VuZCBJbWFnZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJiZy1pbWFnZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvcGVuRXZlbnR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLWxhcmdlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YnV0dG9uVGV4dH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYWdlLWhlYWRlciByZWxhdGl2ZSBhc3BlY3QtMzoxIGJnLWdyZXkgJHtjbGFzc05hbWV9YH0+XG4gICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgICA8TWVkaWFVcGxvYWRcbiAgICAgICAgICAgIG9uU2VsZWN0PXttZWRpYSA9PiB7XG4gICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBpbWFnZUFsdDogbWVkaWEuYWx0LCBpbWFnZVVybDogbWVkaWEudXJsIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZVwiXG4gICAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy5pbWFnZUlEfVxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvcGVuIH0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICBsYWJlbD1cIkhlYWRpbmdcIlxuICAgICAgICAgICAgaWQ9XCJwYWdlLWhlYWRlci10aXRsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17Y29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSl9XG4gICAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFnZSBIZWFkaW5nXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBiLTNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcGFnZS1oZWFkZXJfX2ltZ1wiXG4gICAgICAgICAgc3JjPXthdHRyaWJ1dGVzLmltYWdlVXJsfVxuICAgICAgICAgIGFsdD17YXR0cmlidXRlcy5pbWFnZUFsdH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHBhZ2UtaGVhZGVyX19vdmVybGF5XCIgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtc2FucyB1cHBlcmNhc2UgcGluLWNlbnRlciB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtNHhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgIHthdHRyaWJ1dGVzLnRpdGxlIHx8ICdQYWdlIEhlYWRpbmcnfVxuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAgKlxuICAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAgKi9cbiAgc2F2ZTogZnVuY3Rpb24oeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHBhZ2UtaGVhZGVyIHJlbGF0aXZlIGFzcGVjdC0zOjEgYmctZ3JleSAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jZW50ZXIgcGFnZS1oZWFkZXJfX2ltZ1wiXG4gICAgICAgICAgc3JjPXthdHRyaWJ1dGVzLmltYWdlVXJsfVxuICAgICAgICAgIGFsdD17YXR0cmlidXRlcy5pbWFnZUFsdH1cbiAgICAgICAgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtc2FucyB1cHBlcmNhc2UgcGluLWNlbnRlciB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAge2F0dHJpYnV0ZXMudGl0bGUgfHwgJ1BhZ2UgSGVhZGluZyd9XG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxufSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==