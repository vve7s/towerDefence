class redBandana {


	information = {
		'healt': 100,
		'speed': 5,
		'live': 1,
        'attack': 1
	};

	constructor(x, y, id) {
		this.spriteMonsterImage = new Image();
		this.spriteMonsterImage.src = "img/monsters/redBandana/redBandana.png";
        this.id = id
		
		this.counter = 0;
        this.iw = 0;
        this.ih = 120;
        this.cx = 45;
        this.cy = 45;
        this.w = 60;
        this.h = 60;
        this.x = x;
        this.y = y; // (y - 30);

        this.up = false;
        this.right = true;
        this.down = false;
        this.left = false;
        this.pathCount = 1;
	}

	getPosition() {
        return {x:this.x, y:this.y};
	}

    getLive() {
        return this.information.live;
    }

	move() {

        if (this.information.live) {

            context.drawImage(
                this.spriteMonsterImage,
                this.iw,
                this.ih,
                this.w,
                this.h,
                this.x - 25,
                this.y - 30,
                this.cx,
                this.cy
            );
            
            
            if (chapter.getMapLines()[this.pathCount].end) {
                return;
            }

            if (chapter.getMapLines()[this.pathCount].x.start != chapter.getMapLines()[this.pathCount].x.end) {
                this.up = chapter.getMapLines()[this.pathCount].x.direction.up;
                this.right = chapter.getMapLines()[this.pathCount].x.direction.right;
                this.down = chapter.getMapLines()[this.pathCount].x.direction.down;
                this.left = chapter.getMapLines()[this.pathCount].x.direction.left;
            } else {
                this.up = chapter.getMapLines()[this.pathCount].y.direction.up;
                this.right = chapter.getMapLines()[this.pathCount].y.direction.right;
                this.down = chapter.getMapLines()[this.pathCount].y.direction.down;
                this.left = chapter.getMapLines()[this.pathCount].y.direction.left;
            } 
            


            if (this.up) {
                this.y -= this.information.speed;
                if (this.y == chapter.getMapLines()[this.pathCount].y.end) {
                    this.pathCount++;
                }
            }
            
            if (this.right) {
                this.x += this.information.speed;
                if (this.x == chapter.getMapLines()[this.pathCount].x.end) {
                    this.pathCount++;
                }
            }

            if (this.down) {
                this.y += this.information.speed;
                if (this.y == chapter.getMapLines()[this.pathCount].y.end) {
                    this.pathCount++;
                }
            }

            if (this.left) {
                this.x -= this.information.speed;
                if (this.x == chapter.getMapLines()[this.pathCount].x.end) {
                    this.pathCount++;
                }
            }

            // redBanana is finish line
            if (chapter.getMapLines()[this.pathCount].end == true) {
                console.log("Bitis cizgisine ulasti :>> " + this.id);
                this.killUserHealt();
            }


            this.iw += 60;
            if (this.iw > 120) {
                this.iw = 0;
            }

        }

	}

    kill() {
        this.information.healt = 0;
        this.information.live = 0;
    }

    killUserHealt() {
        user.damage(this.information.attack);
        this.information.healt = 0;
        this.information.live = 0;
    }

	animation() {
		context.clearRect(0, 0, 800, 600);
		context.drawImage(this.spriteMonsterImage, this.w, 120, 60, 60, this.h, 0, 60, 60);

		this.w+=60;
		this.h+=5;
		if (this.w>120) {this.w=0;}
		if (this.h>600) {this.h=0;}
	}


}