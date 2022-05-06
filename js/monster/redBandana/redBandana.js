class redBandana {


	redBandanaInformation = {
		'healt': 100,
		'speed': 10,
		'live': 1 
	};

	constructor(x, y) {
		this.spriteMonsterImage = new Image();
		this.spriteMonsterImage.src = "img/monsters/redBandana/redBandana.png";
		
		this.counter = 0;
		this.w = 0;
		this.h = 60;
		this.x = x;
		this.y = y;
	}

	position(x, y) {

	}

	move() {
		console.log("move");
	    //setInterval(this.animation(), 100);
		/*
	    context.clearRect(0, 0, 800, 600);
		context.drawImage(this.spriteMonsterImage, this.w, 120, 60, 60, this.h, 0, 60, 60);
		this.w += 60;
		this.h += 5;
		
		if (this.w > 120) {
			this.w = 0;
		}

		if (this.h > 600) {
			this.h = 0;
		}
		*/
	}

	animation() {
		console.log("worked");

		context.clearRect(0, 0, 800, 600);
		context.drawImage(this.spriteMonsterImage, this.w, 120, 60, 60, this.h, 0, 60, 60);

		this.w+=60;
		this.h+=5;
		if (this.w>120) {this.w=0;}
		if (this.h>600) {this.h=0;}
	}


}