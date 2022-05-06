class Chapter1 {

	/* chapter information */
	chapterInformation = {

	};

	monsters = {
		'redBandana': {},
		'blueBandana': {}
	};

	constructor() {
		this.startStatus = false;
		canvas.style.backgroundImage = "url('img/map/chapter1.png')"; // background image
	}

	/* map in wrong places */
	getWrongPlaces() {
		/* rock */
		wrongPlaces.push({
			imgWX: {
				start: 40,
				end: 125
			},
			imgWY: {
				start: 90,
				end: 170
			}
		});


		/* rock */
		wrongPlaces.push({
			imgWX: {
				start: 465,
				end: 545
			},
			imgWY: {
				start: 165,
				end: 250
			}
		});


		/* path */
		wrongPlaces.push(
			{
				imgWX: {
					start: 0,
					end: 172
				},
				imgWY: {
					start: 270,
					end: 370
				}
			},
			{
				imgWX: {
					start: 92,
					end: 172
				},
				imgWY: {
					start: 88,
					end: 370
				}
			},
			{
				imgWX: {
					start: 92,
					end: 335
				},
				imgWY: {
					start: 88,
					end: 188
				}
			},
			{
				imgWX: {
					start: 255,
					end: 335
				},
				imgWY: {
					start: 88,
					end: 430
				}
			},
			{
				imgWX: {
					start: 255,
					end: 545
				},
				imgWY: {
					start: 335,
					end: 430
				}
			},
			{
				imgWX: {
					start: 465,
					end: 545
				},
				imgWY: {
					start: 215,
					end: 430
				}
			},
			{
				imgWX: {
					start: 465,
					end: 800
				},
				imgWY: {
					start: 215,
					end: 315
				}
			}
		);
	}

	/* just for test */
	getMapLines() {
		/* map line */
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = "blue";
		context.lineJoin = "round";

		context.moveTo(0,330);
		context.lineTo(132,330);
		context.lineTo(132,148);
		context.lineTo(295,148);
		context.lineTo(295,390);
		context.lineTo(505,390);
		context.lineTo(505,270);
		context.lineTo(800,270);

		context.stroke();

		/* map line */
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = "red";
		context.lineJoin = "round";

		context.moveTo(0,370);
		context.lineTo(172,370);
		context.lineTo(172,188);
		context.lineTo(255,188);
		context.lineTo(255,435);
		context.lineTo(545,435);
		context.lineTo(545,310);
		context.lineTo(800,310);

		context.stroke();


		/* map line */
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = "yellow";
		context.lineJoin = "round";

		context.moveTo(0,270);
		context.lineTo(92,270);
		context.lineTo(92,88);
		context.lineTo(335,88);
		context.lineTo(335,335);
		context.lineTo(465,335);
		context.lineTo(465,215);
		context.lineTo(800,215);

		context.stroke();
	}

	low() {
		this.chapterInformation = {
			'totalRound': 15,
			'roundSpeed': 10,
			'round': 0,
			'rounds': {
				1:{
					'redBandana': 10,
					// 'blueBandana': 11,

				},
				2:{
					'redBandana': 20,
					// 'blueBandana': 21,

				},
				3:{
					'redBandana': 30,
					// 'blueBandana': 31,

				},
				4:{
					'redBandana': 40,
					// 'blueBandana': 41,

				},
				5:{
					'redBandana': 50,
					// 'blueBandana': 51,

				}
			}

		}
		//return this.chapterInformation;
	}

	medium() {

	}

	high() {

	}

	next() {
		let tempTime = 0;
		if (this.chapterInformation.rounds[++this.chapterInformation.round]) {
			console.log(this.chapterInformation.rounds[this.chapterInformation.round]);

			for (let monster in this.chapterInformation.rounds[this.chapterInformation.round]) {
				console.log(monster);
				// console.log(this.chapterInformation.rounds[this.chapterInformation.round][monster]);
				for (let i = 0; i < this.chapterInformation.rounds[this.chapterInformation.round][monster]; i++) {
					tempTime += 25;
					this.monsters[monster][i] =  eval("new "+ monster + "(" + 0 + "," + (330 - tempTime) + ")");
					//console.log(i);

				}

			}

			//this.redBandanas[1] = new redBandana();
			console.log(this.monsters);
			//console.log(this.redBandanas[1].redBandanaInformation);


		} else {
			console.log("CHAPTER BITTI");	
		}
	}


}

