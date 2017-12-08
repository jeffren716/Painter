let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let paint = false;

let prevX = 0,
  currX = 0,
  prevY = 0,
  currY = 0,
  dot_paint = false;

let lineColor = 'black',
  brushSize = 5;

let line = [];

// function init() {
//   canvas.addEventListener('mousemove', (event) => {
//     draw('move', event);
//   }, false);
//   canvas.addEventListener('mousedown', (event) => {
//     draw('down', event);
//   }, false);
//   canvas.addEventListener('mouseup', (event) => {
//     draw('up', event);
//   }, false);
//   canvas.addEventListener('mouseout', (event) => {
//     draw('out ', event);
//   }, false);
//
// }

// Pen
canvas.onmousedown = event => {
  paint = true;
  ctx.lineWidth = brushSize;
  ctx.lineJoin = 'round';
  ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
};

canvas.onmousemove = event => {
  if (paint) {
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
  }
};

canvas.onmouseup = () => {
  paint = false;
};

// Spray paint
canvas.onmousedown = event => {
  paint = true;
  ctx.lineWidth = brushSize;
  ctx.lineJoin = 'round';
  ctx.shadowBlur = 10;
  ctx.shadowColor = lineColor;
  ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
};

canvas.ontouchstart = event => {
  paint = true;
  ctx.lineWidth = brushSize;
  ctx.lineJoin = 'round';
  ctx.shadowBlur = 10;
  ctx.shadowColor = lineColor;
  ctx.moveTo(event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
};

canvas.onmousemove = event => {
  if (paint) {
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
  }
};

canvas.ontouchmove = event => {
  if (paint) {
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

// Chisel
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

function handleColorClick(event) {
  lineColor = (event.target.class);
}

document.getElementById('black')

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
// // function erase() {
// //   let message = confirm('Want to clear?');
// //   if (message) {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   }
// // }
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
