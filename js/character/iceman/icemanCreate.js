class Iceman {
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
		   	console.log(this.id);
			this.getArea();	/* showing the hero's area */
			this.getSkills();
			return true;
		} else {
			return false;
		}
	}

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

	/* skills of the hero */
	getSkills() {
		
		return{
			setArea:1
		}
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


