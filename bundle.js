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

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let flag = false;

let prevX = 0,
  currX = 0,
  prevY = 0,
  currY = 0,
  dot_flag = false;

let lineColor = 'black',
  brushSize = 5;

function init() {
  console.log('hel');
  canvas.addEventListener('mousemove', (event) => {
    findxy('move', event);
  }, false);
  canvas.addEventListener('mousedown', (event) => {
    findxy('down', event);
  }, false);
  canvas.addEventListener('mouseup', (event) => {
    findxy('up', event);
  }, false);
  canvas.addEventListener('mouseout', (event) => {
    findxy('out ', event);
  }, false);

}

function color(obj) {
  switch (obj.id) {
  case 'green':
    lineColor = 'green';
    break;
  case 'blue':
    lineColor = 'blue';
    break;
  case 'white':
    lineColor = 'white';
    break;
  default:
    lineColor = 'black';
    break;

  }

  if (lineColor == 'white') {
    brushSize = 14;
  } else {
    brushSize = 5;
  }
}

function draw() {
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = brushSize;
  ctx.stroke();
  ctx.closePath();
}

function erase() {
  let message = confirm('Want to clear?');
  if (message) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function findxy(res, event) {
  if (res == 'down') {
    prevX = currX;
    prevY = currY;
    currX = event.clientX - canvas.offsetLeft;
    currY = event.clientY - canvas.offsetTop;

    flag = true;
    dot_flag = true;
    if (dot_flag) {
      ctx.beginPath();
      ctx.fillStyle = lineColor;
      ctx.fillRect(currX, currY, 2, 2);
      ctx.closePath();
      dot_flag = false;
    }
  }
  if (res == 'up' || res == 'out') {
    flag = false;
  }
  if (res == 'move') {
    if (flag) {
      prevX = currX;
      prevY = currY;
      currX = event.clientX - canvas.offsetLeft;
      currY = event.clientY - canvas.offsetTop;
      draw();
    }
  }
}

init();


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map