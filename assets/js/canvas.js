var bubblesCanvas = document.getElementById("canvas-bubbles");
var bubblesCtx = bubblesCanvas.getContext("2d");
var BUBBLES_MAX_HEIGHT = 300;

var wavesCanvas = document.getElementById("canvas-waves");
var wavesCtx = wavesCanvas.getContext("2d");
var WAVES_MAX_HEIGHT = 30;

window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas () {
	bubblesCtx.canvas.width  = window.innerWidth;
	bubblesCtx.canvas.height = BUBBLES_MAX_HEIGHT;
	//bubblesCtx.canvas.height = window.innerHeight;	

	wavesCtx.canvas.width  = window.innerWidth;
	wavesCtx.canvas.height = WAVES_MAX_HEIGHT;

	drawBubbles(bubblesCtx.canvas.width);
	drawWaves(wavesCtx.canvas.width);
}
resizeCanvas();

function drawWaves(maxWidth){
	// olas
	wavesCtx.fillStyle = '#CCC';
	wavesCtx.beginPath();
	wavesCtx.moveTo(0, 0);
	wavesCtx.quadraticCurveTo(50, 30, 100, 15);
	wavesCtx.quadraticCurveTo(150, 30, 200, 15);
	wavesCtx.quadraticCurveTo(250, 0, 300, 15);
	wavesCtx.quadraticCurveTo(350, 30, 400, 15);
	wavesCtx.quadraticCurveTo(450, 0, 500, 15);
	wavesCtx.quadraticCurveTo(600, 30, 700, 0);
	wavesCtx.quadraticCurveTo(800, 30, 900, 20);
	wavesCtx.quadraticCurveTo(1000, 0, 1100, 0);
	wavesCtx.quadraticCurveTo(1150, 0, 1200, 15);
	//wavesCtx.quadraticCurveTo(175, 102, 200, 100);
	//wavesCtx.quadraticCurveTo(250, 90, 300, 100);
	//wavesCtx.quadraticCurveTo(500, 150, 600, 100);
	//wavesCtx.quadraticCurveTo(800, 25, 1000, 100);
	//wavesCtx.quadraticCurveTo(1100, 125, 1200, 100);

	var w = (maxWidth >= 1350 )? maxWidth : 1350;
	wavesCtx.quadraticCurveTo((1200 + w)/2, 30, w, 15);
	
	// mar
	wavesCtx.lineTo(w, WAVES_MAX_HEIGHT);
	wavesCtx.lineTo(0, WAVES_MAX_HEIGHT);
	wavesCtx.closePath();
	wavesCtx.fill();
}

function drawBubbles(maxWidth){
	// olas
	bubblesCtx.fillStyle = '#333';
	bubblesCtx.beginPath();
	bubblesCtx.moveTo(0, 0);
	bubblesCtx.quadraticCurveTo(10, 90, 150, 100);
	bubblesCtx.quadraticCurveTo(175, 102, 200, 100);
	bubblesCtx.quadraticCurveTo(250, 90, 300, 100);
	bubblesCtx.quadraticCurveTo(500, 150, 600, 100);
	bubblesCtx.quadraticCurveTo(800, 25, 1000, 100);
	bubblesCtx.quadraticCurveTo(1100, 125, 1200, 100);

	var w = (maxWidth >= 1350 )? maxWidth : 1350;
	bubblesCtx.quadraticCurveTo((1200 + w)/2, 75, w, 100);
	
	// mar
	bubblesCtx.lineTo(w, BUBBLES_MAX_HEIGHT);
	bubblesCtx.lineTo(0, BUBBLES_MAX_HEIGHT);
	bubblesCtx.closePath();
	bubblesCtx.fill();

	// burbujas
	burbuja(108, 92, 6, false);
	burbuja(160, 75, 20);
	burbuja(140, 100, 25);
	burbuja(170, 102, 18);
	burbuja(170, 25, 20, true, true);
	
	burbujaSaliendo(520, 115, 10, false);
	burbuja(530, 70, 5, false);

	burbuja(900, 65, 5, false);

	burbujaSaliendo(1120, 100, 15, true);
	burbuja(1140, 45, 15, true, true);
}


function burbuja(x, y, r, luz, inclinado){
	luz = typeof luz !== 'undefined' ? luz : true;
	inclinado = typeof inclinado !== 'undefined' ? inclinado : false;

	bubblesCtx.fillStyle = '#333';
	bubblesCtx.beginPath();
	bubblesCtx.arc(x, y, r, 0.0*Math.PI, 2.0*Math.PI);
	bubblesCtx.closePath();
	bubblesCtx.fill();

	if (luz){
		bubblesCtx.fillStyle = '#fff';
		bubblesCtx.beginPath();
		
		if (inclinado){
			bubblesCtx.arc(x, y, r-2, 1.375*Math.PI, 1.875*Math.PI);
			bubblesCtx.arc(x, y, r-4, 1.875*Math.PI, 1.375*Math.PI, true);
		} else {
			bubblesCtx.arc(x, y, r-2, 1.25*Math.PI, 1.75*Math.PI);
			bubblesCtx.arc(x, y, r-4, 1.75*Math.PI, 1.25*Math.PI, true);
		}
		bubblesCtx.closePath();
		bubblesCtx.fill();
	}
}

function burbujaSaliendo(x, y, r, luz, inclinado){
	luz = typeof luz !== 'undefined' ? luz : true;
	inclinado = typeof inclinado !== 'undefined' ? inclinado : false;

	bubblesCtx.fillStyle = '#333';
	bubblesCtx.beginPath();
	bubblesCtx.moveTo(x-2*r, y+r);
	bubblesCtx.quadraticCurveTo(x-r, y+r, x-r, y);
	bubblesCtx.lineTo(x+r, y);
	bubblesCtx.quadraticCurveTo(x+r, y+r, x+2*r, y+r);
	bubblesCtx.lineTo(x-2*r, y+r);
	bubblesCtx.closePath();
	bubblesCtx.fill();

	burbuja(x, y, r, luz, inclinado);
}




