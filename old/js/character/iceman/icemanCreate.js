class Iceman {
	
	/* hero upgrade information */
	heroUpgrade = {
		'1': {
			'area': {
				'img': 'img/character/iceman/skills/area1.png',
				'rate': 75,
				'cost': 100,
			},
			'fire': {
				'speed': 25,
			},
		},
		'2': {
			'area': {
				'img': 'img/character/iceman/skills/area2.png',
				'rate': 100,
				'cost': 200,
			},
			'fire': {
				'speed': 50,
			},
		},
		'3': {
			'area': {
				'img': 'img/character/iceman/skills/area3.png',
				'rate': 120,
				'cost': 300,
			},
			'fire': {
				'speed': 70,
			},	
		}
		
	}

	/* hero information */
	heroInformation = {
		'areaRateLevel': 0,
		'fireSpeedLevel': 0,
		'cost': 200, // $
		'area': 50,
		'fireSpeed': 25,
		'width': 50,
		'height': 50,
		'wh': 25,
		'ww': 10,
		'src': 'img/character/iceman/iceman_map_in_left.png',

	}

	constructor() {
		this.imgIcemanSpriteLeft = document.createElement("img");
		this.imgIcemanSpriteLeft.setAttribute("id", "imgIcemanSpriteLeft");
		this.imgIcemanSpriteLeft.setAttribute("src", this.heroInformation.src);
		this.imgIcemanSpriteLeft.setAttribute("width", this.heroInformation.width);
		this.imgIcemanSpriteLeft.setAttribute("height", this.heroInformation.height);
		this.imgIcemanSpriteLeft.setAttribute("wh", this.heroInformation.wh); // selected area
		this.imgIcemanSpriteLeft.setAttribute("ww", this.heroInformation.ww); // selected area
		this.imgIcemanSpriteLeft.setAttribute("area", this.heroInformation.area);
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


		/* check money */
		/*
		if (!user.checkMoney(this.heroInformation.cost))
			return 0;
		if (!user.deductMoney(this.heroInformation.cost))
			return 0;
		*/

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

	/* set to area */
	setArea() {


		/* Can the skill be upgraded? */
		if (this.areaIsUpgraded()) {
			if (user.checkMoney(this.heroUpgrade[this.heroInformation.areaRateLevel+1].area.cost)){ // check money
				if (user.deductMoney(this.heroUpgrade[this.heroInformation.areaRateLevel+1].area.cost)){ // buy the skill /+/ check money
					
					this.heroInformation.areaRateLevel++; // level up
					this.heroInformation.area = this.heroUpgrade[this.heroInformation.areaRateLevel].area.rate; // change to heroInformation in area
					this.imgIcemanSpriteLeft.setAttribute("area", this.heroInformation.area); // change to area
					this.getArea(); // refresh to area
					if (this.areaIsUpgraded()) {
						document.getElementById("skillArea").setAttribute("src", this.heroUpgrade[this.heroInformation.areaRateLevel+1].area.img); // change to img
					} else {
						document.getElementById("skillArea").remove();
					}
				}
			} else {
				console.log("Yetersiz Bakiye!");
			}
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

	getCost() {
		return this.heroInformation.cost;
	}

	/* skills of the hero */
	getSkills() {
		
		/* hero skils showing */
		if (this.areaIsUpgraded()) {
			this.heroSkillArea = document.createElement("img");
			this.heroSkillArea.setAttribute("id", "skillArea");
			this.heroSkillArea.setAttribute("src", this.heroUpgrade[this.heroInformation.areaRateLevel+1].area.img);
			this.heroSkillArea.setAttribute("width", "50");
			this.heroSkillArea.setAttribute("height", "50");
			this.heroSkillArea.setAttribute("onClick", "icemans[" + this.id + "].setArea()");
			
			heroSkills.appendChild(this.heroSkillArea);
		}
		
		/*
		return{
			setArea:1 // ne ise yaradigini hatirlamiyorum
		}
		*/
	}

	/* Can the skill be upgraded? */
	areaIsUpgraded() {
		if (typeof this.heroUpgrade[this.heroInformation.areaRateLevel+1] !== 'undefined')
			if (typeof this.heroUpgrade[this.heroInformation.areaRateLevel+1].area !== 'undefined')
				return true;
		return false;		
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


