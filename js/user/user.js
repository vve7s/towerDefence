class User {

	// starting money and healt will be adjusted according to game difficulty
	constructor() {
		this.money = 9999;
		this.healt = 100;
		this.id = Math.round(Math.random() * 100);
		this.wall = ['iceman'];
		this.chapter = null;
		this.domForMoney();
		this.domForHealt();
		document.getElementsByClassName("columnRight")[0].style.display = "inline";

	}

	setMoney(value) {
		this.money = value;
	}

	getMoney() {
		return this.money;
	}

	/* reduce the user's money */
	deductMoney(value) {
		if (this.checkMoney(value)) {
			this.setMoney(this.money - value);
			this.domForMoney();
			return true;
		} else {
			return false;
		}
	}

	setHealt(value) {
		this.healt = value;
	}

	getHealt() {
		return this.healt;
	}

	damage(damage) {
		this.healt = this.healt - damage;
		console.log("HEALT :>> " + this.healt);
		this.domForHealt();
		if (this.healt <= 0) {
			console.log("END GAME - YOU LOSE");
			chapter.startStatus = false;
		}
	}

	domForMoney() {
		document.getElementById("money").innerHTML = this.money;
	}

	domForHealt() {
		console.log("DOM :>> " + this.healt);
		document.getElementById("healt").innerHTML = this.healt;
	}

	toJson() {
		return {
			'id': this.id,
			'money': this.money,
			'healt': this.healt
		}
	}

	getId() {
		return this.id;
	}

	/* check user money */
	checkMoney(value) {
		return value <= this.money ? true : false;
	}

	// get wall in character
	getWallCharacter() {
		this.wall.forEach((value) => {

			let temp = document.createElement("img");
			temp.setAttribute("id", value);
			temp.setAttribute("src", "img/character/" + value + "/" + value + "_wall.png");
			temp.setAttribute("width", "50");
			temp.setAttribute("height", "50");
			temp.setAttribute("onclick", "imageSelect(this)");

			/* add the hero to the wall */
			wall.appendChild(temp);
		});

	}

	// add wall in character
	addWallCharacter(character) {
		this.wall.push(character);
	}


}