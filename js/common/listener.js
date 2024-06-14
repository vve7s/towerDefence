// dom is loaded
document.addEventListener("DOMContentLoaded", () => {
	
	start = new Start();
	lftd();


});


// chapter start
document.getElementById("start").addEventListener("click", () => {
	console.log("start basildi");


	// redBandanas = new redBandana();
	if (chapter.startStatus == false) {

		chapter.startStatus = true;
		chapter.next();
		return;

	} else {
		console.log("Round devam ediyor");
	}
	

});


// page is loaded
window.addEventListener("load", () => {
    document.getElementById("loader").classList.add('loaderNone');
    document.getElementById("loader").remove();

});


// mouse is clicked
// document.addEventListener("click", (event) => {
document.getElementById("canvas").addEventListener("click", (event) => {
	
	mapOnTheHeroesConfigs = []; // clear hero area
	heroSkillsHide(); // clear hero configs

	// let mousePos = getMousePos(canvas, event);
	console.log(`x: ${e.offsetX} - y: ${e.offsetY}`);

	if (!start.startStatus) { // game starting
		if (start.isInside(e.offsetX, e.offsetY)) { // clicked start
			buildingChapter();

		}
	}

	if (start.startStatus) { // game started
		if (selectedHero != null) {
			
			if (isitPut(e.offsetX, e.offsetY)) {
				console.log("x - y noktasina kahraman konuldu: ", e.offsetX, e.offsetY);
				if (user.deductMoney(selectedHero.getCost())) {
					putHeroesArray(e.offsetX, e.offsetY, selectedHero);
				} else {
					console.log("Paraniz yok!");
				}

			}

		}
	}


	mapOnTheHeroes.forEach(function(hero){
		// console.log(hero);
		hero.object.click(e.offsetX, e.offsetY);
	})

});


// mouse move listener - GLOBAL - important
document.getElementById("canvas").addEventListener("mousemove", (event) => {
	e = event;
});


// keyboard is listener
document.addEventListener("keyup", (key) => {
	if (key.keyCode == 27) { // esc

		selectedHero = null;
		mapOnTheHeroesConfigs = []; // clear hero area
		heroSkillsHide(); // clear hero configs


	}
});