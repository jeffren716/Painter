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
let paint = false;

let prevX = 0,
  currX = 0,
  prevY = 0,
  currY = 0,
  dot_paint = false;

let lineColor = 'black',
  brushSize = 3;

let line = [];

const colorButton = document.getElementsByClassName('colorButton');
for (var i = 0; i < colorButton.length; i++) {
  colorButton.item(i).onclick = event => {
    lineColor = event.target.id;
  };
}

const sizeButton = document.getElementsByClassName('sizeButton');
for (var i = 0; i < sizeButton.length; i++) {
  sizeButton.item(i).onclick = event => {
    brushSize = parseInt(event.target.id);
  }
}

const eraseButton = document.getElementById('white')
eraseButton.onclick = event => {
  lineColor = 'white';
  canvas.onmousedown = event => {
    paint = true;
    ctx.lineWidth = brushSize;
    ctx.lineJoin = 'round';
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  };

  canvas.onmousemove = event => {
    if (paint) {
      ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      ctx.strokeStyle = lineColor;
      ctx.stroke();
    }
  };

  canvas.onmouseup = () => {
    paint = false;
  };

}

// const penButton = document.getElementById('pen');
// penButton.onclick = () => {
//   pen();
// }
//
// const sprayButton = document.getElementById('spray');
// sprayButton.onclick = () => {
//   sprayPaint();
// }

chisel();

const chiselButton = document.getElementById('chisel');
chiselButton.onclick = () => {
  chisel();
}

const webButton = document.getElementById('web');
webButton.onclick = () => {
  spiderWeb();
}

function pen() {
  canvas.onmousedown = event => {
    paint = true;
    ctx.lineWidth = brushSize;
    ctx.lineJoin = 'round';
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  };

  canvas.ontouchstart = event => {
    paint = true;
    ctx.lineWidth = brushSize;
    ctx.lineJoin = 'round';
    ctx.moveTo(event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
  };

  canvas.onmousemove = event => {
    if (paint) {
      ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      ctx.strokeStyle = lineColor;
      ctx.stroke();
    }
  };

  canvas.ontouchmove = event => {
    if (paint) {
      ctx.lineTo(event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
      ctx.strokeStyle = lineColor;
      ctx.stroke();
    }
  };

  canvas.onmouseup = () => {
    paint = false;
  };

  canvas.ontouchend = () => {
    paint = false;
  };
}

function sprayPaint() {
  canvas.onmousedown = event => {
    paint = true;
  };

  canvas.ontouchstart = event => {
    paint = true;
  };

  canvas.onmousemove = event => {
    if (paint) {
      ctx.lineWidth = brushSize;
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 10;
      ctx.shadowColor = lineColor;
      ctx.moveTo(event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
      ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      ctx.strokeStyle = lineColor;
      ctx.stroke();
    }
  };

  canvas.ontouchmove = event => {
    if (paint) {
      ctx.lineWidth = brushSize;
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 10;
      ctx.shadowColor = lineColor;
      ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      ctx.lineTo(event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
      ctx.stroke();
    }
  };

  canvas.onmouseup = () => {
    paint = false;
  };

  canvas.ontouchend = () => {
    paint = false;
  };
}

function chisel() {
  canvas.onmousedown = event => {
    paint = true;
    line = [event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop];
  };

  canvas.ontouchstart = event => {
    paint = true;
    line = [event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop];
  };

  canvas.onmousemove = event => {
    if (paint) {
      ctx.beginPath();

      for (var i = -brushSize; i < brushSize; i++) {
        ctx.moveTo(line[0] + i, line[1] + i);
        ctx.lineTo(event.clientX + i - canvas.offsetLeft, event.clientY + i - canvas.offsetTop);
        ctx.strokeStyle = lineColor;
        ctx.stroke();
      }

      line = [event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop];
    }
  };

  canvas.ontouchmove = event => {
    if (paint) {
      ctx.beginPath();


      for (var i = -brushSize; i < brushSize; i++) {
        ctx.moveTo(line[0] + i, line[1] + i);
        ctx.lineTo(event.touches[0].clientX + i - canvas.offsetLeft, event.touches[0].clientY + i - canvas.offsetTop);
        ctx.strokeStyle = lineColor;
        ctx.stroke();
      }

      line = [event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop];
    }
  };

  canvas.onmouseup = () => {
    paint = false;
  };

  canvas.ontouchend = () => {
    paint = false;
  };
}

function spiderWeb() {
  canvas.onmousedown = event => {
    line = [];
    paint = true;
    line.push({ x: event.clientX - canvas.offsetLeft, y: event.clientY - canvas.offsetTop });
  };

  canvas.ontouchstart = event => {
    line = [];
    paint = true;
    line.push({ x: event.touches[0].clientX - canvas.offsetLeft, y: event.touches[0].clientY - canvas.offsetTop });
  };

  canvas.onmousemove = event => {
    if (paint) {
      line.push({ x: event.clientX - canvas.offsetLeft, y: event.clientY - canvas.offsetTop });

      ctx.beginPath();
      ctx.moveTo(line[line.length - 2].x, line[line.length - 2].y);
      ctx.lineTo(line[line.length - 1].x, line[line.length - 1].y);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      for (var i = 0; i < line.length; i++) {
        let dx = line[i].x - line[line.length - 1].x;
        let dy = line[i].y - line[line.length - 1].y;
        let d = (dx ** 2) + (dy ** 2);

        if (d < 5000) {
          ctx.beginPath();
          ctx.strokeStyle = lineColor;
          ctx.moveTo(line[line.length - 1].x + (dx * 0.2), line[line.length - 1].y + (dy * 0.2));
          ctx.lineTo(line[i].x - (dx * (brushSize / 10)), line[i].y - (dy * (brushSize / 10)));
          ctx.stroke();
        }

      }
    }
  };

  canvas.ontouchmove = event => {
    if (paint) {
      line.push({ x: event.touches[0].clientX - canvas.offsetLeft, y: event.touches[0].clientY - canvas.offsetTop });

      ctx.beginPath();
      ctx.moveTo(line[line.length - 2].x, line[line.length - 2].y);
      ctx.lineTo(line[line.length - 1].x, line[line.length - 1].y);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      for (var i = 0; i < line.length; i++) {
        let dx = line[i].x - line[line.length - 1].x;
        let dy = line[i].y - line[line.length - 1].y;
        let d = (dx ** 2) + (dy ** 2);

        if (d < 1000) {
          ctx.beginPath();
          ctx.strokeStyle = lineColor;
          ctx.moveTo(line[line.length - 1].x + (dx * 0.2), line[line.length - 1].y + (dy * 0.2));
          ctx.lineTo(line[i].x - (dx * 0.2), line[i].y - (dy * 0.2));
          ctx.stroke();
        }

      }
    }

  };

  canvas.onmouseup = () => {
    paint = false;
    line = [];
  };

  canvas.ontouchend = () => {
    paint = false;
    line = [];
  };
}
//
// function fill(event) {
//   let dx = currX - prevX;
//   let dy = currY - prevY;
//
//   let signX = (dx === 0 ? 0 : dx/Math.abs(dx));
//   let signY = (dy === 0 ? 0 : dy/Math.abs(dy));
//   let growth = (Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy));
//   let restraint = (Math.abs(dx) > Math.abs(dy) ? Math.abs(dy) : Math.abs(dx));
//   let greater = (growth === Math.abs(dx) ? 'x' : 'y');
//   let slope = (growth / (restraint === 0 ? 1 : restraint));
//
//   let drawX = prevX;
//   let drawY = prevY;
//   let moveX = prevX;
//   let moveY = prevY;
//   for (var i = 0; i < growth; i++) {
//     if (greater === 'x') {
//       moveY += signY / slope;
//       drawY = Math.floor(moveY);
//       drawX += signX;
//     } else {
//       moveX += signX / slope;
//       drawX = Math.floor(moveX);
//       drawY += signY;
//     }
//
//     draw('fill', event, drawX, drawY);
//   }
//
// }
//
// function erase() {
//   let message = confirm('Want to clear?');
//   if (message) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   }
// }
//
// function draw(res, event, drawX, drawY) {
//   if (res == 'down') {
//     prevX = currX;
//     prevY = currY;
//     currX = event.clientX - canvas.offsetLeft;
//     currY = event.clientY - canvas.offsetTop;
//
//     paint = true;
//     dot_paint = true;
//
//     if (event.button == 0) {
//       lineColor = 'black';
//       brushSize = 5;
//     }
//
//     if (event.button == 2) {
//       lineColor = 'white';
//       brushSize = 24;
//     }
//     if (dot_paint) {
//       ctx.beginPath();
//       ctx.fillStyle = lineColor;
//       ctx.arc(currX, currY, brushSize, 0, Math.PI*2);
//       ctx.fill();
//       ctx.closePath();
//       dot_paint = false;
//     }
//   }
//   if (res == 'up' || res == 'out') {
//     paint = false;
//   }
//   if (res == 'move') {
//     if (paint) {
//       prevX = currX;
//       prevY = currY;
//       currX = event.clientX - canvas.offsetLeft;
//       currY = event.clientY - canvas.offsetTop;
//       fill(event);
//     }
//   }
//   if (res == 'fill') {
//     ctx.beginPath();
//     ctx.fillStyle = lineColor;
//     ctx.arc(drawX, drawY, brushSize, 0, Math.PI*2);
//     ctx.fill();
//     ctx.closePath();
//   }
// }
//
// init();


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map