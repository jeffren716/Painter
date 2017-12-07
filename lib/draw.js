let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let flag = false;

// let prevX = 0,
//   currX = 0,
//   prevY = 0,
//   currY = 0,
//   dot_flag = false;

let redoArray = new Array();
let undoArray = new Array();

let lineColor = 'black',
  brushSize = 5;
