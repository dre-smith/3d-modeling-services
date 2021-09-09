"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar forms = function forms() {\n  var formName = document.querySelectorAll(\"[id$='-name']\"),\n      formEmail = document.querySelectorAll(\"[id$='-email']\"),\n      formPhone = document.querySelectorAll(\"[id$='-phone']\"),\n      formMessage = document.getElementById('form2-message');\n  formName.forEach(function (elem) {\n    elem.addEventListener('input', function () {\n      elem.value = elem.value.replace(/[^А-Яа-яЕё\\s]/g, '');\n    });\n    elem.addEventListener('blur', function () {\n      elem.value = elem.value.replace(/\\s+/g, ' ');\n      elem.value = elem.value.replace(/^[\\s]+|[\\s]+$/g, '');\n      elem.value = elem.value.replace(/(?:^|\\s)\\S/g, function (val) {\n        return val.toUpperCase();\n      });\n    });\n  });\n  formEmail.forEach(function (elem) {\n    elem.addEventListener('keydown', function (event) {\n      if (event.keyCode === 32) {\n        event.preventDefault();\n        return false;\n      }\n\n      ;\n      elem.value = elem.value.replace(/[^A-Za-z@\\-_\\.!~*']/g, '').trim();\n    });\n    elem.addEventListener('blur', function () {\n      elem.value = elem.value.replace(/^[\\-]+|[\\-]+$/g, '');\n    });\n  });\n  formPhone.forEach(function (elem) {\n    elem.maxLength = 16;\n    elem.addEventListener('input', function () {\n      elem.value = elem.value.replace(/[^0-9\\+]/g, '');\n    });\n  });\n  formMessage.addEventListener('input', function () {\n    formMessage.value = formMessage.value.replace(/[^А-Яа-яЕё\\d\\-\\s,.!?]/g, '');\n  });\n  formMessage.addEventListener('blur', function () {\n    formMessage.value = formMessage.value.replace(/\\s{1,}/g, ' ');\n    formMessage.value = formMessage.value.replace(/\\-{1,}/g, '-');\n    formMessage.value = formMessage.value.replace(/\\.{1,}/g, '.');\n    formMessage.value = formMessage.value.replace(/^[\\s]+|[\\s]+$/g, '');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://3dglo/./src/modules/forms.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("996f73c371c9ad07c9bf")
/******/ })();
/******/ 
/******/ }
);