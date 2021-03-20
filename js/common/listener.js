/* map in keypress listen */
window.addEventListener("keydown", function (event) {
	/* leave the hero */
	if (event.key === "Escape") {
        globalHeroImageSelected = null; /* selected hero not showing */
        mapOnTheHeroesConfigs = []; /* selected hero area not showing */
        while (heroSkills.firstChild) {
        	heroSkills.removeChild(heroSkills.firstChild); /* hero skills not showing */
        }
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

			heroSkillArea = document.createElement("img");
			heroSkillArea.setAttribute("id", "skillArea");
			heroSkillArea.setAttribute("src", "img/character/iceman/skills/area.png");
			heroSkillArea.setAttribute("width", "50");
			heroSkillArea.setAttribute("height", "50");
			heroSkills.appendChild(heroSkillArea);

			break;
		}
	}
	
	
});