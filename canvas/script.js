const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let x = 125;
let y = 100;
let radius = 3;
let startAngle = 0;
let endAngle = 360;
let anticlockwise = false;
let directionX = true;
let directionY = true;
let ballColor = '#000'; // black
let speed = 5;

const canvasBeginX = 0;
const canvasBeginY = 0;
const canvasEndX = 320;
const canvasEndY = 200;
const opacityMask = 'rgba(255, 255, 255, 0.1)'

setInterval(drawLoop, 50);

function drawLoop() {
  // to clear: draw a white ball on a previos position
  // ctx.beginPath();
  // ctx.arc(x, y, 4, 0, 360, false);
  // ctx.closePath();
  // ctx.fillStyle = '#fff';
  // ctx.fill();
  
  // to fade: put on screen opacity mask 0.1
  ctx.fillStyle = opacityMask;
  ctx.fillRect(canvasBeginX, canvasBeginY, canvasEndX, canvasEndY);
  
  (directionX) ? x += speed : x -= speed;
  (directionY) ? y += speed : y -= speed;
  if (x >= canvasEndX || x <= canvasBeginX) {
    directionX = !directionX;
  }
  if (y >= canvasEndY || y <= canvasBeginY) {
    directionY = !directionY;
  }
  
  // draw a ball on a new position
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  ctx.closePath();
  ctx.fillStyle = ballColor;
  ctx.fill();
}