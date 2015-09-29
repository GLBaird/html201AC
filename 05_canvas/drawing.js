var canvas = document.getElementById('drawing');
var ctx = canvas.getContext("2d");

// draw a simple line
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;

for(var i=0; i< 50; i++) {
  ctx.moveTo(10,i*10);
  ctx.lineTo(490,i*10);
}

ctx.stroke();
