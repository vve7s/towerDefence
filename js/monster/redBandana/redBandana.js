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
    this.iw = 0;
    this.ih = 120;
    this.cx = 45;
		this.cy = 45;
		this.w = 60;
		this.h = 60;
		this.x = x;
    this.y = (y - 30);

    this.up = false;
    this.down = false;
    this.right = true;
	}

	position(x, y) {

	}

	move() {
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

    context.drawImage(
      this.spriteMonsterImage,
      this.iw,
      this.ih,
      this.w,
      this.h,
      this.x,
      this.y,
      this.cx,
      this.cy
    );

    this.iw += 60;
    if (this.iw > 120) {
      this.iw = 0;
    }
    
    /*
    if (this.x > 600) {
      this.x = 0;
    }
    */

    if (this.x > 100) {
      this.up = true;
      this.right = false;
      this.down = false;
    }

    if (this.y < 130) {
      this.up = false;
      this.right = true;
      this.down = false;
    }

    if (this.x > 265) {
      this.up = false;
      this.right = false;
      this.down = true;
    }

    if (this.y > 360) {
      this.up = false;
      this.right = true;
      this.down = false;
    }

    if (this.x > 480 && this.y > 291) {
      this.up = true;
      this.right = false;
      this.down = false;
      console.log(this.x, this.y)
    }

    if (this.x > 480 && this.y < 290) {
      this.up = false;
      this.right = true;
      this.down = false;
    }

    



    if (this.up) {
      console.log("ypp- then - " + this.y);
      this.y -= 5;
      console.log("ypp- now - " + this.y);
    }
    if (this.down) {
      this.y += 5;
    }
    if (this.right) {
      this.x += 5;
    }


    /*
    if (this.x > 100) {
      if (this.y < 130) {
        this.x += 5;
      } else {
        this.y -= 5;
      }
    } else {
      this.x += 5;
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