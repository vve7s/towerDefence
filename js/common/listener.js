/* map in keypress listen */
window.addEventListener("keydown", function (event) {
	/* leave the hero */
	if (event.key === "Escape") {
        globalHeroImageSelected = null;
        console.log(icemans)

    } else {
    	//console.log(mapOnTheHeroes);
    }
});


/* map in click listen */
window.addEventListener("click", function (event) {
	const rect = canvas.getBoundingClientRect();
	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;
	
	
	for (iceman in icemans) {
		if (icemans[iceman].click(x, y)) {
			break;
		}
	}
	
	
});