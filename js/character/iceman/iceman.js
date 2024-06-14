class Iceman {

	/* hero upgrade information */
	heroUpgrade = {
		'1': {
			'area': {
				'img': 'img/character/iceman/skills/area1.png',
				'rate': 100,
				'cost': 100,
			},
			'fire': {
				'speed': 50,
			},
		},
		'2': {
			'area': {
				'img': 'img/character/iceman/skills/area2.png',
				'rate': 125,
				'cost': 200,
			},
			'fire': {
				'speed': 60,
			},
		},
		'3': {
			'area': {
				'img': 'img/character/iceman/skills/area3.png',
				'rate': 150,
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
		'area': 75,
		'fireSpeed': 25,
		'width': 31,
		'height': 50,
		// 'wh': 25,
		// 'ww': 10,
		'src': 'img/character/iceman/iceman_map_in_left.png',
		'live': 0,

	}

	constructor() {
		this.imgIcemanSprite = document.createElement("img");
		this.imgIcemanSprite.setAttribute("id", "imgIcemanSprite");
		this.imgIcemanSprite.setAttribute("src", this.heroInformation.src);
		this.imgIcemanSprite.setAttribute("width", this.heroInformation.width);
		this.imgIcemanSprite.setAttribute("height", this.heroInformation.height);
		// this.imgIcemanSprite.setAttribute("wh", this.heroInformation.wh); // selected area
		// this.imgIcemanSprite.setAttribute("ww", this.heroInformation.ww); // selected area
		this.imgIcemanSprite.setAttribute("area", this.heroInformation.area);
		/*
		console.log(this.imgIcemanSprite);
		this.imgIcemanSprite.onload = function(ths) {
			console.log(ths.imgIcemanSprite);
		};
		*/

	}

	create(xpoint, ypoint, x, y, id) {
		this.xpoint = xpoint;
		this.ypoint = ypoint;
		this.id = id;
		this.x = x;
		this.y = y;

		this.iw = 800;
		this.cx = this.x -40;
		this.cy = this.y -20;
		this.attackStatus = false;

		
		this.setMapOnTheHeroes(x, y); // puts the hero on the map
		this.setWrongPlaces(x, y); // adds a disabled place to the map

	}

	setMapOnTheHeroes(x, y) {
		mapOnTheHeroes[globalHeroID] = {
			status: 1,
			object: this,
			img: this.getObject(),
			imgX: 0,
			imgY: 0,
			imgW: this.getImageWidth(),
			imgH: this.getImageHeight(),
			// cnsX: (x - this.getW() * 3),
			// cnsY: (y - this.getH()),
			cnsX: x - (this.getImageWidth() / 2),
			cnsY: y - (this.getImageHeight() / 2),
			cnsW: this.getImageWidth(),
			cnsH: this.getImageHeight()
		};
	}

	setWrongPlaces(x, y) {
		/*
		wrongPlaces.push({
			imgWX: {
				start: x - this.getW() * 3,
				end: x + parseInt(this.getW() * 3)
			},
			imgWY: {
				start: y - this.getH() * 2,
				end: y + parseInt(this.getH() * 2)
			}
		});
		*/
		wrongPlaces.push({
			imgWX: {
				start: x - (this.getImageWidth()),
				end: x + (this.getImageWidth())
			},
			imgWY: {
				start: y - (this.getImageHeight()),
				end: y + (this.getImageHeight())
			}
		});
	}

	toString() {
		return this.xpoint + " " + this.ypoint;
	}

	setLive(flag) {
		this.heroInformation.src = flag == true ? 1 : 0;
	}

	getLive() {
		return  this.heroInformation.src == 1 ? true : false;
	}

	/*
	setW(w) {
		this.heroInformation.ww = w;
	}

	getW() {
		return this.heroInformation.ww;
	}

	setH(h) {
		this.heroInformation.wh = h;
	}

	getH() {
		return this.heroInformation.wh;
	}
	*/

	getImageWidth(divide) {
		if (divide) {
			return this.heroInformation.width / divide;
		}
		return this.heroInformation.width;
	}

	getImageHeight(divide) {
		if (divide) {
			return this.heroInformation.height / divide;
		}
		return this.heroInformation.height;
	}

	getSrc() {
		return this.heroInformation.src;
	}

	getObject() {
		return this.imgIcemanSprite;
	}

	click(x, y) {


		/* check money */
		/*
		if (!user.checkMoney(this.heroInformation.cost))
			return 0;
		if (!user.deductMoney(this.heroInformation.cost))
			return 0;
		*/

		console.log({
			x: x,			
			y: y,			
			"this.xpoint.start": this.xpoint.start - this.getImageWidth(2),			
			"this.xpoint.end": this.xpoint.end + this.getImageWidth(2),			
			"this.ypoint.start": this.ypoint.start - this.getImageHeight(2),			
			"this.ypoint.end": this.ypoint.end + this.getImageHeight(2),			
		})

		if (x > (this.xpoint.start - this.getImageWidth(2)) &&
		    x < (this.xpoint.end + this.getImageWidth(2)) &&
		    y > (this.ypoint.start - this.getImageHeight(2)) &&
		    y < (this.ypoint.end + this.getImageHeight(2))
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
			this.heroInformation.areaRateLevel++; // level up
			if (this.heroUpgrade[this.heroInformation.areaRateLevel]) {
				if (user.checkMoney(this.heroUpgrade[this.heroInformation.areaRateLevel].area.cost)) { // check money
					if (user.deductMoney(this.heroUpgrade[this.heroInformation.areaRateLevel].area.cost)) { // buy the skill /+/ check money
						
						// console.log("level buydu: " + this.heroInformation.areaRateLevel);
						// this.heroInformation.areaRateLevel++; // level up
						// console.log("level bu oldu: " + this.heroInformation.areaRateLevel);
						if (this.heroUpgrade[this.heroInformation.areaRateLevel]) {
							this.heroInformation.area = this.heroUpgrade[this.heroInformation.areaRateLevel].area.rate; // change to heroInformation in area
							this.imgIcemanSprite.setAttribute("area", this.heroInformation.area); // change to area
							this.getArea(); // refresh to area
							if (this.areaIsUpgraded()) {
								document.getElementById("skillArea").setAttribute("src", this.heroUpgrade[this.heroInformation.areaRateLevel+1].area.img); // change to img
								// this.heroInformation.areaRateLevel++; // level up
								
							} else {
								document.getElementById("skillArea").remove();
							}
						} else {
							console.error("Error code: 101");
						}
					}
				} else {
					console.log("Yetersiz Bakiye!");
				}
			} else {
				console.error("Error code: 102");
			}
		}


	}

	/* bring the area */
	getArea() {
		mapOnTheHeroesConfigs = [];
		mapOnTheHeroesConfigs.push({
			status: 1,
			x: (this.xpoint.start + this.xpoint.end) / 2,
			y: (this.ypoint.start + this.ypoint.end) / 2,
			area: this.imgIcemanSprite.getAttribute("area"),
			pi1: (0 * Math.PI),
			pi2: (2 * Math.PI)
		});
	}

	checkEnemyInArea() {
		for (let monster in chapter.monsters) {
			for (let i in chapter.monsters[monster]) {
				if (chapter.monsters[monster][i].getLive() == 1) {

					let point = Math.sqrt(Math.pow((chapter.monsters[monster][i].x - this.x), 2) + Math.pow((chapter.monsters[monster][i].y - this.y), 2));
					if (point > 0 && (point+20) <= this.imgIcemanSprite.getAttribute("area")) {
						// console.log("DUSMAN BULUNDU");
						// this.attack();
						this.attackStatus = true;
						this.attack(chapter.monsters[monster][i].getPosition());
						chapter.monsters[monster][i].kill();
						// delete chapter.monsters[monster][i];
					}
				}

			}
		}

		/*
		if (this.attackStatus) {
			this.attack();
		}
		*/

	}

	/*

		context.drawImage(
			value.img,
			value.imgX,
			value.imgY,
			value.imgW,
			value.imgH,
			value.cnsX,
			value.cnsY,
			value.cnsW,
			value.cnsH
		)

	*/

	attack(coordinat) {
		console.log(coordinat);
		console.log("x:>> " + this.cx + " y:>> " + this.cy);
		this.spriteMonsterImage = new Image();
		this.spriteMonsterImage.src = "../img/character/iceman/icemanv2_fire1.png";

		context.drawImage(
			this.spriteMonsterImage,
			this.iw,
			0,
			80,
			80,
			coordinat.x,
			coordinat.y,
			40,
			40
		);
        

        this.iw -= 80;
		if (this.iw <= 0) {
			this.iw = 800;
		}

        if (Math.abs(this.cx-coordinat.x) <= 10 && Math.abs(this.cy-coordinat.y) <= 10) {
			coordinat.x = this.cx -40;
			coordinat.y = this.cy -20;
        }

        if (coordinat.y < this.cy) {
            coordinat.y += 10;
        }
        if (coordinat.y > this.cy) {
            coordinat.y -= 10;
        }
        if (coordinat.x < this.cx) {
            coordinat.x += 10;
        }
        if (coordinat.x > this.cx) {
            coordinat.x -= 10;
        }


        context.restore(); 

		return;
		context.drawImage(
			this.spriteMonsterImage,
			this.iw,
			0,
			80,
			80,
			this.cw,
			this.cy,
			40,
			40
		);

		this.cw -= 10;
		if (this.x - this.cw >= this.heroInformation.area) {
			this.cw = this.x -40;
		}

		this.iw -= 80;
		if (this.iw <= 0) {
			this.iw = 800;
		}

	}

	stop() {
		this.attackStatus = false;
	}

	getAttributeArea() {
		return this.heroInformation.area;
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
			this.heroSkillArea.setAttribute("onClick", "heroChangeSkills(" + this.id + ")");
			//this.heroSkillArea.setAttribute("onClick", "icemans[" + this.id + "].setArea()");
			heroSkills.appendChild(this.heroSkillArea);
		}
		
	}

	/* Can the skill be upgraded? */
	areaIsUpgraded() {
		if (typeof this.heroUpgrade[this.heroInformation.areaRateLevel+1] !== 'undefined')
			if (typeof this.heroUpgrade[this.heroInformation.areaRateLevel+1].area !== 'undefined')
				return true;
		return false;
	}



}





