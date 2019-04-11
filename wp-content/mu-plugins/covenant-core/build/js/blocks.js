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

//  Import CSS.

var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText;
var registerBlockType = wp.blocks.registerBlockType;
var Button = wp.components.Button;

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
  attributes: {
    title: {
      source: 'text',
      selector: '.page-header__title'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.page-header__image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.page-header__image'
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
      return wp.element.createElement(
        'div',
        { className: 'button-container relative' },
        !attributes.imageUrl && wp.element.createElement('img', {
          alt: attributes.imageAlt,
          src: attributes.imageUrl,
          className: 'image'
        }),
        wp.element.createElement(
          Button,
          { onClick: openEvent, className: 'button button-large' },
          'Pick an image'
        )
      );
    };
    return wp.element.createElement(
      'div',
      { className: 'relative ' + className },
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
      wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({ title: content });
        },
        value: attributes.title,
        placeholder: 'Your card title',
        className: 'heading'
      })
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
  save: function save(props) {
    return wp.element.createElement(
      'div',
      { className: props.className },
      wp.element.createElement(
        'p',
        null,
        '\u2014 Hello from the frontend.'
      ),
      wp.element.createElement(
        'p',
        null,
        'CGB BLOCK: ',
        wp.element.createElement(
          'code',
          null,
          'cpc-blocks'
        ),
        ' is a new Gutenberg block.'
      ),
      wp.element.createElement(
        'p',
        null,
        'It was created via',
        ' ',
        wp.element.createElement(
          'code',
          null,
          wp.element.createElement(
            'a',
            { href: 'https://github.com/ahmadawais/create-guten-block' },
            'create-guten-block'
          )
        ),
        '.'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvYmxvY2tzL3BhZ2UtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL2Jsb2NrLWVkaXRvcnMuc2NzcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvc2Nzcy9ibG9jay1zdHlsZXMuc2NzcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsImVkaXRvciIsIk1lZGlhVXBsb2FkIiwiUGxhaW5UZXh0IiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJCdXR0b24iLCJjb21wb25lbnRzIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJrZXl3b3JkcyIsImF0dHJpYnV0ZXMiLCJzb3VyY2UiLCJzZWxlY3RvciIsImltYWdlQWx0IiwiYXR0cmlidXRlIiwiaW1hZ2VVcmwiLCJlZGl0IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlcyIsImdldEltYWdlQnV0dG9uIiwib3BlbkV2ZW50IiwibWVkaWEiLCJhbHQiLCJ1cmwiLCJpbWFnZUlEIiwib3BlbiIsImNvbnRlbnQiLCJzYXZlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNM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QUFHLE1BQUssa0RBQVI7QUFBQTtBQUFBO0FBREYsU0FGRjtBQUFBO0FBQUE7QUFMRixLQURGO0FBaUJEO0FBMUZ3QyxDQUEzQyxFOzs7Ozs7Ozs7OztBQzNCQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJqcy9ibG9ja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvYmxvY2tzLmpzXCIpO1xuIiwiLyoqXG4gKiBHdXRlbmJlcmcgQmxvY2tzXG4gKlxuICogQWxsIGJsb2NrcyByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBibG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cbiAqL1xuXG5pbXBvcnQgJy4uL3Njc3MvYmxvY2stZWRpdG9ycy5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9ibG9jay1zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzL3BhZ2UtaGVhZGVyJztcbiIsIi8qKlxuICogQkxPQ0s6IGNwYy1ibG9ja3NcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBQbGFpblRleHQgfSA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2NwYy9wYWdlLWltYWdlLWhlYWRlcicsIHtcbiAgLy8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG4gIHRpdGxlOiBfXygnUGFnZSBIZWFkZXIgLSBJbWFnZScpLCAvLyBCbG9jayB0aXRsZS5cbiAgaWNvbjogJ2Zvcm1hdC1pbWFnZScsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cbiAgY2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cbiAga2V5d29yZHM6IFtfXygndGVzdCcpXSxcbiAgYXR0cmlidXRlczoge1xuICAgIHRpdGxlOiB7XG4gICAgICBzb3VyY2U6ICd0ZXh0JyxcbiAgICAgIHNlbGVjdG9yOiAnLnBhZ2UtaGVhZGVyX190aXRsZScsXG4gICAgfSxcbiAgICBpbWFnZUFsdDoge1xuICAgICAgYXR0cmlidXRlOiAnYWx0JyxcbiAgICAgIHNlbGVjdG9yOiAnLnBhZ2UtaGVhZGVyX19pbWFnZScsXG4gICAgfSxcbiAgICBpbWFnZVVybDoge1xuICAgICAgYXR0cmlidXRlOiAnc3JjJyxcbiAgICAgIHNlbGVjdG9yOiAnLnBhZ2UtaGVhZGVyX19pbWFnZScsXG4gICAgfSxcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICAqXG4gICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgICovXG4gIGVkaXQ6IGZ1bmN0aW9uKHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcbiAgICBjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IG9wZW5FdmVudCA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgeyFhdHRyaWJ1dGVzLmltYWdlVXJsICYmIChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBhbHQ9e2F0dHJpYnV0ZXMuaW1hZ2VBbHR9XG4gICAgICAgICAgICBzcmM9e2F0dHJpYnV0ZXMuaW1hZ2VVcmx9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvcGVuRXZlbnR9IGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIj5cbiAgICAgICAgICBQaWNrIGFuIGltYWdlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgPE1lZGlhVXBsb2FkXG4gICAgICAgICAgb25TZWxlY3Q9e21lZGlhID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBpbWFnZUFsdDogbWVkaWEuYWx0LCBpbWFnZVVybDogbWVkaWEudXJsIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT1cImltYWdlXCJcbiAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy5pbWFnZUlEfVxuICAgICAgICAgIHJlbmRlcj17KHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFBsYWluVGV4dFxuICAgICAgICAgIG9uQ2hhbmdlPXtjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KX1cbiAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgY2FyZCB0aXRsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICAqXG4gICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICAqL1xuICBzYXZlOiBmdW5jdGlvbihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgPHA+4oCUIEhlbGxvIGZyb20gdGhlIGZyb250ZW5kLjwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ0dCIEJMT0NLOiA8Y29kZT5jcGMtYmxvY2tzPC9jb2RlPiBpcyBhIG5ldyBHdXRlbmJlcmcgYmxvY2suXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSXQgd2FzIGNyZWF0ZWQgdmlheycgJ31cbiAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWhtYWRhd2Fpcy9jcmVhdGUtZ3V0ZW4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgY3JlYXRlLWd1dGVuLWJsb2NrXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgIC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=