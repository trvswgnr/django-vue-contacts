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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/sass/main.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/sass/main.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\toptions.attrs.type = \"text/css\";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\toptions.attrs.type = \"text/css\";\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./js/vue-config */ \"./src/js/vue-config.js\");\n\n__webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n\n__webpack_require__(/*! ./js/modal */ \"./src/js/modal.js\");\n\n__webpack_require__(/*! ./js/events */ \"./src/js/events.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Events\n */\n\n$('#showSearch').click(function () {\n  $('.search-wrapper-mobile').toggleClass('is-hidden');\n});\n\n$('.header__search-close').click(function () {\n  $('.search-wrapper-mobile').addClass('is-hidden');\n});\n\n//# sourceURL=webpack:///./src/js/events.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nif (typeof jQuery === 'undefined') {\n  throw new Error('Modal Requires jQuery');\n}\n\n+function ($) {\n  'use strict';\n\n  var version = $.fn.jquery.split(' ')[0].split('.');\n  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 3) {\n    throw new Error('Modal requires jQuery version 1.9.1 or higher, but lower than version 4');\n  }\n}(jQuery);\n\n+function ($) {\n  'use strict';\n\n  // MODAL CLASS DEFINITION\n  // ======================\n\n  var Modal = function Modal(element, options) {\n    this.options = options;\n    this.$body = $(document.body);\n    this.$element = $(element);\n    this.$dialog = this.$element.find('.modal__dialog');\n    this.$backdrop = null;\n    this.isShown = null;\n    this.originalBodyPad = null;\n    this.scrollbarWidth = 0;\n    this.ignoreBackdropClick = false;\n\n    if (this.options.remote) {\n      this.$element.find('.modal__content').load(this.options.remote, $.proxy(function () {\n        this.$element.trigger('loaded.bs.modal');\n      }, this));\n    }\n  };\n\n  Modal.VERSION = '3.3.7';\n\n  Modal.TRANSITION_DURATION = 300;\n  Modal.BACKDROP_TRANSITION_DURATION = 150;\n\n  Modal.DEFAULTS = {\n    backdrop: true,\n    keyboard: true,\n    show: true\n  };\n\n  Modal.prototype.toggle = function (_relatedTarget) {\n    return this.isShown ? this.hide() : this.show(_relatedTarget);\n  };\n\n  Modal.prototype.show = function (_relatedTarget) {\n    var that = this;\n    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });\n\n    this.$element.trigger(e);\n\n    if (this.isShown || e.isDefaultPrevented()) return;\n\n    this.isShown = true;\n\n    this.checkScrollbar();\n    this.setScrollbar();\n    this.$body.addClass('modal__open');\n\n    this.escape();\n    this.resize();\n\n    this.$element.on('click.dismiss.bs.modal', '[data-dismiss=\"modal\"]', $.proxy(this.hide, this));\n\n    this.$dialog.on('mousedown.dismiss.bs.modal', function () {\n      that.$element.one('mouseup.dismiss.bs.modal', function (e) {\n        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;\n      });\n    });\n\n    this.backdrop(function () {\n      var transition = $.support.transition && that.$element.hasClass('fade');\n\n      if (!that.$element.parent().length) {\n        that.$element.appendTo(that.$body); // don't move modals dom position\n      }\n\n      that.$element.show().scrollTop(0);\n\n      that.adjustDialog();\n\n      if (transition) {\n        that.$element[0].offsetWidth; // force reflow\n      }\n\n      that.$element.addClass('in');\n\n      that.enforceFocus();\n\n      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });\n\n      transition ? that.$dialog // wait for modal to slide in\n      .one('bsTransitionEnd', function () {\n        that.$element.trigger('focus').trigger(e);\n      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);\n    });\n  };\n\n  Modal.prototype.hide = function (e) {\n    if (e) e.preventDefault();\n\n    e = $.Event('hide.bs.modal');\n\n    this.$element.trigger(e);\n\n    if (!this.isShown || e.isDefaultPrevented()) return;\n\n    this.isShown = false;\n\n    this.escape();\n    this.resize();\n\n    $(document).off('focusin.bs.modal');\n\n    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');\n\n    this.$dialog.off('mousedown.dismiss.bs.modal');\n\n    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();\n  };\n\n  Modal.prototype.enforceFocus = function () {\n    $(document).off('focusin.bs.modal') // guard against infinite focus loop\n    .on('focusin.bs.modal', $.proxy(function (e) {\n      if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {\n        this.$element.trigger('focus');\n      }\n    }, this));\n  };\n\n  Modal.prototype.escape = function () {\n    if (this.isShown && this.options.keyboard) {\n      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {\n        e.which == 27 && this.hide();\n      }, this));\n    } else if (!this.isShown) {\n      this.$element.off('keydown.dismiss.bs.modal');\n    }\n  };\n\n  Modal.prototype.resize = function () {\n    if (this.isShown) {\n      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));\n    } else {\n      $(window).off('resize.bs.modal');\n    }\n  };\n\n  Modal.prototype.hideModal = function () {\n    var that = this;\n    this.$element.hide();\n    this.backdrop(function () {\n      that.$body.removeClass('modal__open');\n      that.resetAdjustments();\n      that.resetScrollbar();\n      that.$element.trigger('hidden.bs.modal');\n    });\n  };\n\n  Modal.prototype.removeBackdrop = function () {\n    this.$backdrop && this.$backdrop.remove();\n    this.$backdrop = null;\n  };\n\n  Modal.prototype.backdrop = function (callback) {\n    var that = this;\n    var animate = this.$element.hasClass('fade') ? 'fade' : '';\n\n    if (this.isShown && this.options.backdrop) {\n      var doAnimate = $.support.transition && animate;\n\n      this.$backdrop = $(document.createElement('div')).addClass('modal__backdrop ' + animate).appendTo(this.$body);\n\n      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {\n        if (this.ignoreBackdropClick) {\n          this.ignoreBackdropClick = false;\n          return;\n        }\n        if (e.target !== e.currentTarget) return;\n        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();\n      }, this));\n\n      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow\n\n      this.$backdrop.addClass('in');\n\n      if (!callback) return;\n\n      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();\n    } else if (!this.isShown && this.$backdrop) {\n      this.$backdrop.removeClass('in');\n\n      var callbackRemove = function callbackRemove() {\n        that.removeBackdrop();\n        callback && callback();\n      };\n      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();\n    } else if (callback) {\n      callback();\n    }\n  };\n\n  // these following methods are used to handle overflowing modals\n\n  Modal.prototype.handleUpdate = function () {\n    this.adjustDialog();\n  };\n\n  Modal.prototype.adjustDialog = function () {\n    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;\n\n    this.$element.css({\n      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',\n      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''\n    });\n  };\n\n  Modal.prototype.resetAdjustments = function () {\n    this.$element.css({\n      paddingLeft: '',\n      paddingRight: ''\n    });\n  };\n\n  Modal.prototype.checkScrollbar = function () {\n    var fullWindowWidth = window.innerWidth;\n    if (!fullWindowWidth) {\n      // workaround for missing window.innerWidth in IE8\n      var documentElementRect = document.documentElement.getBoundingClientRect();\n      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);\n    }\n    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;\n    this.scrollbarWidth = this.measureScrollbar();\n  };\n\n  Modal.prototype.setScrollbar = function () {\n    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);\n    this.originalBodyPad = document.body.style.paddingRight || '';\n    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);\n  };\n\n  Modal.prototype.resetScrollbar = function () {\n    this.$body.css('padding-right', this.originalBodyPad);\n  };\n\n  Modal.prototype.measureScrollbar = function () {\n    // thx walsh\n    var scrollDiv = document.createElement('div');\n    scrollDiv.className = 'modal__scrollbar-measure';\n    this.$body.append(scrollDiv);\n    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;\n    this.$body[0].removeChild(scrollDiv);\n    return scrollbarWidth;\n  };\n\n  // MODAL PLUGIN DEFINITION\n  // =======================\n\n  function Plugin(option, _relatedTarget) {\n    return this.each(function () {\n      var $this = $(this);\n      var data = $this.data('bs.modal');\n      var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);\n\n      if (!data) $this.data('bs.modal', data = new Modal(this, options));\n      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);\n    });\n  }\n\n  var old = $.fn.modal;\n\n  $.fn.modal = Plugin;\n  $.fn.modal.Constructor = Modal;\n\n  // MODAL NO CONFLICT\n  // =================\n\n  $.fn.modal.noConflict = function () {\n    $.fn.modal = old;\n    return this;\n  };\n\n  // MODAL DATA-API\n  // ==============\n\n  $(document).on('click.bs.modal.data-api', '[data-toggle=\"modal\"]', function (e) {\n    var $this = $(this);\n    var href = $this.attr('href');\n    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\\s]+$)/, '')); // strip for ie7\n    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());\n\n    if ($this.is('a')) e.preventDefault();\n\n    $target.one('show.bs.modal', function (showEvent) {\n      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown\n      $target.one('hidden.bs.modal', function () {\n        $this.is(':visible') && $this.trigger('focus');\n      });\n    });\n    Plugin.call($target, option, this);\n  });\n}(jQuery);\n\n// temporary fix for modal acting up\n$(document).on('click.bs.modal.data-api', '[data-target=\"#addContactModal\"]', function () {\n  $(\"#addContactModal\").modal('show');\n});\n\n//# sourceURL=webpack:///./src/js/modal.js?");

/***/ }),

/***/ "./src/js/vue-config.js":
/*!******************************!*\
  !*** ./src/js/vue-config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nVue.http.headers.common['X-CSRFToken'] = \"{{ csrf_token }}\";\nnew Vue({\n\tel: '#app',\n\tdelimiters: ['${', '}'],\n\tdata: {\n\t\tcontacts: [],\n\t\tcurrentContact: {},\n\t\tmessage: null,\n\t\tnewContact: {\n\t\t\t'contact_name': null,\n\t\t\t'contact_email': null\n\t\t},\n\t\tsearch_term: ''\n\t},\n\tmounted: function mounted() {\n\t\tthis.getContacts();\n\t},\n\tmethods: {\n\t\tgetContacts: function getContacts() {\n\t\t\tvar _this = this;\n\n\t\t\tvar clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n\t\t\tif (clear === true) {\n\t\t\t\tthis.search_term = '';\n\t\t\t}\n\t\t\tvar api_url = '/api/contact/';\n\t\t\tif (this.search_term !== '' || this.search_term !== null) {\n\t\t\t\tapi_url = '/api/contact/?search=' + this.search_term;\n\t\t\t}\n\t\t\tthis.$http.get(api_url).then(function (response) {\n\t\t\t\t_this.contacts = response.data;\n\t\t\t}).catch(function (err) {\n\t\t\t\tconsole.log(err);\n\t\t\t});\n\t\t},\n\t\tgetContact: function getContact(id) {\n\t\t\tvar _this2 = this;\n\n\t\t\tthis.$http.get('/api/contact/' + id + '/').then(function (response) {\n\t\t\t\t_this2.currentContact = response.data;\n\t\t\t\t$(\"#editContactModal\").modal('show');\n\t\t\t}).catch(function (err) {\n\t\t\t\tconsole.log(err);\n\t\t\t});\n\t\t},\n\t\taddContact: function addContact() {\n\t\t\tvar _this3 = this;\n\n\t\t\tvar contacts = this.$data.contacts;\n\t\t\tvar is_match = false;\n\t\t\tfor (var i = 0; i < contacts.length; i++) {\n\t\t\t\tif (this.newContact.contact_email === contacts[i].contact_email) {\n\t\t\t\t\tis_match = true;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (is_match === false) {\n\t\t\t\tthis.$http.post('/api/contact/', this.newContact).then(function (response) {\n\t\t\t\t\t_this3.getContacts();$(\"#addContactModal\").modal('hide');\n\t\t\t\t\t_this3.newContact.contact_email = '';\n\t\t\t\t\t_this3.newContact.contact_name = '';\n\t\t\t\t}).catch(function (err) {\n\t\t\t\t\tconsole.log(err);\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\talert('Email address is already assigned to a contact.');\n\t\t\t}\n\t\t},\n\t\tupdateContact: function updateContact() {\n\t\t\tvar _this4 = this;\n\n\t\t\tthis.$http.put('/api/contact/' + this.currentContact.contact_id + '/', this.currentContact).then(function (response) {\n\t\t\t\t_this4.currentContact = response.data;\n\t\t\t\t_this4.getContacts();\n\t\t\t}).catch(function (err) {\n\t\t\t\tconsole.log(err);\n\t\t\t});\n\t\t},\n\t\tdeleteContact: function deleteContact(id) {\n\t\t\tvar _this5 = this;\n\n\t\t\tthis.$http.delete('/api/contact/' + id + '/').then(function (response) {\n\t\t\t\t_this5.getContacts();\n\t\t\t\t$(\"#editContactModal\").modal('hide');\n\t\t\t}).catch(function (err) {\n\t\t\t\tconsole.log(err);\n\t\t\t});\n\t\t}\n\t}\n});\n\n//# sourceURL=webpack:///./src/js/vue-config.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/sass/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });
