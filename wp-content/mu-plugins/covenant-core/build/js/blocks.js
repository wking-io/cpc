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
    PlainText = _wp$editor.PlainText,
    InspectorControls = _wp$editor.InspectorControls;
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
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;

    var getImageButton = function getImageButton(openEvent) {
      var buttonText = attributes.imageUrl && attributes.imageUrl.length > 0 ? 'Replace Image' : 'Pick Image';
      return wp.element.createElement(
        'div',
        null,
        wp.element.createElement(
          'label',
          { htmlFor: 'bg-image' },
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
        wp.element.createElement(
          'div',
          null,
          wp.element.createElement(
            'label',
            { htmlFor: 'page-header-title' },
            'Heading'
          ),
          wp.element.createElement(PlainText, {
            id: 'page-header-title',
            onChange: function onChange(content) {
              return setAttributes({ title: content });
            },
            value: attributes.title,
            placeholder: 'Page Heading'
          })
        )
      ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9tdS1wbHVnaW5zL2NvdmVuYW50LWNvcmUvc3JjL2pzL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvYmxvY2tzL3BhZ2UtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvbXUtcGx1Z2lucy9jb3ZlbmFudC1jb3JlL3NyYy9zY3NzL2Jsb2NrLWVkaXRvcnMuc2NzcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvc2Nzcy9ibG9jay1zdHlsZXMuc2NzcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsImVkaXRvciIsIk1lZGlhVXBsb2FkIiwiUGxhaW5UZXh0IiwiSW5zcGVjdG9yQ29udHJvbHMiLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsIkJ1dHRvbiIsImNvbXBvbmVudHMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImtleXdvcmRzIiwic3VwcG9ydHMiLCJhbGlnbiIsImF0dHJpYnV0ZXMiLCJzb3VyY2UiLCJpbWFnZUFsdCIsImF0dHJpYnV0ZSIsImltYWdlVXJsIiwidHlwZSIsImRlZmF1bHQiLCJlZGl0IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJnZXRJbWFnZUJ1dHRvbiIsImJ1dHRvblRleHQiLCJsZW5ndGgiLCJvcGVuRXZlbnQiLCJtZWRpYSIsImFsdCIsInVybCIsImltYWdlSUQiLCJvcGVuIiwiY29udGVudCIsInNhdmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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V04sS0FIcEI7QUFJRSx5QkFBWTtBQUpkO0FBRkY7QUFURixPQURGO0FBb0JFO0FBQ0UsbUJBQVUsb0VBRFo7QUFFRSxhQUFLTSxXQUFXSSxRQUZsQjtBQUdFLGFBQUtKLFdBQVdFO0FBSGxCLFFBcEJGO0FBeUJFO0FBQUE7QUFBQSxVQUFJLFdBQVUsZ0VBQWQ7QUFDR0YsbUJBQVdOLEtBQVgsSUFBb0I7QUFEdkI7QUF6QkYsS0FERjtBQStCRCxHQXBGd0M7O0FBc0Z6Qzs7Ozs7Ozs7QUFRQTJCLFFBQU0scUJBQW9DO0FBQUEsUUFBekJyQixVQUF5QixTQUF6QkEsVUFBeUI7QUFBQSxRQUFiUSxTQUFhLFNBQWJBLFNBQWE7O0FBQ3hDLFdBQ0U7QUFBQTtBQUFBLFFBQUssd0RBQXNEQSxTQUEzRDtBQUNFO0FBQ0UsbUJBQVUsb0VBRFo7QUFFRSxhQUFLUixXQUFXSSxRQUZsQjtBQUdFLGFBQUtKLFdBQVdFO0FBSGxCLFFBREY7QUFNRTtBQUFBO0FBQUEsVUFBSSxXQUFVLGdFQUFkO0FBQ0dGLG1CQUFXTixLQUFYLElBQW9CO0FBRHZCO0FBTkYsS0FERjtBQVlEO0FBM0d3QyxDQUEzQyxFOzs7Ozs7Ozs7OztBQzNCQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJqcy9ibG9ja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93cC1jb250ZW50L211LXBsdWdpbnMvY292ZW5hbnQtY29yZS9zcmMvanMvYmxvY2tzLmpzXCIpO1xuIiwiLyoqXG4gKiBHdXRlbmJlcmcgQmxvY2tzXG4gKlxuICogQWxsIGJsb2NrcyByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBibG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cbiAqL1xuXG5pbXBvcnQgJy4uL3Njc3MvYmxvY2stZWRpdG9ycy5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9ibG9jay1zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzL3BhZ2UtaGVhZGVyJztcbiIsIi8qKlxuICogQkxPQ0s6IGNwYy1ibG9ja3NcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBQbGFpblRleHQsIEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5lZGl0b3I7XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjcGMvcGFnZS1pbWFnZS1oZWFkZXInLCB7XG4gIC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuICB0aXRsZTogX18oJ1BhZ2UgSGVhZGVyIC0gSW1hZ2UnKSwgLy8gQmxvY2sgdGl0bGUuXG4gIGljb246ICdmb3JtYXQtaW1hZ2UnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG4gIGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG4gIGtleXdvcmRzOiBbX18oJ3Rlc3QnKV0sXG4gIHN1cHBvcnRzOiB7XG4gICAgYWxpZ246IFsnZnVsbCddLFxuICB9LFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHNvdXJjZTogJ3RleHQnLFxuICAgIH0sXG4gICAgaW1hZ2VBbHQ6IHtcbiAgICAgIGF0dHJpYnV0ZTogJ2FsdCcsXG4gICAgfSxcbiAgICBpbWFnZVVybDoge1xuICAgICAgYXR0cmlidXRlOiAnc3JjJyxcbiAgICB9LFxuICAgIGFsaWduOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdmdWxsJyxcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgICpcbiAgICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAgKi9cbiAgZWRpdDogZnVuY3Rpb24oeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuICAgIGNvbnN0IGdldEltYWdlQnV0dG9uID0gb3BlbkV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvblRleHQgPVxuICAgICAgICBhdHRyaWJ1dGVzLmltYWdlVXJsICYmIGF0dHJpYnV0ZXMuaW1hZ2VVcmwubGVuZ3RoID4gMFxuICAgICAgICAgID8gJ1JlcGxhY2UgSW1hZ2UnXG4gICAgICAgICAgOiAnUGljayBJbWFnZSc7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmctaW1hZ2VcIj5CYWNrZ3JvdW5kIEltYWdlPC9sYWJlbD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpZD1cImJnLWltYWdlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5FdmVudH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHBhZ2UtaGVhZGVyIHJlbGF0aXZlIGFzcGVjdC0zOjEgYmctZ3JleSAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxuICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgb25TZWxlY3Q9e21lZGlhID0+IHtcbiAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IGltYWdlQWx0OiBtZWRpYS5hbHQsIGltYWdlVXJsOiBtZWRpYS51cmwgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHlwZT1cImltYWdlXCJcbiAgICAgICAgICAgIHZhbHVlPXthdHRyaWJ1dGVzLmltYWdlSUR9XG4gICAgICAgICAgICByZW5kZXI9eyh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3Blbil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYWdlLWhlYWRlci10aXRsZVwiPkhlYWRpbmc8L2xhYmVsPlxuICAgICAgICAgICAgPFBsYWluVGV4dFxuICAgICAgICAgICAgICBpZD1cInBhZ2UtaGVhZGVyLXRpdGxlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pfVxuICAgICAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYWdlIEhlYWRpbmdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jZW50ZXIgcGFnZS1oZWFkZXJfX2ltZ1wiXG4gICAgICAgICAgc3JjPXthdHRyaWJ1dGVzLmltYWdlVXJsfVxuICAgICAgICAgIGFsdD17YXR0cmlidXRlcy5pbWFnZUFsdH1cbiAgICAgICAgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtc2FucyB1cHBlcmNhc2UgcGluLWNlbnRlciB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAge2F0dHJpYnV0ZXMudGl0bGUgfHwgJ1BhZ2UgSGVhZGluZyd9XG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICAqXG4gICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICAqL1xuICBzYXZlOiBmdW5jdGlvbih7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcGFnZS1oZWFkZXIgcmVsYXRpdmUgYXNwZWN0LTM6MSBiZy1ncmV5ICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNlbnRlciBwYWdlLWhlYWRlcl9faW1nXCJcbiAgICAgICAgICBzcmM9e2F0dHJpYnV0ZXMuaW1hZ2VVcmx9XG4gICAgICAgICAgYWx0PXthdHRyaWJ1dGVzLmltYWdlQWx0fVxuICAgICAgICAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZm9udC1zYW5zIHVwcGVyY2FzZSBwaW4tY2VudGVyIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7YXR0cmlidXRlcy50aXRsZSB8fCAnUGFnZSBIZWFkaW5nJ31cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG59KTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9