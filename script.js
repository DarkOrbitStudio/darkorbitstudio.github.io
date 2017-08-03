var canvas = document.getElementById("bgCanvas");
var ctx = canvas.getContext("2d");
window.addEventListener("resize", resizeCanvas, false);
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawStuff();
}
resizeCanvas();

function drawStuff() {
  var colors = [
    "#ff8a80",
    "#ff80ab",
    "#ea80fc",
    "#b388ff",
    "#8c9eff",
    "#82b1ff",
    "#80d8ff",
    "#84ffff",
    "#a7ffeb",
    "#b9f6ca",
    "#ccff90",
    "#f4ff81",
    "#ffff8d",
    "#ffe57f",
    "#ffd180",
    "#ff9e80"
  ];
  var size = 5;
  var padding = size * 2;
  for (var i = 0; i <= parseInt(canvas.height / padding); i++) {
    for (var j = 0; j <= parseInt(canvas.width / padding); j++) {
      switch (Math.floor(Math.random() * 4 + 1)) {
        case 1:
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length + 1)];
          ctx.fillRect(padding * j, padding * i, size, size);
          break;
        case 2:
          break;
        case 3:
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length + 1)];
          ctx.fillRect(padding * j, padding * i, size, size);
          break;
        case 4:
          break;
        default:
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length + 1)];
          ctx.fillRect(padding * j, padding * i, size, size);
      }
    }
  }
}
