/* map in keypress listen */
window.addEventListener("keydown", function (event) {
	/* leave the hero */
	if (event.key === "Escape") {
        globalHeroImageSelected = null; /* selected hero not showing */
        mapOnTheHeroesConfigs = []; /* selected hero area not showing */
        heroSkillsHide(); /* hero skills not showing */

    } else {
    	//console.log(mapOnTheHeroes);
    }
});


/* map in click listen */
canvas.addEventListener("click", function (event) {

	const rect = canvas.getBoundingClientRect();
	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;
	

	heroSkillsHide(); /* hero skills not showing */
	mapOnTheHeroesConfigs = [];	/* click outside area, delete area */

	for (iceman in icemans) {
		if (icemans[iceman].click(x, y)) {


			break;
		}
	}
	

	
});