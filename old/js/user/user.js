class User {

	// starting money and healt will be adjusted according to game difficulty
	constructor() {
		this.money = 1000;
		this.healt = 100;
		this.id = Math.round(Math.random()*100);


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

	domForMoney() {
		document.getElementById("money").innerHTML = this.money;
	}

	domForHealt() {
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


}