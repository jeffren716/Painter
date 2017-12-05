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

export const init = () => {
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

};

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
