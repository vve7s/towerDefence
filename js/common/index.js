canvas = document.getElementById("canvas");
context = canvas.getContext("2d");


var wall = document.getElementsByClassName("wall")[0];


function draw(e) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	//console.log(imgIceman);
	heroArea(imgIceman, e);
}


function heroArea(imgIceman, e) {
	console.log("e.pageY", e.pageY);
	console.log("e.clientY", e.clientY);
	console.log("e.layerY", e.layerY);
	console.log("e.offsetY", e.offsetY);
	console.log("e.movementY", e.movementY);
	console.log("e.screenY", e.screenY);
	console.log("e.y", e.y);
	context.drawImage(imgIceman, 0, 0, 50, 50, 10, 10, 25, 25);
	context.beginPath();
	//context.arc(e.layerX+14,e.layerY+14,50,0*Math.PI,2*Math.PI);
	//context.fillStyle=koyulurMu(e.layerX-10, e.layerY-10);;
	context.fill();
	
}