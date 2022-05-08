/* global variables */
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var wall;
var heroSkills;
var gameStatus = true;
var start; // game start
var chapter; // game chapter
var user; // user details
var selectedHero = null;	// image of the chosen hero
var mapOnTheHeroes = []; // hero information on the map
var mapOnTheHeroesConfigs = []; // hero settings on the map
var wrongPlaces = []; // forbidden places on the map
var e; // global mouse event
var globalHeroID = 0;

// var redBandanas;


const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const WHITE = "rgba(0, 0, 0, 0.2)";
const RED = "rgba(207, 0, 15, 0.3)";


/* heroes */
wall = document.getElementsByClassName("wall")[0];


/* heroes skills */
heroSkills = document.getElementsByClassName("config")[0];


/* game start (animationFrame) */
lftd = () => {


	if (gameStatus) {
		window.requestAnimationFrame(lftd);
	}

	if (start.startStatus) {
		draw(event);
	}


}


/* get mouse position */
getMousePos = (canvas, event) => {
	let rect = canvas.getBoundingClientRect();
	// console.log(rect);
	// console.log(event.clientX, event.clientY);
	/*
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
	*/
	return {
		x: event.offsetX,
		y: event.offsetY
	};
	
}


/* chapter creating */
buildingChapter = () => {
	console.log("START clicked!");
			
	start.startStatus = true;
	start.startButtonClear(); // clear start button
	
	user = new User(); // user create
	user.getWallCharacter();

	chapter = new Chapter1(); // chapter start // bolum secilirken belirlenecek - suanlik direk secili geliyor
	chapter.getWrongPlaces(); // get chapter wrong places
	chapter.low(); // burasi oyun derecesi secilirken belirlenecek - suanlik direk secili geliyor




}



/* hero is actions */
imageSelect = (selectedImage) => {

	/* hero makes unchosen - start */
	selectedHero = null;
	mapOnTheHeroesConfigs = []; // clear hero area
	heroSkillsHide(); // clear hero configs
	/* hero makes unchosen - end */


	if (selectedImage.id == "iceman") {
		selectedHero = new Iceman();
		// selectedHero = new Iceman().getObject();
	} else if (selectedImage.id == "fireman") {
		// selectedHero = imgFiremanSpriteLeft;
	}
	
}


draw = () => {
	/*
	if (typeof e != 'undefined') {
		lastOffSetX = e.offsetX;
		lastOffSetY = e.offsetY;
	}
	*/

	clearContext();
	putHeroesMap();	// puts the heroes on the map


	if (chapter != null && chapter.startStatus) {
		putMonstersMap();
	}


	if (selectedHero != null) {
		context.drawImage(
			selectedHero.getObject(),
			0,
			0,
			selectedHero.getImageWidth(),
			selectedHero.getImageHeight(),
			// ((typeof e === 'undefined' ? lastOffSetX : e.offsetX) - selectedHero.getH()),
			// ((typeof e === 'undefined' ? lastOffSetY : e.offsetY) - selectedHero.getH()),
			(e.offsetX - (selectedHero.getImageWidth() / 2)),
			(e.offsetY - (selectedHero.getImageHeight() / 2)),
			selectedHero.getImageWidth(),
			selectedHero.getImageHeight()
		);
		context.beginPath();
		context.arc(
			e.offsetX,
			// (e.offsetX - (selectedHero.getImageWidth() / 2)),
			e.offsetY,
			// (e.offsetY - (selectedHero.getImageHeight() / 2)),
			selectedHero.getAttributeArea(),
			(0 * Math.PI),
			(2 * Math.PI)
		);
		context.fillStyle = whiteOrRed(e.offsetX, e.offsetY);
		context.fill();
	}

}

putMonstersMap = () => {
  
	for (let monster in chapter.monsters) {
		for (let i in chapter.monsters[monster]) {
		
      chapter.monsters[monster][i].move();
      // w = 0
      // h = 60
      // x = 0
      // y = 330
      /*
			context.drawImage(
				chapter.monsters[monster][i].spriteMonsterImage,
        chapter.monsters[monster][i].iw,
        chapter.monsters[monster][i].ih,
        chapter.monsters[monster][i].w,
				chapter.monsters[monster][i].h,
				chapter.monsters[monster][i].x,
				chapter.monsters[monster][i].y,
				chapter.monsters[monster][i].cx,
				chapter.monsters[monster][i].cy
			);

			chapter.monsters[monster][i].iw += 60;
      // chapter.monsters[monster][i].x += 5;
			
			
      if (chapter.monsters[monster][i].iw > 120) {
        chapter.monsters[monster][i].iw = 0;
      }
			
      if (chapter.monsters[monster][i].x > 600) {
        chapter.monsters[monster][i].x = 0;
      }

      if (chapter.monsters[monster][i].x > 100) {
        if (chapter.monsters[monster][i].y < 130) {
          chapter.monsters[monster][i].x += 5;
        } else {
          chapter.monsters[monster][i].y -= 5;
        }
      } else {
        chapter.monsters[monster][i].x += 5;
      }
      */

		} 
	}

	/*
	context.drawImage(this.spriteMonsterImage, this.w, 120, 60, 60, this.h, 0, 60, 60);
	this.w+=60;
	this.h+=5;
	if (this.w>120) {this.w=0;}
	if (this.h>600) {this.h=0;}
	*/

}


/* put heroes map */
putHeroesMap = () => {
	if (mapOnTheHeroes != []) {
		mapOnTheHeroes.forEach(function(value){
			if (value.status == 1) {
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
			}
		})
	}

	/* hero get area */
	if (mapOnTheHeroesConfigs.length > 0) {
		mapOnTheHeroesConfigs.forEach(function(value){
			if (value.status == 1) {
				context.beginPath();
				context.arc(
					value.x,
					value.y,
					value.area,
					value.pi1,
					value.pi2,
				);
				context.fillStyle = WHITE;
				context.fill();
			}
		})
	}

}

putHeroesArray = (x, y, hero) => {

	if (selectedHero != null){

		/*
		mapOnTheHeroes.push({
			status: 1,
			object: selectedHero,
			img: selectedHero.getObject(),
			imgX: 0,
			imgY: 0,
			imgH: 50,
			imgW: 50,
			cnsX: (x-selectedHero.getW()*3),
			cnsY: (y-selectedHero.getH()),
			cnsH: 70,
			cnsW: 70
		});

		wrongPlaces.push({
			imgWX: {
				start: x-selectedHero.getW()*3,
				end: x+parseInt(selectedHero.getW()*3)
			},
			imgWY: {
				start: y-selectedHero.getH()*2,
				end: y+parseInt(selectedHero.getH()*2)
			}
		});
		
		*/

		hero.create(
			{
				start: x,
				end: x
			}, 
			{
				start: y,
				end: y
			},
			x,
			y,
			globalHeroID
		);


		++globalHeroID;

		selectedHero = null;

	}

}


clearContext = () => {
	context.clearRect(0, 0, canvas.width, canvas.height); 	// context is clear
}


/* area is white or red */
whiteOrRed = (x, y) => {
	if (isitPut(x, y)) {
		return WHITE;
	} else {
		return RED;
	}

}


/* does the hero put on the map */
isitPut = (x, y) => {
	let isitFree = true;
	if (x - selectedHero.getImageWidth(3) >= 0 && 
		x + selectedHero.getImageWidth(3) <= CANVAS_WIDTH &&
		y - selectedHero.getImageHeight(3) >= 0 &&
		y + selectedHero.getImageHeight(3) <= CANVAS_HEIGHT
		) {
		wrongPlaces.forEach(function(wp){
			if (x > wp.imgWX.start &&
				x < wp.imgWX.end &&
				y > wp.imgWY.start &&
				y < wp.imgWY.end) {
				isitFree = false;
			}
		});

		if (isitFree) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}

	/*
	let isitFree = true;
	if ((x-selectedHero.getW())>0 && 
		 x<(canvas.width-selectedHero.getW()*2) && 
		 (y-selectedHero.getH())>0 && 
		 y<(canvas.height-selectedHero.getH()*2)
		) {
		wrongPlaces.forEach(function(wp){
			if (x > wp.imgWX.start &&
				x < wp.imgWX.end &&
				y > wp.imgWY.start &&
				y < wp.imgWY.end) {
				isitFree = false;
			}
		});

		if (isitFree) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
	*/

}


/* hide hero skills */
heroSkillsHide = () => {
	while (heroSkills.firstChild) {
    	heroSkills.removeChild(heroSkills.firstChild); 
    }

}


/* hero change skills */
heroChangeSkills = (id) => {
	console.log("e : " + id);
	

	if (mapOnTheHeroes[id] != null) {
		mapOnTheHeroes[id].object.setArea();

	} else {
		console.error("Error code: 100");
	}

}