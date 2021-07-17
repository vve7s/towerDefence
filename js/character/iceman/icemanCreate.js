class Iceman {
	
	heroConfig = {
		areaIncreaseRate = 25;
		
	}

	constructor() {
		this.imgIcemanSpriteLeft = document.createElement("img");
		this.imgIcemanSpriteLeft.setAttribute("id", "imgIcemanSpriteLeft");
		this.imgIcemanSpriteLeft.setAttribute("src", "img/character/iceman/iceman_map_in_left.png");
		this.imgIcemanSpriteLeft.setAttribute("width", "50");
		this.imgIcemanSpriteLeft.setAttribute("height", "50");
		this.imgIcemanSpriteLeft.setAttribute("wh", "25");
		this.imgIcemanSpriteLeft.setAttribute("ww", "10");
		this.imgIcemanSpriteLeft.setAttribute("area", "75");
	}

	create(xpoint, ypoint, id) {
		this.xpoint = xpoint;
		this.ypoint = ypoint;
		this.id = id;
	}

	toString() {
		return this.xpoint + " " + this.ypoint;
	}

	moveLeft() {
		return this.imgIcemanSpriteLeft;
	}

	click(x, y) {
		if (x>this.xpoint.start &&
		    x<this.xpoint.end &&
		    y>this.ypoint.start &&
		    y<this.ypoint.end
		   ) {
		   	console.log('id: ' + this.id + ' kahraman');
			this.getArea();	/* showing the hero's area */
			this.getSkills(); /*showing the hero's skills */
			return true;
		} else {
			return false;
		}
	}

	/* bring the area */
	getArea() {
		mapOnTheHeroesConfigs = [];
		mapOnTheHeroesConfigs.push({
			status: 1,
			x: (this.xpoint.start+this.xpoint.end)/2,
			y: (this.ypoint.start+this.ypoint.end)/2,
			area: this.imgIcemanSpriteLeft.getAttribute("area"),
			pi1: (0*Math.PI),
			pi2: (2*Math.PI)
		});
	}

	getId() {
		return this.id;
	}

	/* skills of the hero */
	getSkills() {
		
		/* hero skilss showing */
		this.heroSkillArea = document.createElement("img");
		this.heroSkillArea.setAttribute("id", "skillArea");
		this.heroSkillArea.setAttribute("src", "img/character/iceman/skills/area.png");
		this.heroSkillArea.setAttribute("width", "50");
		this.heroSkillArea.setAttribute("height", "50");
		//this.heroSkillArea.setAttribute("onClick", "setArea(" + this.getId() + ")");
		this.heroSkillArea.setAttribute("onClick", "icemans[" + this.id + "].setArea(" + 250 + ")");
		
		heroSkills.appendChild(this.heroSkillArea);
		
		/*
		return{
			setArea:1 // ne ise yaradigini hatirlamiyorum
		}
		*/
		
	}

	setArea(areaPoint) {
		console.log(this.areaIncreaseRate)
		this.imgIcemanSpriteLeft.setAttribute("area", areaPoint);
		this.getArea(); // refresh to area
	}

}


/* wall in hero */
var imgIceman = document.createElement("img");
imgIceman.setAttribute("id", "imgIceman");
imgIceman.setAttribute("src", "img/character/iceman/iceman_wall.png");
imgIceman.setAttribute("width", "50");
imgIceman.setAttribute("height", "50");
imgIceman.setAttribute("onclick", "imageSelect(this)");


/* add the hero to the wall */
wall.appendChild(imgIceman);


