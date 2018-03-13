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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * An example Gutenberg block for building Haiku
 * There is a bit of duplicate code, but it is 
 * straight-forward and easier to follow.
 * 
 * A Haiku block may not be the most practical anyways
 * the goal is to show how you might templatize.
 */
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    Editable = _wp$blocks.Editable,
    children = _wp$blocks.source.children;


registerBlockType('mkaz/bloko', {
	title: 'Bloko',
	icon: 'carrot',
	category: 'common',
	attributes: {
		line1: {
			type: 'array',
			source: children('.line1')
		},
		line2: {
			type: 'array',
			source: children('.line2')
		},
		line3: {
			type: 'array',
			source: children('.line3')
		}
	},

	edit: function edit(props) {
		var attr = props.attributes;

		var onChangeLine1 = function onChangeLine1(str) {
			props.setAttributes({ line1: str });
		};

		var onChangeLine2 = function onChangeLine2(str) {
			props.setAttributes({ line2: str });
		};

		var onChangeLine3 = function onChangeLine3(str) {
			props.setAttributes({ line3: str });
		};

		return wp.element.createElement(
			'div',
			null,
			wp.element.createElement(Editable, {
				placeholder: 'Line 1: 5 syllables',
				value: attr.line1,
				onChange: onChangeLine1,
				focus: attr.focus,
				onFocus: attr.setFocus
			}),
			wp.element.createElement(Editable, {
				placeholder: 'Line 2: 7 syllables',
				value: attr.line2,
				onChange: onChangeLine2,
				focus: attr.focus,
				onFocus: attr.setFocus
			}),
			wp.element.createElement(Editable, {
				placeholder: 'Line 3: 5 syllables',
				value: attr.line3,
				onChange: onChangeLine3,
				focus: attr.focus,
				onFocus: attr.setFocus
			})
		);
	},

	save: function save(props) {
		var _props$attributes = props.attributes,
		    line1 = _props$attributes.line1,
		    line2 = _props$attributes.line2,
		    line3 = _props$attributes.line3;

		return wp.element.createElement(
			'div',
			null,
			wp.element.createElement(
				'div',
				{ className: 'line1' },
				' ',
				line1,
				' '
			),
			wp.element.createElement(
				'div',
				{ className: 'line2' },
				' ',
				line2,
				' '
			),
			wp.element.createElement(
				'div',
				{ className: 'line3' },
				' ',
				line3,
				' '
			)
		);
	}
});

/***/ })
/******/ ]);