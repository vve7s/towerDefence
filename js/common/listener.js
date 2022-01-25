document.addEventListener("DOMContentLoaded", () => {
	
	lftd();

	start = new Start();

});


window.addEventListener("load", () => {
    document.getElementById("loader").classList.add('loaderNone');


});


document.addEventListener("click", (event) => {
	let mousePos = getMousePos(canvas, event);
	console.log(mousePos);

	if (!start.startStatus) {
		if (start.isInside(mousePos)) {
			console.log("START clicked!")
			start.startStatus = true;
		}
	}

});
