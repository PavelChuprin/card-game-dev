/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/difficultySelectionWindow.ts":
/*!*****************************************************!*\
  !*** ./src/components/difficultySelectionWindow.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderWindowDifficultySelection: () => (/* binding */ renderWindowDifficultySelection)\n/* harmony export */ });\nvar renderWindowDifficultySelection = function (game) {\n    var windowDifficultySelectionHtml = \"\\n<div class=\\\"container\\\">\\n<div class=\\\"level\\\">\\n\\t<div class=\\\"level-title\\\">\\n\\t\\t<h1 class=\\\"level-title-text\\\">\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438 \\u0441\\u043B\\u043E\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C</h1>\\n\\t</div>\\n\\t<form class=\\\"level-option-form\\\">\\n\\t\\t<label class=\\\"level-option-label\\\">\\n\\t\\t\\t<input class=\\\"level-option-input\\\" type=\\\"radio\\\" name=\\\"radio\\\" value=\\\"easy\\\">\\n\\t\\t\\t<i class=\\\"level-option-text\\\">1</i>\\n\\t\\t</label>\\n\\t\\t<label class=\\\"level-option-label\\\">\\n\\t\\t\\t<input class=\\\"level-option-input\\\" type=\\\"radio\\\" name=\\\"radio\\\" value=\\\"medium\\\">\\n\\t\\t\\t<i class=\\\"level-option-text\\\">2</i>\\n\\t\\t</label>\\n\\t\\t<label class=\\\"level-option-label\\\">\\n\\t\\t\\t<input class=\\\"level-option-input\\\" type=\\\"radio\\\" name=\\\"radio\\\" value=\\\"hard\\\">\\n\\t\\t\\t<i class=\\\"level-option-text\\\">3</i>\\n\\t\\t</label>\\n\\t\\t<div class=\\\"button-container\\\">\\n\\t\\t\\t<button  class=\\\"button-start\\\" type=\\\"submit\\\">\\u0421\\u0442\\u0430\\u0440\\u0442</button>\\n\\t\\t</div>\\n\\t</form>\\n</div>\\n</div>\\n\";\n    game.innerHTML = windowDifficultySelectionHtml;\n};\n\n\n//# sourceURL=webpack://game-dev/./src/components/difficultySelectionWindow.ts?");

/***/ }),

/***/ "./src/components/gameScreen.ts":
/*!**************************************!*\
  !*** ./src/components/gameScreen.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderGameScreen: () => (/* binding */ renderGameScreen)\n/* harmony export */ });\n/* harmony import */ var _winnerOrLoserWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winnerOrLoserWindow */ \"./src/components/winnerOrLoserWindow.ts\");\n\nvar renderGameScreen = function (game, difficultyFactor) {\n    var arrCards = [];\n    function suitCard(number) {\n        if (number === 1) {\n            return \"пики\";\n        }\n        else if (number === 2) {\n            return \"черви\";\n        }\n        else if (number === 3) {\n            return \"бубны\";\n        }\n        else if (number === 4) {\n            return \"крести\";\n        }\n    }\n    function rankCard(number) {\n        if (number === 6) {\n            return \"6\";\n        }\n        else if (number === 7) {\n            return \"7\";\n        }\n        else if (number === 8) {\n            return \"8\";\n        }\n        else if (number === 9) {\n            return \"9\";\n        }\n        else if (number === 10) {\n            return \"10\";\n        }\n        else if (number === 11) {\n            return \"валет\";\n        }\n        else if (number === 12) {\n            return \"дама\";\n        }\n        else if (number === 13) {\n            return \"король\";\n        }\n        else if (number === 14) {\n            return \"туз\";\n        }\n    }\n    var rank = \"\";\n    var suit = \"\";\n    for (var i = 0; i < difficultyFactor / 2; i++) {\n        do {\n            rank = rankCard(Math.floor(Math.random() * 9) + 6);\n            suit = suitCard(Math.floor(Math.random() * 4) + 1);\n        } while (arrCards.includes(\"<img data-value=\\\"\".concat(rank, \" \").concat(suit, \"\\\" class=\\\"game__card\\\" src=\\\"static/img/\").concat(rank, \" \").concat(suit, \".png\\\" alt=\\\"\").concat(rank, \" \").concat(suit, \"\\\">\")));\n        var card = \"<img data-value=\\\"\".concat(rank, \" \").concat(suit, \"\\\" class=\\\"game__card\\\" src=\\\"static/img/\").concat(rank, \" \").concat(suit, \".png\\\" alt=\\\"\").concat(rank, \" \").concat(suit, \"\\\">\");\n        arrCards.push(card);\n        var index = Math.floor(Math.random() * difficultyFactor) + 1;\n        var isFindSlot = false;\n        while (!isFindSlot) {\n            if (!arrCards[index]) {\n                arrCards[index] = card;\n                isFindSlot = true;\n            }\n            else if (index === difficultyFactor) {\n                index = 1;\n            }\n            else {\n                index++;\n            }\n        }\n    }\n    var timer = function (deadline) {\n        var time = deadline;\n        var interval = setInterval(function () {\n            time -= 1;\n            var gameScreenHtml = \"\\n\\t\\t\\t<div class=\\\"container-game\\\">\\n\\t\\t\\t\\t<div class=\\\"header-game\\\">\\n\\t\\t\\t\\t\\t<div class=\\\"header-game-timer\\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\\"timer__text\\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"timer__text-min\\\">min</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"timer__text-sec\\\">sec</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\\"timer__counter\\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"timer__minutes\\\">00</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"timer__seconds\\\">\".concat(time < 10 ? \"0\" + time : time, \"</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\\"header-game-button\\\">\\n\\t\\t\\t\\t\\t\\t<button class=\\\"button-restart\\\">\\u041D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0437\\u0430\\u043D\\u043E\\u0432\\u043E</button>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t<div class=\\\"body-game\\\">\\n\\t\\t\\t\\t\\t\").concat(arrCards.map(function (card) { return card; }).join(\"\"), \"\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t\");\n            game.innerHTML = gameScreenHtml;\n            // Обработчик кнопки \"Начать заново\"\n            var btnRestart = document.querySelector(\".button-restart\");\n            btnRestart === null || btnRestart === void 0 ? void 0 : btnRestart.addEventListener(\"click\", function () {\n                renderGameScreen(game, difficultyFactor);\n            });\n        }, 1000);\n        setTimeout(function () {\n            clearInterval(interval);\n            //Переворачиваем карты рубашкой вверх\n            var cards = document.querySelectorAll(\".game__card\");\n            cards.forEach(function (card) {\n                card.setAttribute(\"src\", \"static/img/shirt-card.png\");\n            });\n            //Запуск секундомера с начала игры\n            var sec = document.querySelector(\".timer__seconds\");\n            var min = document.querySelector(\".timer__minutes\");\n            var second = \"\";\n            var minute = \"\";\n            setInterval(function () {\n                second = (Number(sec.innerHTML) + 1).toString();\n                if (Number(second) < 60) {\n                    sec.innerHTML = Number(second) < 10 ? \"0\" + second : second;\n                }\n                else {\n                    minute = (Number(min.innerHTML) + 1).toString();\n                    min.innerHTML = Number(minute) < 10 ? \"0\" + minute : minute;\n                    sec.innerHTML = \"00\";\n                }\n            }, 1000);\n            var firstCard = {\n                value: \"\",\n                condition: null,\n            };\n            var secondCard = {\n                value: \"\",\n                condition: null,\n            };\n            var statusUser;\n            var checkWinner = function () {\n                var cards = Array.from(document.querySelectorAll(\".game__card\"));\n                for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {\n                    var card = cards_1[_i];\n                    if (card.dataset.status !== \"open\") {\n                        return false;\n                    }\n                }\n                return true;\n            };\n            var checkPairCards = function (firstCard, secondCard) {\n                var _a, _b;\n                if (firstCard.value !== secondCard.value) {\n                    statusUser = false;\n                    (0,_winnerOrLoserWindow__WEBPACK_IMPORTED_MODULE_0__.renderWindowWinnerOrLoser)(game, statusUser, minute, second);\n                }\n                else {\n                    (_a = firstCard.condition) === null || _a === void 0 ? void 0 : _a.setAttribute(\"data-status\", \"open\");\n                    (_b = secondCard.condition) === null || _b === void 0 ? void 0 : _b.setAttribute(\"data-status\", \"open\");\n                    if (checkWinner()) {\n                        statusUser = true;\n                        (0,_winnerOrLoserWindow__WEBPACK_IMPORTED_MODULE_0__.renderWindowWinnerOrLoser)(game, statusUser, minute, second);\n                    }\n                    else {\n                        firstCard.value = \"\";\n                        firstCard.condition = null;\n                        secondCard.value = \"\";\n                        secondCard.condition = null;\n                    }\n                }\n            };\n            cards.forEach(function (card) {\n                card.addEventListener(\"click\", function () {\n                    var htmlCard = card || null;\n                    if (htmlCard.dataset.status !== \"open\") {\n                        htmlCard.setAttribute(\"src\", \"static/img/\".concat(htmlCard.dataset.value, \".png\"));\n                        if (!firstCard.value) {\n                            // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion\n                            firstCard.value = htmlCard.dataset.value;\n                            // \"!\" мы говорим TypeScript, что это значение никогда не будет null или undefined\n                            firstCard.condition === null ? htmlCard : undefined;\n                        }\n                        else {\n                            // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion\n                            secondCard.value = htmlCard.dataset.value;\n                            firstCard.condition === null ? htmlCard : undefined;\n                            checkPairCards(firstCard, secondCard);\n                        }\n                    }\n                    console.log(htmlCard.dataset.value);\n                });\n            });\n        }, deadline * 1000);\n    };\n    timer(6);\n};\n\n\n//# sourceURL=webpack://game-dev/./src/components/gameScreen.ts?");

/***/ }),

/***/ "./src/components/winnerOrLoserWindow.ts":
/*!***********************************************!*\
  !*** ./src/components/winnerOrLoserWindow.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderWindowWinnerOrLoser: () => (/* binding */ renderWindowWinnerOrLoser)\n/* harmony export */ });\nvar renderWindowWinnerOrLoser = function (game, statusUser, minute, second) {\n    var windowWinnerOrLoserHtml = \"\\n\\t<div class=\\\"container\\\">\\n\\t\\t<div class=\\\"level\\\">\\n\\t\\t\\t<div class=\\\"level-smile\\\">\\n\\t\\t\\t\\t<img src=\\\"./static/img/smile-\".concat(statusUser ? \"winner\" : \"loser\", \".png\\\" alt=\").concat(statusUser ? \"winner\" : \"loser\", \">\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\\"level-message\\\">\\n\\t\\t\\t\\t<h1 class=\\\"level-message-text\\\">\\u0412\\u044B \").concat(statusUser ? \"выиграли\" : \"проиграли\", \"!</h1>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\\"elapsed-time\\\">\\n\\t\\t\\t\\t<p class=\\\"elapsed-time-text\\\">\\u0417\\u0430\\u0442\\u0440\\u0430\\u0447\\u0435\\u043D\\u043D\\u043E\\u0435 \\u0432\\u0440\\u0435\\u043C\\u044F</p>\\n\\t\\t\\t\\t<p class=\\\"elapsed-time-counter\\\">\\n\\t\\t\\t\\t\").concat(Number(minute) < 10 ? \"0\" + minute : minute, \".\").concat(Number(second) < 10 ? \"0\" + second : second, \"\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\t\\t\\t\\t<button class=\\\"button-restart\\\" type=\\\"submit\\\">\\u0418\\u0433\\u0440\\u0430\\u0442\\u044C \\u0441\\u043D\\u043E\\u0432\\u0430</button>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t</div>\");\n    game.innerHTML = windowWinnerOrLoserHtml;\n    var btnRestart = document.querySelector(\".button-restart\");\n    btnRestart === null || btnRestart === void 0 ? void 0 : btnRestart.addEventListener(\"click\", function () {\n        location.reload();\n    });\n};\n\n\n//# sourceURL=webpack://game-dev/./src/components/winnerOrLoserWindow.ts?");

/***/ }),

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_difficultySelectionWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/difficultySelectionWindow */ \"./src/components/difficultySelectionWindow.ts\");\n/* harmony import */ var _components_gameScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/gameScreen */ \"./src/components/gameScreen.ts\");\n\n\nvar game = document.getElementById(\"game\");\nvar renderGame = function () {\n    (0,_components_difficultySelectionWindow__WEBPACK_IMPORTED_MODULE_0__.renderWindowDifficultySelection)(game);\n};\nrenderGame();\nvar btnStart = document.querySelector(\".button-start\");\nvar formDifficultySelection = document.querySelector(\".level-option-form\");\n// Валидация\nformDifficultySelection.addEventListener(\"input\", function () {\n    if (document.querySelector('input[name=\"radio\"]:checked')\n        .value === \"\") {\n        if (btnStart !== null) {\n            btnStart.disabled = true;\n        }\n    }\n    else {\n        if (btnStart !== null) {\n            btnStart.disabled = false;\n        }\n    }\n});\nformDifficultySelection.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    if (document.querySelector('input[name=\"radio\"]:checked')\n        .value === \"easy\") {\n        (0,_components_gameScreen__WEBPACK_IMPORTED_MODULE_1__.renderGameScreen)(game, 6);\n        console.log(\"Уровень сложности: easy\");\n    }\n    else if (document.querySelector('input[name=\"radio\"]:checked')\n        .value === \"medium\") {\n        (0,_components_gameScreen__WEBPACK_IMPORTED_MODULE_1__.renderGameScreen)(game, 12);\n        console.log(\"Уровень сложности: medium\");\n    }\n    else if (document.querySelector('input[name=\"radio\"]:checked')\n        .value === \"hard\") {\n        (0,_components_gameScreen__WEBPACK_IMPORTED_MODULE_1__.renderGameScreen)(game, 18);\n        console.log(\"Уровень сложности: hard\");\n    }\n});\n\n\n//# sourceURL=webpack://game-dev/./src/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.ts");
/******/ 	
/******/ })()
;