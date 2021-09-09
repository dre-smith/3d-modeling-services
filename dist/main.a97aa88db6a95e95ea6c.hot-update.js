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

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!',\n      forms = document.querySelectorAll('form'),\n      statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem';\n  statusMessage.style.cssText = 'color: #fff';\n  forms.forEach(function (elem) {\n    elem.addEventListener('submit', function (event) {\n      var input = elem.querySelectorAll('input');\n      event.preventDefault();\n      elem.appendChild(statusMessage);\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(elem);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n\n      var postData = function postData(body) {\n        return fetch('./server.php', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(body)\n        });\n      };\n\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200');\n        }\n\n        ;\n        statusMessage.textContent = successMessage;\n        input.forEach(function (input) {\n          input.value = '';\n        });\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n        setTimeout(function () {\n          loadMessage.remove();\n          statusMessage.textContent = \"\";\n        }, 5000);\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n/*\r\npostData(body)\r\n.then((response) => {\r\nif (response.status !== 200) {\r\nthrow new Error(\"status netwokr not 200\");\r\n}\r\nstususMessage.textContent = successMesage;\r\nsetTimeout(() => (stususMessage.textContent = \"\"), 5000);\r\nloaddMessage.remove();\r\ninput.forEach((input) => {\r\ninput.value = \"\";\r\n});\r\n})\r\n.catch((error) => {\r\nstususMessage.textContent = errorMessage;\r\n\r\nconsole.error(error);\r\nsetTimeout(() => {\r\nloaddMessage.remove();\r\nstususMessage.textContent = \"\";\r\n}, 5000);\r\n});\r\n\r\n*/\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7e5e9ed4555e6ec0b7d1")
/******/ })();
/******/ 
/******/ }
);